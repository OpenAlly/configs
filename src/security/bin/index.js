#!/usr/bin/env node
// Import Node.js Dependencies
import { parseArgs } from "node:util";

// Import Internal Dependencies
import {
  lintLockfiles,
  detectLocalLockfiles
} from "../src/locklint.js";

const { values } = parseArgs({
  options: {
    cwd: {
      type: "string",
      default: process.cwd(),
    }
  }
});
const { cwd } = values;

console.log("\n🔐 OpenAlly Secure Scan\n");

const exitCode = lintPackageLock(cwd);
console.log("");
process.exit(exitCode);

function lintPackageLock(location) {
  console.log(`🔒 Scanning lockfile in ${location}`);
  const lockfilePath = detectLocalLockfiles(location);
  if (lockfilePath === null) {
    console.log("▶️ No lockfile found in the specified directory.");

    return 0;
  }
  console.log(`🔍 Found lockfile: ${lockfilePath}`);

  const { https, host } = lintLockfiles(lockfilePath);
  if (https && host) {
    console.log("✅ Lockfile is secure.");

    return 0;
  }

  if (!https) {
    console.log("❌ Some dependencies in the lockfile are not fetched over HTTPS.");
  }

  if (!host) {
    console.log("❌ Some dependencies in the lockfile are fetched from untrusted hosts.");
  }

  return 1;
}
