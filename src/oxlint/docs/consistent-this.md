# Oxlint Rule: `@openally/consistent-this`

This rule enforces a consistent alias when capturing `this` in a variable. It replaces the ESLint core [`consistent-this`](https://eslint.org/docs/latest/rules/consistent-this) rule, which is not implemented by Oxlint.

The rule takes a single alias as option (defaults to `that`). The OpenAlly preset uses `self`.

```json
{
  "@openally/consistent-this": ["error", "self"]
}
```

---

## ❌ Incorrect Code Examples

```js
const context = this;

const self = 42;

let self;
self = foo;
```

## ✅ Correct Code Example

```js
const self = this;

let self;
self = this;
```
