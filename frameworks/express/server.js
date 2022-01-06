const express = require("express");

const app = express();
app.disable("etag");
app.disable("x-powered-by");

app.get("/", (req, res) => {
  res.send({ name: "bench" });
});

app.listen(8000);
