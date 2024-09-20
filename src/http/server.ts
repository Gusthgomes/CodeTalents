import fastify from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";
import fastifyCors from "@fastify/cors";

import { getCategoryRoute } from "../routes/category/get-category";

const app = fastify({
  logger: true,
}).withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: "*",
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(getCategoryRoute);

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
