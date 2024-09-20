import { FastifyPluginAsync } from "fastify";

import { getCategory } from "../../functions/category/get-category";

export const getCategoryRoute: FastifyPluginAsync = async (app) => {
  app.get("/category", async (request, reply) => {
    const result = await getCategory();

    if (!result) {
      throw new Error("Category not found");
    }

    reply.send(result);
  });
};
