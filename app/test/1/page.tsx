import {getServerSession, Session} from "next-auth";
import {redirect} from "next/navigation";

import {options} from "@/app/api/auth/[...nextauth]/options";
import Image from "next/image";

export default async function ServerPage() {
  const session: Session|null = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/test/1");
  }

  return (
    <>
      <p className="pt-96">Server page!</p>
      <p>{session.user?.name} | {session.user?.email}</p>
      {session && session.user && session.user.image && <Image src={session.user?.image} alt={'Image'} width={200} height={200} className="rounded-full"/>}
    </>
  );
}
