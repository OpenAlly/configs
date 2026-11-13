# Oxlint Rule: `@openally/params-per-line`

This rule requires each parameter on its own line when a function, method, constructor or method signature has more than `max` parameters (default: `2`). Arrow functions are not checked.

This rule is **opt-in**: the presets do not enable it.

```ts
export default defineConfig(typescriptConfig({
  rules: {
    "@openally/params-per-line": ["error", { max: 2 }]
  }
}));
```

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `max` | `number` | `2` | Maximum number of parameters allowed to share a line |

---

## ❌ Incorrect Code Examples

```ts
function copy(source: string, destination: string, options: CopyOptions) {}

function move(
  source: string, destination: string,
  options: MoveOptions
) {}
```

## ✅ Correct Code Example

```ts
function rename(source: string, destination: string) {}

function copy(
  source: string,
  destination: string,
  options: CopyOptions
) {}

const sum = (a: number, b: number, c: number) => a + b + c;
```
