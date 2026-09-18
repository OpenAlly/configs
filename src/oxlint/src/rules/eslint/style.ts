// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

export default {
  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/arrow-body-style.html
  "arrow-body-style": ["error", "as-needed", { requireReturnForObjectLiteral: true }],

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/capitalized-comments.html
  "capitalized-comments": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/curly.html
  curly: "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/default-case-last.html
  "default-case-last": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/default-param-last.html
  "default-param-last": ["error"],

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/func-name-matching.html
  "func-name-matching": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/func-names.html
  "func-names": ["error", "always"],

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/func-style.html
  "func-style": ["error", "declaration"],

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/grouped-accessor-pairs.html
  "grouped-accessor-pairs": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/guard-for-in.html
  "guard-for-in": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/id-denylist.html
  "id-denylist": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/id-length.html
  "id-length": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/id-match.html
  "id-match": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/init-declarations.html
  "init-declarations": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/logical-assignment-operators.html
  "logical-assignment-operators": ["error", "always"],

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-params.html
  "max-params": ["error", 3],

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-statements.html
  "max-statements": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/new-cap.html
  "new-cap": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-continue.html
  "no-continue": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-duplicate-imports.html
  "no-duplicate-imports": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-extra-label.html
  "no-extra-label": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-implicit-coercion.html
  "no-implicit-coercion": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-label-var.html
  "no-label-var": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-labels.html
  "no-labels": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-lone-blocks.html
  "no-lone-blocks": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-magic-numbers.html
  "no-magic-numbers": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-multi-assign.html
  "no-multi-assign": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-multi-str.html
  "no-multi-str": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-nested-ternary.html
  "no-nested-ternary": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-new-func.html
  "no-new-func": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-return-assign.html
  "no-return-assign": ["error", "except-parens"],

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-script-url.html
  "no-script-url": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-template-curly-in-string.html
  "no-template-curly-in-string": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-ternary.html
  "no-ternary": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-computed-key.html
  "no-useless-computed-key": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/object-shorthand.html
  "object-shorthand": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/one-var.html
  "one-var": ["error", "never"],

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/operator-assignment.html
  "operator-assignment": ["error", "always"],

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-arrow-callback.html
  "prefer-arrow-callback": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-const.html
  "prefer-const": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-destructuring.html
  "prefer-destructuring": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-exponentiation-operator.html
  "prefer-exponentiation-operator": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-named-capture-group.html
  "prefer-named-capture-group": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-numeric-literals.html
  "prefer-numeric-literals": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-object-has-own.html
  "prefer-object-has-own": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-object-spread.html
  "prefer-object-spread": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-regex-literals.html
  "prefer-regex-literals": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-rest-params.html
  "prefer-rest-params": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-spread.html
  "prefer-spread": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-template.html
  "prefer-template": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/sort-imports.html
  "sort-imports": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/sort-keys.html
  "sort-keys": "off",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/vars-on-top.html
  "vars-on-top": "error",

  // See: https://oxc.rs/docs/guide/usage/linter/rules/eslint/yoda.html
  yoda: "error"
} satisfies DummyRuleMap;
