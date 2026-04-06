/* eslint-disable no-empty */
// Import Node.js Dependencies
import path from "node:path";
import fs from "node:fs";

// Import Third-party Dependencies
import {
  ParseLockfile,
  ValidateHttps,
  ValidateHost
} from "lockfile-lint-api";

export function lintLockfiles(
  lockfilePath
) {
  const parser = new ParseLockfile({
    lockfilePath
  });
  const lockFile = parser.parseSync();
  const validatorOptions = {
    packages: lockFile.object
  };

  let https = false;
  let host = false;

  try {
    const { type } = new ValidateHttps(validatorOptions)
      .validate();

    https = type === "success";
  }
  catch {};

  try {
    const { type } = new ValidateHost(validatorOptions)
      .validate(["npm", "yarn"]);

    host = type === "success";
  }
  catch {};

  return {
    https,
    host
  }
}

export function detectLocalLockfiles(
  location
) {
  const npmLockfile = path.resolve(location, "package-lock.json");
  
  if (fs.existsSync(npmLockfile)) {
    return npmLockfile;
  }

  const yarnLockfile = path.resolve(location, "yarn.lock");
  if (fs.existsSync(yarnLockfile)) {
    return yarnLockfile;
  }
  
  // No lockfile found or not supported
  return null;
}
