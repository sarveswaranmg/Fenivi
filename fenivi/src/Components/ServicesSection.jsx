import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FlaskConical, GraduationCap, Rocket, ArrowRight, ChevronRight } from "lucide-react";
import { PRIMARY, PRIMARY_LIGHT, PRIMARY_BG } from "../theme";

const categories = [
  {
    icon: FlaskConical,
    title: "Research & Field Services",
    filter: "research",
    items: [
      "Research Consultations",
      "Third-Party Assessments & Audits",
      "Feasibility and Pre-Feasibility Studies",
      "Need Analysis & Situation Assessments",
      "Large-Scale Surveys & Community Consultations",
      "Environmental, Hydrological & Urban Development Studies",
      "Policy Advisory & Program Design",
    ],
  },
  {
    icon: GraduationCap,
    title: "Training & Education",
    filter: "training",
    items: [
      "Short-Term Certificate Courses",
      "Certificate Course in Psycho-Oncology",
      "Certificate Course in Research Methodology",
      "Certificate Course in Practice-Based Research & Evidence Translation",
      "Workshops on Data-Driven Governance & Sustainability",
      "Field-Based Learning & Research Mentorship Programs",
      "Institutional Capacity Building & Faculty Development",
    ],
  },
  {
    icon: Rocket,
    title: "Startup Mentoring",
    filter: "startup",
    items: [
      "Market Validation & Impact Assessments",
      "Business Plan Development & Growth Strategies",
      "Financial Modeling & Sustainability Practices",
      "CSR Partnerships & Funding Guidance",
      "Ecosystem Support with Incubators & Accelerators",
    ],
  },
];

export default function ServicesSection() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("svc-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    cardsRef.current.forEach((card) => { if (card) observer.observe(card); });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full py-10 lg:py-14">
      <style>{`
        .svc-enter {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .svc-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>

      <div className="page-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-6 md:mb-8 gap-4">
          <div>
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-2" style={{color: PRIMARY}}>
              What We Do
            </p>
            <h2 className="text-2xl font-normal text-gray-900">Our Services</h2>
            <p className="mt-2 text-xs sm:text-sm text-gray-500 max-w-lg leading-relaxed">
              From field-based research to high-impact consulting and mentorship — we deliver end-to-end solutions for measurable change.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors group shrink-0" style={{color: PRIMARY}}
          >
            View all services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="svc-enter bg-white rounded-2xl border border-gray-100 border-t-4 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(48,51,122,0.14)] hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col"
                style={{ transitionDelay: `${i * 80}ms`, borderTopColor: PRIMARY }}
              >
                {/* Icon + title */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{backgroundColor: PRIMARY_BG}}>
                    <Icon className="w-5 h-5" style={{color: PRIMARY}} />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 leading-snug">{cat.title}</h3>
                </div>

                {/* Divider */}
                <div className="h-px w-full mb-5 opacity-30" style={{backgroundColor: PRIMARY}} />

                {/* Bullet list */}
                <ul className="flex flex-col gap-2.5 flex-1">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{color: PRIMARY_LIGHT}} />
                      <span className="text-xs text-gray-600 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <Link
                  to={`/services?filter=${cat.filter}`}
                  className="mt-6 inline-flex items-center gap-1 text-xs font-semibold hover:underline"
                  style={{color: PRIMARY}}
                >
                  Explore
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
