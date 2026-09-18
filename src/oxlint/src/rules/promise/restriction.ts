// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

export default {
  // See: https://oxc.rs/docs/guide/usage/linter/rules/promise/catch-or-return.html
  "promise/catch-or-return": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/promise/spec-only.html
  "promise/spec-only": "error"
} satisfies DummyRuleMap;
