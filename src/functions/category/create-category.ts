import { db } from "../../db/prisma";

interface categoryNameProps {
  name: string;
}

export async function CreateCategory({ name }: categoryNameProps) {
  const result = await db.category.create({
    data: {
      name,
    },
  });

  if (!result) {
    throw new Error("Error creating category");
  }

  return {
    result,
  };
}
