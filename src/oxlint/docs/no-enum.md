# Oxlint Rule: `@openally/no-enum`

This rule forbids TypeScript `enum` declarations, including `const enum` and `declare enum`. Enums are one of the few TypeScript features that emit runtime code, so they cannot be removed by type stripping (`--experimental-strip-types`, `erasableSyntaxOnly`). Use a union of literals or an `as const` object instead.

This rule is **opt-in**: the presets do not enable it.

```ts
export default defineConfig(typescriptConfig({
  rules: {
    "@openally/no-enum": "error"
  }
}));
```

---

## ❌ Incorrect Code Examples

```ts
enum Kind {
  File,
  Directory
}

const enum Status {
  Ok = "ok",
  Error = "error"
}
```

## ✅ Correct Code Example

```ts
type Status = "ok" | "error";

const Kind = {
  File: "file",
  Directory: "directory"
} as const;
type Kind = typeof Kind[keyof typeof Kind];
```
