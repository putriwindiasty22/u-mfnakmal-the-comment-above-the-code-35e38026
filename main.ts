// The Comment Above the Code — make.fun entry
// u-mfnakmal-the-comment-above-the-code-35e38026
//
// Writes one line — the comment a developer left above fragile
// production code, funny because it is true — to /output/entry.txt.
// The file holds exactly the line, no trailing newline, nothing else.

import { mkdirSync, writeFileSync } from "node:fs";

// The comment. The code only works because of a bug in billing,
// and the bug and the feature hold each other hostage —
// so nobody fixes anything.
const LINE =
  "// It only works because of a bug in billing. Fix the bug, the feature breaks; fix the feature, billing breaks.";

// The gate: 1-200 characters, a single line, not only whitespace.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Line must be 1-200 characters, got ${LINE.length}.`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("Line must be a single line.");
}
if (LINE.trim().length === 0) {
  throw new Error("Line must not be only whitespace.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8"); // no trailing newline

console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
