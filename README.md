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
Created At : Mon Jun 06 2022, 2:05:39 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)

|Name|Req/sec|Trf/sec|Version|Router?|Lang/Runtime|
|----|----|----|----|----|----|
|[deno_std](https://deno.land/std/http)|21125.26|3.26MB|0.119.0|false|Deno|
|[nhttp](https://github.com/nhttp/nhttp)|19007.41|2.94MB|latest|true|Deno|
|[alosaur](https://github.com/alosaur/alosaur)|13358.79|2.06MB|latest|true|Deno|
|[oak](https://github.com/oakserver/oak)|11280.87|1.74MB|latest|true|Deno|
|[opine](https://github.com/cmorten/opine)|9381.09|1.45MB|latest|true|Deno|
|[node_bare](https://nodejs.org)|8713.87|1.55MB|16.x|false|Node|
|[abc](https://deno.land/x/abc)|7724.23|769.41KB|latest|true|Deno|
|[fastify](https://github.com/fastify/fastify)|7402.67|1.31MB|^3.25.3|true|Node|
|[express](https://github.com/expressjs/express)|4674.5|849.08KB|^4.17.2|true|Node|


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

