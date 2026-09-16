// Import Third-party Dependencies
import type { TSESTree } from "@typescript-eslint/types";

// Import Internal Dependencies
import { createRule } from "../ruleCreator.ts";

type ConstantDeclaration = {
  declaration: TSESTree.VariableDeclaration;
  exported: boolean;
  statement: TSESTree.ProgramStatement;
};

function getConstantDeclaration(
  statement: TSESTree.ProgramStatement
): ConstantDeclaration | null {
  if (
    statement.type === "VariableDeclaration" &&
    statement.kind === "const"
  ) {
    return {
      declaration: statement,
      exported: false,
      statement
    };
  }

  if (
    statement.type === "ExportNamedDeclaration" &&
    statement.declaration?.type === "VariableDeclaration" &&
    statement.declaration.kind === "const"
  ) {
    return {
      declaration: statement.declaration,
      exported: true,
      statement
    };
  }

  return null;
}

function isConstantCase(name: string) {
  return /^[A-Z0-9_]+$/.test(name);
}

function isAdjacent(
  previous: TSESTree.Node,
  next: TSESTree.Node
) {
  return next.loc.start.line === previous.loc.end.line + 1;
}

function isConstantsMarker(
  comment: TSESTree.Comment,
  statement: TSESTree.ProgramStatement
) {
  return comment.value.trimStart().startsWith("CONSTANT") &&
    comment.loc.end.line === statement.loc.start.line - 1;
}

function getMarkerAbove(
  statement: TSESTree.ProgramStatement,
  comments: TSESTree.Comment[]
) {
  return comments.find((comment) => isConstantsMarker(comment, statement));
}

export const rule = createRule({
  create(context) {
    function validateConstant(constant: ConstantDeclaration) {
      for (const declarator of constant.declaration.declarations) {
        if (
          declarator.id.type !== "Identifier" ||
          declarator.id.name.startsWith("__")
        ) {
          continue;
        }

        if (constant.exported) {
          if (isConstantCase(declarator.id.name) === false) {
            context.report({
              node: declarator.id,
              messageId: "mustBeConstantCase"
            });
          }
          continue;
        }

        if (declarator.id.name.startsWith("k") === false) {
          context.report({
            node: declarator.id,
            messageId: "missingKPrefix"
          });
        }
        else if (declarator.id.name[1]?.toUpperCase() !== declarator.id.name[1]) {
          context.report({
            node: declarator.id,
            messageId: "firstCharAfterKCapitalized"
          });
        }
        else if (declarator.id.name.includes("_")) {
          context.report({
            node: declarator.id,
            messageId: "shouldNotContainUnderscore"
          });
        }
      }
    }

    return {
      "Program:exit"(program: TSESTree.Program) {
        const comments = program.comments ?? [];

        for (let index = 0; index < program.body.length; index++) {
          const firstDeclaration = getConstantDeclaration(
            program.body[index]
          );
          if (firstDeclaration === null) {
            continue;
          }

          const marker = getMarkerAbove(
            firstDeclaration.statement,
            comments
          );
          if (marker === undefined) {
            continue;
          }

          if (marker.value.trim() !== "CONSTANTS") {
            context.report({
              node: marker,
              messageId: "malformedComment"
            });
            continue;
          }

          let previousStatement = firstDeclaration.statement;
          for (let zoneIndex = index; zoneIndex < program.body.length; zoneIndex++) {
            const constant = getConstantDeclaration(
              program.body[zoneIndex]
            );
            if (
              constant === null ||
              (zoneIndex > index && isAdjacent(previousStatement, constant.statement) === false)
            ) {
              break;
            }

            validateConstant(constant);

            previousStatement = constant.statement;
          }
        }
      }
    };
  },
  name: "constants",
  meta: {
    docs: {
      description: "Enforce consistent naming conventions for marked top-level constants"
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
