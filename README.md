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
Created At : Sat Apr 02 2022, 1:48:14 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)

|Name|Req/sec|Trf/sec|Version|Router?|Lang/Runtime|
|----|----|----|----|----|----|
|[deno_std](https://deno.land/std/http)|18117.85|2.80MB|0.119.0|false|Deno|
|[alosaur](https://github.com/alosaur/alosaur)|15034.59|2.32MB|latest|true|Deno|
|[nhttp](https://github.com/nhttp/nhttp)|14004.91|2.16MB|latest|true|Deno|
|[oak](https://github.com/oakserver/oak)|8488.02|1.31MB|latest|true|Deno|
|[node_bare](https://nodejs.org)|6603.14|1.17MB|16.x|false|Node|
|[fastify](https://github.com/fastify/fastify)|5517.24|0.98MB|^3.25.3|true|Node|
|[abc](https://deno.land/x/abc)|4449.47|443.21KB|latest|true|Deno|
|[express](https://github.com/expressjs/express)|3845.68|698.53KB|^4.17.2|true|Node|
|[opine](https://github.com/cmorten/opine)|3776.04|597.38KB|latest|true|Deno|


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

