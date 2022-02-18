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
Created At : Fri Feb 18 2022, 1:26:19 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)

|Name|Req/sec|Trf/sec|Version|Router?|Lang/Runtime|
|----|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|17966.62|2.38MB|latest|true|Deno|
|[deno_std](https://deno.land/std/http)|17957.32|2.38MB|0.119.0|false|Deno|
|[alosaur](https://github.com/alosaur/alosaur)|12597.51|1.67MB|latest|true|Deno|
|[oak](https://github.com/oakserver/oak)|10592.88|1.40MB|latest|true|Deno|
|[node_bare](https://nodejs.org)|10201.99|1.81MB|16.x|false|Node|
|[fastify](https://github.com/fastify/fastify)|10180.75|1.81MB|^3.25.3|true|Node|
|[opine](https://github.com/cmorten/opine)|9011.15|1.19MB|latest|true|Deno|
|[abc](https://deno.land/x/abc)|5513.09|549.16KB|latest|true|Deno|
|[express](https://github.com/expressjs/express)|4062.02|737.83KB|^4.17.2|true|Node|


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

