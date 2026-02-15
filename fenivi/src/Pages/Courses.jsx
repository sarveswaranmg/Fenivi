import React, { useEffect, useState, useRef } from "react";
import coursesAndResearch from "../assets/coursesandresearch.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ============ HERO SECTION ============
const HeroSection = () => {
  const heroRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!heroRef.current) return;

    // Stagger text animations
    gsap.fromTo(
      ".hero-pill",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.1,
        ease: "power2.out",
      },
    );

    gsap.fromTo(
      ".hero-title",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
      },
    );

    gsap.fromTo(
      ".hero-subtitle",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.35,
        ease: "power2.out",
      },
    );

    gsap.fromTo(
      ".hero-buttons button, .hero-buttons a",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.5,
        ease: "power2.out",
      },
    );

    gsap.fromTo(
      ".hero-stats",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.7,
        ease: "power2.out",
      },
    );

    gsap.fromTo(
      ".hero-float",
      { opacity: 0, x: !isMobile ? 50 : 0, y: isMobile ? 30 : 0 },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.8,
        delay: 0.4,
        ease: "power2.out",
      },
    );

    // Floating animation for image
    gsap.to(".hero-float", {
      y: -15,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, [isMobile]);

  return (
    <section
      ref={heroRef}
      className="w-full bg-white pt-28 pb-16 md:pt-32 md:pb-20 px-4 md:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT: TEXT CONTENT */}
          <div className="space-y-6">
            <div className="hero-pill inline-block">
              <span className="px-4 py-2 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full">
                Transform Your Career
              </span>
            </div>

            <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Next Generation of{" "}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Researchers
              </span>
            </h1>

            <p className="hero-subtitle text-gray-600 text-lg leading-relaxed max-w-xl">
              Master research fundamentals, advanced methodologies, and
              professional skills with our flexible, expert-led programs
              designed for ambitious researchers worldwide.
            </p>

            <div className="hero-buttons flex flex-wrap gap-4 pt-4">
              <a
                href="#featured"
                className="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Explore Courses
              </a>
              <a
                href="/contact"
                className="px-8 py-3.5 border-2 border-purple-600 text-purple-600 font-semibold rounded-full hover:bg-purple-50 transition-all duration-300"
              >
                Talk to Advisor
              </a>
            </div>

            <div className="hero-stats grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-gray-900">
                  500+
                </p>
                <p className="text-sm text-gray-600">Enrolled Students</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-purple-600">
                  6
                </p>
                <p className="text-sm text-gray-600">Active Programs</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-gray-900">
                  95%
                </p>
                <p className="text-sm text-gray-600">Success Rate</p>
              </div>
            </div>
          </div>

          {/* RIGHT: HERO IMAGE WITH GLOW */}
          {/* RIGHT HERO IMAGE */}
          <div
            className="relative flex items-center justify-end
                h-[320px] md:h-[480px] lg:h-[520px]"
          >
            {/* === SOFT BACKGROUND LIGHT === */}
            <div
              className="absolute
               right-10 top-1/2 -translate-y-1/2
               w-[520px] h-[520px]
               bg-[radial-gradient(circle_at_center,rgba(168,139,250,0.35),transparent_65%)]
               blur-2xl"
            />

            {/* === FLOATING IMAGE === */}
            <img
              src={coursesAndResearch}
              alt="Next Generation Researchers"
              className="hero-float
               relative z-10
               w-[360px] md:w-[460px] lg:w-[520px]
               object-contain
               drop-shadow-[0_40px_60px_rgba(88,28,135,0.25)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// ============ FEATURES SECTION ============
const FeaturesSection = () => {
  const features = [
    {
      title: "Industry-Recognized Certifications",
      desc: "Enhance your credentials with globally recognized certificates",
      icon: "🏅",
    },
    {
      title: "Expert Instructors",
      desc: "Learn from leading researchers and faculty members",
      icon: "👥",
    },
    {
      title: "Flexible Learning",
      desc: "Choose from online, in-person, and hybrid formats",
      icon: "⚡",
    },
    {
      title: "Practical Skills",
      desc: "Hands-on training with real-world applications",
      icon: "📖",
    },
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.from(".feature-card", {
      scrollTrigger: {
        trigger: ".feature-card",
        start: "top 85%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 40,
      duration: 0.7,
      stagger: 0.15,
      ease: "power2.out",
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#f8f9fc]">
      <div className="max-w-7xl mx-auto px-6">
        {/* ===== HEADER ===== */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why Choose Our Programs?
          </h2>

          <p className="mt-4 text-lg text-gray-500">
            Excellence, flexibility, and real-world impact
          </p>
        </div>

        {/* ===== CARDS GRID ===== */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, i) => (
            <div
              key={i}
              className="feature-card group bg-white rounded-2xl border border-gray-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* ICON */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 text-white text-xl shadow-lg mb-6">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-snug">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============ COURSE CARD COMPONENT ============
const CourseCard = ({
  title,
  description,
  duration,
  format,
  level,
  image,
  badge,
  gradient,
  badgeColor,
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.fromTo(
      card,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        ease: "power2.out",
      },
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-500 flex flex-col h-full"
    >
      {/* IMAGE SECTION */}
      <div className={`relative h-56 overflow-hidden ${gradient}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4">
          <span
            className={`inline-block px-3 py-1 ${badgeColor} font-semibold text-xs rounded-full`}
          >
            {badge}
          </span>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>

        <p className="text-sm text-gray-600 mb-5 line-clamp-2 flex-grow">
          {description}
        </p>

        {/* INFO GRID */}
        <div className="grid grid-cols-3 gap-3 mb-5 py-4 border-y border-gray-200">
          <div>
            <p className="text-xs text-gray-500 font-semibold mb-1">Duration</p>
            <p className="text-sm font-bold text-gray-900">{duration}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 font-semibold mb-1">Format</p>
            <p className="text-sm font-bold text-gray-900">{format}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 font-semibold mb-1">Level</p>
            <p className="text-sm font-bold text-gray-900">{level}</p>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-3 mt-auto">
          <a
            href="/contact"
            className="w-full px-4 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold text-sm hover:shadow-lg transition text-center"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

// ============ FEATURED COURSES SECTION ============
const FeaturedCoursesSection = () => {
  const courses = [
    {
      title: "Psycho-Oncology Research",
      description:
        "Master the psychological impact of cancer and research techniques for improved patient care",
      duration: "30 Hours",
      format: "Hybrid",
      level: "Advanced",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
      badge: "Certificate",
      badgeColor: "bg-gradient-to-br from-purple-500 to-indigo-600 text-white",
      gradient: "bg-gradient-to-br from-purple-500 to-indigo-600",
    },
    {
      title: "Research Methodology & Scientific Writing",
      description:
        "Design robust studies, analyze data, and craft high-impact scientific manuscripts",
      duration: "40 Hours",
      format: "Online",
      level: "Beginner",
      image:
        "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop",
      badge: "Certificate",
      badgeColor: "bg-gradient-to-br from-indigo-500 to-purple-600 text-white",
      gradient: "bg-gradient-to-br from-indigo-500 to-purple-600",
    },
    {
      title: "Research Skills & Tools Workshop",
      description:
        "Hands-on training with SPSS, R programming, ethical reviews & systematic reviews",
      duration: "15 Hours",
      format: "In-Person",
      level: "Beginner",
      image:
        "https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=600&h=400&fit=crop",
      badge: "Workshop",
      badgeColor: "bg-gradient-to-br from-indigo-500 to-purple-600 text-white",
      gradient: "bg-gradient-to-br from-indigo-500 to-purple-600",
    },
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const heading = sectionRef.current?.querySelector(".featured-heading");
    if (!heading) return;

    gsap.fromTo(
      heading,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: heading,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        ease: "power2.out",
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="featured"
      className="w-full bg-white py-20 px-4 md:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="featured-heading mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Featured <span className="text-purple-600">Programs</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Comprehensive courses to advance your research career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ============ MORE PROGRAMS SECTION ============
const MoreProgramsSection = () => {
  const moreCourses = [
    {
      title: "Faculty Development & Institutional Programs",
      description:
        "Advanced pedagogical tools and leadership skills for educators",
      duration: "50 Hours",
      format: "Hybrid",
      level: "Advanced",
      image:
        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop",
      badge: "Certificate",
      badgeColor: "bg-gradient-to-br from-purple-500 to-indigo-600 text-white",
      gradient: "bg-gradient-to-br from-purple-500 to-indigo-600",
    },
    {
      title: "Thesis, Grant Writing & Publications",
      description:
        "Personalized guidance for thesis development, grants, and publishing",
      duration: "Custom",
      format: "1-on-1",
      level: "All Levels",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop",
      badge: "Mentorship",
      badgeColor: "bg-gradient-to-br from-indigo-500 to-purple-600 text-white",
      gradient: "bg-gradient-to-br from-indigo-500 to-purple-600",
    },
    {
      title: "Advanced Specializations",
      description:
        "New courses in clinical research, data science, and AI applications",
      duration: "TBA",
      format: "TBA",
      level: "All Levels",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
      badge: "Coming Soon",
      badgeColor: "bg-gradient-to-br from-cyan-500 to-blue-600 text-white",
      gradient: "bg-gradient-to-br from-cyan-500 to-blue-600",
    },
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const heading = sectionRef.current?.querySelector(".more-heading");
    if (!heading) return;

    gsap.fromTo(
      heading,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: heading,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        ease: "power2.out",
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-gradient-to-b from-gray-50 to-white py-20 px-4 md:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {moreCourses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ============ CTA SECTION ============
const CTASection = () => {
  const ctaRef = useRef(null);

  useEffect(() => {
    const section = ctaRef.current;
    if (!section) return;

    gsap.fromTo(
      section.querySelector(".cta-content"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none none",
        },
        ease: "power2.out",
      },
    );
  }, []);

  return (
    <section
      ref={ctaRef}
      className="w-full bg-white py-20 px-4 md:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <div className="cta-content bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-10 md:p-16 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Ready to Transform Your Research Career?
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            Join hundreds of researchers, students, and professionals who have
            advanced their careers with Fenivi's comprehensive training
            programs.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Get Started Today
            </a>
            <a
              href="#featured"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Browse All Courses
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============ MAIN COURSES COMPONENT ============
export default function Courses() {
  return (
    <div className="w-full bg-white text-gray-900 min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <FeaturedCoursesSection />
      <MoreProgramsSection />
      <CTASection />
    </div>
  );
}
