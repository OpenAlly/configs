// Import Third-party Dependencies
import type { TSESTree } from "@typescript-eslint/types";

// Import Internal Dependencies
import { createRule } from "../ruleCreator.ts";

export const rule = createRule({
  create(context) {
    function report(
      node: TSESTree.Node
    ) {
      context.report({
        node,
        messageId: "private"
      });
    }

    return {
      MethodDefinition(node: TSESTree.MethodDefinition) {
        // `private constructor()` has no ECMAScript equivalent
        if (node.accessibility === "private" && node.kind !== "constructor") {
          report(node.key);
        }
      },
      PropertyDefinition(node: TSESTree.PropertyDefinition) {
        // `private declare` fields only exist at the type level
        if (node.accessibility === "private" && !node.declare) {
          report(node.key);
        }
      },
      AccessorProperty(node: TSESTree.AccessorProperty) {
        if (node.accessibility === "private") {
          report(node.key);
        }
      }
    };
  },
  name: "no-ts-private",
  meta: {
    docs: {
      description: "Disallow the TypeScript `private` modifier in favor of ECMAScript `#private` members"
    },
    messages: {
      private: "Use an ECMAScript `#private` member instead of the TypeScript `private` modifier"
    },
    type: "suggestion",
    schema: []
  },
  defaultOptions: []
});
