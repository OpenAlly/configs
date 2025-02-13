// Import Third-party Dependencies
import { request } from "@myunisoft/httpie";
import { JSDOM } from "jsdom";

// Import Internal Dependencies
import { rulesWithTS } from "../src/rules/index.js";

// CONSTANTS
const kStylistic = Symbol("stylistic");
const kEslintRulesReferenceUrl = "https://eslint.org/docs/latest/rules/";
const kStylisticRulesUrl = "https://eslint.style/rules";
const kLocalRules = new Set(Object.keys(rulesWithTS));

const [eslintResult, stylisticResult] = await Promise.all([
  request<string>("GET", kEslintRulesReferenceUrl),
  request<string>("GET", kStylisticRulesUrl)
]);
const eslintDom = new JSDOM(eslintResult.data);
const stylisticDom = new JSDOM(stylisticResult.data);
const rules = new Set([
  ...parseESLintRulesReferences(eslintDom),
  ...parseStylisticRules(stylisticDom).map((rule) => Object.assign(rule, { [kStylistic]: true }))
]);

for (const rule of rules) {
  if (kLocalRules.has(rule.ruleName) && rule.isDeprecated) {
    console.error(
      `Rule "${rule.ruleName}" is deprecated! (https://eslint.org/docs/latest/rules/${rule.ruleName})`
    );
  }
  else if (kLocalRules.has(rule.ruleName) && rule.isRemoved) {
    console.error(
      `Rule "${rule.ruleName}" is removed! (https://eslint.org/docs/latest/rules/${rule.ruleName})`
    );
  }
  else if (
    !kLocalRules.has(rule.ruleName) &&
    !kLocalRules.has(`@stylistic/${rule.ruleName}`) &&
    !rule.isDeprecated &&
    !rule.isRemoved
  ) {
    const label = rule[kStylistic] ? `${kStylisticRulesUrl}/default/${rule.ruleName}` : kEslintRulesReferenceUrl + rule.ruleName;
    console.error(
      `Rule "${rule.ruleName}" is not present in the local ESLint configuration!(${label})`
    );
  }
}
console.log("Done!");

function parseESLintRulesReferences(
  dom: JSDOM
) {
  return [
    ...dom.window.document.querySelectorAll("article.rule")
  ].map((rule) => {
    return {
      ruleName: parseRuleName(rule.textContent),
      isDeprecated: rule.classList.contains("rule--deprecated"),
      isRemoved: rule.classList.contains("rule--removed")
    };
  });
}

function parseStylisticRules(
  dom: JSDOM
) {
  return [
    ...dom.window.document.querySelectorAll("td a code")
  ].map((rule) => {
    return {
      ruleName: parseRuleName(rule.textContent),
      isDeprecated: false,
      isRemoved: false
    };
  });
}

function parseRuleName(textContent: string | null) {
  if (typeof textContent === "string") {
    return textContent
      .replace(/\n/g, " ")
      .trimStart()
      .split(" ")[0];
  }

  return "";
}
