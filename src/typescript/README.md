<p align="center">
  <h1 align="center">TypeScript Config</h1>
</p>

<div align="center">OpenAlly TypeScript CJS & ESM configurations.</div>

## Getting Started

This package is available in the Node Package Repository and can be easily installed with [npm](https://docs.npmjs.com/getting-started/what-is-npm) or [yarn](https://yarnpkg.com).

```bash
$ npm i -D @openally/config.typescript
# or
$ yarn add @openally/config.typescript -D
```

## Usage

```json
{
  "extends": "@openally/config.typescript/cjs",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "./src"
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}

```

Use either **cjs** or **esm**

```json
{
  "exports": {
    "./esm": "./src/esm/tsconfig.json",
    "./cjs": "./src/cjs/tsconfig.json"
  }
}
```

> [!NOTE]
> The original inspiration for those configurations is [The TSConfig Cheat Sheet
](https://www.totaltypescript.com/tsconfig-cheat-sheet) by Matt Pocock.


## License
MIT
