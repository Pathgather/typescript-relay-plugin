import * as ts from "typescript"
import { compile } from "./helpers"
import expect = require("expect")

describe("transformer", () => {
  it("should transform queries in the export statement", () => {
    // This checks for a bug in Typescript that breaks when transforming templates in export statements.
    expect(
      compile(`export default Relay.QL\`fragment on Node { id }\``, {
        target: ts.ScriptTarget.ES5,
      }),
    ).toBe(
      `"use strict";\nObject.defineProperty(exports, "__esModule", { value: true });
exports.default = function () { return { children: [{ fieldName: "id", kind: "Field", metadata: { isRequisite: true }, type: "ID" }, { fieldName: "__typename", kind: "Field", metadata: { isGenerated: true, isRequisite: true }, type: "String" }], id: Relay.QL.__id(), kind: "Fragment", metadata: { isAbstract: true }, name: "__module_tsRelayQL", type: "Node" }; }();\n`,
    )
  })
})
