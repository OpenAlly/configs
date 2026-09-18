// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

export default {
  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/class-methods-use-this.html
  "class-methods-use-this": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/complexity.html
  complexity: "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/default-case.html
  "default-case": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-alert.html
  "no-alert": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-bitwise.html
  "no-bitwise": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-console.html
  "no-console": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-div-regex.html
  "no-div-regex": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-empty.html
  "no-empty": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-empty-function.html
  "no-empty-function": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-eq-null.html
  "no-eq-null": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-implicit-globals.html
  "no-implicit-globals": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-param-reassign.html
  "no-param-reassign": ["error", { props: false }],

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-plusplus.html
  "no-plusplus": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-proto.html
  "no-proto": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-regex-spaces.html
  "no-regex-spaces": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-restricted-globals.html
  "no-restricted-globals": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-restricted-imports.html
  "no-restricted-imports": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-restricted-properties.html
  "no-restricted-properties": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-sequences.html
  "no-sequences": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-undefined.html
  "no-undefined": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-use-before-define.html
  "no-use-before-define": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-var.html
  "no-var": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-void.html
  "no-void": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/unicode-bom.html
  "unicode-bom": "error"
} satisfies DummyRuleMap;
