import { opine } from "https://deno.land/x/opine/mod.ts";

const app = opine();
app.disable('etag');
app.disable('x-powered-by');

app.get("/", function (req, res) {
  res.json({ name: "bench" });
});

app.listen(8000);