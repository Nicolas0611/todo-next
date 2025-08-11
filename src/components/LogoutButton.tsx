"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { CiLogout } from "react-icons/ci";

export const LogoutButton = () => {
  const { status } = useSession();
  type Status = "authenticated" | "unauthenticated" | "loading";

  const accountHandler: Record<Status, () => Promise<void>> = {
    authenticated: () => signOut(),
    unauthenticated: () => signIn(),
    loading: () => Promise.resolve(),
  };

  return (
    <button
      onClick={() => accountHandler[status]()}
      className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
    >
      <CiLogout />
      <span className="group-hover:text-gray-700">
        {status === "authenticated" ? "Logout" : "Log in"}
      </span>
    </button>
  );
};
