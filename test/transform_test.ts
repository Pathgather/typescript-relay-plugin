import * as ts from "typescript"
import { compile, createRelay, normalizeSource } from "./helpers"
import expect = require("expect")

// This is just a snapshot downloaded from babel-plugin-relay repo used by Jest to compare the output of
// the plugin to what has been confirmed as good output previously.
//
// https://github.com/facebook/relay/tree/master/packages/babel-plugin-relay/__tests__/__snapshots__
// https://facebook.github.io/jest/docs/en/snapshot-testing.html
const snapshot: { [name: string]: string } = require("./BabelPluginRelay-test")

describe("BabelRelayPlugin snapshot", () => {
  // The snapshot contains a lot more examples than we need here so we filter out ones that are for classic
  for (const name in snapshot) {
    const example = snapshot[name]

    if (!(example.includes("Relay = require('react-relay')") && example.includes("Relay.QL")))
      continue

    const filename = name.replace("BabelPluginRelay matches expected output: ", "")
    const matches = example.match(
      /^\s*~~~~~~~~~~ INPUT ~~~~~~~~~~\s*([\s\S]*?)\s*~~~~~~~~~~ OUTPUT ~~~~~~~~~~\s*([\s\S]*?)\s*$/,
    )

    if (!matches) continue
    const [_, input, output] = matches

    it(`should transform "${filename}"`, () => {
      try {
        var source = compile(input, undefined, {
          colorize: false,
          getDocumentName() {
            return "Unknown"
          },
          logError(msg) {},
          substituteVariables: true,
        })
        var result = normalizeSource(source)
        var target = normalizeSource(output)
      } catch (error) {
        var result = "ERROR:\n\n" + "Error: unknown: " + error
        var target = output
      }

      expect(result).toEqual(target)
    })
  }
})
