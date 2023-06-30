import {JSX} from "react";
import Image from "next/image";
import Link from "next/link";

import Welcome from "@/public/welcome.png";
import TrendUp from "@/public/trend-up.svg";

import TrendingPost from "@/app/components/TrendingPost";

const popularPostsData = [
  {
    author: {
      name: "JP Brown",
      link: "/",
    },
    title: "What Really Happens to a Human Body at Titanic Depths",
    subtitle: "…there was a lot announced at Config 2023!",
    category: "Category",
    link: "/",
    date: "Jun 23",
    minutes: "4",
    membersOnly: true,
  },
  {
    author: {
      name: "JP Brown",
      link: "/",
    },
    publication: {
      name: "Making Millions",
      link: "/",
    },
    title: "America Failed Generation X",
    subtitle: "Diary of an Interstellar Voyage: Part 8 (June 16, 2023)",
    category: "Category",
    link: "/",
    date: "Jun 23",
    minutes: "4",
    membersOnly: true,
  },
  {
    author: {
      name: "JP Brown",
      link: "/",
    },
    title: "What Really Happens to a Human Body at Titanic Depths",
    subtitle: "Ten lessons I learned the sweaty way so you don’t have to",
    category: "Category",
    link: "/",
    date: "Jun 23",
    minutes: "4",
    membersOnly: true,
  },
  {
    author: {
      name: "JP Brown",
      link: "/",
    },
    title: "Find a Needle in the Ocean",
    subtitle: "Creativity, memory and our relationship with time",
    category: "Category",
    link: "/",
    date: "Jun 23",
    minutes: "4",
    membersOnly: false,
  },
  {
    author: {
      name: "JP Brown",
      link: "/",
    },
    title: "What Really Happens to a Human Body at Titanic Depths",
    subtitle: "Is endless scrolling evil? How can we balance ease-of-use with what’s best for humanity?",
    category: "Category",
    link: "/",
    date: "Jun 23",
    minutes: "4",
    membersOnly: true,
  },
  {
    author: {
      name: "JP Brown",
      link: "/",
    },
    publication: {
      name: "The Medium Blog",
      link: "/",
    },
    title: "Register now for Medium Day",
    subtitle: "What I learned from introducing myself to a stranger every day for a month",
    category: "Category",
    link: "/",
    date: "Jun 23",
    minutes: "4",
    membersOnly: false,
  },
];

export default function Home(): JSX.Element {
  return (
    <main>
      <section className="px-5 md:px-12 lg:px-16 2xl:px-44 border-b-1 border-solid border-b-black bg-amber-400
      flex flex-row justify-between justify-items-start">
        <div className="w-fit pt-36 sm:w-500px lg:w-550px">
          <h1 className="font-medium text-7xl text-85px lg:text-106px font-PTSerif tracking-tighter">
            Stay curious.
          </h1>
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
      <section className="px-5 py-11 md:px-12 lg:px-16 2xl:px-44 border-b-1 border-solid border-b-gray-200">
        <div className="flex mb-3">
          <Image src={TrendUp} alt="Trending posts" width={24}/>
          <p className="font-bold ms-3">Trending on QuillPen</p>
        </div>
        <div className="grid md:grid-cols-2 md:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 gap-x-8 gap-y-5">
          {popularPostsData.map((post, id) => {
            return <TrendingPost
              key={id}
              no={id+1}
              author={post.author}
              publication={post.publication}
              title={post.title}
              link={post.link}
              date={post.date}
              minutes={post.minutes}
              membersOnly={post.membersOnly}
              bookmarkingEnabled={false}
            />;
          })}
        </div>
      </section>
      <section className="px-5 py-11 md:px-12 lg:px-16 2xl:px-44 flex flex-col-reverse lg:flex-row">
        <div className="border-2 border-solid border-red-600 lg:flex-5 flex flex-col gap-10">
          {popularPostsData.map((post, id) => {
            return <TrendingPost
              key={id}
              author={post.author}
              publication={post.publication}
              title={post.title}
              subtitle={post.subtitle}
              category={post.category}
              link={post.link}
              date={post.date}
              minutes={post.minutes}
              membersOnly={post.membersOnly}
              bookmarkingEnabled={true}
            />;
          })}
        </div>
        <footer className="border-2 border-solid border-blue-600 lg:flex-3">
          Footer
        </footer>
      </section>
    </main>
  );
}
