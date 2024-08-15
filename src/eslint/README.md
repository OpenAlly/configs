<p align="center">
  <h1 align="center">Eslint Config</h1>
</p>

<div align="center">OpenAlly Node.js Eslint configuration (Work for both JavaScript and TypeScript projects).</div>

## Requirements
- [Node.js](https://nodejs.org/en/) v20 or higher

## Getting Started

This package is available in the Node Package Repository and can be easily installed with [npm](https://docs.npmjs.com/getting-started/what-is-npm) or [yarn](https://yarnpkg.com).

```bash
$ npm i -D @openally/config.eslint
# or
$ yarn add @openally/config.eslint -D
```

## Usage

Create a `eslint.config.mjs` file in the root of your project and extend the `@openally/eslint-config` configuration.

### TypeScript
```js
// eslint.config.mjs
import { typescriptConfig } from "@openally/config.eslint";

export default typescriptConfig({
  // Your custom configuration
});
```

### JavaScript
```js
// eslint.config.mjs
import { ESLintConfig } from "@openally/config.eslint";

export default [
  ...ESLintConfig,
  // Your custom configuration
];
```

### Globals

This package export the npm package `globals` in case you need to add global variables to your project.

For instance if you need browser globals you can add the following to your `eslint.config.mjs` file:

```js
// eslint.config.mjs
import { ESLintConfig, globals } from "@openally/config.eslint";

export default [
  ...ESLintConfig,
  {
    languageOptions: {
      globals: {
        ...globals.browser
      }
    }
  }
];
```

## License
MIT
