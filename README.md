## Simple benchmark, Deno and other lang/runtime.
This benchmark uses [autocannon](https://github.com/mcollina/autocannon).

`autocannon -c 100 -d 10 http://localhost:8000` (two rounds. one to warm-up, one to measure).

Example code for benchmark.
```ts
...
framework.get("/", (req, res) => {
    res.json({ name: "bench" });
});
...
```

## Output
Created At : Fri Jan 07 2022, 6:25:56 AM

|Frameworks|Requests/sec|Latency|Throughput/Mb|Version|Router?|Lang/Runtime|Errors|
|----|----|----|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|37186.4|2.14|4.93|1.1.5|true|Deno|0|
|[deno_std](https://deno.land/std/http)|24161.6|3.67|3.20|0.119.0|false|Deno|0|


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

