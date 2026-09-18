// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

export default {
  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/import-style.html
  "unicorn/import-style": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-abusive-eslint-disable.html
  "unicorn/no-abusive-eslint-disable": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-anonymous-default-export.html
  "unicorn/no-anonymous-default-export": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-array-for-each.html
  "unicorn/no-array-for-each": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-array-reduce.html
  "unicorn/no-array-reduce": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-document-cookie.html
  "unicorn/no-document-cookie": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-length-as-slice-end.html
  "unicorn/no-length-as-slice-end": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-magic-array-flat-depth.html
  "unicorn/no-magic-array-flat-depth": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-process-exit.html
  "unicorn/no-process-exit": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-error-capture-stack-trace.html
  "unicorn/no-useless-error-capture-stack-trace": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-modern-math-apis.html
  "unicorn/prefer-modern-math-apis": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-module.html
  "unicorn/prefer-module": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-node-protocol.html
  "unicorn/prefer-node-protocol": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-number-properties.html
  "unicorn/prefer-number-properties": "off"
} satisfies DummyRuleMap;
