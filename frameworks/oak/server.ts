import { Application } from "https://deno.land/x/oak@v10.1.0/mod.ts";

const app = new Application();

app.use((ctx) => {
  ctx.response.body = { name: "bench" };
});

await app.listen({ port: 8000 });
