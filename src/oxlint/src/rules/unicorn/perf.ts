// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

export default {
  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-array-find.html
  "unicorn/prefer-array-find": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-array-flat-map.html
  "unicorn/prefer-array-flat-map": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-set-has.html
  "unicorn/prefer-set-has": "off"
} satisfies DummyRuleMap;
