// Import Node.js Dependencies
import path from "node:path";

// Import Third-party Dependencies
import type {
  ExternalPluginEntry,
  OxlintConfig as OxlintConfigType
} from "oxlint";

// Import Internal Dependencies
import {
  rules,
  rulesWithTS
} from "./rules/index.ts";
import recommendedRules from "./rules/recommended.ts";

// CONSTANTS
/**
 * JS plugin specifiers are resolved relative to the consumer config file.
 * Resolve them from this package instead so consumers don't have to install them.
 * The plugin keeps the extension of the current module (.ts when running from source).
 */
const kJsPlugins: ExternalPluginEntry[] = [
  {
    name: "@stylistic",
    specifier: import.meta.resolve("@stylistic/eslint-plugin")
  },
  {
    name: "@openally",
    specifier: new URL(`./plugin${path.extname(import.meta.filename)}`, import.meta.url).href
  }
];

/**
 * Oxlint enables the `correctness` category by default:
 * disable it so only the rules listed in this package are active.
 */
const kCategories: OxlintConfigType["categories"] = {
  correctness: "off"
};

export const OxlintConfig: OxlintConfigType = {
  plugins: [],
  jsPlugins: kJsPlugins,
  categories: kCategories,
  env: {
    builtin: true,
    node: true
  },
  rules
};

const kTypeScriptConfig = {
  plugins: ["typescript"],
  jsPlugins: kJsPlugins,
  categories: kCategories,
  env: {
    builtin: true
  },
  rules: recommendedRules,
  overrides: [
    {
      files: ["**/*.ts"],
      env: {
        node: true
      },
      rules: {
        ...rulesWithTS,
        // `no-unused-vars` is replaced by `typescript/no-unused-vars` (same rule in Oxlint)
        "no-undef": "off",
        "no-redeclare": "off",
        /**
         * ESLint parses TypeScript files as modules (where this rule never reports),
         * Oxlint parses files without import/export as scripts.
         */
        "no-implicit-globals": "off"
      }
    }
  ],
  ignorePatterns: [
    "**/*.d.ts",
    "**/dist"
  ]
} satisfies OxlintConfigType;

/**
 * The configuration is merged into a single root config (not `extends`) because Oxlint:
 * - only applies `ignorePatterns` from the root config;
 * - gives `overrides` precedence over root `rules`, so user rules are re-applied to TypeScript files.
 */
export function typescriptConfig(
  config: OxlintConfigType = {}
): OxlintConfigType {
  const {
    rules: userRules,
    overrides: userOverrides = [],
    ...userConfig
  } = config;

  return {
    ...kTypeScriptConfig,
    ...userConfig,
    plugins: [...new Set([
      ...kTypeScriptConfig.plugins,
      ...(userConfig.plugins ?? [])
    ])],
    jsPlugins: [
      ...kJsPlugins,
      ...(userConfig.jsPlugins ?? [])
    ],
    env: {
      ...kTypeScriptConfig.env,
      ...userConfig.env
    },
    rules: {
      ...kTypeScriptConfig.rules,
      ...userRules
    },
    overrides: [
      ...kTypeScriptConfig.overrides,
      ...(userRules ? [{ files: ["**/*.ts"], rules: userRules }] : []),
      ...userOverrides
    ],
    ignorePatterns: [
      ...kTypeScriptConfig.ignorePatterns,
      ...(userConfig.ignorePatterns ?? [])
    ]
  };
}
