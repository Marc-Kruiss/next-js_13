import TypeParagraph from "./TypeParagraph";

function HomeSection() {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-gradient-to-b from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-900 w-full flex flex-col justify-center py-10 px-10 md:grid md:grid-cols-2 gap-10 md:justify-center md:items-center">
      <div className="flex flex-col space-y-5">
        <h1 className="text-3xl md:text-5xl font-medium">
          Marc Kruiß über{" "}
          <span className="underline decoration-rose-500 decoration-2 underline-offset-4 flex-wrap break-words">
            Technologien und Programmiersprachen
          </span>
          . Kurse und Codesnippets
        </h1>
        <TypeParagraph customText="Programmieren mit Leidenschaft"/>
      </div>
      <div className="hidden h-[60vh] w-full bg-transparent sm:flex items-center justify-center rounded-xl">
        <video className="w-full h-full object-cover rounded-xl object-center" controls>
            <source src="/videos/PreviewVideo.mp4" />
        </video>
      </div>
    </section>
  );
}

export default HomeSection;
