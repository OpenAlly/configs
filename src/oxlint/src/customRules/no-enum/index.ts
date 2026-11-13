// Import Third-party Dependencies
import type { TSESTree } from "@typescript-eslint/types";

// Import Internal Dependencies
import { createRule } from "../ruleCreator.ts";

export const rule = createRule({
  create(context) {
    return {
      TSEnumDeclaration(node: TSESTree.TSEnumDeclaration) {
        context.report({
          node: node.id,
          messageId: "enum",
          data: { name: node.id.name }
        });
      }
    };
  },
  name: "no-enum",
  meta: {
    docs: {
      description: "Disallow TypeScript enums"
    },
    messages: {
      enum: "Enum `{{name}}`: use a union of literals or an `as const` object instead"
    },
    type: "suggestion",
    schema: []
  },
  defaultOptions: []
});
