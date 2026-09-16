// Import Internal Dependencies
import { rules } from "./customRules/index.ts";
import packageJSON from "../package.json" with { type: "json" };

/**
 * OpenAlly custom rules, loaded by Oxlint as a JS plugin.
 */
export default {
  meta: {
    name: "@openally",
    version: packageJSON.version
  },
  rules
};
