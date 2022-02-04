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
Created At : Fri Feb 04 2022, 1:12:34 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)

|Name|Req/sec|Trf/sec|Version|Router?|Lang/Runtime|
|----|----|----|----|----|----|
|[deno_std](https://deno.land/std/http)|18757.63|2.49MB|0.119.0|false|Deno|
|[oak](https://github.com/oakserver/oak)|12148.1|1.61MB|latest|true|Deno|
|[alosaur](https://github.com/alosaur/alosaur)|11574.76|1.53MB|latest|true|Deno|
|[fastify](https://github.com/fastify/fastify)|11218.55|1.99MB|^3.25.3|true|Node|
|[nhttp](https://github.com/nhttp/nhttp)|11079.16|1.47MB|latest|true|Deno|
|[opine](https://github.com/cmorten/opine)|8031.39|1.06MB|latest|true|Deno|
|[abc](https://deno.land/x/abc)|6653.84|662.79KB|latest|true|Deno|
|[node_bare](https://nodejs.org)|6199.78|1.10MB|16.x|false|Node|
|[express](https://github.com/expressjs/express)|4472.7|812.42KB|^4.17.2|true|Node|


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

