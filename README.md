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
Created At : Sat Jul 09 2022, 2:04:36 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)

|Name|Req/sec|Trf/sec|Version|Router?|Lang/Runtime|
|----|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|18800.49|2.90MB|latest|true|Deno|
|[deno_std](https://deno.land/std/http)|18397.79|2.84MB|0.119.0|false|Deno|
|[fastify](https://github.com/fastify/fastify)|11734.86|2.08MB|^3.25.3|true|Node|
|[alosaur](https://github.com/alosaur/alosaur)|11573.52|1.79MB|latest|true|Deno|
|[node_bare](https://nodejs.org)|10125.01|1.80MB|16.x|false|Node|
|[oak](https://github.com/oakserver/oak)|8980.84|1.39MB|latest|true|Deno|
|[opine](https://github.com/cmorten/opine)|7885.37|1.22MB|latest|true|Deno|
|[abc](https://deno.land/x/abc)|7109.88|708.21KB|latest|true|Deno|
|[express](https://github.com/expressjs/express)|4344.45|789.13KB|^4.17.2|true|Node|


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

