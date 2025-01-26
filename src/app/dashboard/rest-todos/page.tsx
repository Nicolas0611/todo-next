import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos";

export const metadata = {
  title: "Listado de todos",
  description: "SEO Title",
};

export default async function PageTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });
  return (
    <div>
      <TodosGrid todos={todos} />
    </div>
  );
}