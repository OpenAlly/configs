// Import Third-party Dependencies
import { AST_NODE_TYPES, TSESTree } from "@typescript-eslint/types";
import { ESLintUtils } from "@typescript-eslint/utils";
import type { RuleContext } from "@typescript-eslint/utils/ts-eslint";
import isCoreModule from "is-core-module";

// CONSTANTS
const kImportGroup = Symbol("group");
const kNodeGroupCommentRegexp = /^\s(?:Import|Require) Node\.js Dependenc(?:y|ies)$/i;
const kFormattedNodeGroupComment = " Import Node.js Dependencies";
const kThirdPartyGroupCommentRegexp = /^\s(?:Import|Require) Third-party Dependenc(?:y|ies)$/i;
const kFormattedThirdPartyGroupComment = " Import Third-party Dependencies";
const kInternalGroupCommentRegexp = /^\s(?:Import|Require) Internals? Dependenc(?:y|ies)$/i;
const kFormattedInternalGroupComment = " Import Internal Dependencies";

type ImportDeclaration = TSESTree.ImportDeclaration & {
  [kImportGroup]: "node" | "thirdParty" | "internal";
};

function getImportGroup(importPath: string) {
  if (importPath.startsWith(".") || importPath.startsWith("/") || importPath.startsWith("src/")) {
    return "internal";
  }
  else if (isCoreModule(importPath)) {
    return "node";
  }

  return "thirdParty";
}

function nodeImportGroupComment(comment: TSESTree.Comment) {
  return kNodeGroupCommentRegexp.test(comment.value);
}

function thirdPartyImportGroupComment(comment: TSESTree.Comment) {
  return kThirdPartyGroupCommentRegexp.test(comment.value);
}

function internalImportGroupComment(comment: TSESTree.Comment) {
  return kInternalGroupCommentRegexp.test(comment.value);
}

function checkDuplicates(
  context: Readonly<RuleContext<string, unknown[]>>,
  comments: TSESTree.Comment[],
  filters: ((comment: TSESTree.Comment) => boolean)[]
) {
  const duplicated = new Map<string, TSESTree.Comment[]>();
  for (const comment of comments) {
    for (const filter of filters) {
      if (filter(comment)) {
        const filterName = filter.toString();
        if (duplicated.has(filterName)) {
          duplicated.get(filterName)!.push(comment);
        }
        else {
          duplicated.set(filterName, [comment]);
        }
      }
    }
  }
  for (const [, comments] of duplicated) {
    // Skip first comment of each group, which is the only valid one
    for (const comment of comments.slice(1)) {
      context.report({
        node: comment,
        messageId: "duplicateImportGroup"
      });
    }
  }
}

function findLastImports(imports: ImportDeclaration[]) {
  let lastPreviousNode: undefined | ImportDeclaration;
  let lastPreviousThirdParty: undefined | ImportDeclaration;
  let lastPreviousInternal: undefined | ImportDeclaration;

  for (let i = imports.length - 1; i >= 0; i--) {
    const importNode = imports[i];
    switch (importNode[kImportGroup]) {
      case "node":
        if (lastPreviousNode === void 0) {
          lastPreviousNode = importNode;
        }
        break;
      case "thirdParty":
        if (lastPreviousThirdParty === void 0) {
          lastPreviousThirdParty = importNode;
        }
        break;
      case "internal":
        if (lastPreviousInternal === void 0) {
          lastPreviousInternal = importNode;
        }
        break;
    }

    if (lastPreviousNode && lastPreviousThirdParty && lastPreviousInternal) {
      break;
    }
  }

  return {
    lastPreviousNode,
    lastPreviousThirdParty,
    lastPreviousInternal
  };
}

const createRule = ESLintUtils.RuleCreator(
  (name) => `https://github.com/OpenAlly/configs/tree/main/src/eslint/docs/${name}.md`
);

