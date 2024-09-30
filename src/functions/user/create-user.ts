import { db } from "../../db/prisma";

export async function createUser(
  name: string,
  email: string,
  password: string
) {
  try {
    const result = await db.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return { result };
  } catch (error) {
    throw new Error("Error creating user: " + String(error));
  }
}
