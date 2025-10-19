export default function Projects() {
  return (
    <div className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {/* First section */}
      <div className="flex w-screen h-[70%] justify-center items-end snap-start">
        <div className="flex flex-col items-center mb-10">
          <h1 className="text-black font-bold text-9xl text-center">
            Projects.
          </h1>
        </div>
        <div className="h-[30%] bg-gradient-to-br from-[#5304A3] via-[#9D50BB] to-[#7B2FF7]">
        </div>
      </div>

      {/* Second section: Gradient + tagline */}
      <div className="flex w-screen h-screen items-center justify-center bg-gradient-to-br from-[#5304A3] via-[#9D50BB] to-[#7B2FF7] snap-start">
        <p className="text-white text-3xl text-center max-w-2xl leading-snug">
          Explore a growing library of research, publications, and insights that drive sustainable solutions.
        </p>
      </div>
    </div>
  );
}
