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
Created At : Thu Jan 06 2022, 2:08:29 PM

|Frameworks|Requests/sec|Latency|Throughput/Mb|Version|Router?|Lang/Runtime|Errors|
|----|----|----|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|42649.6|2|5.65|1.1.5|true|Deno|0|
|[oak](https://github.com/oakserver/oak)|23686.8|3.76|3.14|10.1.0|true|Deno|0|


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

