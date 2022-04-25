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
Created At : Mon Apr 25 2022, 1:56:04 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)

|Name|Req/sec|Trf/sec|Version|Router?|Lang/Runtime|
|----|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|15002.11|2.32MB|latest|true|Deno|
|[alosaur](https://github.com/alosaur/alosaur)|13235.12|2.04MB|latest|true|Deno|
|[fastify](https://github.com/fastify/fastify)|11519.59|2.04MB|^3.25.3|true|Node|
|[deno_std](https://deno.land/std/http)|10371.65|1.60MB|0.119.0|false|Deno|
|[opine](https://github.com/cmorten/opine)|8713.69|1.35MB|latest|true|Deno|
|[oak](https://github.com/oakserver/oak)|8648.78|1.34MB|latest|true|Deno|
|[node_bare](https://nodejs.org)|7033.55|1.25MB|16.x|false|Node|
|[abc](https://deno.land/x/abc)|6827.81|680.11KB|latest|true|Deno|
|[express](https://github.com/expressjs/express)|4804.53|0.85MB|^4.17.2|true|Node|


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

