import { TabBar } from "@/components";
import { cookies } from "next/headers";

export const metadata = {
  title: "Cookies Page",
  description: "SEO Title",
};

export default async function CookiesPage() {
  const cookieStore = await cookies();
  const tab = Number(cookieStore.get("selectedTab")?.value ?? 1);

  // const allCookies = cookieStore.getAll();
  return (
    <div className="grid grid-cols-1 sm:grid-col gap-3">
      <div className="flex flex-col">
        <span className="text-3xl">Tabs</span>
        <TabBar currentTab={tab} />
      </div>
    </div>
  );
}
