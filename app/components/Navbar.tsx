import Image from "next/image";
import Link from "next/link";

import QuillPenIcon from "@/public/icon.png";

export default function Navbar() {
  return (
    <nav className="fixed w-full h-75px px-5 md:px-12 lg:px-16 2xl:px-44 border-solid border-b-1 border-black
    bg-amber-400 flex flex-row justify-between align-middle">
      <Link href="/" className="flex items-center">
        <Image src={QuillPenIcon} height={30} alt="WriteIt Logo"/>
        <p className="pl-1 text-3xl text-zinc-800 font-bold font-PTSerif">QuillPen</p>
      </Link>
      <div className="w-auto sm:w-40 md:w-26rem flex justify-between items-center text-sm font-semibold">
        <Link href="/" className="hidden md:block">Our story</Link>
        <Link href="/" className="hidden md:block">Membership</Link>
        <Link href="/" className="hidden md:block">Write</Link>
        <Link href="/" className="hidden sm:block">Sign In</Link>
        <Link href="/" className="p-2 px-4 rounded-full bg-black text-white">Get started</Link>
      </div>
    </nav>
  )
}
