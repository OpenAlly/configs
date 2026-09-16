// Import Node.js Dependencies
import { describe, it } from "node:test";

// Import Third-party Dependencies
import { RuleTester } from "oxlint/plugins-dev";

// Import Internal Dependencies
import { rule } from "../../src/customRules/interface-naming/index.ts";

RuleTester.describe = describe;
RuleTester.it = it;
RuleTester.itOnly = it.only;

const ruleTester = new RuleTester({
  eslintCompat: true,
  languageOptions: {
    parserOptions: { lang: "ts" }
  }
});
ruleTester.run("interface-naming", rule, {
  valid: [
    "interface User { foo: string; }",
    // Acronyms starting with I are allowed
    "interface ISAOptions { foo: string; }",
    "interface IO { foo: string; }",
    "interface Item { foo: string; }",
    "type IUser = { foo: string; };"
  ],
  invalid: [
    {
      code: "interface IUser { foo: string; }",
      errors: [
        {
          message: "Interface name `IUser` must not match the RegExp: /^I[A-Z][a-z]/u",
          line: 1,
          column: 11
        }
      ]
    },
    {
      code: "export interface IFoo {}",
      errors: [{ messageId: "forbiddenPrefix", data: { name: "IFoo", regex: "/^I[A-Z][a-z]/u" } }]
    },
    {
      code: "interface user { foo: string; }",
      errors: [
        {
          message: "Interface name `user` must match one of the following formats: PascalCase"
        }
      ]
    },
    {
      code: "interface User_Options { foo: string; }",
      errors: [{ messageId: "notPascalCase", data: { name: "User_Options" } }]
    }
  ]
});
