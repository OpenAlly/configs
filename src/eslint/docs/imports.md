# ESLint Rule: `@openally/imports`

This rule enforces the organization and proper commenting of import statements.
Imports must be grouped into three categories and each group should be preceded by the corresponding comment:

- **Node.js Dependencies** → `// Import Node.js Dependencies`
- **Third-party Dependencies** → `// Import Third-party Dependencies`
- **Internal Dependencies** → `// Import Internal Dependencies`

Additionally, the rule ensures that Node.js imports come first, followed by third-party imports, and then internal imports.

---

## ✅ Correct Code Example
```js
// Import Node.js Dependencies
import fs from "node:fs";
import path from "node:path";

// Import Third-party Dependencies
import fastify from "fastify";

// Import Internal Dependencies
import myModule from "./myModule";
import helper from "../utils/helper";
```

## ❌ Incorrect Code Examples

### Missing `node:` Protocol

```js
import fs from "fs";
```
**Error:** `Import should start with 'node:'`

> [!NOTE]
> This rule automatically fixes this issue by adding the missing `node:` protocol.

### Missing Comment

```js
import fastify from "fastify";
```
**Error:** `Missing 'Import Third-party Dependencies' comment`

### Incorrect Order

```js
// Import Third-party Dependencies
import fastify from "fastify";

// Import Node.js Dependencies
import fs from "node:fs";
```
**Error:** `Node.js imports should be before third-party imports`

### Space between Comment and Import

```js
// Import Node.js Dependencies

import fs from "node:fs";
```
**Error:** `No space between comment and import`

### Missing separation between import groups

```js
// Import Node.js Dependencies
import fs from "node:fs";
// Import Third-party Dependencies
import fastify from "fastify";
```
**Error:** `Missing separation between import groups`
