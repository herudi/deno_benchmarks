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
Created At : Tue Jul 12 2022, 2:27:47 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)

|Name|Req/sec|Trf/sec|Version|Router?|Lang/Runtime|
|----|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|18702.19|2.89MB|latest|true|Deno|
|[deno_std](https://deno.land/std/http)|16341.88|2.52MB|0.119.0|false|Deno|
|[node_bare](https://nodejs.org)|11176.55|1.98MB|16.x|false|Node|
|[oak](https://github.com/oakserver/oak)|10478.98|1.62MB|latest|true|Deno|
|[alosaur](https://github.com/alosaur/alosaur)|10442.93|1.61MB|latest|true|Deno|
|[fastify](https://github.com/fastify/fastify)|8882.98|1.58MB|^3.25.3|true|Node|
|[opine](https://github.com/cmorten/opine)|6995.95|1.08MB|latest|true|Deno|
|[abc](https://deno.land/x/abc)|5973.29|595.00KB|latest|true|Deno|
|[express](https://github.com/expressjs/express)|4661.67|846.75KB|^4.17.2|true|Node|


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

