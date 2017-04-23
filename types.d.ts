declare module "babel-relay-plugin/lib/RelayQLTransformer" {
  import * as bt from "babel-types"

  interface TransformerOptions {
    inputArgumentName?: string,
    snakeCase: boolean,
    substituteVariables: boolean,
    validator?: Function
  }

  interface TextTransformOptions {
    documentName: string,
    enableValidation: boolean,
    propName?: string,
    tagName: string,
  }

  class RelayQLTransformer {
    constructor(schema, options: TransformerOptions)
    transform(t, node: bt.TemplateLiteral, options: TextTransformOptions): bt.Expression
  }

  export = RelayQLTransformer
}

declare module "babel-relay-plugin/lib/RelayTransformError" {
  class RelayTransformError {
    message: string
    loc: any
    stack: string
  }

  export = RelayTransformError
}

declare module "graphql/utilities/buildClientSchema" {
  export function buildClientSchema(schema: any): any
}
