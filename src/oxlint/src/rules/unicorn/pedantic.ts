// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

export default {
  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/consistent-assert.html
  "unicorn/consistent-assert": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/consistent-empty-array-spread.html
  "unicorn/consistent-empty-array-spread": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/escape-case.html
  "unicorn/escape-case": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/explicit-length-check.html
  "unicorn/explicit-length-check": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/new-for-builtins.html
  "unicorn/new-for-builtins": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-array-callback-reference.html
  "unicorn/no-array-callback-reference": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-hex-escape.html
  "unicorn/no-hex-escape": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-immediate-mutation.html
  "unicorn/no-immediate-mutation": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-instanceof-array.html
  "unicorn/no-instanceof-array": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-lonely-if.html
  "unicorn/no-lonely-if": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-negated-condition.html
  "unicorn/no-negated-condition": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-negation-in-equality-check.html
  "unicorn/no-negation-in-equality-check": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-new-buffer.html
  "unicorn/no-new-buffer": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-object-as-default-parameter.html
  "unicorn/no-object-as-default-parameter": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-static-only-class.html
  "unicorn/no-static-only-class": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-this-assignment.html
  "unicorn/no-this-assignment": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-typeof-undefined.html
  "unicorn/no-typeof-undefined": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-unnecessary-array-flat-depth.html
  "unicorn/no-unnecessary-array-flat-depth": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-unnecessary-array-splice-count.html
  "unicorn/no-unnecessary-array-splice-count": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-unnecessary-slice-end.html
  "unicorn/no-unnecessary-slice-end": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-unreadable-iife.html
  "unicorn/no-unreadable-iife": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-promise-resolve-reject.html
  "unicorn/no-useless-promise-resolve-reject": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-switch-case.html
  "unicorn/no-useless-switch-case": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-undefined.html
  "unicorn/no-useless-undefined": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-array-flat.html
  "unicorn/prefer-array-flat": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-array-some.html
  "unicorn/prefer-array-some": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-at.html
  "unicorn/prefer-at": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-blob-reading-methods.html
  "unicorn/prefer-blob-reading-methods": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-code-point.html
  "unicorn/prefer-code-point": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-date-now.html
  "unicorn/prefer-date-now": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-dom-node-append.html
  "unicorn/prefer-dom-node-append": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-dom-node-dataset.html
  "unicorn/prefer-dom-node-dataset": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-dom-node-remove.html
  "unicorn/prefer-dom-node-remove": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-event-target.html
  "unicorn/prefer-event-target": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-import-meta-properties.html
  "unicorn/prefer-import-meta-properties": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-math-min-max.html
  "unicorn/prefer-math-min-max": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-math-trunc.html
  "unicorn/prefer-math-trunc": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-native-coercion-functions.html
  "unicorn/prefer-native-coercion-functions": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-number-coercion.html
  "unicorn/prefer-number-coercion": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-prototype-methods.html
  "unicorn/prefer-prototype-methods": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-query-selector.html
  "unicorn/prefer-query-selector": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-regexp-test.html
  "unicorn/prefer-regexp-test": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-single-call.html
  "unicorn/prefer-single-call": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-string-replace-all.html
  "unicorn/prefer-string-replace-all": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-string-slice.html
  "unicorn/prefer-string-slice": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-top-level-await.html
  "unicorn/prefer-top-level-await": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-type-error.html
  "unicorn/prefer-type-error": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/unicorn/require-number-to-fixed-digits-argument.html
  "unicorn/require-number-to-fixed-digits-argument": "off"
} satisfies DummyRuleMap;
