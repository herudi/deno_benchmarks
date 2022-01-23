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
Created At : Sun Jan 23 2022, 1:15:16 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)

|Name|Req/sec|Trf/sec|Version|Router?|Lang/Runtime|
|----|----|----|----|----|----|
|[deno_std](https://deno.land/std/http)|18890.2|2.50MB|0.119.0|false|Deno|
|[nhttp](https://github.com/nhttp/nhttp)|18194.43|2.41MB|latest|true|Deno|
|[oak](https://github.com/oakserver/oak)|12308.06|1.63MB|latest|true|Deno|
|[alosaur](https://github.com/alosaur/alosaur)|11890.9|1.58MB|latest|true|Deno|
|[opine](https://github.com/cmorten/opine)|9275.86|1.23MB|latest|true|Deno|
|[fastify](https://github.com/fastify/fastify)|8781.87|1.56MB|^3.25.3|true|Node|
|[node_bare](https://nodejs.org)|7175.08|1.27MB|16.x|false|Node|
|[abc](https://deno.land/x/abc)|4875.12|485.61KB|latest|true|Deno|
|[express](https://github.com/expressjs/express)|4661.78|846.77KB|^4.17.2|true|Node|


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

