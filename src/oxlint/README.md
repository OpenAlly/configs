<p align="center">
  <h1 align="center">Oxlint Config</h1>
</p>

<div align="center">OpenAlly Node.js <a href="https://oxc.rs/docs/guide/usage/linter">Oxlint</a> configuration (works for both JavaScript and TypeScript projects).</div>

## Requirements
- [Node.js](https://nodejs.org/en/) `^20.19.0 || >=22.12.0` (same as Oxlint)
- [oxlint](https://www.npmjs.com/package/oxlint) `~1.83.0`

## Getting Started

This package is available in the Node Package Repository and can be easily installed with [npm](https://docs.npmjs.com/getting-started/what-is-npm) or [yarn](https://yarnpkg.com).

```bash
$ npm i -D oxlint @openally/config.oxlint
# or
$ yarn add oxlint @openally/config.oxlint -D
```

Oxlint is a peer dependency pinned to a minor version, because the JS plugins API used to run `@stylistic` and `@openally` rules is still alpha and not covered by semver.

## Usage

Create an `oxlint.config.ts` file in the root of your project.

### TypeScript

```ts
import { defineConfig } from "oxlint";
import { typescriptConfig } from "@openally/config.oxlint";

export default defineConfig(typescriptConfig({
  // Your custom configuration
}));
```

`typescriptConfig()` merges your configuration into a single root config:

- `rules` are applied last to `**/*.ts` files, so they take precedence over the preset.
- `ignorePatterns` are appended to the defaults (`**/*.d.ts`, `**/dist`).
- `plugins`, `jsPlugins` and `overrides` are appended.

Prefer passing your configuration to `typescriptConfig()` over `extends: [typescriptConfig()]`: Oxlint does not inherit `ignorePatterns` from extended configs, and the preset's `**/*.ts` override would take precedence over your root `rules`.

### JavaScript

```ts
import { defineConfig } from "oxlint";
import { OxlintConfig } from "@openally/config.oxlint";

export default defineConfig({
  extends: [OxlintConfig],
  // Your custom configuration
});
```

### Globals

Use Oxlint `env` or `globals` instead of the `globals` npm package:

```ts
export default defineConfig({
  extends: [OxlintConfig],
  env: {
    browser: true
  }
});
```

### OpenAlly Plugin

The OpenAlly rules are loaded automatically by the presets. The plugin is also exported as `@openally/config.oxlint/plugin` if you want to use it on its own:

```ts
export default defineConfig({
  jsPlugins: ["@openally/config.oxlint/plugin"],
  rules: {
    "@openally/imports": "error"
  }
});
```

Rules:

- [`@openally/constants`](./docs/constants.md)
- [`@openally/imports`](./docs/imports.md)
- [`@openally/no-legacy-dirname-filename`](./docs/no-legacy-dirname-filename.md)
- [`@openally/consistent-this`](./docs/consistent-this.md)
- [`@openally/interface-naming`](./docs/interface-naming.md)

## Differences with `@openally/config.eslint`

Rules come from `@openally/config.eslint`. Native Oxlint rules are used when they exist; `@stylistic` and `@openally` rules run through Oxlint JS plugins.

| ESLint rule | Oxlint |
| --- | --- |
| `consistent-this` | Replaced by `@openally/consistent-this` |
| `@typescript-eslint/naming-convention` | Replaced by `@openally/interface-naming` (TypeScript files only) |
| `consistent-return` | Not available (only as type-aware `typescript/consistent-return`) |
| `dot-notation` | Not available (only as type-aware `typescript/dot-notation`) |
| `no-invalid-this` | Not available (use TypeScript `noImplicitThis`) |
| `no-dupe-args`, `no-octal`, `no-octal-escape` | Not available (errors in strict mode / ES modules) |
| `no-undef-init` | Not available (`unicorn/no-useless-undefined` covers a broader case) |

Other differences:

- `no-undef`, `no-useless-assignment` and `no-unreachable-loop` are Oxlint nursery rules. They are enabled by name only.
- Oxlint detects the source type from the file extension and content. The ESLint JavaScript preset forced `sourceType: "script"`, and the TypeScript preset forced `"module"`. `no-implicit-globals` is disabled for TypeScript files to keep the ESLint behavior.
- Oxlint's default `correctness` category is disabled so that only the rules listed by this package are enabled.

## License
MIT
