// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

export default {
  // See: https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/check-access.html
  "jsdoc/check-access": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/empty-tags.html
  "jsdoc/empty-tags": "off"
} satisfies DummyRuleMap;
