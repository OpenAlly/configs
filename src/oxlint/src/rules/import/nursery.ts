// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

export default {
  // See: https://oxc.rs/docs/guide/usage/linter/rules/import/export.html
  "import/export": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/import/named.html
  "import/named": "error"
} satisfies DummyRuleMap;
