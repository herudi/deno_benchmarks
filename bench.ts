import { exec, recursiveReaddir } from "./helpers/deps.ts";
import parseWrk from "./helpers/parseWrk.js";

const sleep = (sec: number) => new Promise((res) => setTimeout(res, sec * 1000));
const lookup = "./frameworks/";
const fw = Deno.args[0];
const CMD = Deno.build.os === 'windows' ? 'cmd /c ' : '';

async function bench(info: Record<string, any>) {
  try {
    console.log("------------------------------------------------------------");
    console.log("Start bench", info.name);
    console.log(`- Preparing ${info.name}. (wait...)`);
    const p = Deno.run({
      cmd: info.run.split(' ')
    });
    // update deps 20s
    await sleep(20);
    console.log(`- Running ${info.name}. (wait...)`);
    const out = await exec(`${CMD}wrk -t2 -c40 -d10s http://localhost:8000`);
    const result = parseWrk(
      `
        ${out}
      `
    ) as Record<string, any>;
    const myObj = {
      "Name": `[${info.name}](${info.link})`,
      "Req/sec": result.requestsPerSec,
      "Trf/sec": result.transferPerSec,
      "Version": info.version,
      "Router?": info.is_router,
      "Lang/Runtime": info.lang
    }
    if (fw) {
      await Deno.writeTextFile(`./results/${info.name}.json`, JSON.stringify(myObj));
    }
    console.log("Success bench", info.name);
    p.kill("SIGTERM");
    p.close();
    await sleep(5);
    return {
      OriginalName: info.name,
      ...myObj
    };
  } catch (error) {
    console.log(error);
    return null;
  }
}

if (fw) {
  const raw = await Deno.readTextFile(lookup + fw + '/info.json');
  const info = JSON.parse(raw);
  const result = await bench(info);
  if (result) console.log(result);
} else {
  const arr = (await recursiveReaddir("frameworks"))
    .filter((el) => el.endsWith("info.json"))
    .map(el => JSON.parse(Deno.readTextFileSync(el))), results = [] as any;
  let i = 0, len = arr.length;
  while (i < len) {
    const result = await bench(arr[i]);
    if (result) results.push(result);
    i++;
  }
  console.log(results);
}
