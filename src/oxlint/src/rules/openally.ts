// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

export const javascript = {
  // See: https://github.com/OpenAlly/configs/blob/main/src/oxlint/docs/consistent-this.md
  "@openally/consistent-this": ["error", "self"],

  // See: https://github.com/OpenAlly/configs/blob/main/src/oxlint/docs/constants.md
  "@openally/constants": ["error"],

  // See: https://github.com/OpenAlly/configs/blob/main/src/oxlint/docs/imports.md
  "@openally/imports": ["error"],

  // See: https://github.com/OpenAlly/configs/blob/main/src/oxlint/docs/no-legacy-dirname-filename.md
  "@openally/no-legacy-dirname-filename": ["error"]
} satisfies DummyRuleMap;

export const typescript = {
  // See: https://github.com/OpenAlly/configs/blob/main/src/oxlint/docs/interface-naming.md
  "@openally/interface-naming": "error"
} satisfies DummyRuleMap;
