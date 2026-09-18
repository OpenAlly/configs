// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

export default {
  // See: https://oxc.rs/docs/guide/usage/linter/rules/import/default.html
  "import/default": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/import/namespace.html
  "import/namespace": "error"
} satisfies DummyRuleMap;
