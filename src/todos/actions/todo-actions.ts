"use server";

import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const toggleTodo = async (
  id: string,
  complete: boolean
): Promise<Todo> => {
  const todo = await prisma.todo.findFirst({ where: { id } });
  if (!todo) {
    throw `todo no existe ${id}`;
  }

  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: { complete },
  });
  revalidatePath("/dashboard/server-todos");
  return updatedTodo;
};

export const addTodo = async (description: string) => {
  try {
    const todo = await prisma.todo.create({
      data: { description },
    });
    revalidatePath("/dashboard/server-todos");
    return todo;
  } catch {
    return {
      message: "Error creando el todo",
    };
  }
};

export const deleteCompleted = async () => {
  try {
    await prisma.todo.deleteMany({ where: { complete: true } });
    revalidatePath("/dashboard/server-todos");
    return {
      message: "Todos completados",
    };
  } catch {
    return {
      message: "Error eliminado todos",
    };
  }
};
