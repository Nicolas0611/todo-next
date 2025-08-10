"use client";
import { useSession } from "next-auth/react";

const SidebarClient = () => {
  const { data: session } = useSession();
  return <div>{session?.user?.email}</div>;
};

export default SidebarClient;
