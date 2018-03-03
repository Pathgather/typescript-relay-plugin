import * as bt from "babel-types"
import * as fs from "fs"
import * as GraphQL from "graphql"
import * as path from "path"
import * as ts from "typescript"
import { buildClientSchema } from "graphql/utilities/buildClientSchema"
import createTransformError = require("babel-plugin-relay/lib/createTransformError")
import RelayQLTransformer = require("babel-plugin-relay/lib/RelayQLTransformer")

// Internal flag that signifies if the node contains any ES2015 nodes. We need this to quicker find
// tagged template expressions and avoid descending into Typescript nodes since visitEachChild breaks.
const ContainsES2015 = 1 << 7

// Load a JSON schema
export function loadSchema(filePath: string): any {
  return buildClientSchema(require(filePath).data)
}

// Load a .graphql schema
export function loadGraphQLSchema(filePath: string) {
  return GraphQL.buildASTSchema(GraphQL.parse(fs.readFileSync(filePath, "utf8")))
}

export interface TransformerOptions {
  // Helper to get document name from the source filename
  getDocumentName?: typeof getDocumentNameHelper

  // A RelayQLTransformer option, defaults to false
  substituteVariables?: boolean
}

export function getTransformer(
  schema,
  options: TransformerOptions = {},
): ts.TransformerFactory<ts.SourceFile> {
  const { getDocumentName = getDocumentNameHelper, substituteVariables = false } = options

  const relayQlTransformer = new RelayQLTransformer(schema, {
    snakeCase: false,
    substituteVariables,
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
          const template = convertTemplateLiteral(node.template)
          const result = relayQlTransformer.transform(bt, template, {
            documentName: getDocumentName(sourcePath),
            enableValidation: true,
            tagName: "Relay.QL",
            propName: getPropName(node),
          })

          return convertBabelNode(result)
        } catch (error) {
          throw createTransformError(error)
        }
      }
      return node
    }

    function getPropName(node: ts.Node): string {
      while (node) {
        if (ts.isPropertyAssignment(node)) {
          return node.name.getText()
        }

        node = node.parent
      }
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
  } else if (bt.isNullLiteral(node)) {
    return ts.createNull()
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

function getDocumentNameHelper(sourcePath: string): string {
  const dir = path.basename(path.dirname(sourcePath))
  const name = path.basename(sourcePath)
  return (dir + "_" + name).replace(/\W+/g, "_")
}
