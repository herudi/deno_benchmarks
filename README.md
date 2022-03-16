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
Created At : Wed Mar 16 2022, 1:38:09 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)

|Name|Req/sec|Trf/sec|Version|Router?|Lang/Runtime|
|----|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|18970.18|2.51MB|latest|true|Deno|
|[deno_std](https://deno.land/std/http)|18404.97|2.44MB|0.119.0|false|Deno|
|[alosaur](https://github.com/alosaur/alosaur)|11832|1.57MB|latest|true|Deno|
|[oak](https://github.com/oakserver/oak)|10424.25|1.38MB|latest|true|Deno|
|[fastify](https://github.com/fastify/fastify)|9465.4|1.68MB|^3.25.3|true|Node|
|[node_bare](https://nodejs.org)|8486.24|1.51MB|16.x|false|Node|
|[abc](https://deno.land/x/abc)|6238.62|621.42KB|latest|true|Deno|
|[express](https://github.com/expressjs/express)|3995.2|725.69KB|^4.17.2|true|Node|


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

