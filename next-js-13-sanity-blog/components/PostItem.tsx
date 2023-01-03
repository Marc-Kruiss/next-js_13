import { ChevronRightIcon } from "@heroicons/react/24/solid";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/sanity.client";
interface Props {
  post: Post;
}
const PostItem = ({ post }: Props) => {
  return (
    <article className="w-full shadow-lg rounded-lg group bg-gray-100 dark:bg-slate-800">
      <div className="w-full h-52 relative drop-shadow-lg group-hover:scale-[102%] transition duration-200 ease-out">
        <Link href={`/post/[slug]`} as={`/post/${post.slug.current}`}>
          {post.mainImage && (
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              fill
              className="object-cover object-top"
            />
          )}
        </Link>
        <div className="absolute bottom-0 w-full bg-opacity-10 bg-gray-500 backdrop-blur-lg drop-shadow-lg p-5 flex justify-between">
          <div>
            <p className="text-sm">{post.title}</p>
            <p className="text-xs font-light italic">
              {dayjs(post.publishedAt).format("DD.MM.YYYY")}
            </p>
          </div>
        </div>
      </div>
      <div className="p-5 flex flex-col justify-between h-52">
        <div>
          <h3 className="font-bold">{post.title}</h3>
          <p className="text-sm pt-1 text-gray-500 line-clamp-3">
            {post.description}
          </p>
        </div>
        <Link
          href={`/post/[slug]`}
          as={`/post/${post.slug.current}`}
          className="flex items-center space-x-2"
        >
          <span className="group-hover:underline">Read more</span>
          <span>
            <ChevronRightIcon className="h-4 w-4" />
          </span>
        </Link>
      </div>
    </article>
  );
};

export default PostItem;
