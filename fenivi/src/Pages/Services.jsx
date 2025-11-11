export default function Services() {
  const certificationCards = [
    {
      id: 1,
      title: "Certificate Course in Psycho-Oncology Research",
      img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1600&q=80",
    },
    {
      id: 2,
      title: "Certificate Course in Research Methodology & Scientific Writing",
      img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1600&q=80",
    },
    {
      id: 3,
      title: "Short-Term Research Skill Workshops",
      subtitle: "(Proposal Writing, Data Analysis, Publication Skills)",
      img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=80",
    },
    {
      id: 4,
      title: "Faculty Development & Institutional Research Capacity Programs",
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&q=80",
    },
    {
      id: 5,
      title: "Mentorship for Thesis, Grant Writing & Publications",
      img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1600&q=80",
    },
  ];

  return (
    <div className="h-screen w-screen scroll-smooth font-sans">
      {/* Second section */}
      <div className="relative min-h-screen w-full px-8 md:px-16 lg:px-24 py-16">
        {/* Fixed gradient background */}
        <div className="fixed inset-0 -z-10 animate-gradient-premium"></div>
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-white text-5xl md:text-6xl font-bold mt-8 mb-12 font-sans text-center">
            Services
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight font-sans">
              We offer a wide range of services
            </h3>

            <p className="text-white text-base md:text-lg leading-relaxed font-sans">
              By combining our industry knowledge with cutting-edge tools and
              methodologies, we develop strategies that drive measurable
              results.
            </p>
          </div>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Large image on the left */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg h-[400px] lg:h-[500px] animate-gradient-premium">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80"
              alt="Person planning with sticky notes"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Two stacked images on the right */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg h-[190px] lg:h-[240px]">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
                alt="Team collaborating at workspace"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg h-[190px] lg:h-[240px]">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
                alt="Person working on computer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Training & Knowledge Services Section */}
      <div className="relative min-h-screen w-full py-16">
        {/* Fixed gradient background */}
        <div className="fixed inset-0 -z-10 animate-gradient-premium"></div>
        <div className="relative w-full px-8 md:px-16 lg:px-24 overflow-hidden">
          {/* Plain white base layer - completely solid */}
          <div className="absolute inset-0 bg-white opacity-100"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-black font-sans">
                Training & Knowledge Services
              </h2>

              <p className="text-black text-base md:text-lg leading-relaxed text-justify font-sans">
                We offer a diverse range of educational and capacity-building
                programs designed to strengthen skills, research capabilities,
                and institutional growth. Our initiatives combine academic rigor
                with practical learning experiences.
              </p>

              <ul className="space-y-4 text-black text-base md:text-lg">
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span className="leading-relaxed">
                    Includes certificate courses, workshops, and field-based
                    research mentorship in public health, policy, and
                    sustainability.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span className="leading-relaxed">
                    Focused on institutional capacity building, faculty
                    development, and data-driven governance training.
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Image */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg h-[400px] lg:h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80"
                alt="Person planning with sticky notes on window"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Core Research & Advisory Services Section */}
      <div className="relative min-h-screen w-full px-8 md:px-16 lg:px-24 py-16">
        {/* Fixed gradient background */}
        <div className="fixed inset-0 -z-10 animate-gradient-premium"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80"
              alt="Person planning research with sticky notes"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center lg:text-left font-sans">
              Core Research & Advisory Services
            </h2>

            <p className="text-white text-base md:text-lg leading-relaxed text-justify font-sans">
              We specialize in conducting comprehensive research, assessments,
              and advisory studies for government bodies, NGOs, and CSR
              initiatives. Our expertise spans from feasibility studies to
              policy design, ensuring data-driven and impactful outcomes.
            </p>

            <div className="space-y-4 text-white text-base md:text-lg">
              <p className="flex items-start leading-relaxed">
                <span className="mr-3 mt-1">→</span>
                <span>
                  Expertise includes third-party audits, feasibility
                  assessments, need analyses, and large-scale surveys.
                </span>
              </p>
              <p className="flex items-start leading-relaxed">
                <span className="mr-3 mt-1">→</span>
                <span>
                  Specialized in environmental, hydrological, urban development
                  studies, and strategic policy advisory.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Startup Mentoring Section */}
      <div className="relative min-h-screen w-full py-16">
        <div className="relative w-full px-8 md:px-16 lg:px-24 overflow-hidden">
          {/* Plain white base layer - completely solid */}
          <div className="absolute inset-0 bg-white opacity-100"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-black text-center lg:text-left font-sans">
                Startup Mentoring (New Vertical)
              </h2>

              <p className="text-black text-base md:text-lg leading-relaxed text-justify font-sans">
                We empower agri-tech, health-tech, and social enterprises
                through strategic, data-driven support that enhances their
                social and business impact. Our approach bridges innovation with
                sustainability and scalable growth.
              </p>

              <ul className="space-y-4 text-black text-base md:text-lg">
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span className="leading-relaxed">
                    Services include market validation, impact assessments,
                    business planning, and financial modeling.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span className="leading-relaxed">
                    We also facilitate CSR partnerships, funding guidance, and
                    ecosystem collaboration with incubators and accelerators.
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Image */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg h-[400px] lg:h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80"
                alt="Startup planning session"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Training & Certification Section */}
      <div className="relative min-h-screen w-full py-16">
        {/* Fixed gradient background */}
        <div className="fixed inset-0 -z-10 animate-gradient-premium"></div>

        {/* Header */}
        <div className="text-center mb-12 px-8 md:px-16 lg:px-24">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-sans">
            Training & Certification
          </h1>
          <p className="text-xl md:text-2xl italic text-white mt-4 font-sans">
            Building the Next Generation of Researchers
          </p>
          <p className="text-base md:text-lg text-white mt-6 max-w-3xl mx-auto leading-relaxed font-sans">
            Fenivi offers structured, flexible research training programs
            designed for students, PhD scholars, clinicians, and young
            professionals.
          </p>
        </div>

        {/* Programs Grid - Full Width Cards */}
        <div className="space-y-0 w-full">
          {certificationCards.map((card) => (
            <div
              key={card.id}
              className="group relative w-full h-[200px]"
              style={{ perspective: "1400px" }}
            >
              {/* card container that flips */}
              <div
                className="relative h-full w-full transition-transform duration-700 ease-out group-hover:[transform:rotateX(180deg)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* FRONT */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    className="h-full w-full object-cover"
                  />
                  {/* large central number */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/90 drop-shadow-xl text-[30vw] md:text-[12vw] leading-none font-light select-none">
                      {card.id}
                    </span>
                  </div>
                  {/* bottom meta */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div>
                      <p className="text-white text-lg md:text-xl font-medium">
                        {card.title}
                      </p>
                      {card.subtitle && (
                        <p className="text-white/80 text-xs md:text-sm mt-1">
                          {card.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* BACK */}
                <div
                  className="absolute inset-0 animate-gradient-premium text-white p-6 md:p-8 flex flex-col justify-between [transform:rotateX(180deg)]"
                  style={{
                    backfaceVisibility: "hidden",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="flex flex-col gap-4 mt-12">
                    <h3 className="text-2xl md:text-3xl font-semibold leading-tight">
                      {card.title}
                    </h3>
                    {card.subtitle && (
                      <p className="text-base md:text-lg text-white/90">
                        {card.subtitle}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-sm text-white/80">
                      Formats: Online | Hybrid | In-Person
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60">Program #{card.id}</span>
                      <button className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:opacity-90 transition">
                        Learn More →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
