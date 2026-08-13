// Import Internal Dependencies
import {
  rule as importsRule
} from "./imports/index.ts";
import {
  rule as constantsRule
} from "./constants/index.ts";
import {
  rule as noLegacyDirnameFilenameRule
} from "./no-legacy-dirname-filename/index.ts";

export const rules = {
  imports: importsRule,
  constants: constantsRule,
  "no-legacy-dirname-filename": noLegacyDirnameFilenameRule
};
