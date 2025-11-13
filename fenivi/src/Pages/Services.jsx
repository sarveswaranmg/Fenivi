import React from "react";
import home3d from "../assets/home3d.png";

export default function Services() {
  const serviceData = [
    {
      category: "Core Research & Advisory Services",
      description:
        "Our multidisciplinary research team provides evidence-based insights and solutions for sustainable growth, governance, and social development.",
      points: [
        "Third-Party Assessments & Audits (Government / NGO / CSR)",
        "Feasibility and Pre-Feasibility Studies",
        "Need Analysis & Situation Assessments",
        "Large-Scale Surveys & Community Consultations",
        "Environmental, Hydrological & Urban Development Studies",
        "Policy Advisory & Program Design",
      ],
      image:
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80",
    },
    {
      category: "Training & Knowledge Services",
      description:
        "We build institutional and individual capacities through immersive learning, workshops, and mentorship programs that focus on data, governance, and sustainability.",
      points: [
        "Short-Term Certificate Courses in Public Health, Political Psychology, Psycho-Oncology, and Research Methodology",
        "Workshops on Data-Driven Governance, River Restoration, Sustainability, and Policy Design",
        "Field-Based Learning & Research Mentorship Programs",
        "Institutional Capacity Building & Faculty Development",
      ],
      image:
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80",
    },
    {
      category: "Startup Mentoring (New Vertical)",
      description:
        "We mentor startups in agri-tech, health-tech, and social innovation, offering guidance across business strategy, financial modeling, and ecosystem partnerships.",
      points: [
        "Market Validation & Impact Assessments",
        "Business Plan Development & Growth Strategies",
        "Financial Modeling & Sustainability Practices",
        "CSR Partnerships & Funding Guidance",
        "Ecosystem Support with Incubators & Accelerators",
      ],
      image:
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <div className="w-full bg-white text-gray-900">
      {/* ===== Hero Section (Clean White) ===== */}
      <section className="h-[110vh] w-full bg-gradient-to-r from-[#f8f9ff] to-[#f3f4fc] flex flex-col md:flex-row items-center justify-center px-8 md:px-20">
        {/* LEFT SIDE — TEXT */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
            From field-based research to high-impact consulting and mentorship,
            our services empower organizations, institutions, and entrepreneurs
            to create measurable change.
          </p>
        </div>

        {/* RIGHT SIDE — CONTAINED 2x2 GRID */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="relative w-[300px] sm:w-[340px] md:w-[380px] lg:w-[420px] aspect-square rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgba(20,20,50,0.1)] bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-xl border border-white/40">
            <img
              src={home3d}
              alt="3D Illustration"
              className="w-full h-full object-contain rounded-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* ===== Service Sections ===== */}
      {serviceData.map((service, index) => (
        <section
          key={index}
          className={`w-full py-20 px-6 md:px-16 lg:px-24 ${
            index % 2 === 1 ? "bg-gray-50" : "bg-white"
          }`}
        >
          <div
            className={`max-w-7xl mx-auto flex flex-col ${
              index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-14`}
          >
            {/* Image */}
            <div className="flex-1 relative overflow-hidden rounded-3xl shadow-md hover:shadow-xl transition-all duration-500">
              <img
                src={service.image}
                alt={service.category}
                className="w-full h-[400px] object-cover rounded-3xl transform hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Text Content */}
            <div className="flex-1 text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 mt-2 text-gray-900">
                {service.category}
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {service.description}
              </p>

              {/* Bullet Points */}
              <ul className="space-y-3 text-gray-700">
                {service.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 group transition-transform duration-300"
                  >
                    <span className="w-3 h-3 mt-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex-shrink-0 group-hover:scale-110 transition-transform"></span>
                    <span className="group-hover:text-gray-900 transition-colors">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* ===== Call To Action ===== */}
      <section className="w-full py-24 text-center bg-gray-50">
        <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">
          Want to Collaborate?
        </h3>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Partner with us to turn research and innovation into real-world
          impact. Let’s co-create solutions that shape the future.
        </p>
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-full font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
}
