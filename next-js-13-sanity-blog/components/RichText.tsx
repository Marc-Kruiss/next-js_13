import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../lib/sanity.client";

export const RichText = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 m-10 mx-auto">
          <Image
            className="object-contain"
            src={urlFor(value).url()}
            fill
            alt="Blog Post"
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 list-disc space-y-3">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="ml-10 space-y-3 list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl py-5 font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl py-5 font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl py-5 font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl py-5 font-bold">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-l-rose-500 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },

  marks: {
    /*code: (props: any) => {
      console.log(props.children);
      return (
        <div>
          <CustomCodeSnippets children={props.children} />
        </div>
      );
    },*/
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-2 decoration-rose-500 underline-offset-4"
        >
          {children}
        </Link>
      );
    },
  },
};
