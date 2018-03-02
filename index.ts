import * as bt from "babel-types"
import * as chalk from "chalk"
import * as path from "path"
import * as ts from "typescript"
import { buildClientSchema } from "graphql/utilities/buildClientSchema"
import RelayQLTransformer = require("babel-relay-plugin/lib/RelayQLTransformer")
import RelayTransformError = require("babel-relay-plugin/lib/RelayTransformError")

// Internal flag that signifies if the node contains any ES2015 nodes. We need this to quicker find
// tagged template expressions and avoid descending into Typescript nodes since visitEachChild breaks.
const ContainsES2015 = 1 << 7

export function loadSchema(filePath: string): any {
  return buildClientSchema(require(filePath).data)
}

export interface TransformerOptions {
  // Should the error output be colorized (default true)
  colorize?: boolean

  // Allow using a custom error function
  logError?: typeof console.error
}

export function getTransformer(
  schema,
  options: TransformerOptions = {},
): ts.TransformerFactory<ts.SourceFile> {
  const { colorize = true, logError = console.error } = options
  const red = colorize ? chalk.red : str => str,
    yellow = colorize ? chalk.yellow : str => str

  const relayQlTransformer = new RelayQLTransformer(schema, {
    snakeCase: false,
    substituteVariables: false,
  })

  return function transformer(context): ts.Transformer<ts.SourceFile> {
    let sourcePath: string

    return node => {
      sourcePath = node.fileName
      const result = ts.updateSourceFileNode(
        node,
        ts.visitLexicalEnvironment(node.statements, visitor, context),
      )
      sourcePath = undefined
      return result
    }

    function visitor(node: ts.Node): ts.Node {
      if (node["transformFlags"] & ContainsES2015) {
        if (node.kind === ts.SyntaxKind.TaggedTemplateExpression) {
          return visitTaggedTemplateExpression(<ts.TaggedTemplateExpression>node)
        } else {
          return ts.visitEachChild(node, visitor, context)
        }
      } else {
        return node
      }
    }

    function visitTaggedTemplateExpression(node: ts.TaggedTemplateExpression): ts.Node {
      if (node.tag.getText() === "Relay.QL") {
        try {
          // Convert the file's basename to an ok document name
          const documentName = getDocumentName(sourcePath)
          const template = convertTemplateLiteral(node.template)
          const result = relayQlTransformer.transform(bt, template, {
            documentName: documentName,
            enableValidation: true,
            tagName: "Relay.QL",
          })

          return convertBabelNode(result)
        } catch (error) {
          if (error.stack && !error.stack.includes("validation errors")) {
            logError(red(error.stack))
          } else if (error.message) {
            logError(red(error.message))
          }

          if (error.sourceText && error.validationErrors) {
            const source: string = error.sourceText
            const errorsByLine: {
              [line: number]: {
                line: number
                column: number
                message: string
              }[]
            } = {}

            error.validationErrors.forEach(error => {
              error.locations.forEach(location => {
                if (!errorsByLine[location.line]) {
                  errorsByLine[location.line] = []
                }

                errorsByLine[location.line].push({
                  line: location.line,
                  column: location.column,
                  message: error.message,
                })
              })
            })

            let message = ""

            source.split("\n").forEach((line, idx) => {
              const lineNum = idx + 1
              message += line + "\n"

              if (errorsByLine[lineNum]) {
                errorsByLine[lineNum].forEach(error => {
                  const spacer = " ".repeat(error.column - 1)
                  message += spacer + yellow("^ " + error.message) + "\n"
                })
              }
            })

            logError(message.trim())
          }

          if (process.env.NODE_ENV === "production") {
            throw error
          } else {
            // Generate a runtime throw statement. Because this will get inserted as the return value,
            // wrap the throw in an IIFE. Pfft, throw statements, please..
            return ts.createCall(
              ts.createFunctionExpression(
                undefined, // modifiers
                undefined, // asterisk token
                undefined, // name
                undefined, // type params
                undefined, // arguments
                undefined, // type
                ts.createBlock([
                  ts.createThrow(
                    ts.createNew(
                      ts.createIdentifier("Error"),
                      undefined, // type params
                      [ts.createLiteral(error.message)],
                    ),
                  ),
                ]),
              ),
              undefined, // type params
              undefined, // arguments
            )
          }
        }
      }
      return node
    }
  }
}

