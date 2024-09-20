import { z } from "zod";
import type { FastifyPluginAsync } from "fastify";

import { CreateCategory } from "../../functions/category/create-category";

const createCategorySchema = z.object({
  name: z.string(),
});

export const CreateCategoryRoute: FastifyPluginAsync = async (app) => {
  app.post(
    "/category",
    {
      schema: {
        body: createCategorySchema, // Definir o esquema Zod
      },
    },
    async (request, reply) => {
      // Tipar o corpo da requisição com base no esquema Zod
      const { name } = request.body as z.infer<typeof createCategorySchema>;

      // Função para criar a categoria
      await CreateCategory({
        name,
      });

      // Resposta adequada após a criação
      reply.status(201).send({ message: "Category created successfully" });
    }
  );
};
