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
Created At : Fri Jun 17 2022, 2:08:03 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)

|Name|Req/sec|Trf/sec|Version|Router?|Lang/Runtime|
|----|----|----|----|----|----|
|[deno_std](https://deno.land/std/http)|19809.58|3.06MB|0.119.0|false|Deno|
|[nhttp](https://github.com/nhttp/nhttp)|16493.9|2.55MB|latest|true|Deno|
|[alosaur](https://github.com/alosaur/alosaur)|15247.54|2.36MB|latest|true|Deno|
|[oak](https://github.com/oakserver/oak)|12282.06|1.90MB|latest|true|Deno|
|[node_bare](https://nodejs.org)|12187.62|2.16MB|16.x|false|Node|
|[fastify](https://github.com/fastify/fastify)|9075.31|1.61MB|^3.25.3|true|Node|
|[abc](https://deno.land/x/abc)|7033.64|700.62KB|latest|true|Deno|
|[opine](https://github.com/cmorten/opine)|5879.4|0.91MB|latest|true|Deno|
|[express](https://github.com/expressjs/express)|3832.38|696.12KB|^4.17.2|true|Node|


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

