// Import Internal Dependencies
import { typescriptConfig } from "../src/index.ts";

export default typescriptConfig({
  rules: {
    "@stylistic/semi": "off"
  },
  ignorePatterns: ["**/ignored"]
});
