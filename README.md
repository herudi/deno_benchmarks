## Simple benchmark, Deno and other lang/runtime.
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
Created At : Thu Jan 06 2022, 1:59:57 PM

|Frameworks|Requests/sec|Latency|Throughput/Mb|Version|Router?|Lang/Runtime|Errors|
|----|----|----|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|21321.8|1.5|2.83|1.1.5|true|Deno|0|
|[oak](https://github.com/oakserver/oak)|19676.41|1.58|2.61|10.1.0|true|Deno|0|


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

