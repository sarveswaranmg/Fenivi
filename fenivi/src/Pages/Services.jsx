import { useState, useRef } from "react";

export default function Services() {
  const [activeCard, setActiveCard] = useState(0);
  const [dragStart, setDragStart] = useState(null);
  const [dragOffset, setDragOffset] = useState(0);
  const isDragging = useRef(false);

  const certificationCards = [
    {
      title: "Certificate Course in Psycho-Oncology Research",
      icon: "🔬",
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-700",
    },
    {
      title: "Certificate Course in Research Methodology & Scientific Writing",
      icon: "📝",
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-700",
    },
    {
      title: "Short-Term Research Skill Workshops",
      subtitle: "(Proposal Writing, Data Analysis, Publication Skills)",
      icon: "🎓",
      bgColor: "bg-gradient-to-br from-teal-500 to-teal-700",
    },
    {
      title: "Faculty Development & Institutional Research Capacity Programs",
      icon: "👥",
      bgColor: "bg-gradient-to-br from-indigo-500 to-indigo-700",
    },
    {
      title: "Mentorship for Thesis, Grant Writing & Publications",
      icon: "📚",
      bgColor: "bg-gradient-to-br from-green-500 to-green-700",
    },
  ];

  const nextCard = () => {
    setActiveCard((prev) => (prev + 1) % certificationCards.length);
  };

  const prevCard = () => {
    setActiveCard(
      (prev) =>
        (prev - 1 + certificationCards.length) % certificationCards.length
    );
  };

  const handleDragStart = (e) => {
    isDragging.current = true;
    setDragStart(e.type === "mousedown" ? e.clientX : e.touches[0].clientX);
  };

  const handleDragMove = (e) => {
    if (!isDragging.current || dragStart === null) return;

    const currentX = e.type === "mousemove" ? e.clientX : e.touches[0].clientX;
    const offset = currentX - dragStart;
    setDragOffset(offset);
  };

  const handleDragEnd = () => {
    if (!isDragging.current) return;

    isDragging.current = false;

    // Threshold for swipe (100px)
    if (dragOffset > 100) {
      prevCard();
    } else if (dragOffset < -100) {
      nextCard();
    }

    setDragStart(null);
    setDragOffset(0);
  };

  return (
    <div className="h-screen w-screen scroll-smooth font-sans">
      {/* First section */}
      <div className="flex w-screen h-[70%] justify-center items-end snap-start">
        <div className="flex flex-col items-center mb-10">
          <h1 className="text-black font-bold text-9xl text-center">
            Services.
          </h1>
        </div>
        <div className="h-[30%] bg-gradient-to-br from-[#5304A3] via-[#9D50BB] to-[#7B2FF7]"></div>
      </div>
      {/* Second section */}
      <div className="min-h-screen w-full bg-gradient-to-br from-purple-200 via-purple-100 to-pink-100 px-8 md:px-16 lg:px-24 py-16">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-purple-600 text-lg md:text-2xl font-medium mb-8 font-sans">
            ---Our Services
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-12">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black leading-tight font-sans">
              We offer a wide range of services
            </h1>

            <p className="text-black text-base md:text-lg leading-relaxed lg:pt-8 font-sans">
              By combining our industry knowledge with cutting-edge tools and
              methodologies, we develop strategies that drive measurable
              results.
            </p>
          </div>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Large image on the left */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg h-[400px] lg:h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80"
              alt="Person planning with sticky notes"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Two stacked images on the right */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg h-[190px] lg:h-[240px]">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
                alt="Team collaborating at workspace"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg h-[190px] lg:h-[240px]">
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
      <div className="min-h-screen w-full bg-gradient-to-br from-purple-200 via-purple-100 to-pink-100 px-8 md:px-16 lg:px-24 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-black decoration-black font-sans">
              Training & Knowledge Services
            </h2>

            <p className="text-black text-base md:text-lg leading-relaxed text-justify font-sans">
              We offer a diverse range of educational and capacity-building
              programs designed to strengthen skills, research capabilities, and
              institutional growth. Our initiatives combine academic rigor with
              practical learning experiences.
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
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg h-[400px] lg:h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80"
              alt="Person planning with sticky notes on window"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Core Research & Advisory Services Section */}
      <div className="min-h-screen w-full bg-gradient-to-br from-purple-200 via-purple-100 to-pink-100 px-8 md:px-16 lg:px-24 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80"
              alt="Person planning research with sticky notes"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-black text-center lg:text-left font-sans">
              Core Research & Advisory Services
            </h2>

            <p className="text-black text-base md:text-lg leading-relaxed text-justify font-sans">
              We specialize in conducting comprehensive research, assessments,
              and advisory studies for government bodies, NGOs, and CSR
              initiatives. Our expertise spans from feasibility studies to
              policy design, ensuring data-driven and impactful outcomes.
            </p>

            <div className="space-y-4 text-black text-base md:text-lg">
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
      <div className="min-h-screen w-full bg-gradient-to-br from-purple-200 via-purple-100 to-pink-100 px-8 md:px-16 lg:px-24 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-black text-center lg:text-left font-sans">
              Startup Mentoring (New Vertical)
            </h2>

            <p className="text-black text-base md:text-lg leading-relaxed text-justify font-sans">
              We empower agri-tech, health-tech, and social enterprises through
              strategic, data-driven support that enhances their social and
              business impact. Our approach bridges innovation with
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
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg h-[400px] lg:h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80"
              alt="Startup planning session"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Training & Certification Section */}
      <div className="min-h-screen w-full bg-gradient-to-br from-purple-200 via-purple-100 to-pink-100 px-8 md:px-16 lg:px-24 py-16">
        <div className="flex flex-col items-center space-y-12">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-black text-center font-sans">
            Training & Certification
          </h1>

          {/* Subheading */}
          <p className="text-2xl md:text-3xl italic text-black text-center max-w-4xl font-sans">
            Building the Next Generation of Researchers
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-black text-center max-w-3xl leading-relaxed font-sans">
            Fenivi offers structured, flexible research training programs
            designed for students, PhD scholars, clinicians, and young
            professionals.
          </p>

          {/* Programs Offered Label */}
          <h2 className="text-2xl md:text-3xl font-semibold text-black text-center font-sans">
            Programs Offered
          </h2>

          {/* Card Stack */}
          <div
            className="relative w-full max-w-2xl h-[450px] flex items-center justify-center"
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
            style={{ perspective: "1500px" }}
          >
            {certificationCards.map((card, index) => {
              let position = index - activeCard;
              const isActive = index === activeCard;

              // Normalize position for circular navigation (shortest path)
              const totalCards = certificationCards.length;
              if (position > totalCards / 2) {
                position -= totalCards;
              } else if (position < -totalCards / 2) {
                position += totalCards;
              }

              // Calculate transforms for visible stacking
              let translateX = position * 30;
              let translateY = Math.abs(position) * 15;
              let scale = 1 - Math.abs(position) * 0.08;
              let rotateY = position * 8;
              let zIndex = certificationCards.length - Math.abs(position);

              // Apply drag offset only to active card
              if (isActive && dragOffset !== 0) {
                translateX += dragOffset;
              }

              return (
                <div
                  key={index}
                  className={`absolute select-none ${
                    isDragging.current && isActive
                      ? "cursor-grabbing"
                      : "cursor-grab"
                  }`}
                  style={{
                    transform: `
                      translateX(${translateX}px)
                      translateY(${translateY}px)
                      scale(${scale})
                      rotateY(${rotateY}deg)
                    `,
                    transformStyle: "preserve-3d",
                    transition:
                      isDragging.current && isActive
                        ? "none"
                        : "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    zIndex: zIndex,
                    opacity: Math.abs(position) > 3 ? 0 : 1,
                  }}
                >
                  <div
                    className={`${card.bgColor} rounded-3xl shadow-2xl p-10 md:p-12 w-[350px] md:w-[550px] lg:w-[650px] h-[350px] md:h-[400px] pointer-events-none relative overflow-hidden`}
                  >
                    {/* Background Icon */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="opacity-20 text-[220px] md:text-[300px] pointer-events-none">
                        {card.icon}
                      </div>
                    </div>

                    <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-6">
                      {/* Card Title */}
                      <h3 className="text-xl md:text-2xl font-bold text-white text-center leading-snug font-sans">
                        {card.title}
                      </h3>

                      {/* Card Subtitle if exists */}
                      {card.subtitle && (
                        <p className="text-base md:text-lg text-white/90 text-center leading-relaxed">
                          {card.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Dots */}
          <div className="flex items-center gap-3 mt-8">
            <button
              onClick={prevCard}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg
                className="w-6 h-6"
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
            <div className="flex gap-2">
              {certificationCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCard(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeCard ? "bg-purple-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextCard}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg
                className="w-6 h-6"
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

          {/* Formats */}
          <p className="text-xl md:text-2xl font-medium text-black">
            Formats:{" "}
            <span className="font-normal">Online | Hybrid | In-Person</span>
          </p>
        </div>
      </div>
    </div>
  );
}
