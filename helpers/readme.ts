import mark from "https://esm.sh/json-to-markdown-table?no-check";
import { recursiveReaddir } from "https://deno.land/x/recursive_readdir@v2.0.0/mod.ts";

const headers = [
  "Name",
  "Req/sec",
  "Trf/sec",
  "Version",
  "Router?",
  "Lang/Runtime"
];

const arr = (await recursiveReaddir("results"))
  .filter((el) => el.endsWith(".json"))
  .map(el => {
    try {
      const json = JSON.parse(Deno.readTextFileSync(el));
      return json;
    } catch (error) {
      return { "Name": null };
    }
  })
  .filter((el) => el.Name !== null)
  .sort((a, b) => (b['Req/sec'] < a['Req/sec'] ? -1 : 1));
const now = new Date();
const table = mark(arr, headers);
const readme = await Deno.readTextFile('./helpers/__README.txt');
await Deno.writeTextFile(
  "README.md",
  readme.replace(
    `## Output`,
    `
## Output
Created At : ${now.toDateString() + ", " + now.toLocaleTimeString()}

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)

${table}`,
  ),
);
