// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

export default {
  "@openally/imports": ["error"],
  "@openally/constants": ["error"],
  "@openally/no-legacy-dirname-filename": ["error"],
  // Replaces ESLint core `consistent-this` (not implemented by Oxlint)
  "@openally/consistent-this": ["error", "self"]
} satisfies DummyRuleMap;
