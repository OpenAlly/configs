// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

// Import Internal Dependencies
import correctness from "./correctness.ts";
import pedantic from "./pedantic.ts";
import style from "./style.ts";
import restriction from "./restriction.ts";

export default {
  ...correctness,
  ...pedantic,
  ...style,
  ...restriction
} satisfies DummyRuleMap;
