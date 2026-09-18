// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

// Import Internal Dependencies
import correctness from "./correctness.ts";
import suspicious from "./suspicious.ts";
import style from "./style.ts";
import restriction from "./restriction.ts";
import nursery from "./nursery.ts";

export default {
  ...correctness,
  ...suspicious,
  ...style,
  ...restriction,
  ...nursery
} satisfies DummyRuleMap;
