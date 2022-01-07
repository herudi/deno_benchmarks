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
Created At : Fri Jan 07 2022, 5:48:08 AM

|Frameworks|Requests/sec|Latency|Throughput/Mb|Version|Router?|Lang/Runtime|Errors|
|----|----|----|----|----|----|----|----|


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

