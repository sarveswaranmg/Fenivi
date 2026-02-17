import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
  const [searchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState("all");
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const filterFromUrl = searchParams.get("filter");
    if (filterFromUrl) {
      setActiveFilter(filterFromUrl);
      // Scroll after state update using requestAnimationFrame
      requestAnimationFrame(() => {
        const element = document.getElementById("services-browse");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    }
  }, [searchParams]);

  // GSAP Animations - Only on first load
  useEffect(() => {
    if (hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    // Animate hero section
    gsap.fromTo(
      ".services-hero h1, .services-hero h2, .services-hero p",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.2,
        ease: "power2.out",
      },
    );

    // Animate hero image
    gsap.fromTo(
      ".services-hero-image",
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.8, delay: 0.5, ease: "power2.out" },
    );

    // Animate filter buttons
    gsap.fromTo(
      ".filter-btn",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        delay: 0.3,
        ease: "power2.out",
      },
    );
  }, []);

  // Smooth card animations when filter changes
  useEffect(() => {
    const serviceCards = gsap.utils.toArray(".service-card");
    if (serviceCards.length > 0) {
      gsap.fromTo(
        serviceCards,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.05,
          ease: "power2.out",
        },
      );
    }
  }, [activeFilter]);

  return (
    <section className="w-full min-h-screen">
      {/* Hero Section */}
      <div className="services-hero page-container pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* TEXT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 uppercase tracking-tight">
              Our
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl italic text-gray-900 mt-2">
              Services
            </h2>

            <p className="text-gray-600 mt-6 text-lg leading-relaxed max-w-xl">
              From field-based research to high-impact consulting and
              mentorship, our services empower organizations, institutions, and
              entrepreneurs to create measurable change.
            </p>
          </div>

          {/* IMAGE */}
          <div className="services-hero-image w-full h-[280px] md:h-[350px] rounded-2xl overflow-hidden shadow-lg hover-lift">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
              alt="Our Services"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* SERVICE SECTIONS */}
      <div id="services-browse" className="page-container section-padding">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 md:mb-12">
          {[
            { key: "all", label: "All" },
            { key: "research", label: "Research & Field Services" },
            { key: "training", label: "Training & Education" },
            { key: "startup", label: "Startup Mentoring" },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className="filter-btn px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 hover-scale"
              style={
                activeFilter === key
                  ? { backgroundColor: "#30337A", color: "#fff", boxShadow: "0 4px 14px rgba(48,51,122,0.3)" }
                  : { backgroundColor: "#fff", color: "#30337A", border: "2px solid #30337A" }
              }
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Research & Field Services */}
          {(activeFilter === "all" || activeFilter === "research") && (
            <>
              <div className="service-card card p-6 flex flex-col border-purple-100 hover-lift min-h-[300px]">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  Research Consultations
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 flex-1">
                  We offer one-on-one research consultation sessions—both online
                  and in person—for individual researchers, academic
                  institutions, NGOs, CSR initiatives, and government agencies.
                  Our support covers research design, methodology, data
                  interpretation, publication guidance, monitoring and
                  evaluation inputs, and strengthening evidence-based
                  decision-making tailored to each project's needs.
                </p>
              </div>

              <div className="service-card card p-6 flex flex-col border-purple-100 hover-lift min-h-[300px]">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  Third-Party Assessments & Audits (Government / NGO / CSR)
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 flex-1">
                  We provide independent, evidence-based evaluations to assess
                  programme performance, compliance, and impact. Our assessments
                  help governments, NGOs, and CSR foundations strengthen
                  accountability, improve service delivery, and make informed
                  decisions.
                </p>
              </div>

              <div className="service-card card p-6 flex flex-col border-purple-100 hover-lift min-h-[300px]">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  Feasibility and Pre-Feasibility Studies
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 flex-1">
                  Our feasibility studies examine technical, financial, social,
                  and environmental viability to help clients make strategic
                  investment and implementation decisions. We deliver clear,
                  actionable insights that reduce risks and support sustainable
                  project planning.
                </p>
              </div>

              <div className="service-card card p-6 flex flex-col border-purple-100 hover-lift min-h-[300px]">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  Need Analysis & Situation Assessments
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 flex-1">
                  We conduct structured need assessments to understand community
                  priorities, gaps in service delivery, and emerging challenges.
                  Our situation assessments provide a clear picture of ground
                  realities to guide effective intervention planning.
                </p>
              </div>

              <div className="service-card card p-6 flex flex-col border-purple-100 hover-lift min-h-[300px]">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  Large-Scale Surveys & Community Consultations
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 flex-1">
                  Using robust methodologies, we design and implement
                  large-scale surveys and participatory consultations to capture
                  diverse community perspectives. Our data collection processes
                  ensure accuracy, inclusivity, and culturally appropriate
                  engagement.
                </p>
              </div>

              <div className="service-card card p-6 flex flex-col border-purple-100 hover-lift min-h-[300px]">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  Environmental, Hydrological & Urban Development Studies
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 flex-1">
                  We offer GIS-based hydrological analysis, environmental
                  assessments, and urban development studies to support climate
                  resilience and sustainable planning. Our work integrates field
                  research with scientific modelling for informed
                  decision-making.
                </p>
              </div>

              <div className="service-card card p-6 flex flex-col border-purple-100 hover-lift min-h-[300px]">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  Policy Advisory & Program Design
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 flex-1">
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
              <div className="service-card card p-6 flex flex-col border-purple-100 hover-lift min-h-[300px]">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  Short-Term Certificate Courses
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 flex-1">
                  We offer intensive, application-oriented certificate courses
                  designed to build foundational and advanced skills. Each
                  course integrates theory with real-world case studies,
                  equipping participants with practical tools for evidence-based
                  practice and sector-specific problem-solving.
                </p>
              </div>

              <div className="service-card card p-6 flex flex-col border-purple-100 hover-lift min-h-[300px]">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  Certificate Course in Psycho-Oncology
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 flex-1">
                  Focused on the intersection of mental health and cancer care,
                  this course trains participants in understanding the
                  psychological needs of patients, caregivers, and healthcare
                  teams. It equips learners with supportive communication
                  strategies, psychosocial assessment skills, and evidence-based
                  approaches for compassionate oncology care.
                </p>
              </div>

              <div className="service-card card p-6 flex flex-col border-purple-100 hover-lift min-h-[300px]">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  Certificate Course in Research Methodology
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 flex-1">
                  Designed for beginners and emerging researchers, this course
                  covers essential research skills including study design, data
                  collection, qualitative and quantitative methods, and academic
                  writing. Participants learn to formulate research questions,
                  conduct ethical studies, and produce rigorous, high-quality
                  research outputs.
                </p>
              </div>

              <div className="service-card card p-6 flex flex-col border-purple-100 hover-lift min-h-[300px]">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  Certificate Course in Practice-Based Research & Evidence
                  Translation
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 flex-1">
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

              <div className="service-card card p-6 flex flex-col border-purple-100 hover-lift min-h-[300px]">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  Workshops on Data-Driven Governance, River Restoration,
                  Sustainability, and Policy Design
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 flex-1">
                  Our workshops provide hands-on training in emerging areas of
                  governance and sustainability. Participants learn to apply
                  data, scientific frameworks, and policy principles to address
                  complex environmental, social, and developmental challenges.
                </p>
              </div>

              <div className="service-card card p-6 flex flex-col border-purple-100 hover-lift min-h-[300px]">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  Field-Based Learning & Research Mentorship Programs
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 flex-1">
                  We provide immersive field-learning opportunities and guided
                  mentorship to help students and professionals strengthen their
                  research skills. These programs offer direct exposure to
                  community dynamics, local ecosystems, and real-world
                  problem-solving.
                </p>
              </div>

              <div className="service-card card p-6 flex flex-col border-purple-100 hover-lift min-h-[300px]">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  Institutional Capacity Building & Faculty Development
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 flex-1">
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
              <div className="service-card card p-6 flex flex-col border-purple-100 hover-lift min-h-[300px]">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  Market Validation & Impact Assessments
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 flex-1">
                  We assess the real-world relevance, feasibility, and social
                  impact of startup solutions through field insights, user
                  feedback, and data-driven evaluations. This helps founders
                  refine their product-market fit and demonstrate measurable
                  value.
                </p>
              </div>

              <div className="service-card card p-6 flex flex-col border-purple-100 hover-lift min-h-[300px]">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  Business Plan Development & Growth Strategies
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 flex-1">
                  We support startups in crafting structured business plans with
                  clear value propositions, operational pathways, and scalable
                  growth models tailored to their sector and mission.
                </p>
              </div>

              <div className="service-card card p-6 flex flex-col border-purple-100 hover-lift min-h-[300px]">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  Financial Modeling & Sustainability Practices
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 flex-1">
                  We help entrepreneurs develop realistic financial projections,
                  cost structures, and long-term sustainability frameworks to
                  ensure stable, viable business operations.
                </p>
              </div>

              <div className="service-card card p-6 flex flex-col border-purple-100 hover-lift min-h-[300px]">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  CSR Partnerships & Funding Guidance
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 flex-1">
                  We connect startups with relevant CSR partners and provide
                  advisory support for funding applications, proposal
                  development, and strategic collaborations.
                </p>
              </div>

              <div className="service-card card p-6 flex flex-col border-purple-100 hover-lift min-h-[300px]">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  Ecosystem Support with Incubators & Accelerators
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 flex-1">
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
