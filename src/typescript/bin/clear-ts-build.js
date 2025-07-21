#!/usr/bin/env node
// Import Node.js Dependencies
import { glob, rm } from "node:fs/promises";
import { parseArgs } from "node:util";

const { values } = parseArgs({
  options: {
    cwd: {
      type: "string",
      default: process.cwd(),
    }
  }
});
const { cwd } = values;

try {
  const dirs = await Array.fromAsync(
    glob("workspaces/**/dist", {
      onlyDirectories: true,
      cwd
    })
  );
  for (const dir of dirs) {
    await rm(dir, { recursive: true, force: true });
    console.log(`Removed directory ${dir}`);
  }
}
catch (err) {
  console.warn("Error removing dist directories:", err.message);
}

try {
  const files = await Array.fromAsync(
    glob("workspaces/**/tsconfig.tsbuildinfo", { cwd })
  );
  for (const file of files) {
    await rm(file, { force: true });
    console.log(`Removed file ${file}`);
  }
}
catch (err) {
  console.warn("Error removing tsconfig.tsbuildinfo files:", err.message);
}
console.log("Clean completed");
