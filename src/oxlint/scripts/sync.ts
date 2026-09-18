// Import Node.js Dependencies
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

// Import Third-party Dependencies
import stylisticPlugin from "@stylistic/eslint-plugin";

// Import Internal Dependencies
import openallyPlugin from "../src/plugin.ts";
import stylistic from "../src/rules/stylistic.ts";
import * as openally from "../src/rules/openally.ts";
import recommended from "../src/rules/recommended.ts";

// CONSTANTS
const kRulesDir = path.join(import.meta.dirname, "..", "src", "rules");
const kOxlintBin = fileURLToPath(
  new URL("bin/oxlint", import.meta.resolve("oxlint/package.json"))
);
const kScopes = new Set([
  "eslint",
  "typescript",
  "unicorn",
  "oxc",
  "import",
  "node",
  "promise",
  "jsdoc"
]);

interface OxlintRule {
  scope: string;
  value: string;
  category: string;
  type_aware: boolean;
  docs_url: string;
}

const errors: string[] = [];
const oxlintRules = getOxlintRules();
const oxlintRulesByKey = new Map(
  oxlintRules.map((rule) => [getRuleKey(rule), rule])
);
const localRules = new Map<string, string>();

for (const scope of fs.readdirSync(kRulesDir, { withFileTypes: true })) {
  if (!scope.isDirectory()) {
    continue;
  }

  if (!kScopes.has(scope.name)) {
    errors.push(`Directory "${scope.name}" is not a supported Oxlint plugin`);
    continue;
  }

  const scopeDir = path.join(kRulesDir, scope.name);
  for (const file of fs.readdirSync(scopeDir)) {
    if (file === "index.ts") {
      continue;
    }

    const category = path.basename(file, ".ts");
    const location = `${scope.name}/${file}`;
    const { default: rules } = await import(
      pathToFileURL(path.join(scopeDir, file)).href
    );

    for (const ruleKey of Object.keys(rules)) {
      addLocalRule(ruleKey, location);

      const rule = oxlintRulesByKey.get(ruleKey);
      if (rule === undefined || rule.scope !== scope.name) {
        errors.push(`Rule "${ruleKey}" (${location}) is not an Oxlint ${scope.name} rule`);
      }
      else if (rule.category !== category) {
        errors.push(`Rule "${ruleKey}" (${location}) must be moved to ${scope.name}/${rule.category}.ts`);
      }
    }
  }
}

for (const rule of oxlintRules) {
  const ruleKey = getRuleKey(rule);
  if (kScopes.has(rule.scope) && !localRules.has(ruleKey)) {
    const typeAware = rule.type_aware ? " [type-aware]" : "";
    errors.push(
      `Rule "${ruleKey}"${typeAware} is missing in ${rule.scope}/${rule.category}.ts (${rule.docs_url})`
    );
  }
}

checkPluginRules("@stylistic", stylistic, stylisticPlugin.rules);
checkPluginRules(
  "@openally",
  { ...openally.javascript, ...openally.typescript },
  openallyPlugin.rules
);

for (const ruleKey of Object.keys(recommended)) {
  if (!oxlintRulesByKey.has(ruleKey)) {
    errors.push(`Rule "${ruleKey}" (recommended.ts) is not an Oxlint rule`);
  }
}

for (const error of errors) {
  console.error(error);
}
console.log(`Done! (${errors.length} problem(s) found)`);
process.exitCode = errors.length > 0 ? 1 : 0;

function getOxlintRules(): OxlintRule[] {
  const { stdout, stderr, status } = spawnSync(
    process.execPath,
    [kOxlintBin, "--rules", "--format", "json"],
    { cwd: os.tmpdir(), encoding: "utf8" }
  );
  if (status !== 0) {
    throw new Error(`Unable to list Oxlint rules:\n${stderr}`);
  }

  return JSON.parse(stdout);
}

function getRuleKey(
  rule: OxlintRule
): string {
  return rule.scope === "eslint" ? rule.value : `${rule.scope}/${rule.value}`;
}

function addLocalRule(
  ruleKey: string,
  location: string
) {
  const previousLocation = localRules.get(ruleKey);
  if (previousLocation === undefined) {
    localRules.set(ruleKey, location);
  }
  else {
    errors.push(`Rule "${ruleKey}" is defined in both ${previousLocation} and ${location}`);
  }
}

function checkPluginRules(
  pluginName: string,
  localPluginRules: Record<string, unknown>,
  pluginRules: Record<string, { meta?: { deprecated?: unknown; }; }>
) {
  const location = `${pluginName.slice(1)}.ts`;
  const prefix = `${pluginName}/`;
  for (const ruleKey of Object.keys(localPluginRules)) {
    addLocalRule(ruleKey, location);

    const rule = pluginRules[ruleKey.slice(prefix.length)];
    if (!ruleKey.startsWith(prefix) || rule === undefined) {
      errors.push(`Rule "${ruleKey}" (${location}) is not a ${pluginName} rule`);
    }
    else if (rule.meta?.deprecated) {
      errors.push(`Rule "${ruleKey}" (${location}) is deprecated`);
    }
  }

  for (const [ruleName, rule] of Object.entries(pluginRules)) {
    if (!rule.meta?.deprecated && !(`${prefix}${ruleName}` in localPluginRules)) {
      errors.push(`Rule "${prefix}${ruleName}" is missing in ${location}`);
    }
  }
}
