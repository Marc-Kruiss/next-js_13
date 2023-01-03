import { previewData } from "next/headers";
import HomeSection from "../../components/HomeSection";
import PreviewSuspense from "../../components/PreviewSuspense";

function Homepage() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div className="w-full flex items-center justify-center">
            Loading preview...
          </div>
        }
      >
        <div>Hallo</div>
      </PreviewSuspense>
    );
  }

  return (
    <div className="h-[calc(100vh-80px)] w-full overflow-x-hidden overflow-y-scroll scrollbar-hide">
      <HomeSection />
    </div>
  );
}

export default Homepage;
