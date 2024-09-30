import z from "zod";
import type { FastifyPluginAsync } from "fastify";

import { deleteCategory } from "../../functions/category/delete.category";

const deleteCategorySchema = z.object({
  id: z.string(),
});

export const deleteCategoryRoute: FastifyPluginAsync = async (app) => {
  app.delete(
    "/category/:id",
    {
      schema: {
        params: deleteCategorySchema,
      },
    },
    async (request, reply) => {
      const { id } = request.params as { id: string };

      try {
        await deleteCategory(id);
        reply.status(200).send({ message: "Category deleted successfully" });
      } catch (error) {
        reply.status(404).send({ message: "Category not found" });
      }
    }
  );
};
