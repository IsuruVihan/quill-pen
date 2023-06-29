import {JSX} from "react";
import Image from "next/image";
import Link from "next/link";

import Avatar from "@/public/avatar.jpg";
import Star from "@/public/star.png";

type Props = {
  no: number,
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
  title: string,
  link: string,
  date: string,
  minutes: string,
  membersOnly: boolean,
};

export default function TrendingPost(props: Props): JSX.Element {
  const {no, author, publication, title, link, date, minutes, membersOnly} = props;

  return (
    <div className="flex flex-row">
      <div className="flex-1 sm:flex-1 xl:flex-2 font-extrabold text-gray-200 text-3xl tracking-tighter">
        0{no}
      </div>
      <div className="pt-1.5 flex-5 sm:flex-11 md:flex-5 lg:flex-7 xl:flex-11">
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
        <Link href={link}>
          <p className="font-extrabold leading-snug py-2">{title}</p>
        </Link>
        <div className="h-5 flex gap-2 items-center font-semibold text-gray-500 text-sm">
          <p>{date}</p>
          <p>|</p>
          <p>{minutes} minutes read</p>
          {membersOnly && <div className="py-auto">
            <Image src={Star} alt="Members only" width={13} height={13}/>
          </div>}
        </div>
      </div>
    </div>
  );
}
