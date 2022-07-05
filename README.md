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
Created At : Tue Jul 05 2022, 2:17:32 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)

|Name|Req/sec|Trf/sec|Version|Router?|Lang/Runtime|
|----|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|18594.55|2.87MB|latest|true|Deno|
|[deno_std](https://deno.land/std/http)|15242.41|2.35MB|0.119.0|false|Deno|
|[alosaur](https://github.com/alosaur/alosaur)|14330.82|2.21MB|latest|true|Deno|
|[oak](https://github.com/oakserver/oak)|11435.08|1.77MB|latest|true|Deno|
|[fastify](https://github.com/fastify/fastify)|11070.14|1.96MB|^3.25.3|true|Node|
|[opine](https://github.com/cmorten/opine)|9250.21|1.43MB|latest|true|Deno|
|[abc](https://deno.land/x/abc)|8061.57|803.01KB|latest|true|Deno|
|[node_bare](https://nodejs.org)|7726.07|1.37MB|16.x|false|Node|
|[express](https://github.com/expressjs/express)|2730.71|496.01KB|^4.17.2|true|Node|


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

