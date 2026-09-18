// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

export default {
  // See: https://oxc.rs/docs/guide/usage/linter/rules/promise/no-return-in-finally.html
  "promise/no-return-in-finally": "error"
} satisfies DummyRuleMap;
