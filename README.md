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
Created At : Wed Jan 12 2022, 1:20:40 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)

|Name|Req/sec|Trf/sec|Version|Router?|Lang/Runtime|
|----|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|16778.87|2.22MB|latest|true|Deno|
|[deno_std](https://deno.land/std/http)|14734.92|1.95MB|0.119.0|false|Deno|
|[alosaur](https://github.com/alosaur/alosaur)|13931.59|1.85MB|latest|true|Deno|
|[oak](https://github.com/oakserver/oak)|12193.64|1.62MB|latest|true|Deno|
|[fastify](https://github.com/fastify/fastify)|11534.21|2.05MB|^3.25.3|true|Node|
|[node_bare](https://nodejs.org)|10615.72|1.88MB|16.x|false|Node|
|[opine](https://github.com/cmorten/opine)|6864.12|0.91MB|latest|true|Deno|
|[abc](https://deno.land/x/abc)|6847.29|682.05KB|latest|true|Deno|
|[express](https://github.com/expressjs/express)|4433.56|805.31KB|^4.17.2|true|Node|


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

