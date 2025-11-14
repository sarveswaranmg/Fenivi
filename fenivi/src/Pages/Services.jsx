import React from "react";
import lightning from "../assets/Lightning.png";
import ServiceBg1 from "../assets/Services1.avif";
import ServiceBg2 from "../assets/Services2.avif";
import ServiceBg3 from "../assets/Services3.avif";
// Replace with provided PNG

export default function ServicesSection() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center bg-gradient-to-r from-[#f7f5ff] via-[#eae1ff] to-[#f7f5ff] px-8 py-20">
      <div className="w-full px-40 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mb-30 items-center">
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
        <div className="flex justify-center md:justify-end">
          <img
            src={lightning} // <-- replace with your provided image path
            alt="Decorative Icon"
            className="w-150 h-auto select-none"
          />
        </div>
      </div>

      <section className="w-full h-screen rounded-2xl overflow-hidden  mx-auto">
        <div
          className="w-full h-[60vh] flex items-center p-12 bg-cover bg-center"
          style={{ backgroundImage: `url(${ServiceBg1})` }}>
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

      <section className="w-full h-screen rounded-2xl overflow-hidden -mt-90  mx-auto">
        <div
          className="w-full h-[60vh] flex items-center p-12 bg-cover bg-center"
          style={{ backgroundImage: `url(${ServiceBg2})` }}>
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
          style={{ backgroundImage: `url(${ServiceBg3})` }}>
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
    </section>
  );
}
