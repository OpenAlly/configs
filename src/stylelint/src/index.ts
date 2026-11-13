// Import Third-party Dependencies
import type { Config } from "stylelint";

export default {
  plugins: [
    "@stylistic/stylelint-plugin"
  ],
  extends: [
    "stylelint-config-standard",
    // See: https://stylelint-stylistic.github.io/user-guide/recommended
    "@stylistic/stylelint-plugin/recommended"
  ],
  rules: {
    // The recommended preset indents with tabs
    "@stylistic/indentation": [2, {
      // Multi-line values (calc(), gradients, transitions) are aligned by hand
      ignore: ["value"]
    }],
    // Line endings are normalized by Git (.gitattributes), not by the linter
    "@stylistic/linebreaks": null,
    // Allow multi-line values to start on the declaration line, e.g. `max-height: min(\n ... \n);`
    "@stylistic/declaration-colon-newline-after": null,
    // Allow long value lists (e.g. font-family) to wrap with several items per line
    "@stylistic/value-list-comma-newline-after": null,
    // Treats a line break inside a long compound selector as an invalid combinator and joins the lines on fix
    "@stylistic/selector-descendant-combinator-no-non-space": null,
    // See: https://stylelint.io/user-guide/rules/no-descending-specificity
    "no-descending-specificity": null,
    // See: https://stylelint.io/user-guide/rules/no-duplicate-selectors
    "no-duplicate-selectors": true
  },
  ignoreFiles: [
    "**/dist/**",
    "**/coverage/**"
  ],
  overrides: [
    {
      files: [
        "**/*.ts",
        "**/*.js"
      ],
      customSyntax: "postcss-lit",
      rules: {
        // See: https://stylelint.io/user-guide/rules/no-empty-source
        "no-empty-source": null
      }
    }
  ]
} satisfies Config;
