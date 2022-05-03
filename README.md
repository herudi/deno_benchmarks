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
Created At : Tue May 03 2022, 2:13:05 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)

|Name|Req/sec|Trf/sec|Version|Router?|Lang/Runtime|
|----|----|----|----|----|----|
|[deno_std](https://deno.land/std/http)|19422.74|3.00MB|0.119.0|false|Deno|
|[alosaur](https://github.com/alosaur/alosaur)|15784.15|2.44MB|latest|true|Deno|
|[nhttp](https://github.com/nhttp/nhttp)|14401.79|2.23MB|latest|true|Deno|
|[fastify](https://github.com/fastify/fastify)|12935.38|2.29MB|^3.25.3|true|Node|
|[node_bare](https://nodejs.org)|9793.65|1.74MB|16.x|false|Node|
|[oak](https://github.com/oakserver/oak)|9258.65|1.43MB|latest|true|Deno|
|[opine](https://github.com/cmorten/opine)|6984.14|1.08MB|latest|true|Deno|
|[abc](https://deno.land/x/abc)|6102.18|607.83KB|latest|true|Deno|
|[express](https://github.com/expressjs/express)|3510.32|637.62KB|^4.17.2|true|Node|


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

