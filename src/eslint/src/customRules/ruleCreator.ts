// Import Third-party Dependencies
import { ESLintUtils } from "@typescript-eslint/utils";

export const createRule = ESLintUtils.RuleCreator(
  (name) => `https://github.com/OpenAlly/configs/tree/main/src/eslint/docs/${name}.md`
);
