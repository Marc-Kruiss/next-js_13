import { previewData } from "next/headers";
import PreviewSuspense from "../components/sanity-studio/PreviewSuspense";

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
    <div>
      <h1 className="text-5xl">Hallo</h1>
    </div>
  );
}

export default Homepage;
