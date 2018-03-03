import { getTransformer, loadGraphQLSchema, TransformerOptions } from ".."
import { resolve } from "path"
import * as ts from "typescript"
import prettier = require("prettier")

const schemaPath = resolve(__dirname, "testschema.rfc.graphql")

// Transpile a single Typescript source without any error checking
export function compile(
  source: string,
  compilerOptions?: ts.CompilerOptions,
  transformerOptions?: TransformerOptions,
) {
  const result = ts.transpileModule(source, {
    compilerOptions: {
      target: ts.ScriptTarget.Latest,
      ...compilerOptions,
    },
    transformers: {
      before: [getTransformer(loadGraphQLSchema(schemaPath), transformerOptions)],
    },
  })

  return result.outputText
}

// Create a mock Relay instance that can be used to eval the generated code
export function createRelay() {
  let id = 0
  return {
    QL: {
      __frag(fragment) {
        return fragment
      },
      __id() {
        return id++
      },
    },
  }
}

// Reformat a Javascript source so we get meaningful diffs when comparing expected output with actual
export function normalizeSource(source: string) {
  // Remove newlines because prettier tries to preserve existing newlines if the code fits
  return prettier.format(source.replace(/\n/g, ""))
}
