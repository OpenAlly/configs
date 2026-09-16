// Import Internal Dependencies
import possibleErrors from "./possible-errors.ts";
import bestPractices from "./best-practices.ts";
import ecmascript6 from "./ecmascript6.ts";
import styles from "./styles.ts";
import variables from "./variables.ts";
import eslintv9 from "./eslintv9.ts";
import typescript from "./typescript.ts";
import stylistic from "./stylistic.ts";
import openally from "./openally.ts";

export const rules: Record<string, any> = {
  ...bestPractices,
  ...possibleErrors,
  ...styles,
  ...ecmascript6,
  ...eslintv9,
  ...variables,
  ...stylistic,
  ...openally
};

export const rulesWithTS: Record<string, any> = {
  ...rules,
  ...typescript
};
