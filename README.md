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
Created At : Sat Feb 12 2022, 1:19:40 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)

|Name|Req/sec|Trf/sec|Version|Router?|Lang/Runtime|
|----|----|----|----|----|----|
|[deno_std](https://deno.land/std/http)|20134.36|2.67MB|0.119.0|false|Deno|
|[nhttp](https://github.com/nhttp/nhttp)|19181.2|2.54MB|latest|true|Deno|
|[alosaur](https://github.com/alosaur/alosaur)|15375.21|2.04MB|latest|true|Deno|
|[oak](https://github.com/oakserver/oak)|12102.64|1.60MB|latest|true|Deno|
|[node_bare](https://nodejs.org)|11619.07|2.06MB|16.x|false|Node|
|[fastify](https://github.com/fastify/fastify)|10783.18|1.91MB|^3.25.3|true|Node|
|[opine](https://github.com/cmorten/opine)|9245.26|1.23MB|latest|true|Deno|
|[abc](https://deno.land/x/abc)|7089.43|706.17KB|latest|true|Deno|
|[express](https://github.com/expressjs/express)|5268.48|0.93MB|^4.17.2|true|Node|


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

