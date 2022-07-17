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
Created At : Sun Jul 17 2022, 2:24:52 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)

|Name|Req/sec|Trf/sec|Version|Router?|Lang/Runtime|
|----|----|----|----|----|----|
|[deno_std](https://deno.land/std/http)|17273.6|2.67MB|0.119.0|false|Deno|
|[nhttp](https://github.com/nhttp/nhttp)|16122.65|2.49MB|latest|true|Deno|
|[alosaur](https://github.com/alosaur/alosaur)|11449.14|1.77MB|latest|true|Deno|
|[oak](https://github.com/oakserver/oak)|9968.03|1.54MB|latest|true|Deno|
|[fastify](https://github.com/fastify/fastify)|9824.02|1.74MB|^3.25.3|true|Node|
|[node_bare](https://nodejs.org)|9469.09|1.68MB|16.x|false|Node|
|[abc](https://deno.land/x/abc)|7058.74|703.12KB|latest|true|Deno|
|[opine](https://github.com/cmorten/opine)|6454.75|1.00MB|latest|true|Deno|
|[express](https://github.com/expressjs/express)|3064.96|556.72KB|^4.17.2|true|Node|


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

