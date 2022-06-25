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
Created At : Sat Jun 25 2022, 2:17:49 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)

|Name|Req/sec|Trf/sec|Version|Router?|Lang/Runtime|
|----|----|----|----|----|----|
|[deno_std](https://deno.land/std/http)|20624.34|3.19MB|0.119.0|false|Deno|
|[nhttp](https://github.com/nhttp/nhttp)|19674.35|3.04MB|latest|true|Deno|
|[alosaur](https://github.com/alosaur/alosaur)|14326.51|2.21MB|latest|true|Deno|
|[oak](https://github.com/oakserver/oak)|11753.95|1.82MB|latest|true|Deno|
|[node_bare](https://nodejs.org)|9656.95|1.71MB|16.x|false|Node|
|[fastify](https://github.com/fastify/fastify)|8726.46|1.55MB|^3.25.3|true|Node|
|[abc](https://deno.land/x/abc)|7671.94|764.20KB|latest|true|Deno|
|[opine](https://github.com/cmorten/opine)|7531.62|1.16MB|latest|true|Deno|
|[express](https://github.com/expressjs/express)|4372.94|794.30KB|^4.17.2|true|Node|


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

