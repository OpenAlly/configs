// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

// Import Internal Dependencies
import eslint from "./eslint/index.ts";
import typescript from "./typescript/index.ts";
import unicorn from "./unicorn/index.ts";
import oxc from "./oxc/index.ts";
import importRules from "./import/index.ts";
import node from "./node/index.ts";
import promise from "./promise/index.ts";
import jsdoc from "./jsdoc/index.ts";
import stylistic from "./stylistic.ts";
import * as openally from "./openally.ts";

export const rules: DummyRuleMap = {
  ...eslint,
  ...unicorn,
  ...oxc,
  ...importRules,
  ...node,
  ...promise,
  ...jsdoc,
  ...stylistic,
  ...openally.javascript
};

export const rulesWithTS: DummyRuleMap = {
  ...rules,
  ...typescript,
  ...openally.typescript
};
