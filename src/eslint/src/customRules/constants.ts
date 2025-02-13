// Import Third-party Dependencies
import type { TSESTree } from "@typescript-eslint/types";
import { ESLintUtils } from "@typescript-eslint/utils";

const createRule = ESLintUtils.RuleCreator(
  (name) => `https://github.com/OpenAlly/configs/tree/main/src/eslint/docs/${name}.md`
);

function isConstantCase(str: string) {
  return /^[A-Z0-9_]+$/.test(str);
}

export const rule = createRule({
  create(context) {
    let isTopLevel = true;

    return {
      "Program > VariableDeclaration[kind=const]"(node: TSESTree.VariableDeclaration) {
        if (isTopLevel === false) {
          return;
        }

        const identifier = node.declarations.find((declaration) => declaration.id.type === "Identifier");
        if (!identifier?.id || identifier.id.type !== "Identifier" || identifier.id.name.startsWith("__")) {
          return;
        }

        const program = node.parent as TSESTree.Program;
        const constantsComment = program.comments?.find((comment) => comment.value.trimStart().startsWith("CONSTANT"));
        const constantsCommentAboveConstant = constantsComment && constantsComment.loc.end.line < identifier.loc.start.line;

        if (constantsComment && constantsComment.value.trim() !== "CONSTANTS") {
          context.report({
            node: constantsComment,
            messageId: "malformedComment"
          });
        }

        const hasKPrefix = identifier.id.name.startsWith("k");
        if (hasKPrefix === false && constantsCommentAboveConstant) {
          context.report({
            node: identifier,
            messageId: "missingKPrefix"
          });
        }
        else if (hasKPrefix) {
          const nextChar = identifier.id.name[1];
          if (nextChar.toUpperCase() !== nextChar) {
            context.report({
              node: identifier,
              messageId: "firstCharAfterKCapitalized"
            });
          }
          else if (identifier.id.name.includes("_")) {
            context.report({
              node: identifier,
              messageId: "shouldNotContainUnderscore"
            });
          }
        }
      },
      "ExportNamedDeclaration > VariableDeclaration[kind=const]:not(:has(ArrowFunctionExpression))"(
        node: TSESTree.VariableDeclaration
      ) {
        if (isTopLevel === false) {
          return;
        }

        const identifier = node.declarations.find((declaration) => declaration.id.type === "Identifier");
        if (identifier?.id.type !== "Identifier") {
          return;
        }

        const program = node.parent.parent as TSESTree.Program;
        const constantsComment = program.comments?.find((comment) => comment.value.trimStart().startsWith("CONSTANTS"));
        const constantsCommentAboveConstant = constantsComment && constantsComment.loc.end.line < identifier.loc.start.line;

        if (isConstantCase(identifier.id.name) === false && constantsCommentAboveConstant) {
          context.report({
            node: identifier,
            messageId: "mustBeConstantCase"
          });
        }
      },
      // eslint-disable-next-line @stylistic/max-len
      "Program > :not(VariableDeclaration, ImportDeclaration, ExportNamedDeclaration[declaration.type=VariableDeclaration]), VariableDeclaration:has(ArrowFunctionExpression, ArrayPattern)"() {
        isTopLevel = false;
      }
    };
  },
  name: "constants",
  meta: {
    docs: {
      description: "Enforce consistent naming conventions for top-level and exported constants"
    },
    messages: {
      missingKPrefix: "Top level constants should start with 'k' prefix",
      firstCharAfterKCapitalized: "First character after 'k' prefix should be uppercase",
      shouldNotContainUnderscore: "Top level constants should not contain underscore",
      mustBeConstantCase: "Exported constants must be in CONSTANT_CASE",
      malformedComment: "Malformed CONSTANTS comment"
    },
    type: "suggestion",
    schema: []
  },
  defaultOptions: []
});
