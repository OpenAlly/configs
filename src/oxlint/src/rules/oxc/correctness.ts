// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

export default {
  // See: https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-array-method-on-arguments.html
  "oxc/bad-array-method-on-arguments": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-char-at-comparison.html
  "oxc/bad-char-at-comparison": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-comparison-sequence.html
  "oxc/bad-comparison-sequence": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-match-all-arg.html
  "oxc/bad-match-all-arg": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-min-max-func.html
  "oxc/bad-min-max-func": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-object-literal-comparison.html
  "oxc/bad-object-literal-comparison": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-replace-all-arg.html
  "oxc/bad-replace-all-arg": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/oxc/const-comparisons.html
  "oxc/const-comparisons": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/oxc/double-comparisons.html
  "oxc/double-comparisons": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/oxc/erasing-op.html
  "oxc/erasing-op": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/oxc/missing-throw.html
  "oxc/missing-throw": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/oxc/number-arg-out-of-range.html
  "oxc/number-arg-out-of-range": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/oxc/only-used-in-recursion.html
  "oxc/only-used-in-recursion": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/oxc/uninvoked-array-callback.html
  "oxc/uninvoked-array-callback": "error"
} satisfies DummyRuleMap;
