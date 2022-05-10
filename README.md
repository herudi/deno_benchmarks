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
Created At : Tue May 10 2022, 1:43:32 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)

|Name|Req/sec|Trf/sec|Version|Router?|Lang/Runtime|
|----|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|16120.32|2.49MB|latest|true|Deno|
|[alosaur](https://github.com/alosaur/alosaur)|13961.22|2.16MB|latest|true|Deno|
|[oak](https://github.com/oakserver/oak)|11669.63|1.80MB|latest|true|Deno|
|[fastify](https://github.com/fastify/fastify)|11652.95|2.07MB|^3.25.3|true|Node|
|[opine](https://github.com/cmorten/opine)|9208.06|1.42MB|latest|true|Deno|
|[node_bare](https://nodejs.org)|8664.79|1.54MB|16.x|false|Node|
|[deno_std](https://deno.land/std/http)|8081.71|1.25MB|0.119.0|false|Deno|
|[abc](https://deno.land/x/abc)|7660.69|763.08KB|latest|true|Deno|
|[express](https://github.com/expressjs/express)|4350.33|790.20KB|^4.17.2|true|Node|


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

