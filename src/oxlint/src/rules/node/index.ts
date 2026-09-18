// Import Third-party Dependencies
import type { DummyRuleMap } from "oxlint";

// Import Internal Dependencies
import style from "./style.ts";
import restriction from "./restriction.ts";

export default {
  ...style,
  ...restriction
} satisfies DummyRuleMap;
