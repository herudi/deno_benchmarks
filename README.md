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
Created At : Fri Jan 07 2022, 6:49:18 AM

|Frameworks|Requests/sec|Transfer/sec|Version|Router?|Lang/Runtime|
|----|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|20531.91|2.72MB|1.1.5|true|Deno|
|[deno_std](https://deno.land/std/http)|20119.27|2.67MB|0.119.0|false|Deno|


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

