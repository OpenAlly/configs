// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

export default {
  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/block-scoped-var.html
  "block-scoped-var": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-extend-native.html
  "no-extend-native": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-extra-bind.html
  "no-extra-bind": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-implied-eval.html
  "no-implied-eval": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-new.html
  "no-new": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-shadow.html
  "no-shadow": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-underscore-dangle.html
  "no-underscore-dangle": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unexpected-multiline.html
  "no-unexpected-multiline": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unmodified-loop-condition.html
  "no-unmodified-loop-condition": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unneeded-ternary.html
  "no-unneeded-ternary": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-concat.html
  "no-useless-concat": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-constructor.html
  "no-useless-constructor": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/preserve-caught-error.html
  "preserve-caught-error": "error"
} satisfies DummyRuleMap;
