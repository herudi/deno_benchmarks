import { exec } from "./helpers/deps.ts";
import parseWrk from "./helpers/parseWrk.js";

const sleep = (sec: number) => new Promise((res) => setTimeout(res, sec * 1000));
const lookup = "./frameworks/";
const fw = Deno.args[0];
const CMD = Deno.build.os === 'windows' ? 'cmd /c ' : '';

try {
  const raw = await Deno.readTextFile(lookup + fw + '/info.json');
  const info = JSON.parse(raw);
  console.log("------------------------------------------------------------");
  console.log("Start bench", info.name);
  console.log(`- Preparing ${info.name}. (wait...)`);
  const p = Deno.run({
    cmd: info.run.split(' ')
  });
  // update deps 15s
  await sleep(15);
  console.log(`- Warming up ${info.name}. (wait...)`);
  await exec(`${CMD}wrk -t2 -c40 -d10s http://localhost:8000`);
  console.log(`- Running ${info.name}. (wait...)`);
  const out = await exec(`${CMD}wrk -t2 -c40 -d10s http://localhost:8000`);
  const result = parseWrk(
    `
      ${out}
    `
  ) as Record<string, any>;
  const myObj = {
    "Frameworks": `[${info.name}](${info.link})`,
    "Requests/sec": result.requestsPerSec,
    "Transfer/sec": result.transferPerSec,
    "Version": info.version,
    "Router?": info.is_router,
    "Lang/Runtime": info.lang
  }
  await Deno.writeTextFile(`./results/${info.name}.json`, JSON.stringify(myObj));
  if (result.errors === 0) {
    console.log("Success bench", info.name);
  } else {
    console.error("Failed bench", info.name);
  }
  console.log(myObj);
  p.kill("SIGTERM");
  p.close();
  await sleep(5);
} catch (error) {
  console.log(error);
}