// Import Node.js Dependencies
import { describe, it } from "node:test";

// Import Third-party Dependencies
import { RuleTester } from "oxlint/plugins-dev";

// Import Internal Dependencies
import { rule } from "../../src/customRules/no-get-set-prefix/index.ts";

RuleTester.describe = describe;
RuleTester.it = it;
RuleTester.itOnly = it.only;

const ruleTester = new RuleTester({
  eslintCompat: true,
  languageOptions: {
    parserOptions: { lang: "ts" }
  }
});
ruleTester.run("no-get-set-prefix", rule, {
  valid: [
    "class A { get name() { return 1; } set name(value) {} }",
    "class A { getter() {} setup() {} get() {} set() {} }",
    "class A { loadUser() {} }",
    "class A extends B { override getUser() {} }",
    "class A { getItem() {} setAttribute() {} }",
    "function getUser() {}",
    "const obj = { getUser() {} };",
    "interface A { get name(): string; }",
    {
      code: "class A { getUser() {} }",
      options: [{ allow: ["getUser"] }]
    }
  ],
  invalid: [
    {
      code: "class A { getUser() {} }",
      errors: [{ messageId: "prefix", data: { name: "getUser" }, line: 1, column: 11 }]
    },
    {
      code: "class A { static setValue(value) {} }",
      errors: [{ messageId: "prefix", data: { name: "setValue" } }]
    },
    {
      code: "class A { get2D() {} }",
      errors: [{ messageId: "prefix", data: { name: "get2D" } }]
    },
    {
      code: "interface A { getUser(): void; }",
      errors: [{ messageId: "prefix", data: { name: "getUser" } }]
    },
    {
      code: "class A { getUser() {} }",
      options: [{ allow: ["setUser"] }],
      errors: [{ messageId: "prefix", data: { name: "getUser" } }]
    }
  ]
});
