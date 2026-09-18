// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

export default {
  // See: https://oxc.rs/docs/guide/usage/linter/rules/typescript/consistent-return.html
  "typescript/consistent-return": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-confusing-non-null-assertion.html
  "typescript/no-confusing-non-null-assertion": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-extraneous-class.html
  "typescript/no-extraneous-class": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-boolean-literal-compare.html
  "typescript/no-unnecessary-boolean-literal-compare": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-template-expression.html
  "typescript/no-unnecessary-template-expression": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-type-arguments.html
  "typescript/no-unnecessary-type-arguments": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-type-assertion.html
  "typescript/no-unnecessary-type-assertion": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-type-constraint.html
  "typescript/no-unnecessary-type-constraint": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-type-conversion.html
  "typescript/no-unnecessary-type-conversion": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-type-parameters.html
  "typescript/no-unnecessary-type-parameters": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-enum-comparison.html
  "typescript/no-unsafe-enum-comparison": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-type-assertion.html
  "typescript/no-unsafe-type-assertion": "off"
} satisfies DummyRuleMap;
