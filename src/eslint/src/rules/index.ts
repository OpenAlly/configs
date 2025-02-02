// Import Internal Dependencies
import possibleErrors from "./possible-errors.js";
import bestPractices from "./best-practices.js";
import ecmascript6 from "./ecmascript6.js";
import styles from "./styles.js";
import variables from "./variables.js";
import eslintv9 from "./eslintv9.js";
import typescript from "./typescript.js";
import stylistic from "./stylistic.js";
import openally from "./openally.js";

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
