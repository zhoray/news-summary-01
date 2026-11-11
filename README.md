# News summary entry

This entry copies the day's news summary to entry.txt in the configured output directory.

- summary.txt contains the summary.
- main.ts reads it beside the module and writes its exact bytes.

Run with Node 22:

MAKEFUN_OUTPUT_DIR=/tmp/news-output node main.ts

If MAKEFUN_OUTPUT_DIR is unset, output goes to /output. The entry uses only Node's standard library and has no build step.

## License

MIT. See LICENSE.
