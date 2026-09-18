// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

export default {
  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/consistent-function-scoping.html
  "unicorn/consistent-function-scoping": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-accessor-recursion.html
  "unicorn/no-accessor-recursion": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-array-fill-with-reference-type.html
  "unicorn/no-array-fill-with-reference-type": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-array-reverse.html
  "unicorn/no-array-reverse": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-array-sort.html
  "unicorn/no-array-sort": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-confusing-array-with.html
  "unicorn/no-confusing-array-with": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-instanceof-builtins.html
  "unicorn/no-instanceof-builtins": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-add-event-listener.html
  "unicorn/prefer-add-event-listener": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/require-module-specifiers.html
  "unicorn/require-module-specifiers": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/require-post-message-target-origin.html
  "unicorn/require-post-message-target-origin": "off"
} satisfies DummyRuleMap;
