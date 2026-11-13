// Import Node.js Dependencies
import { describe, test } from "node:test";
import assert from "node:assert/strict";
import path from "node:path";

// Import Third-party Dependencies
import stylelint, { type LintResult } from "stylelint";

// Import Internal Dependencies
import config from "../src/index.ts";

// CONSTANTS
const kPackageDir = path.join(import.meta.dirname, "..");

async function lint(
  code: string,
  filename: string
): Promise<LintResult> {
  const { results: [result] } = await stylelint.lint({
    code,
    codeFilename: path.join(kPackageDir, filename),
    config,
    // Resolve `extends`, `plugins` and `customSyntax` from this package
    configBasedir: kPackageDir
  });

  return result;
}

function rulesOf(result: LintResult): string[] {
  return result.warnings.map((warning) => warning.rule);
}

describe("config", () => {
  test("should load without invalid options or deprecations", async() => {
    const result = await lint("a {\n  color: red;\n}\n", "src/main.css");

    assert.deepEqual(result.invalidOptionWarnings, []);
    assert.deepEqual(result.deprecations, []);
    assert.deepEqual(result.warnings, []);
  });
});

describe("CSS", () => {
  test("should accept valid stylesheet", async() => {
    const code = [
      ":root {",
      "  --main-color: #f00;",
      "}",
      "",
      ".button {",
      "  color: var(--main-color);",
      "}",
      "",
      ".button:hover {",
      "  color: rgb(0 0 0 / 50%);",
      "}",
      ""
    ].join("\n");

    const result = await lint(code, "src/main.css");
    assert.deepEqual(rulesOf(result), []);
  });

  test("should require a space before block opening brace", async() => {
    const result = await lint("a{\n  color: red;\n}\n", "src/main.css");

    assert.deepEqual(rulesOf(result), ["@stylistic/block-opening-brace-space-before"]);
  });

  test("should report duplicate selectors", async() => {
    const code = [
      "a {",
      "  color: red;",
      "}",
      "",
      "a {",
      "  margin: 0;",
      "}",
      ""
    ].join("\n");

    const result = await lint(code, "src/main.css");
    assert.deepEqual(rulesOf(result), ["no-duplicate-selectors"]);
  });

  test("should not report descending specificity", async() => {
    const code = [
      "#container a {",
      "  color: red;",
      "}",
      "",
      "a {",
      "  color: blue;",
      "}",
      ""
    ].join("\n");

    const result = await lint(code, "src/main.css");
    assert.deepEqual(rulesOf(result), []);
  });

  test("should extend stylelint-config-standard", async() => {
    const code = [
      ".FooBar {",
      "  color: #ffffff;",
      "}",
      ""
    ].join("\n");

    const result = await lint(code, "src/main.css");
    assert.deepEqual(
      rulesOf(result).sort(),
      ["color-hex-length", "selector-class-pattern"]
    );
  });

  test("should enforce @stylistic recommended rules", async() => {
    const code = [
      "a {",
      "    color: red;",
      "  opacity: 0.50;",
      "}",
      ""
    ].join("\n");

    const result = await lint(code, "src/main.css");
    assert.deepEqual(
      rulesOf(result).sort(),
      ["@stylistic/indentation", "@stylistic/number-no-trailing-zeros"]
    );
  });

  test("should allow multi-line values starting on the declaration line", async() => {
    const code = [
      "a {",
      "  max-height: min(",
      "    100%,",
      "    calc(100vh - 16px)",
      "  );",
      "  font-family: \"Roboto Mono\", ui-monospace, sfmono-regular,",
      "    consolas, monospace;",
      "  padding-inline: calc(",
      "      var(--gutter, 0px) +",
      "        var(--inset, 0px)",
      "    )",
      "    var(--inset, 0);",
      "  transition:",
      "    opacity var(--duration) var(--easing)",
      "      var(--delay),",
      "    visibility 0s linear;",
      "}",
      ""
    ].join("\n");

    const result = await lint(code, "src/main.css");
    assert.deepEqual(rulesOf(result), []);
  });

  test("should not enforce line endings", async() => {
    const result = await lint("a {\r\n  color: red;\r\n}\r\n", "src/main.css");

    assert.deepEqual(rulesOf(result), []);
  });

  test("should report empty stylesheet", async() => {
    const result = await lint("", "src/main.css");

    assert.deepEqual(rulesOf(result), ["no-empty-source"]);
  });
});

describe("Lit (postcss-lit)", () => {
  test("should accept valid css tagged template", async() => {
    const code = [
      "import { css } from \"lit\";",
      "",
      "export const styles = css`",
      "  :host {",
      "    display: block;",
      "  }",
      "",
      "  .label {",
      "    color: var(--label-color, #000);",
      "  }",
      "`;",
      ""
    ].join("\n");

    const result = await lint(code, "src/Component.ts");
    assert.deepEqual(rulesOf(result), []);
  });

  test("should report errors inside css tagged template", async() => {
    const code = [
      "import { css } from \"lit\";",
      "",
      "export const styles = css`",
      "  .label{",
      "    color: #ffffff;",
      "  }",
      "`;",
      ""
    ].join("\n");

    const result = await lint(code, "src/Component.ts");
    assert.deepEqual(
      rulesOf(result).sort(),
      ["@stylistic/block-opening-brace-space-before", "color-hex-length"]
    );
    for (const warning of result.warnings) {
      assert.ok(warning.line >= 4 && warning.line <= 5, `unexpected line ${warning.line}`);
    }
  });

  test("should lint .js files with postcss-lit", async() => {
    const code = [
      "import { css } from \"lit\";",
      "",
      "export const styles = css`",
      "  .label {",
      "    color: #ffffff;",
      "  }",
      "`;",
      ""
    ].join("\n");

    const result = await lint(code, "src/Component.js");
    assert.deepEqual(rulesOf(result), ["color-hex-length"]);
  });

  test("should not report files without any styles", async() => {
    const code = "export function sum(a: number, b: number) {\n  return a + b;\n}\n";

    const result = await lint(code, "src/utils.ts");
    assert.deepEqual(rulesOf(result), []);
  });
});

describe("ignoreFiles", () => {
  for (const filename of ["dist/main.css", "coverage/base.css", "packages/foo/dist/index.js"]) {
    test(`should ignore ${filename}`, async() => {
      const result = await lint("a{color:#ffffff}", filename);

      assert.strictEqual(result.ignored, true);
      assert.deepEqual(result.warnings, []);
    });
  }
});
