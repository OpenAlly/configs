// Import Node.js Dependencies
import { describe, it } from "node:test";

// Import Third-party Dependencies
import { RuleTester } from "oxlint/plugins-dev";

// Import Internal Dependencies
import { rule } from "../../src/customRules/no-enum/index.ts";

RuleTester.describe = describe;
RuleTester.it = it;
RuleTester.itOnly = it.only;

const ruleTester = new RuleTester({
  eslintCompat: true,
  languageOptions: {
    parserOptions: { lang: "ts" }
  }
});
ruleTester.run("no-enum", rule, {
  valid: [
    "type Kind = \"a\" | \"b\";",
    "const Kind = { A: \"a\", B: \"b\" } as const;"
  ],
  invalid: [
    {
      code: "enum Kind { A, B }",
      errors: [{ messageId: "enum", data: { name: "Kind" }, line: 1, column: 6 }]
    },
    {
      code: "const enum Kind { A = \"a\" }",
      errors: [{ messageId: "enum", data: { name: "Kind" } }]
    },
    {
      code: "export declare enum Kind { A }",
      errors: [{ messageId: "enum", data: { name: "Kind" } }]
    }
  ]
});
