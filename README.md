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
Created At : Thu Feb 03 2022, 1:11:46 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)

|Name|Req/sec|Trf/sec|Version|Router?|Lang/Runtime|
|----|----|----|----|----|----|
|[deno_std](https://deno.land/std/http)|15543.79|2.06MB|0.119.0|false|Deno|
|[nhttp](https://github.com/nhttp/nhttp)|15147.96|2.01MB|latest|true|Deno|
|[alosaur](https://github.com/alosaur/alosaur)|13756.02|1.82MB|latest|true|Deno|
|[oak](https://github.com/oakserver/oak)|11659.87|1.55MB|latest|true|Deno|
|[node_bare](https://nodejs.org)|9556.08|1.70MB|16.x|false|Node|
|[fastify](https://github.com/fastify/fastify)|7578.15|1.34MB|^3.25.3|true|Node|
|[abc](https://deno.land/x/abc)|6532.3|650.68KB|latest|true|Deno|
|[opine](https://github.com/cmorten/opine)|5973.61|810.87KB|latest|true|Deno|
|[express](https://github.com/expressjs/express)|4166.65|756.83KB|^4.17.2|true|Node|


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

