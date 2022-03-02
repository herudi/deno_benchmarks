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
Created At : Wed Mar 02 2022, 1:28:31 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)

|Name|Req/sec|Trf/sec|Version|Router?|Lang/Runtime|
|----|----|----|----|----|----|
|[deno_std](https://deno.land/std/http)|19665.54|2.61MB|0.119.0|false|Deno|
|[alosaur](https://github.com/alosaur/alosaur)|12302.76|1.63MB|latest|true|Deno|
|[node_bare](https://nodejs.org)|10805.68|1.92MB|16.x|false|Node|
|[oak](https://github.com/oakserver/oak)|10315.91|1.37MB|latest|true|Deno|
|[nhttp](https://github.com/nhttp/nhttp)|10165.67|1.35MB|latest|true|Deno|
|[fastify](https://github.com/fastify/fastify)|7349.55|1.30MB|^3.25.3|true|Node|
|[abc](https://deno.land/x/abc)|5677.43|565.53KB|latest|true|Deno|
|[express](https://github.com/expressjs/express)|4081.6|741.38KB|^4.17.2|true|Node|


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