function convertTemplateLiteral(node: ts.TemplateLiteral): bt.TemplateLiteral {
  if (node.kind === ts.SyntaxKind.FirstTemplateToken) {
    return {
      type: "TemplateLiteral",
      start: node.pos - 1,
      end: node.end + 1,
      loc: null,
      quasis: [
        {
          type: "TemplateElement",
          start: node.pos,
          end: node.end,
          loc: null,
          tail: true,
          value: {
            raw: node.text,
            cooked: node.text,
          },
        },
      ],
      expressions: [],
    }
  } else {
    const expressions: bt.Expression[] = []
    const quasis: bt.TemplateElement[] = [
      {
        type: "TemplateElement",
        start: node.head.pos,
        end: node.head.end,
        loc: null,
        tail: false,
        value: {
          raw: node.head.text,
          cooked: node.head.text,
        },
      },
    ]

    for (const span of node.templateSpans) {
      expressions.push({
        type: "ParenthesizedExpression",
        start: span.expression.pos,
        end: span.expression.end,
        loc: null,
        expression: span.expression,
        __ts_node: true,
      } as any)

      quasis.push({
        type: "TemplateElement",
        start: span.literal.pos,
        end: span.literal.end,
        loc: null,
        tail: false,
        value: {
          raw: span.literal.text,
          cooked: span.literal.text,
        },
      })
    }

    quasis[quasis.length - 1].tail = true

    return {
      type: "TemplateLiteral",
      start: node.pos,
      end: node.end,
      loc: null,
      quasis,
      expressions,
    }
  }
}

function convertBabelNode(node) {
  if (bt.isArrayExpression(node)) {
    return ts.createArrayLiteral(node.elements.map(convertBabelNode))
  } else if (bt.isCallExpression(node)) {
    return ts.createCall(
      convertBabelNode(node.callee),
      undefined, // type arguments
      node.arguments.map(convertBabelNode),
    )
  } else if (bt.isFunctionExpression(node)) {
    const stmts = node.body.body.map(convertBabelNode)
    return ts.createFunctionExpression(
      undefined, // modifiers
      undefined, // asterisk token
      undefined, // name
      undefined, // type params
      node.params.map(param =>
        ts.createParameter(
          undefined, // decorators
          undefined, // modifiers
          undefined, // dotdotdot token
          convertBabelNode(param),
          undefined, // question token,
          undefined, // type,
          undefined, // initializer
        ),
      ),
      undefined, // type
      ts.createBlock(stmts),
    )
  } else if (bt.isIdentifier(node)) {
    return ts.createIdentifier(node.name)
  } else if (bt.isMemberExpression(node)) {
    return ts.createPropertyAccess(convertBabelNode(node.object), convertBabelNode(node.property))
  } else if (bt.isObjectExpression(node)) {
    return ts.createObjectLiteral(node.properties.map(convertBabelNode))
  } else if (bt.isObjectProperty(node)) {
    return ts.createPropertyAssignment(convertBabelNode(node.key), convertBabelNode(node.value))
  } else if (bt.isParenthesizedExpression(node)) {
    if (node["__ts_node"]) {
      return node.expression as any
    }
    return ts.createParen(convertBabelNode(node.expression))
  } else if (bt.isReturnStatement(node)) {
    return ts.createReturn(convertBabelNode(node.argument))
  } else if (bt.isStringLiteral(node) || bt.isBooleanLiteral(node) || bt.isNumericLiteral(node)) {
    return ts.createLiteral(node.value)
  }

  throw new Error(`Don't know how to convert Babel node "${node.type}" to Typescript`)
}

function getDocumentName(sourcePath: string): string {
  const dir = path.basename(path.dirname(sourcePath))
  const name = path.basename(sourcePath)
  return (dir + "_" + name).replace(/\W+/g, "_")
}
