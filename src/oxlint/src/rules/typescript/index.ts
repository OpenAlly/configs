// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

// Import Internal Dependencies
import correctness from "./correctness.ts";
import suspicious from "./suspicious.ts";
import pedantic from "./pedantic.ts";
import style from "./style.ts";
import restriction from "./restriction.ts";
import nursery from "./nursery.ts";

export default {
  ...correctness,
  ...suspicious,
  ...pedantic,
  ...style,
  ...restriction,
  ...nursery
} satisfies DummyRuleMap;
