import React, { useEffect, useRef } from "react";
import { FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import femilImg from "../../../assets/Team/Femil.jpeg";

export default function SahayaFemil() {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -10% 0px'
    };

    const animateOnScroll = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    };

    const observer = new IntersectionObserver(animateOnScroll, observerOptions);

    if (cardRef.current) observer.observe(cardRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full py-6 sm:py-8 md:py-10">
      <div className="page-container bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm">
        {/* SINGLE BOX WITH TEXT LEFT AND IMAGE RIGHT */}
        <div
          ref={cardRef}
          className="p-5 sm:p-6 md:p-8 flex flex-col md:flex-row-reverse gap-4 sm:gap-6 md:gap-8 items-center opacity-0 scale-95 transition-all duration-1000 ease-out"
        >

          {/* RIGHT - IMAGE SECTION */}
          <div
            ref={imageRef}
            className="flex flex-col items-center space-y-2 md:w-52 lg:w-60 flex-shrink-0 opacity-0 translate-y-8 xl:translate-y-0 xl:translate-x-8 transition-all duration-1000 ease-out"
            style={{ transitionDelay: '200ms' }}
          >
            <img
              src={femilImg}
              alt="Dr. E. Sahaya Femil"
              className="w-full max-w-[160px] sm:max-w-[180px] md:max-w-none h-[200px] sm:h-[220px] md:h-[240px] object-cover rounded-lg sm:rounded-xl shadow-lg"
            />

            <div className="text-center px-1">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                Dr. E. Sahaya Femil
              </h3>
              <p className="text-[10px] sm:text-xs text-gray-600 mt-0.5">
                M.Sc., Ph.D.
              </p>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-2">
              <a className="p-1.5 sm:p-2 rounded-full animate-gradient-premium text-white hover:bg-purple-700 transition shadow">
                <FaInstagram size={14} />
              </a>
              <a className="p-1.5 sm:p-2 rounded-full animate-gradient-premium text-white hover:bg-indigo-700 transition shadow">
                <FaLinkedinIn size={14} />
              </a>
              <a
                href="mailto:yourmail@gmail.com"
                className="p-1.5 sm:p-2 rounded-full animate-gradient-premium text-white hover:bg-black transition shadow"
              >
                <FaEnvelope size={14} />
              </a>
            </div>
          </div>

          {/* LEFT - TEXT SECTION */}
          <div
            ref={textRef}
            className="flex-1 space-y-2 sm:space-y-3 opacity-0 translate-y-8 xl:translate-y-0 xl:-translate-x-8 transition-all duration-1000 ease-out"
            style={{ transitionDelay: '400ms' }}
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
              Dr. E. Sahaya Femil
            </h2>

            <div className="text-gray-700 leading-relaxed text-xs sm:text-sm text-justify">
              <p className="mb-2">
                Dr. E. Sahaya Femil, M.Sc., Ph.D., has over 18 years of experience in applied psychology, academic research, and program evaluation. Holding a Ph.D. in Applied Psychology from the University of Madras, she brings strong expertise in quantitative and qualitative methodologies, psychometric assessment, and evidence-based intervention studies.
              </p>
              <p className="mb-2">
                As an Institutional Ethics Committee (IEC) Member, she ensures that all research activities comply with national and international ethical standards, safeguarding participant rights, data integrity, and regulatory accountability.
              </p>
              <p className="mb-0">
                With extensive experience in mentoring scholars, designing robust research frameworks, and leading field-based studies, Dr. Femil guides the team in delivering scientifically rigorous, ethically grounded, and socially impactful research solutions for academic institutions, healthcare organizations, NGOs, and corporate partners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
