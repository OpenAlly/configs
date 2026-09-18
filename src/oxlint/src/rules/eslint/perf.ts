// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

export default {
  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-await-in-loop.html
  "no-await-in-loop": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-call.html
  "no-useless-call": "error"
} satisfies DummyRuleMap;
