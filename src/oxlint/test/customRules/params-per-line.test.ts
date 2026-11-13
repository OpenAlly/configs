// Import Node.js Dependencies
import { describe, it } from "node:test";

// Import Third-party Dependencies
import { RuleTester } from "oxlint/plugins-dev";

// Import Internal Dependencies
import { rule } from "../../src/customRules/params-per-line/index.ts";

RuleTester.describe = describe;
RuleTester.it = it;
RuleTester.itOnly = it.only;

const ruleTester = new RuleTester({
  eslintCompat: true,
  languageOptions: {
    parserOptions: { lang: "ts" }
  }
});
ruleTester.run("params-per-line", rule, {
  valid: [
    "function foo(a, b) {}",
    "function foo(\n  a,\n  b,\n  c\n) {}",
    "const foo = (a, b, c) => a;",
    "class A { foo(\n  a,\n  b,\n  c\n) {} }",
    "interface A { foo(a: string, b: string): void; }",
    {
      code: "function foo(a, b, c) {}",
      options: [{ max: 3 }]
    }
  ],
  invalid: [
    {
      code: "function foo(a, b, c) {}",
      errors: [{ messageId: "sharedLine", data: { count: "3", max: "2" }, line: 1, column: 1 }]
    },
    {
      code: "function foo(\n  a, b,\n  c\n) {}",
      errors: [{ messageId: "sharedLine" }]
    },
    {
      code: "const foo = function(a, b, c) {};",
      errors: [{ messageId: "sharedLine" }]
    },
    {
      code: "class A { foo(a, b, c) {} }",
      errors: [{ messageId: "sharedLine" }]
    },
    {
      code: "abstract class A { abstract foo(a: string, b: string, c: string): void; }",
      errors: [{ messageId: "sharedLine" }]
    },
    {
      code: "declare function foo(a: string, b: string, c: string): void;",
      errors: [{ messageId: "sharedLine" }]
    },
    {
      code: "interface A { foo(a: string, b: string, c: string): void; }",
      errors: [{ messageId: "sharedLine" }]
    },
    {
      code: "function foo(a, b) {}",
      options: [{ max: 1 }],
      errors: [{ messageId: "sharedLine", data: { count: "2", max: "1" } }]
    }
  ]
});
