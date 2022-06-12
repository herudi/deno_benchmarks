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
Created At : Sun Jun 12 2022, 2:19:27 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)

|Name|Req/sec|Trf/sec|Version|Router?|Lang/Runtime|
|----|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|19511.89|3.01MB|latest|true|Deno|
|[deno_std](https://deno.land/std/http)|18437.28|2.85MB|0.119.0|false|Deno|
|[alosaur](https://github.com/alosaur/alosaur)|14617.31|2.26MB|latest|true|Deno|
|[fastify](https://github.com/fastify/fastify)|12654.28|2.24MB|^3.25.3|true|Node|
|[oak](https://github.com/oakserver/oak)|10319.29|1.59MB|latest|true|Deno|
|[node_bare](https://nodejs.org)|9500.04|1.69MB|16.x|false|Node|
|[abc](https://deno.land/x/abc)|8473.38|844.03KB|latest|true|Deno|
|[opine](https://github.com/cmorten/opine)|8038.77|1.24MB|latest|true|Deno|
|[express](https://github.com/expressjs/express)|3134.69|569.39KB|^4.17.2|true|Node|


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

