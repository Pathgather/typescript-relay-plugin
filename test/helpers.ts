import * as ts from "typescript"
import { resolve } from "path"
import { getTransformer, loadSchema, TransformerOptions } from ".."

const schemaPath = resolve(__dirname, "schema.json")

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
      before: [getTransformer(loadSchema(schemaPath), transformerOptions)],
    },
  })

  return result.outputText
}
