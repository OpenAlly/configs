// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

export default {
  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/constructor-super.html
  "constructor-super": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/for-direction.html
  "for-direction": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/getter-return.html
  "getter-return": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-async-promise-executor.html
  "no-async-promise-executor": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-caller.html
  "no-caller": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-class-assign.html
  "no-class-assign": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-compare-neg-zero.html
  "no-compare-neg-zero": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-cond-assign.html
  "no-cond-assign": ["error", "except-parens"],

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-const-assign.html
  "no-const-assign": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-constant-binary-expression.html
  "no-constant-binary-expression": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-constant-condition.html
  "no-constant-condition": ["error", { checkLoops: false }],

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-control-regex.html
  "no-control-regex": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-debugger.html
  "no-debugger": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-delete-var.html
  "no-delete-var": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-dupe-class-members.html
  "no-dupe-class-members": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-dupe-else-if.html
  "no-dupe-else-if": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-dupe-keys.html
  "no-dupe-keys": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-duplicate-case.html
  "no-duplicate-case": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-empty-character-class.html
  "no-empty-character-class": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-empty-pattern.html
  "no-empty-pattern": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-empty-static-block.html
  "no-empty-static-block": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-eval.html
  "no-eval": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-ex-assign.html
  "no-ex-assign": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-extra-boolean-cast.html
  "no-extra-boolean-cast": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-func-assign.html
  "no-func-assign": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-global-assign.html
  "no-global-assign": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-import-assign.html
  "no-import-assign": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-invalid-regexp.html
  "no-invalid-regexp": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-irregular-whitespace.html
  "no-irregular-whitespace": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-iterator.html
  "no-iterator": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-loss-of-precision.html
  "no-loss-of-precision": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-misleading-character-class.html
  "no-misleading-character-class": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-new-native-nonconstructor.html
  "no-new-native-nonconstructor": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-nonoctal-decimal-escape.html
  "no-nonoctal-decimal-escape": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-obj-calls.html
  "no-obj-calls": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-self-assign.html
  "no-self-assign": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-setter-return.html
  "no-setter-return": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-shadow-restricted-names.html
  "no-shadow-restricted-names": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-sparse-arrays.html
  "no-sparse-arrays": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-this-before-super.html
  "no-this-before-super": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unassigned-vars.html
  "no-unassigned-vars": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unreachable.html
  "no-unreachable": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unsafe-finally.html
  "no-unsafe-finally": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unsafe-negation.html
  "no-unsafe-negation": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unsafe-optional-chaining.html
  "no-unsafe-optional-chaining": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unused-expressions.html
  "no-unused-expressions": ["error", { allowShortCircuit: true }],

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unused-labels.html
  "no-unused-labels": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unused-private-class-members.html
  "no-unused-private-class-members": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unused-vars.html
  "no-unused-vars": ["error", {
    args: "all",
    argsIgnorePattern: "^_",
    caughtErrors: "all",
    caughtErrorsIgnorePattern: "^_",
    destructuredArrayIgnorePattern: "^_",
    varsIgnorePattern: "^_",
    ignoreRestSiblings: true
  }],

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-backreference.html
  "no-useless-backreference": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-catch.html
  "no-useless-catch": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-escape.html
  "no-useless-escape": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-rename.html
  "no-useless-rename": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-with.html
  "no-with": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/require-yield.html
  "require-yield": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/use-isnan.html
  "use-isnan": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/valid-typeof.html
  "valid-typeof": ["error", { requireStringLiterals: true }]
} satisfies DummyRuleMap;
