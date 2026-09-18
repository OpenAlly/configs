// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

export default {
  // See: https://oxc.rs/docs/guide/usage/linter/rules/import/consistent-type-specifier-style.html
  "import/consistent-type-specifier-style": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/import/exports-last.html
  "import/exports-last": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/import/first.html
  "import/first": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/import/group-exports.html
  "import/group-exports": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/import/newline-after-import.html
  "import/newline-after-import": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/import/no-anonymous-default-export.html
  "import/no-anonymous-default-export": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/import/no-duplicates.html
  "import/no-duplicates": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/import/no-mutable-exports.html
  "import/no-mutable-exports": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/import/no-named-default.html
  "import/no-named-default": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/import/no-named-export.html
  "import/no-named-export": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/import/no-namespace.html
  "import/no-namespace": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/import/no-nodejs-modules.html
  "import/no-nodejs-modules": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/import/prefer-default-export.html
  "import/prefer-default-export": "off"
} satisfies DummyRuleMap;
