// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

export default {
  // See: https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-accumulating-spread.html
  "oxc/no-accumulating-spread": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-map-spread.html
  "oxc/no-map-spread": "error"
} satisfies DummyRuleMap;
