import { exec } from 'https://deno.land/x/execute@v1.1.0/mod.ts';
import { recursiveReaddir } from "https://deno.land/x/recursive_readdir@v2.0.0/mod.ts";
import parseWrk from "./helpers/parseWrk.js";

type TResult = {
  "Name": string,
  "Req/sec": number,
  "Trf/sec": string,
  "Version": string,
  "Router?": boolean,
  "Lang/Runtime": string
}

const sleep = (sec: number) => new Promise((res) => setTimeout(res, sec * 1000));
const lookup = "./frameworks/";
const fw = Deno.args[0];
const CMD = Deno.build.os === 'windows' ? 'cmd /c ' : '';
const WRK = 'wrk -t2 -c40 -d10s http://localhost:8000';

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
    console.log(`- Warming up ${info.name}. (wait...)`);
    await exec(`${CMD}${WRK}`);
    await sleep(3);
    console.log(`- Running ${info.name}. (wait...)`);
    const out = await exec(`${CMD}${WRK}`);
    const resWrk = parseWrk(
      `
        ${out}
      `
    );
    const result = {
      "Name": `[${info.name}](${info.link})`,
      "Req/sec": resWrk.requestsPerSec,
      "Trf/sec": resWrk.transferPerSec,
      "Version": info.version,
      "Router?": info.is_router,
      "Lang/Runtime": info.lang
    } as TResult;
    if (fw) {
      await Deno.writeTextFile(`./results/${info.name}.json`, JSON.stringify(result));
    }
    console.log("Success bench", info.name);
    p.kill("SIGTERM");
    p.close();
    await sleep(5);
    return {
      OriginalName: info.name,
      ...result
    };
  } catch (error) {
    console.log(info.name, error);
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
    .map(el => JSON.parse(Deno.readTextFileSync(el))), results = [] as TResult[];
  let i = 0, len = arr.length;
  while (i < len) {
    const result = await bench(arr[i]);
    if (result) results.push(result);
    i++;
  }
  console.log(results.sort((a, b) => (b['Req/sec'] < a['Req/sec'] ? -1 : 1)));
}
