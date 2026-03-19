// Import Internal Dependencies
import { rule as importsRule } from "./import.ts";
import { rule as constantsRule } from "./constants.ts";
import { rule as noLegacyDirnameFilenameRule } from "./no-legacy-dirname-filename.ts";

export const rules = {
  imports: importsRule,
  constants: constantsRule,
  "no-legacy-dirname-filename": noLegacyDirnameFilenameRule
};
