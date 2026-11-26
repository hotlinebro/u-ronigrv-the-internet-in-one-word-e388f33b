// The Internet in One Word
// Writes a single word describing the whole internet to /output/entry.txt.
//
// Candidates considered:
// - "chaos" — too generic, the first obvious word anyone reaches for.
// - "doomscrolling" — fitting, but only one habit, and predictable by now.
// - "brainrot" — funny and internet-native, but needs internet literacy
//   to land, and names the effect on the reader rather than the internet.
// - "unhinged" — good, but a common descriptor already, and 8 letters.
// - "yapping" — funny sound, but only about talking, not the whole internet.
// Picked: "feral" — 5 letters, instantly readable, funny by itself.
// The whole internet, every corner of it, is wild and untamed with no
// rules: arguments, memes, strangers shouting, everything at once.
// It makes a reader laugh and then nod, and it is short enough to hit
// in one beat. At 5 bytes it also wins any exact tie on size.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const WORD = "feral";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

// Gate self-check: the entry must be 1-30 characters, a single word
// (no whitespace at all), and not only whitespace — otherwise refuse
// to write anything, so a bad word can never reach the judge.
const chars = [...WORD];
if (chars.length < 1 || chars.length > 30) {
  throw new Error(`entry is ${chars.length} chars, must be 1-30`);
}
if (WORD.trim().length === 0 || /\s/.test(WORD)) {
  throw new Error("entry must be one non-blank word with no whitespace");
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, WORD, "utf8");
console.log(`wrote ${[...WORD].length} chars to ${outPath}`);
