// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

export default {
  // See: https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-condition.html
  "typescript/no-unnecessary-condition": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-optional-chain.html
  "typescript/prefer-optional-chain": "error"
} satisfies DummyRuleMap;
