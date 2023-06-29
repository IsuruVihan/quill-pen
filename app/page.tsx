import {JSX} from "react";

import Image from "next/image";
import Link from "next/link";

import Welcome from "@/public/welcome.png";

export default function Home(): JSX.Element {
  return (
    <main>
      <section className="px-5 md:px-12 lg:px-16 2xl:px-44 border-b-1 border-solid border-b-black bg-amber-400
      flex flex-row justify-between">
        <div className="w-fit pt-36 sm:w-500px lg:w-550px">
          <h2 className="font-medium text-7xl text-85px lg:text-106px font-PTSerif tracking-tighter">
            Stay curious.
          </h2>
          <h2 className="w-fit pt-12 md:pt-12 lg:pt-9 pb-10 text-2xl font-semibold leading-6">
            Discover stories, thinking, and expertise from writers on any topic.
          </h2>
          <div className="w-fit p-2 px-12 mb-24 rounded-full bg-black text-white text-xl">
            <Link href={"/"}>
              Start reading
            </Link>
          </div>
        </div>
        <div className="md:w-1/4 lg:w-1/3 hidden md:block my-auto">
          <Image src={Welcome} className="w-fit" alt={"Welcome!"}/>
        </div>
      </section>
    </main>
  );
}
