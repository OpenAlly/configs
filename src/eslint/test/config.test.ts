// Import Node.js Dependencies
import { test } from "node:test";
import assert from "node:assert/strict";

// Import Third-party Dependencies
import { ESLint, type Linter } from "eslint";

// Import Internal Dependencies
import { ESLintConfig } from "../src/index.ts";

test("should lint valid JavaScript", async() => {
  const eslint = new ESLint({
    baseConfig: ESLintConfig as Linter.Config,
    overrideConfig: {
      ignores: ["!**/fixtures"]
    }
  });
  const [result] = await eslint.lintFiles(["./test/fixtures/pass.js"]);
  assert.strictEqual(result.warningCount, 0);
  assert.strictEqual(result.errorCount, 0);
});

test("should lint invalid JavaScript", async() => {
  const eslint = new ESLint({
    baseConfig: ESLintConfig as Linter.Config,
    overrideConfig: {
      ignores: ["!**/fixtures"]
    }
  });
  const [result] = await eslint.lintFiles(["./test/fixtures/fail.js"]);

  assert.strictEqual(result.warningCount, 0);
  assert.strictEqual(result.errorCount, 1);
  assert.strictEqual(result.messages[0].message, "Missing semicolon.");
});

test("should lint valid TypeScript", async() => {
  const eslint = new ESLint({
    overrideConfig: {
      ignores: ["!**/fixtures"]
    }
  });
  const [result] = await eslint.lintFiles(["./test/fixtures/pass.ts"]);

  assert.strictEqual(result.warningCount, 0);
  assert.strictEqual(result.errorCount, 0);
});

test("should lint invalid TypeScript", async() => {
  const eslint = new ESLint({
    overrideConfig: {
      ignores: ["!**/fixtures"]
    }
  });
  const [result] = await eslint.lintFiles(["./test/fixtures/fail.ts"]);

  assert.strictEqual(result.warningCount, 0);
  assert.strictEqual(result.errorCount, 1);
  assert.strictEqual(result.messages[0].message, "Missing semicolon.");
});

test("interface naming convention should fail when using 'I' prefix", async() => {
  const eslint = new ESLint({
    overrideConfig: {
      ignores: ["!**/fixtures"]
    }
  });
  const [result] = await eslint.lintFiles(["./test/fixtures/interface-i-fail.ts"]);

  assert.strictEqual(result.warningCount, 0);
  assert.strictEqual(result.errorCount, 1);
  assert.strictEqual(result.messages[0].message, "Interface name `IUser` must not match the RegExp: /^I[A-Z][a-z]/u");
});

test("interface naming convention should pass when using 'I' prefix with more than one uppercase character", async() => {
  const eslint = new ESLint({
    overrideConfig: {
      ignores: ["!**/fixtures"]
    }
  });
  const [result] = await eslint.lintFiles(["./test/fixtures/interface-i-pass.ts"]);

  assert.strictEqual(result.warningCount, 0);
  assert.strictEqual(result.errorCount, 0);
});
