"use server"

import { auth } from "@/lib/auth";

export default async function Home() {
  const session = await auth()
  return (
    <main className="">
      {session ? (
        <>
          <h1>Hello {session.user?.email}</h1>
          <img src={session.user?.image || ""} alt="anyad" />
        </>) : null}
    </main>
  );
}
