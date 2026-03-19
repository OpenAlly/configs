// Import Node.js Dependencies
import { after, describe, it } from "node:test";

// Import Third-party Dependencies
import { RuleTester } from "@typescript-eslint/rule-tester";

// Import Internal Dependencies
import { rule } from "../../src/customRules/no-legacy-dirname-filename.ts";

RuleTester.afterAll = after;
RuleTester.describe = describe;
RuleTester.it = it;
RuleTester.itOnly = it.only;

const ruleTester = new RuleTester();
ruleTester.run("no-legacy-dirname-filename", rule, {
  valid: [
    {
      code: "const __dirname = import.meta.dirname;"
    },
    {
      code: "const __filename = import.meta.filename;"
    },
    {
      // CJS file should be ignored
      code: "const __filename = url.fileURLToPath(import.meta.url);",
      filename: "foo.cjs"
    },
    {
      // CTS file should be ignored
      code: "const __dirname = path.dirname(url.fileURLToPath(import.meta.url));",
      filename: "foo.cts"
    },
    {
      // Only targets __dirname/__filename declarations
      code: "const foo = { bar: path.dirname(url.fileURLToPath(import.meta.url)) };"
    }
  ],
  invalid: [
    {
      code: "const __filename = url.fileURLToPath(import.meta.url);",
      errors: [{ messageId: "preferImportMetaFilename" }]
    },
    {
      code: "const __filename = fileURLToPath(import.meta.url);",
      errors: [{ messageId: "preferImportMetaFilename" }]
    },
    {
      code: "const __dirname = path.dirname(url.fileURLToPath(import.meta.url));",
      errors: [{ messageId: "preferImportMetaDirname" }]
    },
    {
      code: "const __dirname = dirname(fileURLToPath(import.meta.url));",
      errors: [{ messageId: "preferImportMetaDirname" }]
    },
    {
      code: "const __filename = url.fileURLToPath(import.meta.url);",
      filename: "foo.mjs",
      errors: [{ messageId: "preferImportMetaFilename" }]
    },
    {
      code: "const __dirname = path.dirname(url.fileURLToPath(import.meta.url));",
      filename: "foo.ts",
      errors: [{ messageId: "preferImportMetaDirname" }]
    },
    {
      code: "const __filename = url.fileURLToPath(import.meta.url);",
      filename: "foo.mts",
      errors: [{ messageId: "preferImportMetaFilename" }]
    }
  ]
});
