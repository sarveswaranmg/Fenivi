import React from "react";
import lightning from "../assets/Lightning.png";
import ServiceBg1 from "../assets/Services1.png";
import ServiceBg2 from "../assets/Services2.png";
import ServiceBg3 from "../assets/Services3.png";
// Replace with provided PNG

export default function ServicesSection() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center bg-gradient-to-r from-[#f7f5ff] via-[#eae1ff] to-[#f7f5ff] px-8 py-20 relative">
      {/* Background Stars and Sparks */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 rounded-full bg-violet-900/60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${
                3 + Math.random() * 4
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
        {/* Violet Sparks */}
        {[...Array(100)].map((_, i) => (
          <div
            key={`spark-${i}`}
            className="absolute w-1 h-1 rounded-full bg-purple-900"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${
                3 + Math.random() * 4
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      <style jsx>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>

      <div className="w-full px-40 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mb-30 items-center relative z-10">
        {/* TEXT CONTENT */}
        <div>
          <h2 className="text-8xl font-bold text-gray-900">Our</h2>
          <h3 className="text-7xl italic text-gray-900 mt-2">Services</h3>

          <p className="text-gray-700 mt-6 text-xl leading-relaxed max-w-xl">
            From field-based research to high-impact consulting and mentorship,
            our services empower organizations, institutions, and entrepreneurs
            to create measurable change.
          </p>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center md:justify-end overflow-hidden">
          <img
            src={lightning} // <-- replace with your provided image path
            alt="Decorative Icon"
            className="w-150 h-auto select-none"
            style={{
              animation: "gentle-bounce 2s ease-in-out infinite",
            }}
          />
          <style jsx>{`
            @keyframes gentle-bounce {
              0%,
              100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-20px);
              }
            }
          `}</style>
        </div>
      </div>

      {/* SERVICE SECTIONS */}
      <div className="w-full max-w-6xl relative z-10">
        {/* Card 1 */}
        <section className="sticky top-20 rounded-2xl overflow-hidden bg-white flex items-center justify-center mb-8 border border-violet-200 shadow-lg">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="px-10 py-12 flex flex-col justify-center">
              <h2 className="text-4xl font-bold leading-tight text-gray-900 mb-6">
                Third-Party Assessments & Audits (Government / NGO / CSR)
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                Independent, evidence-based evaluations to measure programme
                performance, compliance, and impact.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Supports governments, NGOs, CSR foundations, and institutions in
                improving accountability and service delivery.
              </p>
            </div>
            <div className="flex justify-end h-120">
              <img
                src={ServiceBg1}
                alt="Third-Party Assessments"
                className="w-full h-full object-cover rounded-r-2xl"
              />
            </div>
          </div>
        </section>

        {/* Card 2 */}
        <section className="sticky top-20 rounded-2xl overflow-hidden bg-white flex items-center justify-center mb-8 border border-violet-200 shadow-lg">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="flex justify-start h-120">
              <img
                src={ServiceBg1}
                alt="Feasibility Studies"
                className="w-full h-full object-cover rounded-l-2xl"
              />
            </div>
            <div className="px-10 py-12 flex flex-col justify-center">
              <h2 className="text-4xl font-bold leading-tight text-gray-900 mb-6">
                Feasibility & Pre-Feasibility Studies
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                Comprehensive technical, financial, social, and environmental
                viability assessments for informed project planning.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Helps clients minimize risks and design sustainable,
                context-appropriate solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Card 3 */}
        <section className="sticky top-20 rounded-2xl overflow-hidden bg-white flex items-center justify-center mb-8 border border-violet-200 shadow-lg">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="px-10 py-12 flex flex-col justify-center">
              <h2 className="text-4xl font-bold leading-tight text-gray-900 mb-6">
                Need Analysis & Situation Assessments
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                Structured assessments to understand community priorities,
                service gaps, behavioural patterns, and emerging challenges.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Findings guide targeted, effective interventions for development
                and governance projects.
              </p>
            </div>
            <div className="flex justify-end h-120">
              <img
                src={ServiceBg2}
                alt="Need Analysis"
                className="w-full h-full object-cover rounded-r-2xl"
              />
            </div>
          </div>
        </section>

        {/* Card 4 */}
        <section className="sticky top-20 rounded-2xl overflow-hidden bg-white flex items-center justify-center mb-8 border border-violet-200 shadow-lg">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="flex justify-start h-120">
              <img
                src={ServiceBg2}
                alt="Surveys & Consultations"
                className="w-full h-full object-cover rounded-l-2xl"
              />
            </div>
            <div className="px-10 py-12 flex flex-col justify-center">
              <h2 className="text-4xl font-bold leading-tight text-gray-900 mb-6">
                Large-Scale Surveys & Community Consultations
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                End-to-end survey design, field data collection, and
                participatory consultations using robust methodologies.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Ensures accurate, culturally aligned insights from diverse
                communities.
              </p>
            </div>
          </div>
        </section>

        {/* Card 5 */}
        <section className="sticky top-20 rounded-2xl overflow-hidden bg-white flex items-center justify-center mb-8 border border-violet-200 shadow-lg">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="px-10 py-12 flex flex-col justify-center">
              <h2 className="text-4xl font-bold leading-tight text-gray-900 mb-6">
                Environmental, Hydrological & Urban Development Studies
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                Advanced GIS-based hydrological analysis, watershed assessments,
                environmental studies, and urban planning research.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Supports climate resilience, water restoration, and sustainable
                development planning.
              </p>
            </div>
            <div className="flex justify-end h-120">
              <img
                src={ServiceBg3}
                alt="Environmental Studies"
                className="w-full h-full object-cover rounded-r-2xl"
              />
            </div>
          </div>
        </section>

        {/* Card 6 */}
        <section className="sticky top-20 rounded-2xl overflow-hidden bg-white flex items-center justify-center mb-8 border border-violet-200 shadow-lg">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="flex justify-start h-120">
              <img
                src={ServiceBg3}
                alt="Policy Advisory"
                className="w-full h-full object-cover rounded-l-2xl"
              />
            </div>
            <div className="px-10 py-12 flex flex-col justify-center">
              <h2 className="text-4xl font-bold leading-tight text-gray-900 mb-6">
                Policy Advisory & Program Design
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                Translating evidence into actionable policies and programme
                strategies.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                We help align interventions with government priorities,
                community needs, and SDG-linked outcomes.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* <section className="w-full h-screen rounded-2xl overflow-hidden -mt-90  mx-auto">
        <div
          className="w-full h-[60vh] flex items-center p-12 bg-cover bg-center"
          style={{ backgroundImage: `url(${ServiceBg2})` }}
        >
          <div className="max-w-lg text-white">
            <h2 className="text-5xl font-bold leading-tight">
              Training & Knowledge Services
            </h2>

            <p className="mt-6 text-lg leading-relaxed">
              We offer a diverse range of educational and capacity-building
              programs designed to strengthen skills, research capabilities, and
              institutional growth. Our initiatives combine academic rigor with
              practical learning experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full h-screen rounded-2xl overflow-hidden -mt-90 mx-auto">
        <div
          className="w-full h-[60vh] flex items-center p-12 bg-cover bg-center"
          style={{ backgroundImage: `url(${ServiceBg3})` }}
        >
          <div className="max-w-lg text-white">
            <h2 className="text-5xl font-bold leading-tight">
              Training & Knowledge Services
            </h2>

            <p className="mt-6 text-lg leading-relaxed">
              We offer a diverse range of educational and capacity-building
              programs designed to strengthen skills, research capabilities, and
              institutional growth. Our initiatives combine academic rigor with
              practical learning experiences.
            </p>
          </div>
        </div>
      </section> */}
    </section>
  );
}
