import { opine } from "https://deno.land/x/opine@2.0.2/mod.ts";

const app = opine();
app.disable("etag");
app.disable("x-powered-by");

app.get("/", function (req, res) {
  res.json({ name: "bench" });
});

app.listen(8000);
