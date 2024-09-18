import fastify from "fastify";

const app = fastify({
  logger: true,
});

try {
  app
    .listen({
      port: 3333,
    })
    .then(() => {
      console.log("Server is running on port 3333");
    });
} catch (error) {
  app.log.error(error);
  process.exit();
}
