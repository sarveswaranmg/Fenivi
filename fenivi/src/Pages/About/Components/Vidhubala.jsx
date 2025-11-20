import { FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import vidhubalaImg from "../../../assets/Team/Vidhubala.png";

export default function Vidhubala() {
  return (
    <section className="w-full bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* SINGLE BOX WITH IMAGE LEFT AND TEXT RIGHT */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8">

          {/* LEFT - IMAGE SECTION */}
          <div className="flex flex-col items-center space-y-3 md:space-y-4 md:w-64 lg:w-72 flex-shrink-0">
            <img
              src={vidhubalaImg}
              alt="Dr. E. Vidhubala"
              className="w-48 sm:w-56 md:w-full object-cover rounded-xl shadow-lg"
            />

            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                Dr. E. Vidhubala
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Founder & Director – Fenivi Research Solutions
              </p>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-3">
              <a className="p-2 sm:p-2.5 rounded-full animate-gradient-premium text-white hover:bg-purple-700 transition shadow">
                <FaInstagram size={16} />
              </a>
              <a className="p-2 sm:p-2.5 rounded-full animate-gradient-premium text-white hover:bg-indigo-700 transition shadow">
                <FaLinkedinIn size={16} />
              </a>
              <a
                href="mailto:yourmail@gmail.com"
                className="p-2 sm:p-2.5 rounded-full animate-gradient-premium text-white hover:bg-black transition shadow"
              >
                <FaEnvelope size={16} />
              </a>
            </div>
          </div>

          {/* RIGHT - TEXT SECTION */}
          <div className="flex-1 space-y-3 md:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
              Dr. E. Vidhubala
            </h2>

            <p className="text-gray-700 leading-relaxed text-sm text-justify">
              Dr. E. Vidhubala specializes in evidence-based research, programme
              evaluation, and water governance, driving the translation of
              real-world data into actionable policy and practice. With over 25
              years of research experience, she has served as the Head of the
              Department of Psycho-Oncology and played a pivotal role in
              establishing India's first M.Phil. and Ph.D. programmes in the
              field. A recipient of the Tamil Nadu Young Women Scientist Award
              (2011), she is formally trained in operational and action research
              and has authored over 30 scientific articles in reputed
              international journals.
            </p>

            <p className="text-gray-700 leading-relaxed text-sm text-justify">
              She has collaborated extensively with national and global
              organisations, government agencies, and scientific networks. Her
              work has taken her across the world, where she has presented
              research, organised scientific meetings, and actively contributed to
              international scientific communities.
            </p>

            <p className="text-gray-700 leading-relaxed text-sm text-justify">
              Dr. Vidhubala served as the Elected Secretary of the Tobacco Control
              Scientific Section at The Union, Paris, for four years, where she
              supported global scientific productivity and the use of evidence for
              policy reform. Her training in Global Leadership and Project
              Management at Johns Hopkins University, USA, further strengthened her
              programme management expertise. She is trained in the WHO–The Union
              SORT IT research programme and is a founding member of the Real World
              Evidence Conference, promoting practice-based research for policy and
              implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
