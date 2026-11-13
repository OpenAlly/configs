// Import Third-party Dependencies
import type { TSESTree } from "@typescript-eslint/types";

// Import Internal Dependencies
import { createRule } from "../ruleCreator.ts";

type Options = [{ allow?: string[]; }?];

// CONSTANTS
const kAccessorPrefix = /^(?:get|set)[A-Z0-9_]/u;

/**
 * Web and Node.js APIs that classes commonly implement (fakes, adapters, polyfills).
 */
const kDefaultAllowed = [
  "getAttribute",
  "getBoundingClientRect",
  "getClientRects",
  "getComputedStyle",
  "getContext",
  "getHeader",
  "getItem",
  "getPropertyValue",
  "getRootNode",
  "setAttribute",
  "setEncoding",
  "setHeader",
  "setItem",
  "setPointerCapture",
  "setProperty",
  "setTimeout"
];

export const rule = createRule<Options, "prefix">({
  create(context, [{ allow = [] } = {}]) {
    const allowed = new Set([...kDefaultAllowed, ...allow]);

    function check(
      key: TSESTree.Node
    ) {
      if (
        key.type === "Identifier" &&
        kAccessorPrefix.test(key.name) &&
        !allowed.has(key.name)
      ) {
        context.report({
          node: key,
          messageId: "prefix",
          data: { name: key.name }
        });
      }
    }

    return {
      MethodDefinition(node: TSESTree.MethodDefinition) {
        // Overridden methods are named by the parent class
        if (node.kind === "method" && !node.override) {
          check(node.key);
        }
      },
      TSMethodSignature(node: TSESTree.TSMethodSignature) {
        if (node.kind === "method") {
          check(node.key);
        }
      }
    };
  },
  name: "no-get-set-prefix",
  meta: {
    docs: {
      description: "Disallow `get`/`set` prefixed methods in favor of accessors or intent-revealing names"
    },
    messages: {
      prefix: "`{{name}}`: use a getter/setter or name the method after what it does"
    },
    type: "suggestion",
    schema: [
      {
        type: "object",
        properties: {
          allow: {
            type: "array",
            items: {
              type: "string"
            },
            uniqueItems: true
          }
        },
        additionalProperties: false
      }
    ]
  },
  defaultOptions: [{ allow: [] }]
});
