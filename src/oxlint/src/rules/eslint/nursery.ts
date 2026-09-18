// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

export default {
  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-restricted-exports.html
  "no-restricted-exports": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-undef.html
  "no-undef": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unreachable-loop.html
  "no-unreachable-loop": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-assignment.html
  "no-useless-assignment": "error"
} satisfies DummyRuleMap;
