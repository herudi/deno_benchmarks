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
Created At : Wed Jun 29 2022, 2:21:52 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)

|Name|Req/sec|Trf/sec|Version|Router?|Lang/Runtime|
|----|----|----|----|----|----|
|[deno_std](https://deno.land/std/http)|18851.66|2.91MB|0.119.0|false|Deno|
|[nhttp](https://github.com/nhttp/nhttp)|17085.71|2.64MB|latest|true|Deno|
|[alosaur](https://github.com/alosaur/alosaur)|15310.41|2.37MB|latest|true|Deno|
|[oak](https://github.com/oakserver/oak)|11240.11|1.74MB|latest|true|Deno|
|[abc](https://deno.land/x/abc)|7416.07|738.71KB|latest|true|Deno|
|[node_bare](https://nodejs.org)|6883.32|1.22MB|16.x|false|Node|
|[opine](https://github.com/cmorten/opine)|6502.35|1.00MB|latest|true|Deno|
|[fastify](https://github.com/fastify/fastify)|5722.04|1.01MB|^3.25.3|true|Node|
|[express](https://github.com/expressjs/express)|4502.88|817.91KB|^4.17.2|true|Node|


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

