// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

export default {
  // See: https://oxc.rs/docs/guide/usage/linter/rules/promise/always-return.html
  "promise/always-return": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/promise/no-multiple-resolved.html
  "promise/no-multiple-resolved": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/promise/no-promise-in-callback.html
  "promise/no-promise-in-callback": "error"
} satisfies DummyRuleMap;
