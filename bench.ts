import { exec } from 'https://deno.land/x/execute@v1.1.0/mod.ts';

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms * 1000));
const lookup = "./frameworks/";
const fw = Deno.args[0];
const CMD = Deno.build.os === 'windows' ? 'cmd /c ' : '';

try {
  const raw = await Deno.readTextFile(lookup + fw + '/info.json');
  const info = JSON.parse(raw);
  const p = Deno.run({
    cmd: info.run.split(' ')
  });
  console.log("------------------------------------------------------------");
  console.log("Start bench", info.name);
  console.log(`- Preparing ${info.name}. (wait...)`);
  await sleep(5);
  console.log(`- Warming up ${info.name}. (wait...)`);
  await exec(`${CMD}autocannon -c 100 -d 10 http://localhost:8000`);
  console.log(`- Running ${info.name}. (wait...)`);
  const out = await exec(`${CMD}autocannon -c 100 -d 10 -j http://localhost:8000`);
  const result = JSON.parse(out);
  await Deno.writeTextFile(lookup + fw + '/result.json', JSON.stringify({
    "Frameworks": `[${info.name}](${info.link})`,
    "Requests/sec": result.requests.average,
    "Latency": result.latency.average,
    "Throughput/Mb": (result.throughput.average / 1024 / 1024).toFixed(2),
    "Version": info.version,
    "Router?": info.is_router,
    "Lang/Runtime": info.lang,
    "Errors": result.errors,
  }));
  if (result.errors === 0) {
    console.log("Success bench", info.name);
  } else {
    console.error("Failed bench", info.name);
  }
  p.kill("SIGTERM");
  p.close();
  await sleep(5);
} catch (error) {
  console.log(error);
}