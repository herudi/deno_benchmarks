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
Created At : Sat Jan 29 2022, 1:14:34 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)

|Name|Req/sec|Trf/sec|Version|Router?|Lang/Runtime|
|----|----|----|----|----|----|
|[deno_std](https://deno.land/std/http)|18651.01|2.47MB|0.119.0|false|Deno|
|[nhttp](https://github.com/nhttp/nhttp)|14723.91|1.95MB|latest|true|Deno|
|[alosaur](https://github.com/alosaur/alosaur)|11281.12|1.50MB|latest|true|Deno|
|[node_bare](https://nodejs.org)|10905.64|1.93MB|16.x|false|Node|
|[fastify](https://github.com/fastify/fastify)|9453.14|1.68MB|^3.25.3|true|Node|
|[oak](https://github.com/oakserver/oak)|8733.4|1.16MB|latest|true|Deno|
|[opine](https://github.com/cmorten/opine)|7412.57|0.98MB|latest|true|Deno|
|[abc](https://deno.land/x/abc)|7237.69|720.94KB|latest|true|Deno|
|[express](https://github.com/expressjs/express)|4877.2|0.87MB|^4.17.2|true|Node|


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

