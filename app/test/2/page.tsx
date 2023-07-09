"use client";
// You must use an AuthProvider for
// client components to useSession

import {JSX} from "react";
import {useSession} from "next-auth/react";
import {redirect} from "next/navigation";

export default function ClientPage(): JSX.Element {
  const {data: session} = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/test/2");
    }
  });

  return (
    <>
      <p className="pt-96">Client page!</p>
      <p>{session?.user?.name} | {session?.user?.email}</p>
    </>
  );
}
