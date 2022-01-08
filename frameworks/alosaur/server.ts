import { App, Area, Controller, Get } from "https://deno.land/x/alosaur/mod.ts";

@Controller()
class BenchController {
  @Get("/")
  json() {
    return { name: "bench" };
  }
}

@Area({
  controllers: [BenchController],
})
class BenchArea {}

const app = new App({
  areas: [BenchArea],
  logging: false,
});

app.listen();
