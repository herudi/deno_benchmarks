import { recursiveReaddir } from "https://deno.land/x/recursive_readdir@v2.0.0/mod.ts";
import mark from "https://esm.sh/json-to-markdown-table?no-check";

const headers = [
    "Frameworks",
    "Requests/sec",
    "Latency",
    "Throughput/Mb",
    "Version",
    "Router?",
    "Lang/Runtime",
    "Errors",
];

const arr = (await recursiveReaddir("frameworks"))
    .filter((el) => el.endsWith("result.json"))
    .map(el => JSON.parse(Deno.readTextFileSync(el)))
    .sort((a, b) => (b['Requests/sec'] < a['Requests/sec'] ? -1 : 1));
const now = new Date();
const table = mark(arr, headers);
const readme = await Deno.readTextFile('./__README.txt');
await Deno.writeTextFile(
    "README.md",
    readme.replace(
      `## Output`,
      `
## Output
Created At : ${now.toDateString() + ", " + now.toLocaleTimeString()}

${table}`,
    ),
  );
