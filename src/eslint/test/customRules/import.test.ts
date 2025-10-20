// Import Node.js Dependencies
import { after, describe, it } from "node:test";

// Import Third-party Dependencies
import { RuleTester } from "@typescript-eslint/rule-tester";

// Import Internal Dependencies
import { rule } from "../../src/customRules/import.ts";

RuleTester.afterAll = after;
RuleTester.describe = describe;
RuleTester.it = it;
RuleTester.itOnly = it.only;

const ruleTester = new RuleTester();
ruleTester.run("imports", rule, {
  valid: [
    {
      code: `
      // Import Node.js Dependencies
      import fs from "node:fs";
    `
    },
    {
      code: `
      // Import Node.js Dependencies
      import fs from "node:fs";
      import path from "node:path";
    `
    },
    {
      code: `
      // Import Third-party Dependencies
      import foo from "bar";
    `
    },
    {
      code: `
      // Import Third-party Dependencies
      import foo from "bar";
      import foz from "baz";
    `
    },
    {
      code: `
      // Import Internal Dependencies
      import foo from "./bar";
    `
    },
    {
      code: `
      // Import Internal Dependencies
      import foo from "./bar";
      import foz from "./baz";
    `
    },
    {
      code: `
      // Import Node.js Dependencies
      import fs from "node:fs";

      // Import Third-party Dependencies
      import foo from "bar";

      // Import Internal Dependencies
      import foo from "./bar";
    `
    },
    {
      code: `import "dotenv/config";`
    },
    {
      code: `
      // Import Internal Dependencies
      import foo from "src/bar.js";
    `
    }
  ],
  invalid: [
    {
      code: `import fs from "fs";`,
      errors: [
        { messageId: "missingNodeProtocol" },
        { messageId: "missingNodeComment" }
      ],
      output: `import fs from "node:fs";`
    },
    {
      code: `
      // Import Third-party Dependencies
      import foo from "bar";

      // Import Node.js Dependencies
      import fs from "node:fs";
      `,
      errors: [
        { messageId: "nodeShouldBeBeforeThirdParty" }
      ]
    },
    {
      code: `
      // Import Internal Dependencies
      import foo from "./bar";

      // Import Node.js Dependencies
      import fs from "node:fs";
      `,
      errors: [
        { messageId: "nodeShouldBeBeforeInternal" }
      ]
    },
    {
      code: `import foo from "bar";`,
      errors: [
        { messageId: "missingThirdPartyComment" }
      ]
    },
    {
      code: `
      // Import Internal Dependencies
      import foo from "./bar";

      // Import Third-party Dependencies
      import from from "bar";
      `,
      errors: [
        { messageId: "thirdPartyShouldBeBeforeInternal" }
      ]
    },
    {
      code: `
      // Import Node.js Dependencies

      import fs from "node:fs";
      `,
      errors: [
        { messageId: "noSpaceBetweenComment" }
      ]
    },
    {
      code: `
      // Import Third-party Dependencies

      import foo from "bar";
      `,
      errors: [
        { messageId: "noSpaceBetweenComment" }
      ]
    },
    {
      code: `
      // Import Internal Dependencies

      import foo from "./bar";
      `,
      errors: [
        { messageId: "noSpaceBetweenComment" }
      ]
    },
    {
      code: `
      // Import Node.js Dependencies
      import fs from "node:fs";
      // Import Third-party Dependencies
      import foo from "bar";
      `,
      errors: [
        { messageId: "missingImportGroupSeparation" }
      ]
    },
    {
      code: `
      // Import Node.js Dependencies
      import fs from "node:fs";
      // Import Internal Dependencies
      import foo from "./bar";
      `,
      errors: [
        { messageId: "missingImportGroupSeparation" }
      ]
    },
    {
      code: `
      // Import Third-party Dependencies
      import foo from "foo";
      // Import Internal Dependencies
      import foo from "./bar";
      `,
      errors: [
        { messageId: "missingImportGroupSeparation" }
      ]
    },
    {
      code: `
      // Import Node.js Dependencies
      import fs from "node:fs";

      // Import Node.js Dependencies
      import path from "node:path";
      `,
      errors: [
        { messageId: "duplicateImportGroup" }
      ]
    },
    {
      code: `
      // Import Third-party Dependencies
      import foo from "foo";

      // Import Third-party Dependencies
      import bar from "bar";
      `,
      errors: [
        { messageId: "duplicateImportGroup" }
      ]
    },
    {
      code: `
      // Import Internal Dependencies
      import foo from "./foo";

      // Import Internal Dependencies
      import bar from "./bar";
      `,
      errors: [
        { messageId: "duplicateImportGroup" }
      ]
    },
    {
      code: `
      // import node.js dependencies
      import fs from "node:fs";
      `,
      errors: [
        { messageId: "malformedNodeComment" }
      ],
      output: `
      // Import Node.js Dependencies
      import fs from "node:fs";
      `
    },
    {
      code: `
      // require node.js dependency
      import fs from "node:fs";
      `,
      errors: [
        { messageId: "malformedNodeComment" }
      ],
      output: `
      // Import Node.js Dependencies
      import fs from "node:fs";
      `
    },
    {
      code: `
      // import third-party dependencies
      import foo from "foo";
      `,
      errors: [
        { messageId: "malformedThirdPartyComment" }
      ],
      output: `
      // Import Third-party Dependencies
      import foo from "foo";
      `
    },
    {
      code: `
      // require third-party dependency
      import foo from "foo";
      `,
      errors: [
        { messageId: "malformedThirdPartyComment" }
      ],
      output: `
      // Import Third-party Dependencies
      import foo from "foo";
      `
    },
    {
      code: `
      // import internal dependencies
      import foo from "./foo";
      `,
      errors: [
        { messageId: "malformedInternalComment" }
      ],
      output: `
      // Import Internal Dependencies
      import foo from "./foo";
      `
    },
    {
      code: `
      // require internals dependency
      import foo from "./foo";
      `,
      errors: [
        { messageId: "malformedInternalComment" }
      ],
      output: `
      // Import Internal Dependencies
      import foo from "./foo";
      `
    }
  ]
});
