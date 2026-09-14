// Import Third-party Dependencies
import type { Config } from "stylelint";

export default {
  plugins: [
    "@stylistic/stylelint-plugin"
  ],
  extends: [
    "stylelint-config-standard"
  ],
  rules: {
    "@stylistic/block-opening-brace-space-before": "always",
    // See: https://stylelint.io/user-guide/rules/no-descending-specificity
    "no-descending-specificity": null
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
