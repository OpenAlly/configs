// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

export default {
  // See: https://oxc.rs/docs/guide/usage/linter/rules/promise/no-callback-in-promise.html
  "promise/no-callback-in-promise": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/promise/no-new-statics.html
  "promise/no-new-statics": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/promise/valid-params.html
  "promise/valid-params": "error"
} satisfies DummyRuleMap;
