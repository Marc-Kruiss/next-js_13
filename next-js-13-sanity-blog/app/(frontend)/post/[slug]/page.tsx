import { PortableText } from "@portabletext/react";
import dayjs from "dayjs";
import Image from "next/image";
import { RichText } from "../../../../components/RichText";
import { urlFor } from "../../../../lib/sanity.client";
import { fetchPost } from "../../../../utils/fetchPosts";

const PostDetailPage = async ({ params }: any) => {
  const post: Post = await fetchPost(params.slug);

  console.log(post);
  return (
    <div className="flex flex-col p-10">
      <section className="space-y-5">
        <div className="relative w-full h-96 rounded-xl">
          {post.mainImage && (
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              fill
              className="object-cover object-top"
            />
          )}
        </div>
        <h1 className="text-5xl font-semibold pt-5">{post.title}</h1>
        <div className="flex items-center space-x-1">
          {post.author.image && (
            <Image
              width={20}
              height={20}
              src={urlFor(post.author.image).url()}
              alt={post.title}
              className="object-contain rounded-full"
            />
          )}
          <p className="text-xs font-extralight">{post.author.name}</p>
          <p className="text-xs font-extralight">
            {dayjs(post.publishedAt).format("DD.MM.YYYY HH:mm")}
          </p>
        </div>
        <p className="text-gray-500 font-light w-96">{post.description}</p>
      </section>
      <section className="space-y-5 pt-5">
        <PortableText value={post.body} components={RichText} />
      </section>
    </div>
  );
};

export default PostDetailPage;
