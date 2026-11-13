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
import {
  rule as consistentThisRule
} from "./consistent-this/index.ts";
import {
  rule as interfaceNamingRule
} from "./interface-naming/index.ts";
import {
  rule as noEnumRule
} from "./no-enum/index.ts";
import {
  rule as noTsPrivateRule
} from "./no-ts-private/index.ts";
import {
  rule as paramsPerLineRule
} from "./params-per-line/index.ts";
import {
  rule as noGetSetPrefixRule
} from "./no-get-set-prefix/index.ts";

export const rules = {
  imports: importsRule,
  constants: constantsRule,
  "no-legacy-dirname-filename": noLegacyDirnameFilenameRule,
  "consistent-this": consistentThisRule,
  "interface-naming": interfaceNamingRule,
  // Opt-in rules (not enabled by the presets)
  "no-enum": noEnumRule,
  "no-ts-private": noTsPrivateRule,
  "params-per-line": paramsPerLineRule,
  "no-get-set-prefix": noGetSetPrefixRule
};
