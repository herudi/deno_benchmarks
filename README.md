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
Created At : Fri Jan 21 2022, 1:10:18 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)

|Name|Req/sec|Trf/sec|Version|Router?|Lang/Runtime|
|----|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|18769.16|2.49MB|latest|true|Deno|
|[deno_std](https://deno.land/std/http)|17906.77|2.37MB|0.119.0|false|Deno|
|[alosaur](https://github.com/alosaur/alosaur)|11995.12|1.59MB|latest|true|Deno|
|[oak](https://github.com/oakserver/oak)|11888.54|1.58MB|latest|true|Deno|
|[node_bare](https://nodejs.org)|10556.78|1.87MB|16.x|false|Node|
|[opine](https://github.com/cmorten/opine)|8743.81|1.16MB|latest|true|Deno|
|[fastify](https://github.com/fastify/fastify)|7497.13|1.33MB|^3.25.3|true|Node|
|[abc](https://deno.land/x/abc)|7045.52|701.80KB|latest|true|Deno|
|[express](https://github.com/expressjs/express)|4671.06|848.45KB|^4.17.2|true|Node|


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

