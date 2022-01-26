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
Created At : Wed Jan 26 2022, 1:22:19 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)

|Name|Req/sec|Trf/sec|Version|Router?|Lang/Runtime|
|----|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|16356.66|2.17MB|latest|true|Deno|
|[alosaur](https://github.com/alosaur/alosaur)|12033.98|1.60MB|latest|true|Deno|
|[oak](https://github.com/oakserver/oak)|11772.25|1.56MB|latest|true|Deno|
|[node_bare](https://nodejs.org)|11678.68|2.07MB|16.x|false|Node|
|[deno_std](https://deno.land/std/http)|9022.12|1.20MB|0.119.0|false|Deno|
|[opine](https://github.com/cmorten/opine)|8473.87|1.12MB|latest|true|Deno|
|[fastify](https://github.com/fastify/fastify)|7829.03|1.39MB|^3.25.3|true|Node|
|[abc](https://deno.land/x/abc)|5259.44|523.89KB|latest|true|Deno|
|[express](https://github.com/expressjs/express)|4085.1|742.02KB|^4.17.2|true|Node|


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

