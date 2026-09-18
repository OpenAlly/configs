// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

export default {
  // See: https://oxc.rs/docs/guide/usage/linter/rules/typescript/ban-ts-comment.html
  "typescript/ban-ts-comment": ["error", {
    "ts-expect-error": "allow-with-description"
  }],

  // See: https://oxc.rs/docs/guide/usage/linter/rules/typescript/ban-types.html
  "typescript/ban-types": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-confusing-void-expression.html
  "typescript/no-confusing-void-expression": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-deprecated.html
  "typescript/no-deprecated": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-misused-promises.html
  "typescript/no-misused-promises": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-mixed-enums.html
  "typescript/no-mixed-enums": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-argument.html
  "typescript/no-unsafe-argument": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-assignment.html
  "typescript/no-unsafe-assignment": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-call.html
  "typescript/no-unsafe-call": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-function-type.html
  "typescript/no-unsafe-function-type": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-member-access.html
  "typescript/no-unsafe-member-access": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-return.html
  "typescript/no-unsafe-return": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/typescript/only-throw-error.html
  "typescript/only-throw-error": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-enum-initializers.html
  "typescript/prefer-enum-initializers": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-includes.html
  "typescript/prefer-includes": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-nullish-coalescing.html
  "typescript/prefer-nullish-coalescing": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-promise-reject-errors.html
  "typescript/prefer-promise-reject-errors": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-readonly-parameter-types.html
  "typescript/prefer-readonly-parameter-types": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-ts-expect-error.html
  "typescript/prefer-ts-expect-error": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/typescript/related-getter-setter-pairs.html
  "typescript/related-getter-setter-pairs": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/typescript/require-await.html
  "typescript/require-await": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/typescript/restrict-plus-operands.html
  "typescript/restrict-plus-operands": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/typescript/return-await.html
  "typescript/return-await": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/typescript/strict-boolean-expressions.html
  "typescript/strict-boolean-expressions": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/typescript/strict-void-return.html
  "typescript/strict-void-return": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/typescript/switch-exhaustiveness-check.html
  "typescript/switch-exhaustiveness-check": "error"
} satisfies DummyRuleMap;
