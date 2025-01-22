import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

interface Segments {
  params: {
    id: string;
  };
}
export async function GET(request: Request, { params }: Segments) {
  const { id } = params;
  const todoById = await prisma.todo.findFirst({
    where: {
      id,
    },
  });
  if (!todoById) {
    return NextResponse.json(
      { message: `Not todo ${id} found by that id` },
      { status: 404 }
    );
  }
  return NextResponse.json(todoById);
}
