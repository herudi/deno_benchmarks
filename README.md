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
Created At : Sat Jul 02 2022, 2:14:25 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)

|Name|Req/sec|Trf/sec|Version|Router?|Lang/Runtime|
|----|----|----|----|----|----|
|[deno_std](https://deno.land/std/http)|17944.44|2.77MB|0.119.0|false|Deno|
|[nhttp](https://github.com/nhttp/nhttp)|13676.7|2.11MB|latest|true|Deno|
|[alosaur](https://github.com/alosaur/alosaur)|13301|2.05MB|latest|true|Deno|
|[oak](https://github.com/oakserver/oak)|10283.96|1.59MB|latest|true|Deno|
|[fastify](https://github.com/fastify/fastify)|8474.89|1.50MB|^3.25.3|true|Node|
|[opine](https://github.com/cmorten/opine)|7480.56|1.16MB|latest|true|Deno|
|[node_bare](https://nodejs.org)|6741.05|1.20MB|16.x|false|Node|
|[abc](https://deno.land/x/abc)|3867.74|385.26KB|latest|true|Deno|
|[express](https://github.com/expressjs/express)|3369.23|611.99KB|^4.17.2|true|Node|


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

