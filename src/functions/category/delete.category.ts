import { db } from "../../db/prisma";

export async function deleteCategory(id: string) {
  if (!id) {
    throw new Error("Id is required");
  }

  const result = await db.category.delete({
    where: {
      id,
    },
  });

  if (!result) {
    throw new Error("Category not found");
  }

  return { result };
}
