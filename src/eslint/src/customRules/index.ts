// Import Internal Dependencies
import { rule as importsRule } from "./import.ts";
import { rule as constantsRule } from "./constants.ts";

export const rules = {
  imports: importsRule,
  constants: constantsRule
};
