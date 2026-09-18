// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

export default {
  // See: https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/check-property-names.html
  "jsdoc/check-property-names": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/check-tag-names.html
  "jsdoc/check-tag-names": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/implements-on-classes.html
  "jsdoc/implements-on-classes": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/no-defaults.html
  "jsdoc/no-defaults": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-property.html
  "jsdoc/require-property": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-property-description.html
  "jsdoc/require-property-description": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-property-name.html
  "jsdoc/require-property-name": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-property-type.html
  "jsdoc/require-property-type": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-yields.html
  "jsdoc/require-yields": "off"
} satisfies DummyRuleMap;
