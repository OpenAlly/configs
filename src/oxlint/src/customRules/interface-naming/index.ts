// Import Third-party Dependencies
import type { TSESTree } from "@typescript-eslint/types";

// Import Internal Dependencies
import { createRule } from "../ruleCreator.ts";

// CONSTANTS
const kForbiddenPrefix = /^I[A-Z][a-z]/u;

function isPascalCase(
  name: string
): boolean {
  return name.length === 0 || (
    name[0] === name[0].toUpperCase() &&
    !name.includes("_")
  );
}

export const rule = createRule({
  create(context) {
    return {
      TSInterfaceDeclaration(node: TSESTree.TSInterfaceDeclaration) {
        const { name } = node.id;

        if (!isPascalCase(name)) {
          context.report({
            node: node.id,
            messageId: "notPascalCase",
            data: { name }
          });
        }
        else if (kForbiddenPrefix.test(name)) {
          context.report({
            node: node.id,
            messageId: "forbiddenPrefix",
            data: { name, regex: String(kForbiddenPrefix) }
          });
        }
      }
    };
  },
  name: "interface-naming",
  meta: {
    docs: {
      description: "Enforce PascalCase interface names without the Hungarian 'I' prefix"
    },
    messages: {
      notPascalCase: "Interface name `{{name}}` must match one of the following formats: PascalCase",
      forbiddenPrefix: "Interface name `{{name}}` must not match the RegExp: {{regex}}"
    },
    type: "suggestion",
    schema: []
  },
  defaultOptions: []
});
