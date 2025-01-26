import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const seedData = [
    {
      description: "Piedra del Alma",
      complete: true,
    },
    {
      description: "Piedra del Poder",
    },
    {
      description: "Piedra del Tiempo",
    },
    {
      description: "Piedra del Espacio",
    },
    {
      description: "Piedra del Realidad",
    },
  ];

  await prisma.todo.deleteMany();

  const todo = await prisma.todo.createMany({
    data: seedData,
  });
  console.log(todo);

  return NextResponse.json({
    message: "Seed executed",
  });
}
