const fastify = require("fastify");

const app = fastify();

const schema = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          name: {
            type: "string",
          },
        },
      },
    },
  },
};
app.get("/", schema, (request, reply) => {
  reply.send({ name: "bench" });
});

app.listen(8000);
