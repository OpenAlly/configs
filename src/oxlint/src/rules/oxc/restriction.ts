// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

export default {
  // See: https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-bitwise-operator.html
  "oxc/bad-bitwise-operator": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-async-await.html
  "oxc/no-async-await": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-barrel-file.html
  "oxc/no-barrel-file": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-const-enum.html
  "oxc/no-const-enum": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-optional-chaining.html
  "oxc/no-optional-chaining": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-rest-spread-properties.html
  "oxc/no-rest-spread-properties": "off"
} satisfies DummyRuleMap;
