// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

export default {
  // See: https://oxc.rs/docs/guide/usage/linter/rules/import/no-absolute-path.html
  "import/no-absolute-path": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/import/no-empty-named-blocks.html
  "import/no-empty-named-blocks": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/import/no-named-as-default.html
  "import/no-named-as-default": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/import/no-named-as-default-member.html
  "import/no-named-as-default-member": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/import/no-self-import.html
  "import/no-self-import": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/import/no-unassigned-import.html
  "import/no-unassigned-import": "off"
} satisfies DummyRuleMap;
