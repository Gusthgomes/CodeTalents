import fastify from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";
import fastifyCors from "@fastify/cors";

// Category routes
import { GetCategoryRoute } from "../routes/category/get-category";
import { CreateCategoryRoute } from "../routes/category/create-category";
import { deleteCategoryRoute } from "../routes/category/delete.category";

// User routes
import { createUserRoute } from "../routes/user/create-user";

const app = fastify({
  logger: true,
}).withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: "*",
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

// Category routes
app.register(GetCategoryRoute);
app.register(CreateCategoryRoute);
app.register(deleteCategoryRoute);

// User routes
app.register(createUserRoute);

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
