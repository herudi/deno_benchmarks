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
Created At : Mon May 23 2022, 2:01:13 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)

|Name|Req/sec|Trf/sec|Version|Router?|Lang/Runtime|
|----|----|----|----|----|----|
|[deno_std](https://deno.land/std/http)|18052.09|2.79MB|0.119.0|false|Deno|
|[nhttp](https://github.com/nhttp/nhttp)|17630.27|2.72MB|latest|true|Deno|
|[alosaur](https://github.com/alosaur/alosaur)|14894.75|2.30MB|latest|true|Deno|
|[oak](https://github.com/oakserver/oak)|11990.36|1.85MB|latest|true|Deno|
|[fastify](https://github.com/fastify/fastify)|11485.93|2.04MB|^3.25.3|true|Node|
|[node_bare](https://nodejs.org)|11221.3|1.99MB|16.x|false|Node|
|[abc](https://deno.land/x/abc)|8394.4|836.16KB|latest|true|Deno|
|[opine](https://github.com/cmorten/opine)|5743.83|0.89MB|latest|true|Deno|
|[express](https://github.com/expressjs/express)|4549.94|826.45KB|^4.17.2|true|Node|


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

