// Import Node.js Dependencies
import { after, describe, it } from "node:test";

// Import Third-party Dependencies
import { RuleTester } from "@typescript-eslint/rule-tester";

// Import Internal Dependencies
import { rule } from "../../src/customRules/constants.js";

RuleTester.afterAll = after;
RuleTester.describe = describe;
RuleTester.it = it;
RuleTester.itOnly = it.only;

const ruleTester = new RuleTester();
ruleTester.run("constants", rule, {
  valid: [
    {
      code: `
      // CONSTANTS
      const kFoo = "foo";
      export const BAR = "bar";
    `
    },
    {
      code: `
      function foo() {}
      const GOOD = "good";
      export const good = "good";
    `
    },
    {
      code: `const __dirname = "dirname";`
    },
    {
      code: `
      export function foo() {}
      const GOOD = "good";
      export const good = "good";
    `
    },
    {
      code: `
      export const foo = () => {}
      const GOOD = "good";
      export const good = "good";
    `
    },
    {
      // should not throws because // CONSTANTS comment is not present
      code: `const foo = "foo";`
    },
    {
      // should not throws because // CONSTANTS comment is not present
      code: `export const foo = "foo";`
    },
    {
      // malformed comment before 'CONSTANTS' comment should not ne reported
      code: `
      const foo = "foo";
      // CONSTANTS
      const kBar = "bar";
      `
    },
    {
      // destructuring should not be reported
      code: `
      // CONSTANTS
      const [foo] = bar;
      `
    },
    {
      // should not report when there is blank line after the constants zone
      code: `
      // CONSTANTS
      const kFoo = "foo";

      const bar = "bar";
      `
    }
  ],
  invalid: [
    {
      code: `
      // CONSTANTS
      export const foo = "foo";
      `,
      errors: [
        { messageId: "mustBeConstantCase" }
      ]
    },
    {
      code: `
      // CONSTANTS
      const foo = 'foo';
      `,
      errors: [
        { messageId: "missingKPrefix" }
      ]
    },
    {
      code: "const kfoo = 'foo';",
      errors: [
        { messageId: "firstCharAfterKCapitalized" }
      ]
    },
    {
      code: "const kFoo_bar = 'foo';",
      errors: [
        { messageId: "shouldNotContainUnderscore" }
      ]
    },
    {
      code: `
      // CONSTANT
      const kFoo = "foo";
      `,
      errors: [
        { messageId: "malformedComment" }
      ]
    }
  ]
});
