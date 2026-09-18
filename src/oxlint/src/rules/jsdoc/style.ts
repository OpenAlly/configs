// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

export default {
  // See: https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/no-blank-blocks.html
  "jsdoc/no-blank-blocks": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-throws-description.html
  "jsdoc/require-throws-description": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-yields-description.html
  "jsdoc/require-yields-description": "off"
} satisfies DummyRuleMap;
