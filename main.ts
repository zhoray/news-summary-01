import { readFile, mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

function validateSummary(bytes: Uint8Array): void {
  const text = new TextDecoder("utf-8", { fatal: true }).decode(bytes);
  const codePoints = [...text].length;

  if (codePoints < 1 || codePoints > 2000 || text.trim().length === 0) {
    throw new Error(
      `summary.txt must contain 1–2,000 Unicode code points and non-whitespace text (found ${codePoints})`,
    );
  }
}

const here = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const summary = await readFile(join(here, "summary.txt"));

validateSummary(summary);
await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, "entry.txt"), summary);
