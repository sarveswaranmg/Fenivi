import React, { useEffect, useRef } from "react";
import { FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import vidhubalaImg from "../../../assets/Team/Vidhubala.png";

export default function Vidhubala() {
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
        {/* SINGLE BOX WITH IMAGE LEFT AND TEXT RIGHT */}
        <div
          ref={cardRef}
          className="p-5 sm:p-6 md:p-8 flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-center opacity-0 scale-95 transition-all duration-1000 ease-out"
        >

          {/* LEFT - IMAGE SECTION */}
          <div
            ref={imageRef}
            className="flex flex-col items-center space-y-2 md:w-52 lg:w-60 flex-shrink-0 opacity-0 translate-y-8 xl:translate-y-0 xl:-translate-x-8 transition-all duration-1000 ease-out"
            style={{ transitionDelay: '200ms' }}
          >
            <img
              src={vidhubalaImg}
              alt="Dr. E. Vidhubala"
              className="w-full max-w-[160px] sm:max-w-[180px] md:max-w-none object-cover rounded-lg sm:rounded-xl shadow-lg"
            />

            <div className="text-center px-1">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                Dr. E. Vidhubala
              </h3>
              <p className="text-[10px] sm:text-xs text-gray-600 mt-0.5">
                Founder & Director
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

          {/* RIGHT - TEXT SECTION */}
          <div
            ref={textRef}
            className="flex-1 space-y-2 sm:space-y-3 opacity-0 translate-y-8 xl:translate-y-0 xl:translate-x-8 transition-all duration-1000 ease-out"
            style={{ transitionDelay: '400ms' }}
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
              Dr. E. Vidhubala
            </h2>

            <div className="text-gray-700 leading-relaxed text-xs sm:text-sm text-justify">
              <p className="mb-2">
                Dr. E. Vidhubala specializes in evidence-based research, programme
                evaluation, and water governance, driving the translation of
                real-world data into actionable policy and practice. With over 25
                years of research experience, she has served as the Head of the
                Department of Psycho-Oncology and played a pivotal role in
                establishing India's first M.Phil. and Ph.D. programmes in the
                field.
              </p>
              <p className="mb-2">
                She has collaborated extensively with national and global
                organisations, government agencies, and scientific networks. Her
                work has taken her across the world, where she has presented
                research, organised scientific meetings, and actively contributed to
                international scientific communities.
              </p>
              <p className="mb-0">
                Dr. Vidhubala served as the Elected Secretary of the Tobacco Control
                Scientific Section at The Union, Paris, for four years, where she
                supported global scientific productivity and the use of evidence for
                policy reform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
