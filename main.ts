// Entry runner for "The Funniest Sick-Day Excuse" (zeroxfive).
// One line to get out of work and get a laugh: the caller cannot come
// in because they and their couch are in couples therapy, and the
// sessions have finally reached the root of the attachment issues. It
// works as an excuse because it is unverifiable, un-fireable, and —
// this is the genius of it — technically a wellness activity. Written
// to /output/entry.txt, from the couch, during business hours.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I can't come in today — my couch and I are in couples therapy and we've finally reached the root of my attachment issues.";

function main(): void {
  const out = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(out, { recursive: true });
  for (const name of readdirSync(out)) {
    rmSync(join(out, name), { recursive: true, force: true });
  }
  writeFileSync(join(out, "entry.txt"), LINE + "\n", "utf8");
}

main();
