// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

export default {
  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-await-in-promise-methods.html
  "unicorn/no-await-in-promise-methods": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-empty-file.html
  "unicorn/no-empty-file": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-invalid-fetch-options.html
  "unicorn/no-invalid-fetch-options": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-invalid-remove-event-listener.html
  "unicorn/no-invalid-remove-event-listener": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-new-array.html
  "unicorn/no-new-array": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-single-promise-in-promise-methods.html
  "unicorn/no-single-promise-in-promise-methods": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-thenable.html
  "unicorn/no-thenable": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-unnecessary-await.html
  "unicorn/no-unnecessary-await": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-fallback-in-spread.html
  "unicorn/no-useless-fallback-in-spread": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-length-check.html
  "unicorn/no-useless-length-check": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-spread.html
  "unicorn/no-useless-spread": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-set-size.html
  "unicorn/prefer-set-size": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-string-starts-ends-with.html
  "unicorn/prefer-string-starts-ends-with": "error"
} satisfies DummyRuleMap;
