# Oxlint Rule: `@openally/interface-naming`

This rule enforces PascalCase interface names and forbids the Hungarian `I` prefix (names matching `/^I[A-Z][a-z]/u`). It replaces the following `@typescript-eslint/naming-convention` configuration, which cannot run in Oxlint:

```json
{
  "selector": "interface",
  "format": ["PascalCase"],
  "custom": {
    "regex": "^I[A-Z][a-z]",
    "match": false
  }
}
```

---

## ❌ Incorrect Code Examples

```ts
interface IUser {
  name: string;
}

interface user_options {
  name: string;
}
```

## ✅ Correct Code Example

```ts
interface User {
  name: string;
}

// Acronyms starting with I are allowed
interface ISAOptions {
  name: string;
}
```
