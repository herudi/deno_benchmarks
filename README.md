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
Created At : Thu Mar 17 2022, 1:28:59 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)

|Name|Req/sec|Trf/sec|Version|Router?|Lang/Runtime|
|----|----|----|----|----|----|
|[deno_std](https://deno.land/std/http)|16175.42|2.14MB|0.119.0|false|Deno|
|[nhttp](https://github.com/nhttp/nhttp)|14120.57|1.87MB|latest|true|Deno|
|[fastify](https://github.com/fastify/fastify)|13222.76|2.35MB|^3.25.3|true|Node|
|[node_bare](https://nodejs.org)|11738.67|2.08MB|16.x|false|Node|
|[alosaur](https://github.com/alosaur/alosaur)|11532.95|1.53MB|latest|true|Deno|
|[oak](https://github.com/oakserver/oak)|11226.81|1.49MB|latest|true|Deno|
|[opine](https://github.com/cmorten/opine)|7542.14|1.00MB|latest|true|Deno|
|[abc](https://deno.land/x/abc)|6383.75|635.88KB|latest|true|Deno|
|[express](https://github.com/expressjs/express)|3755.1|682.08KB|^4.17.2|true|Node|


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

