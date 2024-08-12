<p align="center">
  <h1 align="center">Configurations</h1>
</p>

<p align="center">
  Mono-repository for tools configuration (ESLint, TSConfig)
</p>

## Requirements
- [Node.js](https://nodejs.org/en/) version 20 or higher
- npm v7+ for [workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces)

## Available packages

Click on one of the links to access the documentation of the package:

| name | package and link |
| --- | --- |
| config.typescript | [@openally/config.typescript](./src/typescript) |
| config.eslint | [@openally/config.eslint](./src/eslint) |

These packages are available in the Node Package Repository and can be easily installed with [npm](https://docs.npmjs.com/getting-started/what-is-npm) or [yarn](https://yarnpkg.com).
```bash
$ npm i @openally/config.typescript -D
# or
$ yarn add @openally/config.typescript -D
```

## Build
To install and compile all workspaces, just run the following command at the root

```bash
$ npm ci
$ npm run build
```

## Test
Running test with npm workspace:

```bash
$ npm run test -w <workspace>
```

## Publishing package
Each packages has his own `prepublishOnly` to build TypeScript source before publishing.

```bash
$ npm publish -w <workspace>
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/fraxken"><img src="https://avatars.githubusercontent.com/u/4438263?v=4?s=100" width="100px;" alt="Thomas.G"/><br /><sub><b>Thomas.G</b></sub></a><br /><a href="https://github.com/OpenAlly/configs/commits?author=fraxken" title="Code">💻</a> <a href="#security-fraxken" title="Security">🛡️</a> <a href="https://github.com/OpenAlly/configs/commits?author=fraxken" title="Documentation">📖</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

## License
MIT
