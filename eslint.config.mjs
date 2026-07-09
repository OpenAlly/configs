import { typescriptConfig } from "@openally/config.eslint";

export default typescriptConfig({
  rules: {
    "no-undef": "off"
  },
  ignores: ["**/fixtures"]
});
