// Import Node.js Dependencies
import { test } from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

// CONSTANTS
const kWorkspaceDir = path.join(import.meta.dirname, "..");
const kOxlintBin = fileURLToPath(
  new URL("bin/oxlint", import.meta.resolve("oxlint/package.json"))
);

interface Diagnostic {
  message: string;
  code: string;
  severity: string;
  filename: string;
}

function lint(
  configFile: string,
  files: string[]
): Diagnostic[] {
  const { stdout, stderr } = spawnSync(
    process.execPath,
    [
      kOxlintBin,
      "--config", `test/${configFile}`,
      "--format", "json",
      ...files
    ],
    { cwd: kWorkspaceDir, encoding: "utf8" }
  );

  try {
    const { diagnostics } = JSON.parse(stdout) as { diagnostics: Diagnostic[]; };

    return diagnostics.map((diagnostic) => {
      return {
        ...diagnostic,
        filename: diagnostic.filename.replaceAll("\\", "/")
      };
    });
  }
  catch {
    throw new Error(`Unable to parse oxlint output:\n${stdout}\n${stderr}`);
  }
}

test("rules should be in sync with Oxlint and JS plugins", () => {
  const { stdout, stderr, status } = spawnSync(
    process.execPath,
    ["scripts/sync.ts"],
    { cwd: kWorkspaceDir, encoding: "utf8" }
  );

  assert.strictEqual(status, 0, `${stdout}\n${stderr}`);
});

test("should lint valid JavaScript", () => {
  const diagnostics = lint("javascript.config.ts", ["test/fixtures/pass.js"]);

  assert.deepEqual(diagnostics, []);
});

test("should lint invalid JavaScript", () => {
  const diagnostics = lint("javascript.config.ts", ["test/fixtures/fail.js"]);

  assert.strictEqual(diagnostics.length, 1);
  assert.strictEqual(diagnostics[0].code, "@stylistic(semi)");
  assert.strictEqual(diagnostics[0].severity, "error");
  assert.strictEqual(diagnostics[0].message, "Missing semicolon.");
});

test("should lint valid TypeScript", () => {
  const diagnostics = lint("typescript.config.ts", ["test/fixtures/pass.ts"]);

  assert.deepEqual(diagnostics, []);
});

test("should lint invalid TypeScript", () => {
  const diagnostics = lint("typescript.config.ts", ["test/fixtures/fail.ts"]);

  assert.strictEqual(diagnostics.length, 1);
  assert.strictEqual(diagnostics[0].code, "@stylistic(semi)");
  assert.strictEqual(diagnostics[0].severity, "error");
  assert.strictEqual(diagnostics[0].message, "Missing semicolon.");
});

test("interface naming convention should fail when using 'I' prefix", () => {
  const diagnostics = lint("typescript.config.ts", ["test/fixtures/interface-i-fail.ts"]);

  assert.strictEqual(diagnostics.length, 1);
  assert.strictEqual(diagnostics[0].code, "@openally(interface-naming)");
  assert.strictEqual(
    diagnostics[0].message,
    "Interface name `IUser` must not match the RegExp: /^I[A-Z][a-z]/u"
  );
});

test("interface naming convention should pass for 'I' prefixed acronyms", () => {
  const diagnostics = lint("typescript.config.ts", ["test/fixtures/interface-i-pass.ts"]);

  assert.deepEqual(diagnostics, []);
});

test("typescriptConfig should ignore declaration files", () => {
  const diagnostics = lint("typescript.config.ts", ["test/fixtures"]);
  const filenames = new Set(diagnostics.map((diagnostic) => diagnostic.filename));

  assert.ok(filenames.has("test/fixtures/fail.ts"));
  assert.ok(!filenames.has("test/fixtures/types.d.ts"));
});

test("typescriptConfig should merge user ignorePatterns with the default ones", () => {
  const diagnostics = lint("typescript-custom.config.ts", ["test/fixtures"]);
  const filenames = new Set(diagnostics.map((diagnostic) => diagnostic.filename));

  assert.ok(!filenames.has("test/fixtures/ignored/fail.ts"));
  assert.ok(!filenames.has("test/fixtures/types.d.ts"));
});

test("typescriptConfig user rules should take precedence over the TypeScript rules", () => {
  const diagnostics = lint("typescript-custom.config.ts", ["test/fixtures/fail.ts"]);

  assert.deepEqual(diagnostics, []);
});
