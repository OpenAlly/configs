# ESLint Rule: `@openally/constants`

This rule enforce the naming convention for top-level constants.

When top-level constants are preceded by the `// CONSTANTS`, then the conventions get applied.

## ✅ Correct Code Examples
```js
// CONSTANTS
const kFoo = "foo";
export const FOO_BAR = "foo-bar";
```

```js
// no error because `CONSTANTS` comment is not present
const foo = "foo";
```

```js
// double underscore is allowed, usefull for __dirname, __filename

// CONSTANTS
const __foo = "foo";
```

## ❌ Incorrect Code Examples

### Malformed `CONSTANTS` comment

```js
// CONSTANT
const kFoo = "foo";
```

**Error:** `Malformed CONSTANTS comment`

### Missing `k` prefix

```js
// CONSTANTS
const foo = "foo";
```

**Error:** `Top level constants should start with 'k' prefix`

### Missing uppercase after `k` prefix

```js
// CONSTANTS
const kfoo = "foo";
```

**Error:** `First character after 'k' prefix should be uppercase`

### Should not contain underscore

```js
// CONSTANTS
const kFoo_bar = "foo";
```

**Error:** `Top level constants should not contain underscore`

### Exported constant should be CONSTANT_CASE

```js
// CONSTANTS
export const kFooBar = "foo-bar";
```

**Error:** `Exported constant should be CONSTANT_CASE`
