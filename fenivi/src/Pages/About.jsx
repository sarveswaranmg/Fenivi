import { useState } from "react";

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const highlights = [
    {
      text: "Conducted pre-feasibility study for augmenting water resources in Pachamalai (Eastern Ghats) with the Tiruchirappalli District Administration.",
      gradient: "from-purple-500 to-purple-700",
    },
    {
      text: "Carried out need and feasibility analyses in Kanniyakumari district under the Green Kanniyakumari initiative.",
      gradient: "from-blue-500 to-blue-700",
    },
    {
      text: "Led digitization and restoration of Anuman Nathi (32 km) in Tirunelveli district, reviving 99 irrigation tanks that had remained dry for decades.",
      gradient: "from-teal-500 to-teal-700",
    },
    {
      text: "Digitized Pazhayaru River (Kanniyakumari) in collaboration with Anna University and the district administration.",
      gradient: "from-indigo-500 to-indigo-700",
    },
    {
      text: "Published Chennai Waterscape Series – Hydrological Insights from Pallikaranai Catchment, addressing urban water and ecosystem challenges.",
      gradient: "from-pink-500 to-pink-700",
    },
    {
      text: "Established community-led river basin organizations such as Nam Anuman Nathi, Namadhu Pazhayaru, and Namadhu Nambiyaru.",
      gradient: "from-green-500 to-green-700",
    },
    {
      text: "Conducted malnutrition mapping, anganwadi renovations, social development surveys, and renewable energy interventions in the health and urban sectors.",
      gradient: "from-orange-500 to-orange-700",
    },
    {
      text: "Organized the National Conference on Real-World Evidence in Oncology (4 editions).",
      gradient: "from-red-500 to-red-700",
    },
    {
      text: "Contributed to 200+ scientific publications in national and international journals.",
      gradient: "from-violet-500 to-violet-700",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % highlights.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + highlights.length) % highlights.length
    );
  };

  return (
    <div className="h-screen w-screen overflow-y-scroll">
      {/* First section */}
      <div className="flex w-screen h-[70%] justify-center items-end snap-start">
        <div className="flex flex-col items-center mb-10">
          <h1 className="text-black font-bold text-9xl text-center">About.</h1>
        </div>
        <div className="h-[30%] bg-gradient-to-br from-[#5304A3] via-[#9D50BB] to-[#7B2FF7]"></div>
      </div>

      {/* About Us Section */}
      <div className="flex w-screen min-h-screen items-center justify-center animate-gradient-premium snap-start px-8 md:px-16 lg:px-24 py-16">
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            About Us
          </h2>
          <p className="text-white text-lg md:text-xl leading-relaxed">
            Founded in 2017, Fenivi Research Solutions Pvt. Ltd. is a
            data-driven organization dedicated to advancing sustainable
            development through convergence-based approaches. Our expertise
            spans third-party assessments, feasibility studies, impact
            evaluations, GIS-based hydrological research, and policy advisory.
            By combining rigorous analysis with grassroots engagement, we design
            actionable solutions that are practical, cost-effective, and
            sustainable.
          </p>
        </div>
      </div>

      {/* Key Highlights Section - One Card at a Time */}
      <div className="flex flex-col w-screen min-h-screen items-center justify-center snap-start py-16 px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 text-center">
          Key Highlights
        </h2>

        {/* Progress Bar */}
        <div className="w-full max-w-4xl mb-8">
          <div className="flex gap-2">
            {highlights.map((_, index) => (
              <div
                key={index}
                className="flex-1 h-1 bg-gray-300 rounded-full overflow-hidden"
              >
                <div
                  className={`h-full bg-gradient-to-r from-purple-600 to-purple-400 transition-all duration-300 ${
                    index === currentSlide ? "w-full" : "w-0"
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Card Container */}
        <div className="relative w-full max-w-4xl h-[400px] flex items-center justify-center">
          {/* Current Card with Glassmorphism */}
          <div className="relative w-full h-full rounded-3xl overflow-hidden transition-all duration-500">
            {/* Outer glow */}
            <div className="absolute -inset-4 bg-gradient-to-br from-violet-400/60 via-purple-500/60 to-violet-600/60 rounded-3xl blur-2xl opacity-75 animate-pulse"></div>

            {/* Animated violet edges */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-violet-500/30 rounded-full blur-3xl animate-pulse"></div>
              <div
                className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 -right-10 w-32 h-32 bg-violet-400/20 rounded-full blur-2xl animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute top-1/4 -left-10 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl animate-pulse"
                style={{ animationDelay: "1.5s" }}
              ></div>
            </div>

            {/* Glass morphism card */}
            <div className="absolute inset-0 backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-3xl border border-violet-400/30 shadow-2xl">
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-3xl translate-x-[-100%] animate-[shimmer_3s_ease-in-out_infinite]"></div>

              {/* Inner glass highlights */}
              <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl animate-pulse"></div>
              <div
                className="absolute bottom-0 right-1/4 w-40 h-40 bg-gradient-to-tr from-violet-300/10 to-transparent rounded-full blur-2xl animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full h-full flex items-center justify-center p-12">
              <p className="text-white text-xl md:text-2xl leading-relaxed text-center drop-shadow-lg">
                {highlights[currentSlide].text}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-[-60px] bg-white/90 hover:bg-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <svg
              className="w-6 h-6 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-[-60px] bg-white/90 hover:bg-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <svg
              className="w-6 h-6 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Slide Counter */}
        <div className="mt-8 text-gray-600 text-lg">
          {currentSlide + 1} / {highlights.length}
        </div>

        {/* Dot Indicators */}
        <div className="flex gap-2 mt-4">
          {highlights.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-purple-600 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
