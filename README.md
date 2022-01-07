## Simple deno benchmark.
This benchmark uses [wrk](https://github.com/wg/wrk).

`wrk -t2 -c40 -d10s http://localhost:8000`

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
Created At : Fri Jan 07 2022, 7:48:05 AM
Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)

|Name|Req/sec|Trf/sec|Version|Router?|Lang/Runtime|
|----|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|20089.6|2.66MB|latest|true|Deno|
|[deno_std](https://deno.land/std/http)|18725.79|2.48MB|0.119.0|false|Deno|
|[oak](https://github.com/oakserver/oak)|11349.83|1.50MB|latest|true|Deno|


## Usage
```bash
git clone https://github.com/herudi/deno_benchmark.git
cd deno_benchmark

// for all
deno run -A bench.ts

// for single
deno run -A bench.ts framework_name
```
## For other frameworks ? please create PRs.
### Create server `./frameworks/myserver/server.ts`.
### Create info `./frameworks/myserver/info.json`.
```json
// example info.json
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

