// Import Third-party Dependencies
import type { TSESTree } from "@typescript-eslint/types";

// Import Internal Dependencies
import { createRule } from "../ruleCreator.ts";

type Options = [{ max?: number; }?];

type Signature =
  | TSESTree.FunctionDeclaration
  | TSESTree.FunctionExpression
  | TSESTree.TSDeclareFunction
  | TSESTree.TSEmptyBodyFunctionExpression
  | TSESTree.TSMethodSignature;

// CONSTANTS
const kDefaultMax = 2;

export const rule = createRule<Options, "sharedLine">({
  create(context, [{ max = kDefaultMax } = {}]) {
    function check(
      node: Signature
    ) {
      const { params } = node;
      if (params.length <= max) {
        return;
      }

      const lines = new Set(params.map((param) => param.loc.start.line));
      if (lines.size < params.length) {
        context.report({
          node,
          messageId: "sharedLine",
          data: {
            count: String(params.length),
            max: String(max)
          }
        });
      }
    }

    return {
      FunctionDeclaration: check,
      FunctionExpression: check,
      TSDeclareFunction: check,
      TSEmptyBodyFunctionExpression: check,
      TSMethodSignature: check
    };
  },
  name: "params-per-line",
  meta: {
    docs: {
      description: "Require each parameter on its own line when a signature has more than `max` parameters"
    },
    messages: {
      sharedLine: "This signature has {{count}} parameters (more than {{max}}): put each one on its own line"
    },
    type: "layout",
    schema: [
      {
        type: "object",
        properties: {
          max: {
            type: "integer",
            minimum: 0
          }
        },
        additionalProperties: false
      }
    ]
  },
  defaultOptions: [{ max: kDefaultMax }]
});
