// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

export default {
  // See: https://oxc.rs/docs/guide/usage/linter/rules/node/handle-callback-err.html
  "node/handle-callback-err": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/node/no-new-require.html
  "node/no-new-require": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/node/no-path-concat.html
  "node/no-path-concat": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/node/no-process-env.html
  "node/no-process-env": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/node/no-top-level-await.html
  "node/no-top-level-await": "off"
} satisfies DummyRuleMap;
