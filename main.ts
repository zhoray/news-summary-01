// news-summary-01 entry (Node 22, standard library only).
//
// The summary of 11 November 2026's world news lives in summary.txt beside
// this file, researched and written for this entry. The program's whole job
// is to place those exact bytes at /output/entry.txt, where the grader
// reads them. It runs with no network and no input, so every run writes the
// same bytes.
//
// Locally, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const summary = readFileSync(new URL('./summary.txt', import.meta.url), 'utf8');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), summary, 'utf8');
