import { mkdirSync, writeFileSync } from "node:fs";

// This text is the competition entry.
const ENTRY_TEXT =
  "At 3:17 a.m., every screen in the abandoned hotel lit up with the same message: 'Room 214 is already occupied.' The hotel had only 213 rooms.";

const entryLength = [...ENTRY_TEXT].length;
if (entryLength === 0 || entryLength > 280) {
  throw new Error("Entry text must contain between 1 and 280 Unicode code points.");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, ENTRY_TEXT, "utf8");
