## Simple benchmarking Deno vs other lang/runtime.
This benchmark uses [autocannon](https://github.com/mcollina/autocannon).

`autocannon -c 40 -d 30 http://localhost:8000` (two rounds. one to warm-up, one to measure).

Example code for benchmark.
```ts
...
framework.get("/", (req, res) => {
    res.json({ name: "bench" });
});
...
```

## Output
Created At : Thu Jan 06 2022, 7:14:58 AM

|Frameworks|Req/sec|Trf/sec|Total Req|Total Trf|Version|Router?|Lang/Runtime|
|----|----|----|----|----|----|----|----|
|[deno_std](https://deno.land/std/http)|17676.22|2.34MB|531361|70.44MB|0.119.0|false|Deno|
|[nhttp](https://github.com/nhttp/nhttp)|16360.88|2.17MB|491981|65.22MB|1.1.5|true|Deno|


## Usage
```bash
git clone https://github.com/herudi/deno_benchmark.git
cd deno_benchmark
npm install
npm run bench
```
> For other frameworks please create PRs.
## License

[MIT](LICENSE)

