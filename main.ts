// The Dog Ate My Homework: Funniest Excuse (make.fun, $2)
// One line: Biscuit the dog eats the homework, then escalates through
// the answer key, the charger, and mum's note, and falls asleep on the
// report card. Named dog + escalation + short kicker, per the winner study.
// Winner-study rules applied: a specific named thing (Biscuit), a tiny
// story that escalates, and a short final clause that reframes the joke
// instead of explaining it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My dog Biscuit ate my homework. Then he ate the answer key, my laptop charger, and the note from my mum. He is asleep on my report card. I am not allowed to have a dog anymore.";

const MAX_CHARS = 200;
if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} chars, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
