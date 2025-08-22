import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";

import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub, Google],
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async signIn({}) {
      return true;
    },
    async jwt({ token }) {
      const dbUser = await prisma.user.findUnique({
        where: { email: token.email ?? "no-email" },
      });
      token.roles = dbUser?.role ?? ["no-role"];
      token.id = dbUser?.id ?? ["no-uuid"];
      return token;
    },
    async session({ session }) {
      console.log(session);
      return session;
    },
  },
});