export const rule = createRule({
  create(context) {
    const previousImports: ImportDeclaration[] = [];

    return {
      Program: () => {
        previousImports.length = 0;
      },
      "Program:exit": (node) => {
        const comments = node.comments ?? [];
        const filters = [
          nodeImportGroupComment,
          thirdPartyImportGroupComment,
          internalImportGroupComment
        ];
        checkDuplicates(context, comments, filters);
      },
      ImportDeclaration(node) {
        if (node.parent.type !== AST_NODE_TYPES.Program) {
          // this is not top level import, skip.
          return;
        }
        if (node.source.value.startsWith("dotenv")) {
          // Skip dotenv imports
          return;
        }

        const leadingComments = (node.parent.comments ?? []).filter((comment) => comment.loc.start.line < node.loc.start.line);
        const importGroup = getImportGroup(node.source.value);
        const {
          lastPreviousNode,
          lastPreviousThirdParty,
          lastPreviousInternal
        } = findLastImports(previousImports);

        if (importGroup === "node") {
          if (node.source.value.startsWith("node:") === false) {
            context.report({
              node,
              messageId: "missingNodeProtocol",
              fix: (fixer) => fixer.replaceText(node.source, `"node:${node.source.value}"`)
            });
          }

          const nodeComment = leadingComments.find(nodeImportGroupComment);
          if (nodeComment === void 0 && lastPreviousNode === void 0) {
            context.report({
              node,
              messageId: "missingNodeComment"
            });
          }
          else if (nodeComment && lastPreviousNode === void 0) {
            // first Node import
            if (nodeComment.value !== kFormattedNodeGroupComment) {
              context.report({
                node: nodeComment,
                messageId: "malformedNodeComment",
                fix: (fixer) => fixer.replaceText(nodeComment, `//${kFormattedNodeGroupComment}`)
              });
            }

            const linesBetweenGroupImport = node.loc.start.line - nodeComment.loc.end.line;
            if (linesBetweenGroupImport > 1) {
              context.report({
                node,
                messageId: "noSpaceBetweenComment"
              });
            }
          }

          if (lastPreviousThirdParty) {
            context.report({
              node,
              messageId: "nodeShouldBeBeforeThirdParty"
            });
          }
          else if (lastPreviousInternal) {
            context.report({
              node,
              messageId: "nodeShouldBeBeforeInternal"
            });
          }

          previousImports.push({
            ...node,
            [kImportGroup]: "node"
          });

          return;
        }

        if (importGroup === "thirdParty") {
          const thirdPartyComment = leadingComments.find(thirdPartyImportGroupComment);

          if (thirdPartyComment === void 0 && lastPreviousThirdParty === void 0) {
            context.report({
              node,
              messageId: "missingThirdPartyComment"
            });
          }
          else if (thirdPartyComment && lastPreviousThirdParty === void 0) {
            // first third-party import
            if (thirdPartyComment.value !== kFormattedThirdPartyGroupComment) {
              context.report({
                node: thirdPartyComment,
                messageId: "malformedThirdPartyComment",
                fix: (fixer) => fixer.replaceText(thirdPartyComment, `//${kFormattedThirdPartyGroupComment}`)
              });
            }

            const linesBetweenGroupImport = node.loc.start.line - thirdPartyComment.loc.end.line;
            if (linesBetweenGroupImport > 1) {
              context.report({
                node,
                messageId: "noSpaceBetweenComment"
              });
            }

            if (lastPreviousNode) {
              const linesBetweenNodeAndThirdParty = thirdPartyComment.loc.start.line - lastPreviousNode.loc.end.line;
              if (linesBetweenNodeAndThirdParty < 2) {
                context.report({
                  node: thirdPartyComment,
                  messageId: "missingImportGroupSeparation"
                });
              }
            }
          }

          if (lastPreviousInternal) {
            context.report({
              node,
              messageId: "thirdPartyShouldBeBeforeInternal"
            });
          }

          previousImports.push({
            ...node,
            [kImportGroup]: "thirdParty"
          });

          return;
        }

        const internalComment = leadingComments.find(internalImportGroupComment);

        if (internalComment === void 0 && lastPreviousInternal === void 0) {
          context.report({
            node,
            messageId: "missingInternalComment"
          });
        }
        else if (internalComment && lastPreviousInternal === void 0) {
          // first internal import
          if (internalComment.value !== kFormattedInternalGroupComment) {
            context.report({
              node: internalComment,
              messageId: "malformedInternalComment",
              fix: (fixer) => fixer.replaceText(internalComment, `//${kFormattedInternalGroupComment}`)
            });
          }

          const linesBetweenGroupImport = node.loc.start.line - internalComment.loc.end.line;
          if (linesBetweenGroupImport > 1) {
            context.report({
              node,
              messageId: "noSpaceBetweenComment"
            });
          }

          if (lastPreviousThirdParty) {
            const linesBetweenNodeAndThirdParty = internalComment.loc.start.line - lastPreviousThirdParty.loc.end.line;
            if (linesBetweenNodeAndThirdParty < 2) {
              context.report({
                node: internalComment,
                messageId: "missingImportGroupSeparation"
              });
            }
          }
          else if (lastPreviousNode) {
            const linesBetweenNodeAndThirdParty = internalComment.loc.start.line - lastPreviousNode.loc.end.line;
            if (linesBetweenNodeAndThirdParty < 2) {
              context.report({
                node: internalComment,
                messageId: "missingImportGroupSeparation"
              });
            }
          }
        }

        previousImports.push({
          ...node,
          [kImportGroup]: "internal"
        });

        return;
      }
    };
  },
  name: "imports",
  meta: {
    docs: {
      description: "Imports should be commented and organized."
    },
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
