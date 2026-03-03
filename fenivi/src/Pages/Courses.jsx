import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Calendar } from "lucide-react";
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { PRIMARY, PRIMARY_BG } from "../theme";

gsap.registerPlugin(ScrollTrigger);

// ============ FEATURE CARD ============
const FeatureCard = ({ item }) => {
  return (
    <div
      className="feature-card relative bg-white rounded-2xl border border-gray-100 p-5 md:p-8 overflow-hidden"
    >
      {/* CONTENT */}
      <div className="relative z-10">
        {/* ICON */}
        <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full text-white text-base md:text-xl shadow-lg mb-4 md:mb-6" style={{ backgroundColor: PRIMARY_BG }}>
          {item.icon}
        </div>

        {/* TITLE */}
        <h3 className="text-[13px] md:text-lg font-semibold text-gray-900 mb-2 md:mb-3 leading-snug">
          {item.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-gray-500 text-[10px] md:text-sm leading-relaxed">{item.desc}</p>
      </div>
    </div>
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

    const cards = sectionRef.current.querySelectorAll(".feature-card");
    if (cards.length === 0) return;

    gsap.fromTo(
      cards,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
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
      className="relative pt-36 pb-24 bg-[#f8f9fc] overflow-hidden will-change-transform"
    >

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
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
        <div className="grid gap-4 md:gap-8 grid-cols-2 lg:grid-cols-4">
          {features.map((item, i) => (
            <FeatureCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ============ COURSE CARD COMPONENT ============
const CourseCard = ({
  id,
  title,
  description,
  duration,
  format,
  level,
  image,
  badge,
  gradient,
  badgeColor,
  location,
  courseDate,
  courseTime,
  price,
  category,
  earlyBirdDiscount,
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.fromTo(
      card,
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
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
      className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-500 flex flex-col h-full relative"
    >
      {earlyBirdDiscount && (
        <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none z-20 overflow-hidden">
          <div
            className="absolute top-0 right-0 bg-red-600 text-white text-[8px] font-bold py-1 px-10 transform rotate-45 translate-x-[30%] translate-y-[20%] shadow-sm"
            style={{ backgroundColor: '#ef4444' }}
          >
            EARLY BIRD
          </div>
        </div>
      )}
      {/* IMAGE SECTION - Badges inside to prevent title overlap */}
      <div className={`relative h-52 overflow-hidden ${gradient}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-2 left-2 z-10">
          <span
            className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider shadow-sm text-white ${category === 'ongoing' ? 'bg-green-600' : ''}`}
            style={category !== 'ongoing' ? { backgroundColor: PRIMARY } : {}}
          >
            {category || 'Upcoming'}
          </span>
        </div>
        <div className="absolute top-3 right-3 z-10">
          <span className="bg-white/90 backdrop-blur-sm border border-gray-100 px-2 py-0.5 rounded-full text-[9px] font-bold text-gray-900 shadow-sm">
            {price || 'Free'}
          </span>
        </div>
        <div className="absolute bottom-3 left-3">
          <span
            className={`inline-block px-2 py-0.5 ${badgeColor} font-semibold text-[9px] rounded-full shadow-md`}
          >
            {badge || 'Certificate'}
          </span>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-medium text-gray-900 mb-1.5 line-clamp-1">{title}</h3>

        <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
          <MapPin size={12} className="text-gray-400" />
          <span>{location || 'Online'}</span>
          {courseDate && (
            <>
              <span className="mx-1">•</span>
              <Calendar size={12} className="text-gray-400" />
              <span>{new Date(courseDate).toLocaleDateString('en-GB')}</span>
            </>
          )}
        </div>

        <p className="text-xs text-gray-600 mb-4 line-clamp-2">
          {description}
        </p>

        {/* INFO GRID */}
        <div className="grid grid-cols-3 gap-2 mb-4 py-3 border-y border-gray-100">
          <div>
            <p className="text-[9px] text-gray-400 font-semibold mb-0.5 uppercase tracking-wider">Duration</p>
            <p className="text-[10px] font-bold text-gray-900">{duration}</p>
          </div>
          <div>
            <p className="text-[9px] text-gray-400 font-semibold mb-0.5 uppercase tracking-wider">Format</p>
            <p className="text-[10px] font-bold text-gray-900">{format}</p>
          </div>
          <div>
            <p className="text-[9px] text-gray-400 font-semibold mb-0.5 uppercase tracking-wider">Level</p>
            <p className="text-[10px] font-bold text-gray-900">{level}</p>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-2.5 mt-auto">
          <Link
            to={`/courses/${id}`}
            className="btn-primary w-full text-center text-[10px]"
          >
            Learn More
          </Link>
          <Link
            to="/contact"
            className="btn-outline w-full text-center text-[10px]"
          >
            Enroll
          </Link>
        </div>
      </div>
    </div>
  );
};

// ============ DYNAMIC COURSES SECTION ============
const DynamicCoursesSection = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef(null);

  useEffect(() => {
    const q = query(collection(db, "courses"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      setCourses(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      setLoading(false);
    });

    return () => unsub();
  }, []);

  useEffect(() => {
    const heading = sectionRef.current?.querySelector(".courses-heading");
    if (!heading) return;

    gsap.fromTo(
      heading,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.45,
        scrollTrigger: {
          trigger: heading,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        ease: "power2.out",
      },
    );
  }, [courses]);

  if (loading) {
    return (
      <div className="w-full bg-white py-20 text-center">
        <p className="text-gray-600 animate-pulse">Loading courses...</p>
      </div>
    );
  }

  if (courses.length === 0) {
    return (
      <div className="w-full bg-white py-20 text-center">
        <p className="text-gray-500 italic">No courses available at the moment.</p>
      </div>
    );
  }

  return (
    <section
      ref={sectionRef}
      id="all-courses"
      className="w-full bg-white py-20 px-4 md:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="courses-heading mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
            Our Programs
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Comprehensive courses to advance your research career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ============ MAIN COURSES COMPONENT ============
export default function Courses() {
  return (
    <div className="w-full bg-white text-gray-900 min-h-screen">
      <FeaturesSection />
      <DynamicCoursesSection />
    </div>
  );
}
