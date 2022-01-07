import { mark, recursiveReaddir } from "./deps.ts";

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

const arr = (await recursiveReaddir("results"))
    .filter((el) => el.endsWith(".json"))
    .map(el => JSON.parse(Deno.readTextFileSync(el)))
    .sort((a, b) => (b['Requests/sec'] < a['Requests/sec'] ? -1 : 1));
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

${table}`,
    ),
  );
