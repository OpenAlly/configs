// Import Node.js Dependencies
import { describe, it } from "node:test";

// Import Third-party Dependencies
import { RuleTester } from "oxlint/plugins-dev";

// Import Internal Dependencies
import { rule } from "../../src/customRules/no-ts-private/index.ts";

RuleTester.describe = describe;
RuleTester.it = it;
RuleTester.itOnly = it.only;

const ruleTester = new RuleTester({
  eslintCompat: true,
  languageOptions: {
    parserOptions: { lang: "ts" }
  }
});
ruleTester.run("no-ts-private", rule, {
  valid: [
    "class A { #foo = 1; #bar() {} }",
    "class A { protected foo = 1; public bar() {} }",
    "class A { private constructor() {} }",
    "class A { private declare foo: string; }",
    "class A { constructor(private foo: string) {} }"
  ],
  invalid: [
    {
      code: "class A { private foo = 1; }",
      errors: [{ messageId: "private", line: 1, column: 19 }]
    },
    {
      code: "class A { private static foo = 1; }",
      errors: [{ messageId: "private" }]
    },
    {
      code: "class A { private bar() {} }",
      errors: [{ messageId: "private" }]
    },
    {
      code: "class A { private get bar() { return 1; } }",
      errors: [{ messageId: "private" }]
    },
    {
      code: "class A { private accessor foo = 1; }",
      errors: [{ messageId: "private" }]
    }
  ]
});
