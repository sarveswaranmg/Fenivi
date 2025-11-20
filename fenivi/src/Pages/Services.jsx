import React, { useState } from "react";

export default function ServicesSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <section className="w-full min-h-screen flex flex-col items-center bg-white px-4 sm:px-6 md:px-8 py-12 md:py-16 lg:py-20 relative">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mb-12 md:mb-20 lg:mb-30 items-center relative z-10 px-4 sm:px-6 md:px-8">
        {/* TEXT CONTENT */}
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mt-8 sm:mt-10 md:mt-12">
            Our
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl italic text-gray-900 mt-2">
            Services
          </h3>

          <p className="text-gray-700 mt-4 md:mt-6 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl">
            From field-based research to high-impact consulting and mentorship,
            our services empower organizations, institutions, and entrepreneurs
            to create measurable change.
          </p>
        </div>

        {/* IMAGE */}
        <div className="w-full h-[250px] sm:h-[280px] md:h-[300px] lg:h-[350px] rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
            alt="Our Services"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* SERVICE SECTIONS */}
      <div className="w-full max-w-7xl relative z-10 px-4 sm:px-6">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 md:mb-10 lg:mb-12">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 ${
              activeFilter === "all"
                ? "bg-violet-600 text-white"
                : "bg-white text-violet-600 border-2 border-violet-600 hover:bg-violet-50"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveFilter("research")}
            className={`px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 ${
              activeFilter === "research"
                ? "bg-violet-600 text-white"
                : "bg-white text-violet-600 border-2 border-violet-600 hover:bg-violet-50"
            }`}
          >
            <span className="hidden sm:inline">Research & Field Services</span>
            <span className="sm:hidden">Research</span>
          </button>
          <button
            onClick={() => setActiveFilter("training")}
            className={`px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 ${
              activeFilter === "training"
                ? "bg-violet-600 text-white"
                : "bg-white text-violet-600 border-2 border-violet-600 hover:bg-violet-50"
            }`}
          >
            <span className="hidden sm:inline">Training & Education</span>
            <span className="sm:hidden">Training</span>
          </button>
          <button
            onClick={() => setActiveFilter("startup")}
            className={`px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 ${
              activeFilter === "startup"
                ? "bg-violet-600 text-white"
                : "bg-white text-violet-600 border-2 border-violet-600 hover:bg-violet-50"
            }`}
          >
            <span className="hidden sm:inline">Startup Mentoring</span>
            <span className="sm:hidden">Startup</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12">
          {/* Research & Field Services */}
          {(activeFilter === "all" || activeFilter === "research") && (
            <>
              <div className="rounded-2xl bg-white border border-violet-200 shadow-lg p-4 sm:p-5 md:p-6 h-[280px] sm:h-[300px] md:h-[320px] flex flex-col">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                  Research Consultations
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-700 text-justify flex-1 overflow-y-auto">
                  We offer one-on-one research consultation sessions—both online
                  and in person—for individual researchers, academic
                  institutions, NGOs, CSR initiatives, and government agencies.
                  Our support covers research design, methodology, data
                  interpretation, publication guidance, monitoring and
                  evaluation inputs, and strengthening evidence-based
                  decision-making tailored to each project's needs.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-violet-200 shadow-lg p-4 sm:p-5 md:p-6 h-[280px] sm:h-[300px] md:h-[320px] flex flex-col">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                  Third-Party Assessments & Audits (Government / NGO / CSR)
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-700 text-justify flex-1 overflow-y-auto">
                  We provide independent, evidence-based evaluations to assess
                  programme performance, compliance, and impact. Our assessments
                  help governments, NGOs, and CSR foundations strengthen
                  accountability, improve service delivery, and make informed
                  decisions.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-violet-200 shadow-lg p-4 sm:p-5 md:p-6 h-[280px] sm:h-[300px] md:h-[320px] flex flex-col">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                  Feasibility and Pre-Feasibility Studies
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-700 text-justify flex-1 overflow-y-auto">
                  Our feasibility studies examine technical, financial, social,
                  and environmental viability to help clients make strategic
                  investment and implementation decisions. We deliver clear,
                  actionable insights that reduce risks and support sustainable
                  project planning.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-violet-200 shadow-lg p-4 sm:p-5 md:p-6 h-[280px] sm:h-[300px] md:h-[320px] flex flex-col">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                  Need Analysis & Situation Assessments
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-700 text-justify flex-1 overflow-y-auto">
                  We conduct structured need assessments to understand community
                  priorities, gaps in service delivery, and emerging challenges.
                  Our situation assessments provide a clear picture of ground
                  realities to guide effective intervention planning.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-violet-200 shadow-lg p-4 sm:p-5 md:p-6 h-[280px] sm:h-[300px] md:h-[320px] flex flex-col">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                  Large-Scale Surveys & Community Consultations
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-700 text-justify flex-1 overflow-y-auto">
                  Using robust methodologies, we design and implement
                  large-scale surveys and participatory consultations to capture
                  diverse community perspectives. Our data collection processes
                  ensure accuracy, inclusivity, and culturally appropriate
                  engagement.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-violet-200 shadow-lg p-4 sm:p-5 md:p-6 h-[280px] sm:h-[300px] md:h-[320px] flex flex-col">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                  Environmental, Hydrological & Urban Development Studies
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-700 text-justify flex-1 overflow-y-auto">
                  We offer GIS-based hydrological analysis, environmental
                  assessments, and urban development studies to support climate
                  resilience and sustainable planning. Our work integrates field
                  research with scientific modelling for informed
                  decision-making.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-violet-200 shadow-lg p-4 sm:p-5 md:p-6 h-[280px] sm:h-[300px] md:h-[320px] flex flex-col">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                  Policy Advisory & Program Design
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-700 text-justify flex-1 overflow-y-auto">
                  We translate real-world evidence into policy insights and
                  programme strategies. Our advisory support helps clients
                  design effective, context-sensitive interventions that align
                  with government priorities, community needs, and sustainable
                  development goals.
                </p>
              </div>
            </>
          )}

          {/* Training & Education */}
          {(activeFilter === "all" || activeFilter === "training") && (
            <>
              <div className="rounded-2xl bg-white border border-violet-200 shadow-lg p-4 sm:p-5 md:p-6 h-[280px] sm:h-[300px] md:h-[320px] flex flex-col">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                  Short-Term Certificate Courses
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-700 text-justify mb-4 flex-1 overflow-y-auto">
                  We offer intensive, application-oriented certificate courses
                  designed to build foundational and advanced skills. Each
                  course integrates theory with real-world case studies,
                  equipping participants with practical tools for evidence-based
                  practice and sector-specific problem-solving.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-violet-200 shadow-lg p-4 sm:p-5 md:p-6 h-[280px] sm:h-[300px] md:h-[320px] flex flex-col">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                  Certificate Course in Psycho-Oncology
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-700 text-justify flex-1 overflow-y-auto">
                  Focused on the intersection of mental health and cancer care,
                  this course trains participants in understanding the
                  psychological needs of patients, caregivers, and healthcare
                  teams. It equips learners with supportive communication
                  strategies, psychosocial assessment skills, and evidence-based
                  approaches for compassionate oncology care.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-violet-200 shadow-lg p-4 sm:p-5 md:p-6 h-[280px] sm:h-[300px] md:h-[320px] flex flex-col">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                  Certificate Course in Research Methodology
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-700 text-justify flex-1 overflow-y-auto">
                  Designed for beginners and emerging researchers, this course
                  covers essential research skills including study design, data
                  collection, qualitative and quantitative methods, and academic
                  writing. Participants learn to formulate research questions,
                  conduct ethical studies, and produce rigorous, high-quality
                  research outputs.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-violet-200 shadow-lg p-4 sm:p-5 md:p-6 h-[280px] sm:h-[300px] md:h-[320px] flex flex-col">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                  Certificate Course in Practice-Based Research & Evidence
                  Translation
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-700 text-justify flex-1 overflow-y-auto">
                  This course is designed to help professionals convert
                  real-world programme data into meaningful evidence that can
                  improve policy and practice. Participants learn how to
                  identify implementation gaps, analyse routine service data,
                  and design practical operational research studies. The course
                  also provides structured guidance on preparing high-quality
                  publications, enabling learners to translate field insights
                  into peer-reviewed evidence that strengthens programme
                  delivery and decision-making.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-violet-200 shadow-lg p-4 sm:p-5 md:p-6 h-[280px] sm:h-[300px] md:h-[320px] flex flex-col">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                  Workshops on Data-Driven Governance, River Restoration,
                  Sustainability, and Policy Design
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-700 text-justify flex-1 overflow-y-auto">
                  Our workshops provide hands-on training in emerging areas of
                  governance and sustainability. Participants learn to apply
                  data, scientific frameworks, and policy principles to address
                  complex environmental, social, and developmental challenges.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-violet-200 shadow-lg p-4 sm:p-5 md:p-6 h-[280px] sm:h-[300px] md:h-[320px] flex flex-col">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                  Field-Based Learning & Research Mentorship Programs
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-700 text-justify flex-1 overflow-y-auto">
                  We provide immersive field-learning opportunities and guided
                  mentorship to help students and professionals strengthen their
                  research skills. These programs offer direct exposure to
                  community dynamics, local ecosystems, and real-world
                  problem-solving.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-violet-200 shadow-lg p-4 sm:p-5 md:p-6 h-[280px] sm:h-[300px] md:h-[320px] flex flex-col">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                  Institutional Capacity Building & Faculty Development
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-700 text-justify flex-1 overflow-y-auto">
                  We support institutions through structured training programs
                  aimed at enhancing faculty competencies, research
                  capabilities, and organizational systems. Our
                  capacity-building modules help strengthen academic quality,
                  governance, and evidence-based decision-making.
                </p>
              </div>
            </>
          )}

          {/* Startup Mentoring */}
          {(activeFilter === "all" || activeFilter === "startup") && (
            <>
              <div className="rounded-2xl bg-white border border-violet-200 shadow-lg p-4 sm:p-5 md:p-6 h-[280px] sm:h-[300px] md:h-[320px] flex flex-col">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                  Market Validation & Impact Assessments
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-700 text-justify flex-1 overflow-y-auto">
                  We assess the real-world relevance, feasibility, and social
                  impact of startup solutions through field insights, user
                  feedback, and data-driven evaluations. This helps founders
                  refine their product-market fit and demonstrate measurable
                  value.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-violet-200 shadow-lg p-4 sm:p-5 md:p-6 h-[280px] sm:h-[300px] md:h-[320px] flex flex-col">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                  Business Plan Development & Growth Strategies
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-700 text-justify flex-1 overflow-y-auto">
                  We support startups in crafting structured business plans with
                  clear value propositions, operational pathways, and scalable
                  growth models tailored to their sector and mission.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-violet-200 shadow-lg p-4 sm:p-5 md:p-6 h-[280px] sm:h-[300px] md:h-[320px] flex flex-col">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                  Financial Modeling & Sustainability Practices
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-700 text-justify flex-1 overflow-y-auto">
                  We help entrepreneurs develop realistic financial projections,
                  cost structures, and long-term sustainability frameworks to
                  ensure stable, viable business operations.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-violet-200 shadow-lg p-4 sm:p-5 md:p-6 h-[280px] sm:h-[300px] md:h-[320px] flex flex-col">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                  CSR Partnerships & Funding Guidance
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-700 text-justify flex-1 overflow-y-auto">
                  We connect startups with relevant CSR partners and provide
                  advisory support for funding applications, proposal
                  development, and strategic collaborations.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-violet-200 shadow-lg p-4 sm:p-5 md:p-6 h-[280px] sm:h-[300px] md:h-[320px] flex flex-col">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                  Ecosystem Support with Incubators & Accelerators
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-700 text-justify flex-1 overflow-y-auto">
                  We guide startups in navigating the innovation ecosystem,
                  helping them access incubators, accelerators, technical
                  mentors, and strategic networks essential for scaling.
                </p>
              </div>
            </>
          )}
        </div>
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
