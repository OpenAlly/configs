// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

// Import Internal Dependencies
import correctness from "./correctness.ts";
import suspicious from "./suspicious.ts";
import pedantic from "./pedantic.ts";
import perf from "./perf.ts";
import restriction from "./restriction.ts";

export default {
  ...correctness,
  ...suspicious,
  ...pedantic,
  ...perf,
  ...restriction
} satisfies DummyRuleMap;
