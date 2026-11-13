<p align="center">
  <h1 align="center">Stylelint Config</h1>
</p>

<div align="center">OpenAlly front-end Stylelint configuration (CSS and Lit.js)</div>

## Requirements
- [Node.js](https://nodejs.org/en/) `^22.22.2`, `^24.15.0` or `>=26.0.0`
- [Stylelint](https://stylelint.io/) v18 (peer dependency)

## Getting Started

This package is available in the Node Package Repository and can be easily installed with [npm](https://docs.npmjs.com/getting-started/what-is-npm) or [yarn](https://yarnpkg.com).

```bash
$ npm i -D stylelint @openally/config.stylelint
# or
$ yarn add stylelint @openally/config.stylelint -D
```

## Usage

Create a `stylelint.config.mjs` file in the root of your project and extend the `@openally/config.stylelint` configuration.

```js
/**
 * @type {import("stylelint").Config}
 */
export default {
  extends: ["@openally/config.stylelint"]
};
```

Then lint both your stylesheets and your Lit components:

```bash
$ npx stylelint "src/**/*.ts" "public/**/*.css" --cache
```

## What's included

- [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) as the base.
- The [@stylistic/stylelint-plugin](https://github.com/stylelint-stylistic/stylelint-stylistic) recommended preset for formatting, with these changes:
  - `@stylistic/indentation`: 2 spaces instead of tabs. Lines that continue a multi-line value (`calc()`, gradients, transitions) are not checked, so they can be aligned by hand.
  - `@stylistic/linebreaks`: off. Git normalizes line endings (`.gitattributes`).
  - `@stylistic/declaration-colon-newline-after`: off, so a multi-line value can start on the property line (`max-height: min(`).
  - `@stylistic/value-list-comma-newline-after`: off, so a long list such as `font-family` can wrap with several items per line.
  - `@stylistic/selector-descendant-combinator-no-non-space`: off, because it treats a line break in a long selector as an error and joins the lines when fixing.
- `no-duplicate-selectors` enabled, `no-descending-specificity` disabled (too noisy with Shadow DOM scoped styles).
- `**/*.ts` and `**/*.js` files are parsed with [postcss-lit](https://github.com/43081j/postcss-lit), so styles inside `` css`...` `` tagged templates are linted. `no-empty-source` is disabled for these files, since most of them contain no styles.
- `**/dist/**` and `**/coverage/**` are ignored.

> [!NOTE]
> postcss-lit skips templates it cannot interpret, such as one made only of interpolations (`` css`${a}${b}` ``), and prints a warning. Add a `// postcss-lit-disable-next-line` comment above such a template to silence it.

> [!WARNING]
> With postcss-lit 1.4.1, `stylelint --fix` rewrites every Lit file it reads, even ones with no errors. It can leave a placeholder such as `POSTCSS_LIT_1` in place of an interpolation (when a custom property value holds two or more `${}`), add spaces to the blank line before the closing backtick, or leave a stray `\r` in CRLF files. Run `--fix` on an LF working tree and review the diff before committing.

## License
MIT
