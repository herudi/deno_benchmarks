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
Created At : Mon Jan 17 2022, 1:18:44 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)

|Name|Req/sec|Trf/sec|Version|Router?|Lang/Runtime|
|----|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|20731.54|2.75MB|latest|true|Deno|
|[deno_std](https://deno.land/std/http)|16996.1|2.25MB|0.119.0|false|Deno|
|[node_bare](https://nodejs.org)|11883.11|2.11MB|16.x|false|Node|
|[alosaur](https://github.com/alosaur/alosaur)|11739.52|1.56MB|latest|true|Deno|
|[oak](https://github.com/oakserver/oak)|10331.27|1.37MB|latest|true|Deno|
|[opine](https://github.com/cmorten/opine)|9781.35|1.30MB|latest|true|Deno|
|[fastify](https://github.com/fastify/fastify)|9097.53|1.61MB|^3.25.3|true|Node|
|[abc](https://deno.land/x/abc)|6747.06|672.07KB|latest|true|Deno|
|[express](https://github.com/expressjs/express)|3760.29|683.02KB|^4.17.2|true|Node|


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

