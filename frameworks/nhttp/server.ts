import { NHttp } from "https://deno.land/x/nhttp/mod.ts";

const app = new NHttp();

app.get("/", () => {
  return { name: "bench" };
});

app.listen(8000);
