// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

export default {
  // See: https://oxc.rs/docs/guide/usage/linter/rules/node/callback-return.html
  "node/callback-return": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/node/exports-style.html
  "node/exports-style": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/node/global-require.html
  "node/global-require": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/node/no-exports-assign.html
  "node/no-exports-assign": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/node/no-mixed-requires.html
  "node/no-mixed-requires": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/node/no-sync.html
  "node/no-sync": "off"
} satisfies DummyRuleMap;
