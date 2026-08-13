// Import Third-party Dependencies
import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import stylisticPlugin from "@stylistic/eslint-plugin";
import globals from "globals";
import tsEslint, {
  type ConfigArray,
  type ConfigWithExtends
} from "typescript-eslint";

// Import Internal Dependencies
import {
  rules,
  rulesWithTS
} from "./rules/index.ts";
import {
  rules as openallyRules
} from "./customRules/index.ts";
import packageJSON from "../package.json" with { type: "json" };

// CONSTANTS
const kOpenallyPlugin = {
  meta: {
    name: "@openally",
    version: packageJSON.version
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
      sourceType: "module",
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
  const configs: (ConfigArray & ConfigWithExtends[]) = [
    eslint.configs.recommended,
    kBaseTypeScriptConfigs
  ];
  if (config) {
    configs.push(config);
  }

  // `typescript-eslint` and ESLint describe equivalent flat configs through
  // incompatible declaration types. Keep the public helper typed by
  // `typescript-eslint` and bridge only at ESLint's runtime helper boundary.
  return defineConfig(
    ...configs as unknown as Parameters<typeof defineConfig>
  );
}

export { globals };
