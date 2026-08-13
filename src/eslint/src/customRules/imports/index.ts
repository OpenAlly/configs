// Import Third-party Dependencies
import {
  AST_NODE_TYPES,
  type TSESTree
} from "@typescript-eslint/types";
import isCoreModule from "is-core-module";

// Import Internal Dependencies
import { createRule } from "../ruleCreator.ts";

type ImportGroup = "node" | "thirdParty" | "internal";

type GroupDefinition = {
  formattedComment: string;
  malformedMessageId: "malformedNodeComment" | "malformedThirdPartyComment" | "malformedInternalComment";
  matchesComment: (comment: TSESTree.Comment) => boolean;
  missingMessageId: "missingNodeComment" | "missingThirdPartyComment" | "missingInternalComment";
  rank: number;
};

const kGroups: Record<ImportGroup, GroupDefinition> = {
  node: {
    formattedComment: " Import Node.js Dependencies",
    malformedMessageId: "malformedNodeComment",
    matchesComment: (comment) => /^\s(?:Import|Require) Node\.js Dependenc(?:y|ies)$/i.test(comment.value),
    missingMessageId: "missingNodeComment",
    rank: 0
  },
  thirdParty: {
    formattedComment: " Import Third-party Dependencies",
    malformedMessageId: "malformedThirdPartyComment",
    matchesComment: (comment) => /^\s(?:Import|Require) Third-party Dependenc(?:y|ies)$/i.test(comment.value),
    missingMessageId: "missingThirdPartyComment",
    rank: 1
  },
  internal: {
    formattedComment: " Import Internal Dependencies",
    malformedMessageId: "malformedInternalComment",
    matchesComment: (comment) => /^\s(?:Import|Require) Internals? Dependenc(?:y|ies)$/i.test(comment.value),
    missingMessageId: "missingInternalComment",
    rank: 2
  }
};

function getImportGroup(
  importPath: string
): ImportGroup {
  if (
    importPath.startsWith(".") ||
    importPath.startsWith("/") ||
    importPath.startsWith("src/") ||
    importPath.startsWith("#")
  ) {
    return "internal";
  }

  return isCoreModule(importPath) ? "node" : "thirdParty";
}

function isLintedImport(
  node: TSESTree.ProgramStatement
): node is TSESTree.ImportDeclaration {
  return node.type === AST_NODE_TYPES.ImportDeclaration && node.source.value !== "dotenv/config";
}

function getGroupComment({
  group,
  previousStatement,
  importNode,
  comments
}: {
  comments: TSESTree.Comment[];
  group: ImportGroup;
  importNode: TSESTree.ImportDeclaration;
  previousStatement: TSESTree.ProgramStatement | undefined;
}) {
  return comments.findLast(function matchesGroupComment(comment) {
    return (
      kGroups[group].matchesComment(comment) &&
      comment.loc.end.line < importNode.loc.start.line &&
      (previousStatement === undefined || comment.loc.start.line > previousStatement.loc.end.line)
    );
  });
}

function getOrderMessageId(
  group: ImportGroup,
  highestGroup: ImportGroup
) {
  if (group === "node") {
    return highestGroup === "thirdParty" ?
      "nodeShouldBeBeforeThirdParty" :
      "nodeShouldBeBeforeInternal";
  }

  return "thirdPartyShouldBeBeforeInternal";
}

export const rule = createRule({
  create(context) {
    return {
      "Program:exit"(program: TSESTree.Program) {
        const comments = program.comments ?? [];
        const imports = program.body.filter(isLintedImport);
        const seenGroups = new Set<ImportGroup>();
        const seenComments = new Set<TSESTree.Comment>();
        let highestGroup: ImportGroup | undefined;

        for (const importNode of imports) {
          const group = getImportGroup(importNode.source.value);
          const statementIndex = program.body.indexOf(importNode);
          const previousStatement = statementIndex > 0 ? program.body[statementIndex - 1] : undefined;
          const groupComment = getGroupComment({
            group,
            previousStatement,
            importNode,
            comments
          });

          if (
            group === "node" &&
            importNode.source.value.startsWith("node:") === false
          ) {
            context.report({
              node: importNode,
              messageId: "missingNodeProtocol",
              fix: (fixer) => fixer.replaceText(importNode.source, `"node:${importNode.source.value}"`)
            });
          }

          if (
            seenGroups.has(group) === false &&
            groupComment === undefined
          ) {
            context.report({
              node: importNode,
              messageId: kGroups[group].missingMessageId
            });
          }

          if (
            groupComment &&
            seenComments.has(groupComment) === false
          ) {
            seenComments.add(groupComment);

            if (seenGroups.has(group)) {
              context.report({
                node: groupComment,
                messageId: "duplicateImportGroup"
              });
            }

            if (groupComment.value !== kGroups[group].formattedComment) {
              context.report({
                node: groupComment,
                messageId: kGroups[group].malformedMessageId,
                fix: (fixer) => fixer.replaceText(groupComment, `//${kGroups[group].formattedComment}`)
              });
            }

            const lastCommentBeforeImport = comments.findLast(
              (comment) => comment.loc.start.line > groupComment.loc.end.line && comment.loc.end.line < importNode.loc.start.line
            ) ?? groupComment;
            if (importNode.loc.start.line - lastCommentBeforeImport.loc.end.line > 1) {
              context.report({
                node: importNode,
                messageId: "noSpaceBetweenComment"
              });
            }

            if (
              previousStatement?.type === AST_NODE_TYPES.ImportDeclaration &&
              groupComment.loc.start.line - previousStatement.loc.end.line < 2
            ) {
              context.report({
                node: groupComment,
                messageId: "missingImportGroupSeparation"
              });
            }
          }

          if (
            highestGroup &&
            kGroups[group].rank < kGroups[highestGroup].rank
          ) {
            context.report({
              node: importNode,
              messageId: getOrderMessageId(group, highestGroup)
            });
          }

          if (
            highestGroup === undefined ||
            kGroups[group].rank > kGroups[highestGroup].rank
          ) {
            highestGroup = group;
          }
          seenGroups.add(group);
        }
      }
    };
  },
  name: "imports",
  meta: {
    docs: { description: "Imports should be commented and organized." },
    messages: {
      missingNodeProtocol: "Import should start with 'node:'",
      missingNodeComment: "Missing 'Import Node.js Dependencies' comment",
      nodeShouldBeBeforeThirdParty: "Node.js imports should be before third-party imports",
      nodeShouldBeBeforeInternal: "Node.js imports should be before internal imports",
      missingThirdPartyComment: "Missing 'Import Third-party Dependencies' comment",
      thirdPartyShouldBeBeforeInternal: "Third-party imports should be before internal imports",
      missingInternalComment: "Missing 'Import Internal Dependencies' comment",
      noSpaceBetweenComment: "No space between comment and import",
      missingImportGroupSeparation: "Missing separation between import groups",
      duplicateImportGroup: "Only one group comment is allowed",
      malformedNodeComment: "Malformed 'Import Node.js Dependencies' comment",
      malformedThirdPartyComment: "Malformed 'Import Third-party Dependencies' comment",
      malformedInternalComment: "Malformed 'Import Internal Dependencies' comment"
    },
    type: "suggestion",
    schema: [],
    fixable: "code"
  },
  defaultOptions: []
});
