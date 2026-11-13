# Oxlint Rule: `@openally/no-ts-private`

This rule forbids the TypeScript `private` modifier on class properties, methods and accessors. Use ECMAScript `#private` members instead: they are enforced at runtime, not only by the type checker.

The following are still allowed, because they have no `#private` equivalent:

- `private constructor()`
- `private declare` fields
- constructor parameter properties (see `typescript/parameter-properties`, enabled by the TypeScript preset)

This rule is **opt-in**: the presets do not enable it.

```ts
export default defineConfig(typescriptConfig({
  rules: {
    "@openally/no-ts-private": "error"
  }
}));
```

---

## ❌ Incorrect Code Examples

```ts
class Counter {
  private count = 0;

  private increment() {
    this.count++;
  }
}
```

## ✅ Correct Code Example

```ts
class Counter {
  #count = 0;

  #increment() {
    this.#count++;
  }
}

class Singleton {
  private constructor() {}
}
```
