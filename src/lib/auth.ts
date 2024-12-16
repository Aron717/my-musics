import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { prisma } from "./prisma"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [GitHub({clientId: process.env.AUTH_GITHUB_ID as string, clientSecret: process.env.AUTH_GITHUB_SECRET as string
  })],
})