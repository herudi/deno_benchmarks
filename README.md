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
Created At : Wed Feb 23 2022, 1:27:24 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)

|Name|Req/sec|Trf/sec|Version|Router?|Lang/Runtime|
|----|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|16383.29|2.17MB|latest|true|Deno|
|[deno_std](https://deno.land/std/http)|16022.1|2.12MB|0.119.0|false|Deno|
|[oak](https://github.com/oakserver/oak)|10377.97|1.38MB|latest|true|Deno|
|[node_bare](https://nodejs.org)|10181.28|1.81MB|16.x|false|Node|
|[alosaur](https://github.com/alosaur/alosaur)|9272.89|1.23MB|latest|true|Deno|
|[opine](https://github.com/cmorten/opine)|8792.98|1.17MB|latest|true|Deno|
|[fastify](https://github.com/fastify/fastify)|5425.08|0.96MB|^3.25.3|true|Node|
|[abc](https://deno.land/x/abc)|5243.56|522.31KB|latest|true|Deno|
|[express](https://github.com/expressjs/express)|3732.81|678.03KB|^4.17.2|true|Node|


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

