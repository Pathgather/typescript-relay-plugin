import * as ts from "typescript"
import { compile } from "./helpers"
import expect = require("expect")

describe("transformer", () => {
  it("should emit a runtime error", () => {
    const logError = expect.createSpy()
    expect(
      compile(`Relay.QL\`fragment on Node { foo }\``, undefined, { colorize: false, logError }),
    ).toBe(
      `(function () { throw new Error("You supplied a GraphQL document named \`__module_ts\` with validation errors."); })();\n`,
    )
    expect(logError).toHaveBeenCalled()
    expect(logError.calls.length).toBe(2)
    expect(logError.calls[0].arguments[0]).toBe(
      `You supplied a GraphQL document named \`__module_ts\` with validation errors.`,
    )
    expect(logError.calls[1].arguments[0]).toBe(
      `fragment __module_tsRelayQL on Node { foo }
                                      ^ Cannot query field "foo" on type "Node".`,
    )
  })

  describe("when NODE_ENV=production", () => {
    let NODE_ENV
    beforeEach(() => {
      NODE_ENV = process.env.NODE_ENV
      process.env.NODE_ENV = "production"
    })
    afterEach(() => {
      process.env.NODE_ENV = NODE_ENV
    })
    it("should throw an error in production", () => {
      const logError = expect.createSpy()
      expect(() =>
        compile(`Relay.QL\`fragment on Node { foo }\``, undefined, { logError }),
      ).toThrow()
      expect(logError).toHaveBeenCalled()
      expect(logError.calls.length).toBe(2)
    })
  })
})
