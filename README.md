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
Created At : Sat Feb 05 2022, 1:25:52 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)

|Name|Req/sec|Trf/sec|Version|Router?|Lang/Runtime|
|----|----|----|----|----|----|
|[deno_std](https://deno.land/std/http)|18233.15|2.42MB|0.119.0|false|Deno|
|[nhttp](https://github.com/nhttp/nhttp)|16265.51|2.16MB|latest|true|Deno|
|[alosaur](https://github.com/alosaur/alosaur)|12906.81|1.71MB|latest|true|Deno|
|[oak](https://github.com/oakserver/oak)|10220.07|1.35MB|latest|true|Deno|
|[opine](https://github.com/cmorten/opine)|9180.9|1.22MB|latest|true|Deno|
|[fastify](https://github.com/fastify/fastify)|8718.98|1.55MB|^3.25.3|true|Node|
|[node_bare](https://nodejs.org)|7912.56|1.40MB|16.x|false|Node|
|[abc](https://deno.land/x/abc)|4304.69|428.79KB|latest|true|Deno|
|[express](https://github.com/expressjs/express)|3964.06|720.03KB|^4.17.2|true|Node|


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

