import { NHttp } from "https://deno.land/x/nhttp@1.1.5/mod.ts";

const app = new NHttp();

app.get("/", () => {
  return { name: "bench" };
});

app.listen(8000);
