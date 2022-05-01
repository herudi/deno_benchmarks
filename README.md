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
Created At : Sun May 01 2022, 2:32:58 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)

|Name|Req/sec|Trf/sec|Version|Router?|Lang/Runtime|
|----|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|18795.59|2.90MB|latest|true|Deno|
|[deno_std](https://deno.land/std/http)|18698.33|2.89MB|0.119.0|false|Deno|
|[node_bare](https://nodejs.org)|10784.21|1.91MB|16.x|false|Node|
|[alosaur](https://github.com/alosaur/alosaur)|9533.45|1.47MB|latest|true|Deno|
|[fastify](https://github.com/fastify/fastify)|9524.63|1.69MB|^3.25.3|true|Node|
|[opine](https://github.com/cmorten/opine)|6929.91|1.07MB|latest|true|Deno|
|[oak](https://github.com/oakserver/oak)|6806|1.05MB|latest|true|Deno|
|[abc](https://deno.land/x/abc)|6526.69|650.12KB|latest|true|Deno|
|[express](https://github.com/expressjs/express)|4382.07|795.96KB|^4.17.2|true|Node|


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

