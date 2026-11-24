// One Word, First Thought — entry: "komorebi"
// Sunlight filtering through leaves. Surprising, vivid, specific:
// a single image in one word, with a soft sound that matches it.
// Gate: exactly one word, 8 chars, no newline — well inside 1-24 chars.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "komorebi";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
