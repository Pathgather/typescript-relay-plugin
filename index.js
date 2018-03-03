"use strict";
exports.__esModule = true;
var bt = require("babel-types");
var fs = require("fs");
var GraphQL = require("graphql");
var path = require("path");
var ts = require("typescript");
var buildClientSchema_1 = require("graphql/utilities/buildClientSchema");
var createTransformError = require("babel-plugin-relay/lib/createTransformError");
var RelayQLTransformer = require("babel-plugin-relay/lib/RelayQLTransformer");
// Internal flag that signifies if the node contains any ES2015 nodes. We need this to quicker find
// tagged template expressions and avoid descending into Typescript nodes since visitEachChild breaks.
var ContainsES2015 = 1 << 7;
// Load a JSON schema
function loadSchema(filePath) {
    return buildClientSchema_1.buildClientSchema(require(filePath).data);
}
exports.loadSchema = loadSchema;
// Load a .graphql schema
function loadGraphQLSchema(filePath) {
    return GraphQL.buildASTSchema(GraphQL.parse(fs.readFileSync(filePath, "utf8")));
}
exports.loadGraphQLSchema = loadGraphQLSchema;
function getTransformer(schema, options) {
    if (options === void 0) { options = {}; }
    var _a = options.getDocumentName, getDocumentName = _a === void 0 ? getDocumentNameHelper : _a, _b = options.substituteVariables, substituteVariables = _b === void 0 ? false : _b;
    var relayQlTransformer = new RelayQLTransformer(schema, {
        snakeCase: false,
        substituteVariables: substituteVariables
    });
    return function transformer(context) {
        var sourcePath;
        return function (node) {
            sourcePath = node.fileName;
            var result = ts.updateSourceFileNode(node, ts.visitLexicalEnvironment(node.statements, visitor, context));
            sourcePath = undefined;
            return result;
        };
        function visitor(node) {
            if (node["transformFlags"] & ContainsES2015) {
                if (node.kind === ts.SyntaxKind.TaggedTemplateExpression) {
                    return visitTaggedTemplateExpression(node);
                }
                else {
                    return ts.visitEachChild(node, visitor, context);
                }
            }
            else {
                return node;
            }
        }
        function visitTaggedTemplateExpression(node) {
            if (node.tag.getText() === "Relay.QL") {
                try {
                    var template = convertTemplateLiteral(node.template);
                    var result = relayQlTransformer.transform(bt, template, {
                        documentName: getDocumentName(sourcePath),
                        enableValidation: true,
                        tagName: "Relay.QL",
                        propName: getPropName(node)
                    });
                    return convertBabelNode(result);
                }
                catch (error) {
                    throw createTransformError(error);
                }
            }
            return node;
        }
        function getPropName(node) {
            while (node) {
                if (ts.isPropertyAssignment(node)) {
                    return node.name.getText();
                }
                node = node.parent;
            }
        }
    };
}
exports.getTransformer = getTransformer;
function convertTemplateLiteral(node) {
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
                        cooked: node.text
                    }
                },
            ],
            expressions: []
        };
    }
    else {
        var expressions = [];
        var quasis = [
            {
                type: "TemplateElement",
                start: node.head.pos,
                end: node.head.end,
                loc: null,
                tail: false,
                value: {
                    raw: node.head.text,
                    cooked: node.head.text
                }
            },
        ];
        for (var _i = 0, _a = node.templateSpans; _i < _a.length; _i++) {
            var span = _a[_i];
            expressions.push({
                type: "ParenthesizedExpression",
                start: span.expression.pos,
                end: span.expression.end,
                loc: null,
                expression: span.expression,
                __ts_node: true
            });
            quasis.push({
                type: "TemplateElement",
                start: span.literal.pos,
                end: span.literal.end,
                loc: null,
                tail: false,
                value: {
                    raw: span.literal.text,
                    cooked: span.literal.text
                }
            });
        }
        quasis[quasis.length - 1].tail = true;
        return {
            type: "TemplateLiteral",
            start: node.pos,
            end: node.end,
            loc: null,
            quasis: quasis,
            expressions: expressions
        };
    }
}
function convertBabelNode(node) {
    if (bt.isArrayExpression(node)) {
        return ts.createArrayLiteral(node.elements.map(convertBabelNode));
    }
    else if (bt.isCallExpression(node)) {
        return ts.createCall(convertBabelNode(node.callee), undefined, // type arguments
        node.arguments.map(convertBabelNode));
    }
    else if (bt.isFunctionExpression(node)) {
        var stmts = node.body.body.map(convertBabelNode);
        return ts.createFunctionExpression(undefined, // modifiers
        undefined, // asterisk token
        undefined, // name
        undefined, // type params
        node.params.map(function (param) {
            return ts.createParameter(undefined, // decorators
            undefined, // modifiers
            undefined, // dotdotdot token
            convertBabelNode(param), undefined, // question token,
            undefined, // type,
            undefined);
        }), undefined, // type
        ts.createBlock(stmts));
    }
    else if (bt.isIdentifier(node)) {
        return ts.createIdentifier(node.name);
    }
    else if (bt.isMemberExpression(node)) {
        return ts.createPropertyAccess(convertBabelNode(node.object), convertBabelNode(node.property));
    }
    else if (bt.isNullLiteral(node)) {
        return ts.createNull();
    }
    else if (bt.isObjectExpression(node)) {
        return ts.createObjectLiteral(node.properties.map(convertBabelNode));
    }
    else if (bt.isObjectProperty(node)) {
        return ts.createPropertyAssignment(convertBabelNode(node.key), convertBabelNode(node.value));
    }
    else if (bt.isParenthesizedExpression(node)) {
        if (node["__ts_node"]) {
            return node.expression;
        }
        return ts.createParen(convertBabelNode(node.expression));
    }
    else if (bt.isReturnStatement(node)) {
        return ts.createReturn(convertBabelNode(node.argument));
    }
    else if (bt.isStringLiteral(node) || bt.isBooleanLiteral(node) || bt.isNumericLiteral(node)) {
        return ts.createLiteral(node.value);
    }
    throw new Error("Don't know how to convert Babel node \"" + node.type + "\" to Typescript");
}
function getDocumentNameHelper(sourcePath) {
    var dir = path.basename(path.dirname(sourcePath));
    var name = path.basename(sourcePath);
    return (dir + "_" + name).replace(/\W+/g, "_");
}
