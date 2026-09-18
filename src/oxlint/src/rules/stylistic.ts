// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

export default {
  // See: https://eslint.style/rules/array-bracket-newline
  "@stylistic/array-bracket-newline": "off",

  // See: https://eslint.style/rules/array-bracket-spacing
  "@stylistic/array-bracket-spacing": ["error", "never"],

  // See: https://eslint.style/rules/array-element-newline
  "@stylistic/array-element-newline": "off",

  // See: https://eslint.style/rules/arrow-parens
  "@stylistic/arrow-parens": ["error", "always"],

  // See: https://eslint.style/rules/arrow-spacing
  "@stylistic/arrow-spacing": "error",

  // See: https://eslint.style/rules/block-spacing
  "@stylistic/block-spacing": ["error", "always"],

  // See: https://eslint.style/rules/brace-style
  "@stylistic/brace-style": ["error", "stroustrup"],

  // See: https://eslint.style/rules/comma-dangle
  "@stylistic/comma-dangle": ["error", "never"],

  // See: https://eslint.style/rules/comma-spacing
  "@stylistic/comma-spacing": ["error", { before: false, after: true }],

  // See: https://eslint.style/rules/comma-style
  "@stylistic/comma-style": "off",

  // See: https://eslint.style/rules/computed-property-spacing
  "@stylistic/computed-property-spacing": ["error", "never"],

  // See: https://eslint.style/rules/curly-newline
  "@stylistic/curly-newline": "off",

  // See: https://eslint.style/rules/dot-location
  "@stylistic/dot-location": ["error", "property"],

  // See: https://eslint.style/rules/eol-last
  "@stylistic/eol-last": ["error", "always"],

  // See: https://eslint.style/rules/exp-jsx-props-style
  "@stylistic/exp-jsx-props-style": "off",

  // See: https://eslint.style/rules/exp-list-style
  "@stylistic/exp-list-style": "off",

  // See: https://eslint.style/rules/function-call-argument-newline
  "@stylistic/function-call-argument-newline": ["error", "consistent"],

  // See: https://eslint.style/rules/function-call-spacing
  "@stylistic/function-call-spacing": ["error", "never"],

  // See: https://eslint.style/rules/function-paren-newline
  "@stylistic/function-paren-newline": "off",

  // See: https://eslint.style/rules/generator-star-spacing
  "@stylistic/generator-star-spacing": ["error", { before: false, after: true }],

  // See: https://eslint.style/rules/implicit-arrow-linebreak
  "@stylistic/implicit-arrow-linebreak": ["error", "beside"],

  // See: https://eslint.style/rules/indent
  "@stylistic/indent": ["error", 2, { SwitchCase: 1 }],

  // See: https://eslint.style/rules/indent-binary-ops
  "@stylistic/indent-binary-ops": ["error", 2],

  // See: https://eslint.style/rules/jsx-child-element-spacing
  "@stylistic/jsx-child-element-spacing": "off",

  // See: https://eslint.style/rules/jsx-closing-bracket-location
  "@stylistic/jsx-closing-bracket-location": "off",

  // See: https://eslint.style/rules/jsx-closing-tag-location
  "@stylistic/jsx-closing-tag-location": "off",

  // See: https://eslint.style/rules/jsx-curly-brace-presence
  "@stylistic/jsx-curly-brace-presence": "off",

  // See: https://eslint.style/rules/jsx-curly-newline
  "@stylistic/jsx-curly-newline": "off",

  // See: https://eslint.style/rules/jsx-curly-spacing
  "@stylistic/jsx-curly-spacing": "off",

  // See: https://eslint.style/rules/jsx-equals-spacing
  "@stylistic/jsx-equals-spacing": "off",

  // See: https://eslint.style/rules/jsx-first-prop-new-line
  "@stylistic/jsx-first-prop-new-line": "off",

  // See: https://eslint.style/rules/jsx-function-call-newline
  "@stylistic/jsx-function-call-newline": "off",

  // See: https://eslint.style/rules/jsx-indent-props
  "@stylistic/jsx-indent-props": "off",

  // See: https://eslint.style/rules/jsx-max-props-per-line
  "@stylistic/jsx-max-props-per-line": "off",

  // See: https://eslint.style/rules/jsx-newline
  "@stylistic/jsx-newline": "off",

  // See: https://eslint.style/rules/jsx-one-expression-per-line
  "@stylistic/jsx-one-expression-per-line": "off",

  // See: https://eslint.style/rules/jsx-pascal-case
  "@stylistic/jsx-pascal-case": "off",

  // See: https://eslint.style/rules/jsx-quotes
  "@stylistic/jsx-quotes": "off",

  // See: https://eslint.style/rules/jsx-self-closing-comp
  "@stylistic/jsx-self-closing-comp": "off",

  // See: https://eslint.style/rules/jsx-tag-spacing
  "@stylistic/jsx-tag-spacing": "off",

  // See: https://eslint.style/rules/jsx-wrap-multilines
  "@stylistic/jsx-wrap-multilines": "off",

  // See: https://eslint.style/rules/key-spacing
  "@stylistic/key-spacing": ["error", { beforeColon: false }],

  // See: https://eslint.style/rules/keyword-spacing
  "@stylistic/keyword-spacing": ["error", { before: true }],

  // See: https://eslint.style/rules/line-comment-position
  "@stylistic/line-comment-position": ["error", { position: "above" }],

  // See: https://eslint.style/rules/linebreak-style
  "@stylistic/linebreak-style": "off",

  // See: https://eslint.style/rules/lines-around-comment
  "@stylistic/lines-around-comment": "off",

  // See: https://eslint.style/rules/lines-between-class-members
  "@stylistic/lines-between-class-members": "off",

  // See: https://eslint.style/rules/max-len
  "@stylistic/max-len": ["error", { code: 110, comments: 130 }],

  // See: https://eslint.style/rules/max-statements-per-line
  "@stylistic/max-statements-per-line": "off",

  // See: https://eslint.style/rules/member-delimiter-style
  "@stylistic/member-delimiter-style": ["error", {
    multiline: { delimiter: "semi", requireLast: true },
    singleline: { delimiter: "semi", requireLast: true },
    multilineDetection: "brackets"
  }],

  // See: https://eslint.style/rules/multiline-comment-style
  "@stylistic/multiline-comment-style": ["error", "starred-block"],

  // See: https://eslint.style/rules/multiline-ternary
  "@stylistic/multiline-ternary": "off",

  // See: https://eslint.style/rules/new-parens
  "@stylistic/new-parens": "error",

  // See: https://eslint.style/rules/newline-per-chained-call
  "@stylistic/newline-per-chained-call": ["error", { ignoreChainWithDepth: 3 }],

  // See: https://eslint.style/rules/no-confusing-arrow
  "@stylistic/no-confusing-arrow": ["error", { allowParens: true }],

  // See: https://eslint.style/rules/no-extra-parens
  "@stylistic/no-extra-parens": "off",

  // See: https://eslint.style/rules/no-extra-semi
  "@stylistic/no-extra-semi": "error",

  // See: https://eslint.style/rules/no-floating-decimal
  "@stylistic/no-floating-decimal": "error",

  // See: https://eslint.style/rules/no-mixed-operators
  "@stylistic/no-mixed-operators": "error",

  // See: https://eslint.style/rules/no-mixed-spaces-and-tabs
  "@stylistic/no-mixed-spaces-and-tabs": "error",

  // See: https://eslint.style/rules/no-multi-spaces
  "@stylistic/no-multi-spaces": "error",

  // See: https://eslint.style/rules/no-multiple-empty-lines
  "@stylistic/no-multiple-empty-lines": ["error", { max: 1 }],

  // See: https://eslint.style/rules/no-tabs
  "@stylistic/no-tabs": "off",

  // See: https://eslint.style/rules/no-trailing-spaces
  "@stylistic/no-trailing-spaces": "error",

  // See: https://eslint.style/rules/no-whitespace-before-property
  "@stylistic/no-whitespace-before-property": "error",

  // See: https://eslint.style/rules/nonblock-statement-body-position
  "@stylistic/nonblock-statement-body-position": "off",

  // See: https://eslint.style/rules/object-curly-newline
  "@stylistic/object-curly-newline": "off",

  // See: https://eslint.style/rules/object-curly-spacing
  "@stylistic/object-curly-spacing": ["error", "always"],

  // See: https://eslint.style/rules/object-property-newline
  "@stylistic/object-property-newline": "off",

  // See: https://eslint.style/rules/one-var-declaration-per-line
  "@stylistic/one-var-declaration-per-line": "error",

  // See: https://eslint.style/rules/operator-linebreak
  "@stylistic/operator-linebreak": "off",

  // See: https://eslint.style/rules/padded-blocks
  "@stylistic/padded-blocks": ["error", "never"],

  // See: https://eslint.style/rules/padding-line-between-statements
  "@stylistic/padding-line-between-statements": ["error", {
    blankLine: "always",
    prev: "*",
    next: "return"
  }],

  // See: https://eslint.style/rules/quote-props
  "@stylistic/quote-props": ["error", "as-needed"],

  // See: https://eslint.style/rules/quotes
  "@stylistic/quotes": ["error", "double", {
    avoidEscape: true,
    allowTemplateLiterals: "avoidEscape"
  }],

  // See: https://eslint.style/rules/rest-spread-spacing
  "@stylistic/rest-spread-spacing": ["error", "never"],

  // See: https://eslint.style/rules/semi
  "@stylistic/semi": ["error", "always"],

  // See: https://eslint.style/rules/semi-spacing
  "@stylistic/semi-spacing": ["error", { before: false, after: true }],

  // See: https://eslint.style/rules/semi-style
  "@stylistic/semi-style": ["error", "last"],

  // See: https://eslint.style/rules/space-before-blocks
  "@stylistic/space-before-blocks": "error",

  // See: https://eslint.style/rules/space-before-function-paren
  "@stylistic/space-before-function-paren": ["error", {
    anonymous: "never",
    named: "never",
    asyncArrow: "never",
    catch: "always"
  }],

  // See: https://eslint.style/rules/space-in-parens
  "@stylistic/space-in-parens": ["error", "never"],

  // See: https://eslint.style/rules/space-infix-ops
  "@stylistic/space-infix-ops": "error",

  // See: https://eslint.style/rules/space-unary-ops
  "@stylistic/space-unary-ops": "error",

  // See: https://eslint.style/rules/spaced-comment
  "@stylistic/spaced-comment": ["error", "always"],

  // See: https://eslint.style/rules/switch-colon-spacing
  "@stylistic/switch-colon-spacing": "error",

  // See: https://eslint.style/rules/template-curly-spacing
  "@stylistic/template-curly-spacing": "error",

  // See: https://eslint.style/rules/template-tag-spacing
  "@stylistic/template-tag-spacing": ["error", "never"],

  // See: https://eslint.style/rules/type-annotation-spacing
  "@stylistic/type-annotation-spacing": ["error", {
    before: true,
    after: true,
    overrides: { colon: { before: false, after: true } }
  }],

  // See: https://eslint.style/rules/type-generic-spacing
  "@stylistic/type-generic-spacing": ["error"],

  // See: https://eslint.style/rules/type-named-tuple-spacing
  "@stylistic/type-named-tuple-spacing": ["error"],

  // See: https://eslint.style/rules/wrap-iife
  "@stylistic/wrap-iife": "error",

  // See: https://eslint.style/rules/wrap-regex
  "@stylistic/wrap-regex": "off",

  // See: https://eslint.style/rules/yield-star-spacing
  "@stylistic/yield-star-spacing": ["error", { before: false, after: true }]
} satisfies DummyRuleMap;
