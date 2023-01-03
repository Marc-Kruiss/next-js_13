import PostItem from "./PostItem";

interface Props {
  posts: Post[];
}

function BlogList({ posts }: Props) {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-gradient-to-b from-gray-100 to-gray-50 dark:from-slate-900 dark:to-slate-800 w-full flex flex-col py-10 px-10">
      <div className="space-y-5 border-b border-rose-500">
        <h1 className="text-5xl">Blog</h1>
        <p className="text-gray-400 font-light pb-5 italic">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut
        </p>
      </div>
      <div className="flex flex-col items-start sm:grid sm:grid-cols-2 gap-10 lg:grid-cols-3 pt-10">
        {posts.map((post, index) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </section>
  );
}

export default BlogList;
