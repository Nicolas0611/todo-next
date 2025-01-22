import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const take = Number(searchParams.get("take")) ?? 10;
  const skip = Number(searchParams.get("skip")) ?? 0;
  if (isNaN(take) || isNaN(skip))
    return NextResponse.json(
      { message: "Take or skip need to be a number" },
      { status: 400 }
    );
  const todos = await prisma.todo.findMany({
    take: take,
    skip: skip,
  });
  return NextResponse.json(todos);
}