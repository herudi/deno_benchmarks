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
Created At : Sat Mar 19 2022, 1:26:33 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)

|Name|Req/sec|Trf/sec|Version|Router?|Lang/Runtime|
|----|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|16270.18|2.51MB|latest|true|Deno|
|[alosaur](https://github.com/alosaur/alosaur)|13861.51|2.14MB|latest|true|Deno|
|[deno_std](https://deno.land/std/http)|13682.8|2.11MB|0.119.0|false|Deno|
|[oak](https://github.com/oakserver/oak)|12456.35|1.92MB|latest|true|Deno|
|[fastify](https://github.com/fastify/fastify)|10189.09|1.81MB|^3.25.3|true|Node|
|[node_bare](https://nodejs.org)|9306.58|1.65MB|16.x|false|Node|
|[abc](https://deno.land/x/abc)|6761.53|673.51KB|latest|true|Deno|
|[express](https://github.com/expressjs/express)|3586.75|651.50KB|^4.17.2|true|Node|


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

