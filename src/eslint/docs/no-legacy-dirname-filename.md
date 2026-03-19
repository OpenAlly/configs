# ESLint Rule: `no-legacy-dirname-filename`

This rule disallows legacy `__dirname` and `__filename` ESM patterns in favor of `import.meta.dirname` and `import.meta.filename` (added in Node.js v20.11.0, v21.2.0).

---

## ❌ Incorrect Code Examples

```js
import path from "node:path";
import url from "node:url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
```

## ✅ Correct Code Example

```js
import.meta.filename;
import.meta.dirname;
```
