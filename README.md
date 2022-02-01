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
Created At : Tue Feb 01 2022, 1:21:57 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)

|Name|Req/sec|Trf/sec|Version|Router?|Lang/Runtime|
|----|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|18905.43|2.51MB|latest|true|Deno|
|[deno_std](https://deno.land/std/http)|17222.95|2.28MB|0.119.0|false|Deno|
|[alosaur](https://github.com/alosaur/alosaur)|13938.69|1.85MB|latest|true|Deno|
|[node_bare](https://nodejs.org)|11712.35|2.08MB|16.x|false|Node|
|[oak](https://github.com/oakserver/oak)|9942.37|1.32MB|latest|true|Deno|
|[fastify](https://github.com/fastify/fastify)|9579.75|1.70MB|^3.25.3|true|Node|
|[opine](https://github.com/cmorten/opine)|8392.02|1.11MB|latest|true|Deno|
|[abc](https://deno.land/x/abc)|6758.65|673.22KB|latest|true|Deno|
|[express](https://github.com/expressjs/express)|4177.98|758.89KB|^4.17.2|true|Node|


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

