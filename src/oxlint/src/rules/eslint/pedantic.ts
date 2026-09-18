// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

export default {
  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/accessor-pairs.html
  "accessor-pairs": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/array-callback-return.html
  "array-callback-return": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/eqeqeq.html
  eqeqeq: ["error", "smart"],

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-classes-per-file.html
  "max-classes-per-file": ["error", 2],

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-depth.html
  "max-depth": ["error", 4],

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-lines.html
  "max-lines": ["error", { max: 700, skipComments: true, skipBlankLines: true }],

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-lines-per-function.html
  "max-lines-per-function": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-nested-callbacks.html
  "max-nested-callbacks": ["error", 5],

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-array-constructor.html
  "no-array-constructor": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-case-declarations.html
  "no-case-declarations": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-constructor-return.html
  "no-constructor-return": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-else-return.html
  "no-else-return": ["error", { allowElseIf: true }],

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-fallthrough.html
  "no-fallthrough": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-inline-comments.html
  "no-inline-comments": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-inner-declarations.html
  "no-inner-declarations": ["error", "both"],

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-lonely-if.html
  "no-lonely-if": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-loop-func.html
  "no-loop-func": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-negated-condition.html
  "no-negated-condition": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-new-wrappers.html
  "no-new-wrappers": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-object-constructor.html
  "no-object-constructor": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-promise-executor-return.html
  "no-promise-executor-return": ["error", { allowVoid: true }],

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-prototype-builtins.html
  "no-prototype-builtins": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-redeclare.html
  "no-redeclare": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-self-compare.html
  "no-self-compare": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-throw-literal.html
  "no-throw-literal": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-return.html
  "no-useless-return": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-warning-comments.html
  "no-warning-comments": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-promise-reject-errors.html
  "prefer-promise-reject-errors": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/radix.html
  radix: "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/require-await.html
  "require-await": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/require-unicode-regexp.html
  "require-unicode-regexp": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/sort-vars.html
  "sort-vars": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/symbol-description.html
  "symbol-description": "error"
} satisfies DummyRuleMap;
