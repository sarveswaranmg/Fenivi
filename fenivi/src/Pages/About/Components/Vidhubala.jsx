import { FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import vidhubalaImg from "../../../assets/Team/Vidhubala.png";

export default function Vidhubala() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-16">
      {/* GRID TOP (TEXT LEFT + IMAGE RIGHT) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* LEFT COLUMN */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Dr. E. Vidhubala
          </h2>

          <p className="text-gray-700 leading-relaxed text-base md:text-lg text-justify">
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

          <p className="text-gray-700 leading-relaxed text-base md:text-lg text-justify">
            She has collaborated extensively with national and global
            organisations, government agencies, and scientific networks. Her
            work has taken her across the world, where she has presented
            research, organised scientific meetings, and actively contributed to
            international scientific communities.
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col items-center text-center space-y-6">
          <img
            src={vidhubalaImg}
            alt="Dr. E. Vidhubala"
            className="w-80 object-cover rounded-xl shadow-xl"
          />

          <div>
            <h3 className="text-2xl font-semibold text-gray-900">
              Dr. E. Vidhubala
            </h3>
            <p className="text-gray-600">
              Founder & Director – Fenivi Research Solutions
            </p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4">
            <a className="p-3 rounded-full animate-gradient-premium text-white hover:bg-purple-700 transition shadow">
              <FaInstagram size={18} />
            </a>
            <a className="p-3 rounded-full animate-gradient-premium text-white hover:bg-indigo-700 transition shadow">
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="mailto:yourmail@gmail.com"
              className="p-3 rounded-full animate-gradient-premium text-white hover:bg-black transition shadow"
            >
              <FaEnvelope size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* FULL WIDTH PARAGRAPH UNDER BOTH COLUMNS */}
      <div className="max-w-7xl mx-auto mt-12">
        <p className="text-gray-700 leading-relaxed text-base md:text-lg text-justify">
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
    </section>
  );
}
