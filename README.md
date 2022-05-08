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
Created At : Sun May 08 2022, 2:04:20 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)

|Name|Req/sec|Trf/sec|Version|Router?|Lang/Runtime|
|----|----|----|----|----|----|
|[deno_std](https://deno.land/std/http)|18800.25|2.90MB|0.119.0|false|Deno|
|[nhttp](https://github.com/nhttp/nhttp)|17158.17|2.65MB|latest|true|Deno|
|[alosaur](https://github.com/alosaur/alosaur)|14802.53|2.29MB|latest|true|Deno|
|[fastify](https://github.com/fastify/fastify)|11628.54|2.06MB|^3.25.3|true|Node|
|[oak](https://github.com/oakserver/oak)|11555.36|1.79MB|latest|true|Deno|
|[node_bare](https://nodejs.org)|9265.7|1.64MB|16.x|false|Node|
|[opine](https://github.com/cmorten/opine)|8504.3|1.31MB|latest|true|Deno|
|[abc](https://deno.land/x/abc)|6596|657.02KB|latest|true|Deno|
|[express](https://github.com/expressjs/express)|4861.88|0.86MB|^4.17.2|true|Node|


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

