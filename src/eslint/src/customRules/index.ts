// Import Internal Dependencies
import { rule as importsRule } from "./import.js";
import { rule as constantsRule } from "./constants.js";

export const rules = {
  imports: importsRule,
  constants: constantsRule
};
