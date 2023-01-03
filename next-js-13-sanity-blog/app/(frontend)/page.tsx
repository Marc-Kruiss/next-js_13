import { previewData } from "next/headers";
import BlogList from "../../components/BlogList";
import HomeSection from "../../components/HomeSection";
import PreviewSuspense from "../../components/PreviewSuspense";
import { fetchPosts } from "../../utils/fetchPosts";

export const revalidate = 60; // in seconds

const Homepage = async () => {
  if (previewData()) {
    const posts = await fetchPosts();
    return (
      <PreviewSuspense
        fallback={
          <div className="w-full flex items-center justify-center">
            Loading preview...
          </div>
        }
      >
        <p>Preview</p>
        <HomeSection />
        <BlogList posts={posts} />
      </PreviewSuspense>
    );
  }

  const posts = await fetchPosts();

  return (
    <div className="h-[calc(100vh-80px)] w-full overflow-x-hidden overflow-y-scroll scrollbar-hide">
      <HomeSection />
      <BlogList posts={posts} />
    </div>
  );
};

export default Homepage;
