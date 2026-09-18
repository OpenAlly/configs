// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

export default {
  // See: https://oxc.rs/docs/guide/usage/linter/rules/promise/avoid-new.html
  "promise/avoid-new": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/promise/no-nesting.html
  "promise/no-nesting": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/promise/no-return-wrap.html
  "promise/no-return-wrap": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/promise/param-names.html
  "promise/param-names": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/promise/prefer-await-to-callbacks.html
  "promise/prefer-await-to-callbacks": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/promise/prefer-await-to-then.html
  "promise/prefer-await-to-then": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/promise/prefer-catch.html
  "promise/prefer-catch": "error"
} satisfies DummyRuleMap;
