import { serve } from "https://deno.land/std@0.119.0/http/server.ts";

await serve(() =>
  new Response(JSON.stringify({ name: "bench" }), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
);
