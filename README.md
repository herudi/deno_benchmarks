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
Created At : Mon Jan 24 2022, 1:22:07 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)

|Name|Req/sec|Trf/sec|Version|Router?|Lang/Runtime|
|----|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|19271.6|2.55MB|latest|true|Deno|
|[deno_std](https://deno.land/std/http)|16855.28|2.23MB|0.119.0|false|Deno|
|[oak](https://github.com/oakserver/oak)|11948.71|1.58MB|latest|true|Deno|
|[alosaur](https://github.com/alosaur/alosaur)|10090.9|1.34MB|latest|true|Deno|
|[fastify](https://github.com/fastify/fastify)|9475.96|1.68MB|^3.25.3|true|Node|
|[opine](https://github.com/cmorten/opine)|9407.3|1.25MB|latest|true|Deno|
|[node_bare](https://nodejs.org)|8971.33|1.59MB|16.x|false|Node|
|[express](https://github.com/expressjs/express)|4633.15|841.57KB|^4.17.2|true|Node|
|[abc](https://deno.land/x/abc)|4323.44|430.66KB|latest|true|Deno|


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

