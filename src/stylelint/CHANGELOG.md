# @openally/config.stylelint

## 2.0.0

### Major Changes

- [#219](https://github.com/OpenAlly/configs/pull/219) [`e5ef8d3`](https://github.com/OpenAlly/configs/commit/e5ef8d34a9420758b8cd2159e38cfa33228f85fe) Thanks [@fraxken](https://github.com/fraxken)! - Upgrade to Stylelint 18, `stylelint-config-standard` 41 and `@stylistic/stylelint-plugin` 6. `stylelint` is now a peer dependency (`^18.0.0`) that projects must install themselves, and Node.js `^22.22.2 || ^24.15.0 || >=26.0.0` is required.
  
  Extend the `@stylistic/stylelint-plugin` recommended preset, with 2-space indentation (multi-line values not checked) and `linebreaks`, `declaration-colon-newline-after`, `value-list-comma-newline-after` and `selector-descendant-combinator-no-non-space` turned off.

## 1.0.2

### Patch Changes

- [#204](https://github.com/OpenAlly/configs/pull/204) [`619e99b`](https://github.com/OpenAlly/configs/commit/619e99be29e267c2e8d7c5f90f5e325ce6757378) Thanks [@fraxken](https://github.com/fraxken)! - Add missing tsconfig to build ./dist before publishing

## 1.0.1

### Patch Changes

- [#202](https://github.com/OpenAlly/configs/pull/202) [`cc38e32`](https://github.com/OpenAlly/configs/commit/cc38e320cef81079fed6a817873a692aed2d35b4) Thanks [@fraxken](https://github.com/fraxken)! - Add no-duplicate-selectors to stylelint rules
