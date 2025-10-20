// Import Third-party Dependencies
import eslint from "@eslint/js";
import stylisticPlugin from "@stylistic/eslint-plugin";
import globals from "globals";
import tsEslint, { type ConfigArray, type ConfigWithExtends } from "typescript-eslint";
import type { SourceType } from "@typescript-eslint/types";

// Import Internal Dependencies
import { rules, rulesWithTS } from "./rules/index.ts";
import { rules as openallyRules } from "./customRules/index.ts";
import pkg from "../package.json" with { type: "json" };

const kOpenallyPlugin = {
  meta: {
    name: "@openally",
    version: pkg.version
  },
  rules: openallyRules
};

const kLanguageOptions = {
  sourceType: "script",
  globals: {
    ...globals.node
  }
};

const kBaseTypeScriptConfigs: ConfigArray = [
  {
    plugins: {
      "@typescript-eslint": tsEslint.plugin,
      // @ts-ignore
      "@stylistic": stylisticPlugin,
      "@openally": kOpenallyPlugin
    },
    rules: {
      ...rulesWithTS,
      "no-undef": "off",
      "no-redeclare": "off",
      "no-invalid-this": "off",
      "no-unused-vars": "off"
    },
    languageOptions: {
      ...kLanguageOptions,
      sourceType: "module" as SourceType,
      parser: tsEslint.parser
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
      "@stylistic": stylisticPlugin,
      "@openally": kOpenallyPlugin
    },
    rules,
    languageOptions: kLanguageOptions
  }
];

export function typescriptConfig(
  config?: ConfigWithExtends
) {
  const configs: (ConfigArray & ConfigWithExtends[]) = [eslint.configs.recommended, kBaseTypeScriptConfigs];
  if (config) {
    configs.push(config);
  }

  return tsEslint.config(...configs);
}

export { globals };
