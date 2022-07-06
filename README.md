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
Created At : Wed Jul 06 2022, 2:28:48 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)

|Name|Req/sec|Trf/sec|Version|Router?|Lang/Runtime|
|----|----|----|----|----|----|
|[deno_std](https://deno.land/std/http)|20224.63|3.12MB|0.119.0|false|Deno|
|[nhttp](https://github.com/nhttp/nhttp)|19581.71|3.03MB|latest|true|Deno|
|[alosaur](https://github.com/alosaur/alosaur)|13191.91|2.04MB|latest|true|Deno|
|[oak](https://github.com/oakserver/oak)|10057.59|1.55MB|latest|true|Deno|
|[fastify](https://github.com/fastify/fastify)|9477.33|1.68MB|^3.25.3|true|Node|
|[node_bare](https://nodejs.org)|7311.47|1.30MB|16.x|false|Node|
|[abc](https://deno.land/x/abc)|7063.99|703.64KB|latest|true|Deno|
|[opine](https://github.com/cmorten/opine)|6334.01|0.98MB|latest|true|Deno|
|[express](https://github.com/expressjs/express)|3953.19|718.06KB|^4.17.2|true|Node|


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

