// Import Third-party Dependencies
import { defineConfig } from "oxlint";

// Import Internal Dependencies
import { typescriptConfig } from "./src/index.ts";

export default defineConfig(typescriptConfig({
  ignorePatterns: ["**/fixtures"]
}));
