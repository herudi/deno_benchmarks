const http = require("http");

http
  .Server((req, res) => {
    res.setHeader("content-type", "application/json; charset=utf-8");
    res.end(JSON.stringify({
      name: "bench",
    }));
  })
  .listen(8000);
