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
Created At : Thu Apr 28 2022, 2:42:58 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)

|Name|Req/sec|Trf/sec|Version|Router?|Lang/Runtime|
|----|----|----|----|----|----|
|[deno_std](https://deno.land/std/http)|17307.22|2.67MB|0.119.0|false|Deno|
|[nhttp](https://github.com/nhttp/nhttp)|14421.55|2.23MB|latest|true|Deno|
|[oak](https://github.com/oakserver/oak)|11373.96|1.76MB|latest|true|Deno|
|[node_bare](https://nodejs.org)|10864.4|1.93MB|16.x|false|Node|
|[fastify](https://github.com/fastify/fastify)|10585.99|1.88MB|^3.25.3|true|Node|
|[alosaur](https://github.com/alosaur/alosaur)|10104.2|1.56MB|latest|true|Deno|
|[opine](https://github.com/cmorten/opine)|8740.67|1.35MB|latest|true|Deno|
|[abc](https://deno.land/x/abc)|7312.81|728.42KB|latest|true|Deno|
|[express](https://github.com/expressjs/express)|4424.63|803.69KB|^4.17.2|true|Node|


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

