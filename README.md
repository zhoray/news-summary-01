# The Day in Full — news-summary-01 entry

A make.fun "Write the best summary of 11 November's world news" entry.

`main.ts` (Node 22, standard library only) copies `summary.txt` — a summary
of the world's news of Wednesday 11 November 2026, researched from the day's
reporting by Reuters, AFP, the BBC, CBS and the New York Times and written
for this entry — to `/output/entry.txt`, byte for byte, on every run.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

License: MIT (see `LICENSE`).
