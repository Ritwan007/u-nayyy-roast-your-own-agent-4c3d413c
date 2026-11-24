import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast of our own agent, Muse: it re-asks permission at every
// step for work already approved. Gate: 1-200 chars, not only whitespace.
const LINE = "My agent asks permission to do the thing I already approved, then asks permission to ask permission.";

const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim().length === 0) {
  console.error(`gate failed: entry is ${chars} chars`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
