import { WidgetItem } from "@/components";
import { redirect } from "next/navigation";
import { auth } from "../../../auth";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/api/auth/signin");
  }
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <WidgetItem />

      {JSON.stringify(session)}
    </div>
  );
}
