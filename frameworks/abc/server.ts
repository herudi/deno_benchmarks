import { Application } from "https://deno.land/x/abc/mod.ts";

const app = new Application();

app
  .get("/", (c) => {
    return { name: "bench" };
  })
  .start({ port: 8000 });
