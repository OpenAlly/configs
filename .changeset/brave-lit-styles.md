---
"@openally/config.stylelint": major
---

Upgrade to Stylelint 18, `stylelint-config-standard` 41 and `@stylistic/stylelint-plugin` 6. `stylelint` is now a peer dependency (`^18.0.0`) that projects must install themselves, and Node.js `^22.22.2 || ^24.15.0 || >=26.0.0` is required.

Extend the `@stylistic/stylelint-plugin` recommended preset, with 2-space indentation (multi-line values not checked) and `linebreaks`, `declaration-colon-newline-after`, `value-list-comma-newline-after` and `selector-descendant-combinator-no-non-space` turned off.
