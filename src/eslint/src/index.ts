// Import Third-party Dependencies
import stylisticPlugin from "@stylistic/eslint-plugin";
import globals from "globals";
import tsEslint, { type ConfigWithExtends } from "typescript-eslint";
import * as tsParser from "@typescript-eslint/parser";
import type { SourceType } from "@typescript-eslint/types";

// Import Internal Dependencies
import { rules, rulesWithTS } from "./rules/index.js";

const kLanguageOptions = {
  sourceType: "script",
  globals: {
    ...globals.node
  }
};

const kBaseTypeScriptConfigs: ConfigWithExtends[] = [
  {
    plugins: {
      // @ts-ignore
      "@stylistic": stylisticPlugin
    },
    rules: {
      ...rulesWithTS,
      "no-undef": "off",
      "no-redeclare": "off"
    },
    languageOptions: {
      ...kLanguageOptions,
      sourceType: "module" as SourceType,
      parser: tsParser
    },
    files: ["**/*.ts"]
  },
  {
    ignores: [
      "**/*.d.ts",
      "**/dist"
    ]
  }
];

export const ESLintConfig = [
  {
    plugins: {
      "@stylistic": stylisticPlugin
    },
    rules,
    languageOptions: kLanguageOptions
  }
];

export function typescriptConfig(
  config?: ConfigWithExtends
) {
  return config ?
    tsEslint.config(...kBaseTypeScriptConfigs, config) :
    tsEslint.config(...kBaseTypeScriptConfigs);
}
export { globals };
