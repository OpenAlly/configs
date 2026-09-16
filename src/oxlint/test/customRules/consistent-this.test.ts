// Import Node.js Dependencies
import { describe, it } from "node:test";

// Import Third-party Dependencies
import { RuleTester } from "oxlint/plugins-dev";

// Import Internal Dependencies
import { rule } from "../../src/customRules/consistent-this/index.ts";

RuleTester.describe = describe;
RuleTester.it = it;
RuleTester.itOnly = it.only;

const ruleTester = new RuleTester({ eslintCompat: true });
ruleTester.run("consistent-this", rule, {
  valid: [
    {
      code: "const self = this;",
      options: ["self"]
    },
    {
      code: "const foo = 42, self = this;",
      options: ["self"]
    },
    {
      code: "let self; self = this;",
      options: ["self"]
    },
    {
      code: "let self; function f() { self = this; }",
      options: ["self"]
    },
    {
      code: "const foo = bar;",
      options: ["self"]
    },
    {
      code: "foo = this;",
      options: ["foo"]
    },
    {
      code: "const that = this;"
    },
    {
      code: "const { self } = this;",
      options: ["self"]
    },
    {
      code: "obj.self = 42;",
      options: ["self"]
    }
  ],
  invalid: [
    {
      code: "const context = this;",
      options: ["self"],
      errors: [{ messageId: "unexpectedAlias", data: { name: "context" } }]
    },
    {
      code: "const self = 42;",
      options: ["self"],
      errors: [{ messageId: "aliasNotAssignedToThis", data: { name: "self" } }]
    },
    {
      code: "let self; self = 42;",
      options: ["self"],
      errors: [
        { messageId: "aliasNotAssignedToThis", data: { name: "self" } },
        { messageId: "aliasNotAssignedToThis", data: { name: "self" } }
      ]
    },
    {
      code: "let self;",
      options: ["self"],
      errors: [{ messageId: "aliasNotAssignedToThis", data: { name: "self" } }]
    },
    {
      code: "let context; context = this;",
      options: ["self"],
      errors: [{ messageId: "unexpectedAlias", data: { name: "context" } }]
    },
    {
      code: "const self = this; const context = this;",
      options: ["self"],
      errors: [{ messageId: "unexpectedAlias", data: { name: "context" } }]
    },
    {
      code: "const context = this;",
      errors: [{ messageId: "unexpectedAlias", data: { name: "context" } }]
    }
  ]
});
