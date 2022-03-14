## Simple deno benchmark.
This benchmark uses [wrk](https://github.com/wg/wrk).

`wrk -t2 -c40 -d10s http://localhost:8000`. (two rounds. one to warm-up, one to measure)

> Inspired by [bench](https://github.com/denosaurs/bench).

Example code for benchmark. the response is json.
```ts
...
framework.get("/", (req, res) => {
  res.json({ name: "bench" });
});
...
```

## Output
Created At : Mon Mar 14 2022, 1:29:40 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)

|Name|Req/sec|Trf/sec|Version|Router?|Lang/Runtime|
|----|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|18573.04|2.46MB|latest|true|Deno|
|[deno_std](https://deno.land/std/http)|17557.71|2.33MB|0.119.0|false|Deno|
|[oak](https://github.com/oakserver/oak)|12535.09|1.66MB|latest|true|Deno|
|[node_bare](https://nodejs.org)|11749.84|2.08MB|16.x|false|Node|
|[alosaur](https://github.com/alosaur/alosaur)|11746.91|1.56MB|latest|true|Deno|
|[opine](https://github.com/cmorten/opine)|9435.93|1.25MB|latest|true|Deno|
|[fastify](https://github.com/fastify/fastify)|9136.79|1.62MB|^3.25.3|true|Node|
|[abc](https://deno.land/x/abc)|6609.34|658.35KB|latest|true|Deno|
|[express](https://github.com/expressjs/express)|3885.42|705.75KB|^4.17.2|true|Node|


## Usage
```bash
git clone https://github.com/herudi/deno_benchmark.git
cd deno_benchmark

// for_all
deno run -A bench.ts

// for_single
deno run -A bench.ts framework_name
```
## For other frameworks ? please create PRs.
### Create server
Create server `./frameworks/myserver/server.ts`.
```ts
...
framework.get("/", (req, res) => {
  res.json({ name: "bench" });
});
...
```
### Create info
Create info `./frameworks/myserver/info.json`.
```json
{
  "name": "deno_std",
  "run": "deno run -A ./frameworks/deno_std/server.ts",
  "lang": "Deno",
  "link": "https://deno.land/std/http",
  "version": "0.119.0",
  "is_router": false
}
```
### Generate workflows.
```bash
deno run -A workflows.ts
```
## License

[MIT](LICENSE)

