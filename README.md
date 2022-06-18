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
Created At : Sat Jun 18 2022, 2:06:03 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)

|Name|Req/sec|Trf/sec|Version|Router?|Lang/Runtime|
|----|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|18279.04|2.82MB|latest|true|Deno|
|[deno_std](https://deno.land/std/http)|17560.36|2.71MB|0.119.0|false|Deno|
|[alosaur](https://github.com/alosaur/alosaur)|14604.75|2.26MB|latest|true|Deno|
|[node_bare](https://nodejs.org)|12420.65|2.20MB|16.x|false|Node|
|[oak](https://github.com/oakserver/oak)|10674.57|1.65MB|latest|true|Deno|
|[fastify](https://github.com/fastify/fastify)|10139.69|1.80MB|^3.25.3|true|Node|
|[opine](https://github.com/cmorten/opine)|9235.67|1.43MB|latest|true|Deno|
|[abc](https://deno.land/x/abc)|6741.65|671.53KB|latest|true|Deno|
|[express](https://github.com/expressjs/express)|4658.16|846.11KB|^4.17.2|true|Node|


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

