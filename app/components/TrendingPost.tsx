import {JSX} from "react";
import Image from "next/image";
import Link from "next/link";

import Avatar from "@/public/avatar.jpg";
import Star from "@/public/star.png";
import Bookmark from "@/public/bookmark.svg";
import Thumbnail from "@/public/post-thumbnail.jpg";

type Props = {
  no?: number,
  author: {
    name: string,
    // image
    link: string,
  },
  publication?: {
    name: string,
    // image
    link: string,
  },
  title: {
    content: string,
    size: "regular" | "large",
  },
  subtitle?: {
    content: string,
  },
  // thumbnail,
  category?: string,
  link: string,
  date: string,
  minutes: string,
  membersOnly: boolean,
  bookmarkingEnabled: boolean,
};

export default function TrendingPost(props: Props): JSX.Element {
  const {
    no,
    author,
    publication,
    title,
    subtitle,
    category,
    link,
    date,
    minutes,
    membersOnly,
    bookmarkingEnabled,
  } = props;

  const formatBlogTitle = (screen: "2xl" | "xl" | "lg" | "md" | "sm" | "xs") : string => {
    const maxLengths = {
      "2xl": { regular: 170, large: 95, },
      "xl": { regular: 85, large: 90, },
      "lg": { regular: 102, large: 50, },
      "md": { regular: 73, large: 80, },
      "sm": { regular: 153, large: 120, },
      "xs": { regular: 67, large: 35, },
    };

    if (title.size === "regular") {
      if (title.content.length > maxLengths[screen].regular) {
        return title.content.substring(0, maxLengths[screen].regular) + "...";
      }
      return title.content.substring(0, maxLengths[screen].regular);
    }
    if (title.content.length > maxLengths[screen].large) {
      return title.content.substring(0, maxLengths[screen].large) + "...";
    }
    return title.content.substring(0, maxLengths[screen].large);
  }

  return (
    <div className="flex flex-row">
      {no && <div className="flex-3 sm:flex-1 xl:flex-2 font-extrabold text-gray-200 text-3xl tracking-tighter">
        0{no}
      </div>}
      <div className="flex-3 sm:flex-5 md:flex-2 lg:flex-7 xl:flex-7 2xl:flex-5 flex flex-col justify-evenly gap-1.5">
        <div className="flex items-center gap-2 h-5">
          <Link href={publication ? publication.link : author.link}>
            <Image className="rounded-full" src={Avatar} alt="Avatar" width={20} height={20}/>
          </Link>
          <p className="font-bold text-sm">
            <Link href={author.link}>
              <span>{author.name}</span>
            </Link>
            {publication && <>
              <span className="text-gray-500"> in </span>
              <Link href={publication.link}>
                <span>{publication.name}</span>
              </Link>
            </>}
          </p>
        </div>
        <div>
          <Link href={link}>
            <p
              className={
                `hidden 2xl:block font-extrabold leading-snug ${title.size === "regular" ? "text-md" : "text-2xl"}`
              }
            >{formatBlogTitle("2xl")}</p>
            <p
              className={
                `hidden xl:block 2xl:hidden font-extrabold leading-snug ${title.size === "regular" ? 
                  "text-md" : "text-2xl"}`
              }
            >{formatBlogTitle("xl")}</p>
            <p
              className={
                `hidden lg:block xl:hidden font-extrabold leading-snug ${title.size === "regular" ? 
                  "text-md" : "text-2xl"}`
              }
            >{formatBlogTitle("lg")}</p>
            <p
              className={
                `hidden md:block lg:hidden font-extrabold leading-snug ${title.size === "regular" ? 
                  "text-md" : "text-2xl"}`
              }
            >{formatBlogTitle("md")}</p>
            <p className="hidden sm:block md:hidden font-extrabold leading-snug text-md">{
              formatBlogTitle("sm")}
            </p>
            <p className="block sm:hidden font-extrabold leading-snug text-md">
              {formatBlogTitle("xs")}
            </p>
          </Link>
          {subtitle && <Link href={link} className="hidden md:block">
            <p className="font-semibold leading-snug text-gray-500">
              {subtitle.content.length > 50 ?
                `${subtitle.content.substring(0, 50)}...` : subtitle.content
              }
            </p>
          </Link>}
        </div>
        <div className="flex flex-row justify-between">
          <div className="h-5 flex gap-1 sm:gap-2 items-center font-normal text-gray-500 text-sm">
            <p>{date}</p>
            <p>|</p>
            <p>{minutes} min read</p>
            {category && <p className="hidden sm:block">|</p>}
            {category &&
              <Link href={"/"} className="hidden sm:block">
                <p className="bg-gray-100 p-1 rounded-2xl hover:bg-gray-200 transition-colors duration-300 ease-in-out">
                  {category}
                </p>
              </Link>
            }
            {membersOnly && <div className="py-auto">
              <Image src={Star} alt="Members only" width={13} height={13}/>
            </div>}
          </div>
          {bookmarkingEnabled && <Image src={Bookmark} alt={"Add bookmark"} className="cursor-pointer" width={30}/>}
        </div>
      </div>
      {subtitle &&
        <div className="flex-2 sm:flex-2 md:flex-1 lg:flex-4 xl:flex-3 2xl:flex-2 flex justify-end items-center">
          <Image src={Thumbnail} alt={title.content} className="hidden md:block" width={200}/>
          <Image src={Thumbnail} alt={title.content} className="hidden sm:block md:hidden" width={150}/>
          <Image src={Thumbnail} alt={title.content} className="block sm:hidden" height={100}/>
        </div>
      }
    </div>
  );
}
