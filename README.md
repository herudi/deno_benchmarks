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
Created At : Sun Apr 03 2022, 1:50:10 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)

|Name|Req/sec|Trf/sec|Version|Router?|Lang/Runtime|
|----|----|----|----|----|----|
|[deno_std](https://deno.land/std/http)|15776.62|2.44MB|0.119.0|false|Deno|
|[nhttp](https://github.com/nhttp/nhttp)|14701.23|2.27MB|latest|true|Deno|
|[alosaur](https://github.com/alosaur/alosaur)|13132.71|2.03MB|latest|true|Deno|
|[oak](https://github.com/oakserver/oak)|11711.84|1.81MB|latest|true|Deno|
|[node_bare](https://nodejs.org)|10731.6|1.90MB|16.x|false|Node|
|[opine](https://github.com/cmorten/opine)|8946.77|1.38MB|latest|true|Deno|
|[fastify](https://github.com/fastify/fastify)|7649.62|1.36MB|^3.25.3|true|Node|
|[abc](https://deno.land/x/abc)|7124.06|709.62KB|latest|true|Deno|
|[express](https://github.com/expressjs/express)|5069.35|0.90MB|^4.17.2|true|Node|


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

