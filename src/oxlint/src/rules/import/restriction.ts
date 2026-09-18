// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

export default {
  // See: https://oxc.rs/docs/guide/usage/linter/rules/import/extensions.html
  "import/extensions": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/import/no-amd.html
  "import/no-amd": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/import/no-commonjs.html
  "import/no-commonjs": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/import/no-cycle.html
  "import/no-cycle": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/import/no-default-export.html
  "import/no-default-export": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/import/no-dynamic-require.html
  "import/no-dynamic-require": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/import/no-relative-parent-imports.html
  "import/no-relative-parent-imports": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/import/no-webpack-loader-syntax.html
  "import/no-webpack-loader-syntax": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/import/unambiguous.html
  "import/unambiguous": "off"
} satisfies DummyRuleMap;
