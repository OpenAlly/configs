// Import Node.js Dependencies
import path from "node:path";

// Import Third-party Dependencies
import type { TSESTree } from "@typescript-eslint/types";
import { ESLintUtils } from "@typescript-eslint/utils";

const createRule = ESLintUtils.RuleCreator(
  (name) => `https://github.com/OpenAlly/configs/tree/main/src/eslint/docs/${name}.md`
);

const kCjsExtensions = new Set([".cjs", ".cts"]);

export const rule = createRule({
  create(context) {
    const extension = path.extname(context.filename);

    if (kCjsExtensions.has(extension)) {
      return {};
    }

    return {
      "VariableDeclaration[kind=const] > VariableDeclarator:has(MemberExpression[property.name='url'] > MetaProperty)"(
        node: TSESTree.VariableDeclarator
      ) {
        if (node.id.type !== "Identifier") {
          return;
        }

        const { name } = node.id;
        if (name === "__filename") {
          context.report({
            node: node.parent,
            messageId: "preferImportMetaFilename"
          });
        }
        else if (name === "__dirname") {
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
