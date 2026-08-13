// Import Node.js Dependencies
import path from "node:path";

// Import Third-party Dependencies
import type { TSESTree } from "@typescript-eslint/types";

// Import Internal Dependencies
import { createRule } from "../ruleCreator.ts";

// CONSTANTS
const kCjsExtensions = new Set([".cjs", ".cts"]);

function isMemberExpressionNamed(
  node: TSESTree.Node,
  name: string
): node is TSESTree.MemberExpression {
  return node.type === "MemberExpression" &&
    node.computed === false &&
    node.property.type === "Identifier" &&
    node.property.name === name;
}

function isImportMetaUrl(
  node: TSESTree.Node
): node is TSESTree.MemberExpression {
  if (isMemberExpressionNamed(node, "url") === false) {
    return false;
  }

  return node.object.type === "MetaProperty" &&
    node.object.meta.name === "import" &&
    node.object.property.name === "meta";
}

function isCallNamed(
  node: TSESTree.Node,
  name: string
): node is TSESTree.CallExpression {
  return node.type === "CallExpression" && node.arguments.length === 1 && (
    (node.callee.type === "Identifier" && node.callee.name === name) ||
    isMemberExpressionNamed(node.callee, name)
  );
}

function isFileUrlToPathCall(
  node: TSESTree.Node
): node is TSESTree.CallExpression {
  return isCallNamed(node, "fileURLToPath") && isImportMetaUrl(node.arguments[0]);
}

function isDirnameFromFileUrlCall(
  node: TSESTree.Node
): node is TSESTree.CallExpression {
  return isCallNamed(node, "dirname") && isFileUrlToPathCall(node.arguments[0]);
}

export const rule = createRule({
  create(context) {
    if (kCjsExtensions.has(path.extname(context.filename))) {
      return {};
    }

    return {
      "VariableDeclaration[kind=const] > VariableDeclarator"(node: TSESTree.VariableDeclarator) {
        if (
          node.id.type !== "Identifier" ||
          node.init === null
        ) {
          return;
        }

        if (
          node.id.name === "__filename" &&
          isFileUrlToPathCall(node.init)
        ) {
          context.report({
            node: node.parent,
            messageId: "preferImportMetaFilename"
          });
        }
        else if (
          node.id.name === "__dirname" &&
          isDirnameFromFileUrlCall(node.init)
        ) {
          context.report({
            node: node.parent,
            messageId: "preferImportMetaDirname"
          });
        }
      }
    };
  },
  name: "no-legacy-dirname-filename",
  meta: {
    docs: {
      description: "Disallow legacy __dirname and __filename patterns in favor of import.meta.dirname and import.meta.filename"
    },
    messages: {
      preferImportMetaFilename: "Use 'import.meta.filename' instead of 'url.fileURLToPath(import.meta.url)'",
      preferImportMetaDirname: "Use 'import.meta.dirname' instead of 'path.dirname(url.fileURLToPath(import.meta.url))'"
    },
    type: "suggestion",
    schema: []
  },
  defaultOptions: []
});
