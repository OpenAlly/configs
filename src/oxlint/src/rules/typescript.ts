// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

/**
 * See https://eslint.style/packages/ts#rules
 */
export default {
  "@stylistic/brace-style": ["error", "stroustrup"],
  "@stylistic/comma-dangle": ["error", "never"],
  "@stylistic/comma-spacing": [
    "error", { before: false, after: true }
  ],
  "@stylistic/function-call-spacing": ["error", "never"],
  "@stylistic/key-spacing": ["error", { beforeColon: false }],
  "@stylistic/keyword-spacing": ["error", { before: true }],
  "@stylistic/lines-around-comment": "off",
  "@stylistic/lines-between-class-members": "off",
  "@stylistic/member-delimiter-style": [
    "error", {
      multiline: {
        delimiter: "semi",
        requireLast: true
      },
      singleline: {
        delimiter: "semi",
        requireLast: true
      },
      multilineDetection: "brackets"
    }
  ],
  "@stylistic/no-extra-parens": "off",
  "@stylistic/no-extra-semi": "error",
  "@stylistic/object-curly-newline": "off",
  "@stylistic/object-curly-spacing": ["error", "always"],
  "@stylistic/object-property-newline": "off",
  "@stylistic/padding-line-between-statements": [
    "error",
    {
      blankLine: "always",
      prev: "*",
      next: "return"
    }
  ],
  "@stylistic/quote-props": ["error", "as-needed"],
  "@stylistic/quotes": [
    "error",
    "double",
    {
      avoidEscape: true,
      allowTemplateLiterals: "avoidEscape"
    }
  ],
  "@stylistic/semi": ["error", "always"],
  "@stylistic/space-before-blocks": "error",
  "@stylistic/space-before-function-paren": ["error", {
    anonymous: "never",
    named: "never",
    asyncArrow: "never",
    catch: "always"
  }],
  "@stylistic/space-infix-ops": "error",
  "@stylistic/type-annotation-spacing": [
    "error",
    {
      before: true,
      after: true,
      overrides: {
        colon: {
          before: false,
          after: true
        }
      }
    }
  ],
  /**
   * See https://typescript-eslint.io/rules/
   */
  "typescript/ban-ts-comment": "off",
  "typescript/no-explicit-any": "off",
  "typescript/explicit-module-boundary-types": "off",
  "typescript/no-non-null-assertion": "off",
  "typescript/no-unused-vars": ["error", {
    args: "all",
    argsIgnorePattern: "^_",
    caughtErrors: "all",
    caughtErrorsIgnorePattern: "^_",
    destructuredArrayIgnorePattern: "^_",
    varsIgnorePattern: "^_",
    ignoreRestSiblings: true
  }],
  // Replaces `@typescript-eslint/naming-convention` (type-aware ESLint rules can't run as Oxlint JS plugins)
  "@openally/interface-naming": "error"
} satisfies DummyRuleMap;
