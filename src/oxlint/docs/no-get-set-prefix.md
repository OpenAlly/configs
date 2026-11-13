# Oxlint Rule: `@openally/no-get-set-prefix`

This rule forbids class methods and interface method signatures named `getX` or `setX`. Use a `get`/`set` accessor, or name the method after what it does (`loadUser`, `findUser`, `rename`).

Not reported:

- methods with the `override` modifier (their name comes from the parent class);
- plain functions and object literal methods;
- common Web and Node.js APIs that classes implement, such as `getAttribute`, `setAttribute`, `getItem`, `setItem`, `getHeader`, `setHeader` or `setTimeout`.

This rule is **opt-in**: the presets do not enable it.

```ts
export default defineConfig(typescriptConfig({
  rules: {
    "@openally/no-get-set-prefix": ["error", { allow: ["getUser"] }]
  }
}));
```

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `allow` | `string[]` | `[]` | Method names allowed in addition to the built-in list |

---

## ❌ Incorrect Code Examples

```ts
class User {
  #name = "";

  getName() {
    return this.#name;
  }

  setName(name: string) {
    this.#name = name;
  }
}
```

## ✅ Correct Code Example

```ts
class User {
  #name = "";

  get name() {
    return this.#name;
  }

  rename(name: string) {
    this.#name = name;
  }
}
```
