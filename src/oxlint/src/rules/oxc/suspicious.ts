// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

export default {
  // See: https://oxc.rs/docs/guide/usage/linter/rules/oxc/approx-constant.html
  "oxc/approx-constant": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/oxc/misrefactored-assign-op.html
  "oxc/misrefactored-assign-op": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-async-endpoint-handlers.html
  "oxc/no-async-endpoint-handlers": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-this-in-exported-function.html
  "oxc/no-this-in-exported-function": "error"
} satisfies DummyRuleMap;
