// Import Third-party Dependencies
import type { TSESTree } from "@typescript-eslint/types";

// Import Internal Dependencies
import { createRule } from "../ruleCreator.ts";

type Options = [alias?: string];

// CONSTANTS
const kDefaultAlias = "that";

export const rule = createRule<Options, "aliasNotAssignedToThis" | "unexpectedAlias">({
  create(context, [alias = kDefaultAlias]) {
    const declaratorsWithoutInit: TSESTree.VariableDeclarator[] = [];

    function checkAssignment(
      node: TSESTree.Node,
      name: string,
      value: TSESTree.Expression | null
    ) {
      const isThis = value?.type === "ThisExpression";

      if (name === alias) {
        if (value !== null && !isThis) {
          context.report({
            node,
            messageId: "aliasNotAssignedToThis",
            data: { name }
          });
        }
      }
      else if (isThis) {
        context.report({
          node,
          messageId: "unexpectedAlias",
          data: { name }
        });
      }
    }

    return {
      VariableDeclarator(node: TSESTree.VariableDeclarator) {
        if (node.id.type !== "Identifier") {
          return;
        }

        if (node.id.name === alias && node.init === null) {
          declaratorsWithoutInit.push(node);
        }
        checkAssignment(node, node.id.name, node.init);
      },
      AssignmentExpression(node: TSESTree.AssignmentExpression) {
        if (node.operator === "=" && node.left.type === "Identifier") {
          checkAssignment(node, node.left.name, node.right);
        }
      },
      "Program:exit"() {
        for (const declarator of declaratorsWithoutInit) {
          const [variable] = context.sourceCode.getDeclaredVariables(declarator);
          const isAssignedToThis = variable?.references.some(
            (reference) => reference.writeExpr?.type === "ThisExpression"
          ) ?? false;

          if (!isAssignedToThis) {
            context.report({
              node: declarator,
              messageId: "aliasNotAssignedToThis",
              data: { name: alias }
            });
          }
        }
      }
    };
  },
  name: "consistent-this",
  meta: {
    docs: {
      description: "Enforce a consistent name when capturing the current execution context"
    },
    messages: {
      aliasNotAssignedToThis: "Designated alias '{{name}}' is not assigned to 'this'.",
      unexpectedAlias: "Unexpected alias '{{name}}' for 'this'."
    },
    type: "suggestion",
    schema: [
      {
        type: "string",
        minLength: 1
      }
    ]
  },
  defaultOptions: [kDefaultAlias]
});
