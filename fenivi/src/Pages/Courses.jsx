import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import coursesAndResearch from "../assets/coursesandresearch.png";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch courses from Firestore
  useEffect(() => {
    const q = query(collection(db, "courses"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const list = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCourses(list);
        setLoading(false);
      },
      (err) => {
        console.error("Error fetching courses:", err);
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-purple-100 via-white to-violet-50 text-gray-900 min-h-screen">
      {/* ===== Header Section ===== */}
      <section className="w-full pt-32 pb-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* TEXT CONTENT */}
            <div className="order-2 lg:order-1">
              <h2 className="text-xl md:text-2xl italic text-gray-600 mb-2">
                Building the
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Next Generation of Researchers
              </h1>

              <div className="space-y-6">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Fenivi offers structured, flexible research training programs
                  designed for students, PhD scholars, clinicians, and young
                  professionals.
                </p>


              </div>
            </div>

            {/* IMAGE/LOGO */}
            <div className="order-1 lg:order-2 relative flex justify-center">
              <div className="relative w-full max-w-lg aspect-square">
                <img
                  src={coursesAndResearch}
                  alt="Courses and Research"
                  className="w-full h-full object-contain relative z-10"
                  style={{
                    filter: "drop-shadow(0 20px 40px rgba(147, 51, 234, 0.2))",
                  }}
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-100/50 rounded-full blur-3xl -z-0 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Static Course Cards (Three Column Layout) ===== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-12 md:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {/* Course Card 1 */}
          <div className="group relative h-[24rem] sm:h-[26rem] md:h-[28rem] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20">
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop"
              alt="Psycho-Oncology"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 border border-white/10"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>

            {/* Content with Glass Effect */}
            <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-end">
              <div className="bg-purple-300/20 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-purple-400/20 shadow-2xl">
                <h3 className="text-sm sm:text-base font-bold text-white mb-2 sm:mb-3">
                  Certificate Course in Psycho-Oncology Research
                </h3>

                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3">
                  <div>
                    <p className="text-gray-300 text-[9px] sm:text-[10px] mb-1">
                      Duration
                    </p>
                    <p className="text-white text-[11px] sm:text-xs font-light">
                      30 hours
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-300 text-[10px] mb-1">Format</p>
                    <p className="text-white text-xs font-light">Hybrid</p>
                  </div>
                </div>

                <p className="text-gray-200 text-[11px] sm:text-xs mb-4 line-clamp-3 leading-relaxed">
                  Explore the psychological impact of cancer and master research techniques to improve patient care and psychosocial outcomes.
                </p>

                <a
                  href="/contact?subject=Course&course=Certificate Course in Psycho-Oncology Research"
                  className="block w-full text-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-purple-600 rounded-lg font-medium text-xs sm:text-sm hover:bg-purple-50 transition"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Course Card 2 */}
          <div className="group relative h-[24rem] sm:h-[26rem] md:h-[28rem] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20">
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&h=600&fit=crop"
              alt="Research Methodology"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 border border-white/10"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>

            {/* Content with Glass Effect */}
            <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-end">
              <div className="bg-purple-300/20 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-purple-400/20 shadow-2xl">
                <h3 className="text-sm sm:text-base font-bold text-white mb-2 sm:mb-3">
                  Certificate Course in Research Methodology & Scientific
                  Writing
                </h3>

                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3">
                  <div>
                    <p className="text-gray-300 text-[9px] sm:text-[10px] mb-1">
                      Duration
                    </p>
                    <p className="text-white text-[11px] sm:text-xs font-light">
                      40 hours
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-300 text-[9px] sm:text-[10px] mb-1">
                      Format
                    </p>
                    <p className="text-white text-[11px] sm:text-xs font-light">
                      Online
                    </p>
                  </div>
                </div>

                <p className="text-gray-200 text-[11px] sm:text-xs mb-4 line-clamp-3 leading-relaxed">
                  Master the art of designing robust studies, analyzing data, and crafting high-impact scientific manuscripts for international journals.
                </p>

                <a
                  href="/contact?subject=Course&course=Certificate Course in Research Methodology %26 Scientific Writing"
                  className="block w-full text-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-purple-600 rounded-lg font-medium text-xs sm:text-sm hover:bg-purple-50 transition"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Course Card 3 */}
          <div className="group relative h-[24rem] sm:h-[26rem] md:h-[28rem] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20">
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=1200&h=600&fit=crop"
              alt="Research Skills"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 border border-white/10"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>

            {/* Content with Glass Effect */}
            <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-end">
              <div className="bg-purple-300/20 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-purple-400/20 shadow-2xl">
                <h3 className="text-sm sm:text-base font-bold text-white mb-2 sm:mb-3">
                  Short-Term Research Skill Workshops
                </h3>

                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3">
                  <div>
                    <p className="text-gray-300 text-[9px] sm:text-[10px] mb-1">
                      Duration
                    </p>
                    <p className="text-white text-[11px] sm:text-xs font-light">
                      15 hours
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-300 text-[9px] sm:text-[10px] mb-1">
                      Format
                    </p>
                    <p className="text-white text-[11px] sm:text-xs font-light">
                      In-Person
                    </p>
                  </div>
                </div>

                <p className="text-gray-200 text-[11px] sm:text-xs mb-4 line-clamp-3 leading-relaxed">
                  Intensive, hands-on sessions focusing on specific tools like SPSS, R programming, ethical reviews, and systematic literature reviews.
                </p>

                <a
                  href="/contact?subject=Course&course=Short-Term Research Skill Workshops"
                  className="block w-full text-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-purple-600 rounded-lg font-medium text-xs sm:text-sm hover:bg-purple-50 transition"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Course Card 4 */}
          <div className="group relative h-[24rem] sm:h-[26rem] md:h-[28rem] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20">
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200&h=600&fit=crop"
              alt="Faculty Development"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 border border-white/10"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>

            {/* Content with Glass Effect */}
            <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-end">
              <div className="bg-purple-300/20 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-purple-400/20 shadow-2xl">
                <h3 className="text-sm sm:text-base font-bold text-white mb-2 sm:mb-3">
                  Faculty Development & Institutional Programs
                </h3>

                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3">
                  <div>
                    <p className="text-gray-300 text-[9px] sm:text-[10px] mb-1">
                      Duration
                    </p>
                    <p className="text-white text-[11px] sm:text-xs font-light">
                      50 hours
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-300 text-[9px] sm:text-[10px] mb-1">
                      Format
                    </p>
                    <p className="text-white text-[11px] sm:text-xs font-light">
                      Hybrid
                    </p>
                  </div>
                </div>

                <p className="text-gray-200 text-[11px] sm:text-xs mb-4 line-clamp-3 leading-relaxed">
                  Empowering educators and institutions with advanced pedagogical tools, research leadership skills, and strategies for academic excellence.
                </p>

                <a
                  href="/contact?subject=Course&course=Faculty Development %26 Institutional Programs"
                  className="block w-full text-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-purple-600 rounded-lg font-medium text-xs sm:text-sm hover:bg-purple-50 transition"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Course Card 5 */}
          <div className="group relative h-[24rem] sm:h-[26rem] md:h-[28rem] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20">
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&h=300&fit=crop"
              alt="Mentorship"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 border border-white/10"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>

            {/* Content with Glass Effect */}
            <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-end">
              <div className="bg-purple-300/20 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-purple-400/20 shadow-2xl">
                <h3 className="text-sm sm:text-base font-bold text-white mb-2 sm:mb-3">
                  Mentorship for Thesis, Grant Writing & Publications
                </h3>

                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3">
                  <div>
                    <p className="text-gray-300 text-[9px] sm:text-[10px] mb-1">
                      Duration
                    </p>
                    <p className="text-white text-[11px] sm:text-xs font-light">
                      Custom
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-300 text-[9px] sm:text-[10px] mb-1">
                      Format
                    </p>
                    <p className="text-white text-[11px] sm:text-xs font-light">
                      1-on-1
                    </p>
                  </div>
                </div>

                <p className="text-gray-200 text-[11px] sm:text-xs mb-4 line-clamp-3 leading-relaxed">
                  Personalized guidance from experts to help you navigate thesis development, secure research funding, and publish in top-tier journals.
                </p>

                <a
                  href="/contact?subject=Course&course=Mentorship for Thesis, Grant Writing %26 Publications"
                  className="block w-full text-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-purple-600 rounded-lg font-medium text-xs sm:text-sm hover:bg-purple-50 transition"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Course Card 6 - Coming Soon */}
          <div className="group relative h-[24rem] sm:h-[26rem] md:h-[28rem] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20">
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=600&fit=crop"
              alt="Coming Soon"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 border border-white/10"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>

            {/* Content with Glass Effect */}
            <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-end">
              <div className="bg-purple-300/20 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-purple-400/20 shadow-2xl">
                <h3 className="text-sm sm:text-base font-bold text-white mb-2 sm:mb-3">
                  More Courses Coming Soon
                  <br />
                  <br></br>
                </h3>

                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3">
                  <div>
                    <p className="text-gray-300 text-[9px] sm:text-[10px] mb-1">
                      Status
                    </p>
                    <p className="text-white text-[11px] sm:text-xs font-light">
                      Coming
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-300 text-[9px] sm:text-[10px] mb-1">
                      Availability
                    </p>
                    <p className="text-white text-[11px] sm:text-xs font-light">
                      Soon
                    </p>
                  </div>
                </div>

                <p className="text-gray-200 text-[11px] sm:text-xs mb-4 line-clamp-3 leading-relaxed">
                  Stay tuned for more specialized programs in clinical research, data science, and academic professional development.
                </p>

                <button
                  disabled
                  className="block w-full text-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/50 text-purple-400 rounded-lg font-medium text-xs sm:text-sm cursor-not-allowed"
                >
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Dynamic Course List from Firestore ===== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pb-16 md:pb-24">
        {loading && (
          <p className="text-center text-gray-500 text-base sm:text-lg">
            Loading courses...
          </p>
        )}

        <div className="space-y-6 md:space-y-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex flex-col md:flex-row gap-4 sm:gap-5 md:gap-6 p-4 sm:p-5 md:p-6 border border-gray-100 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-lg transition-all bg-white"
            >
              {/* Course Image */}
              <div className="md:w-1/3 w-full overflow-hidden rounded-xl sm:rounded-2xl">
                <img
                  src={
                    course.thumbnailUrl || "https://via.placeholder.com/400x300"
                  }
                  alt={course.title}
                  className="w-full h-48 sm:h-52 md:h-48 object-cover rounded-xl sm:rounded-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Course Content */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  {course.level && (
                    <span className="inline-block text-[10px] sm:text-xs px-2 sm:px-3 py-1 bg-purple-100 text-purple-700 font-medium rounded-full mb-2 sm:mb-3">
                      {course.level}
                    </span>
                  )}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-gray-900">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-3 sm:mb-4">
                    {course.description}
                  </p>
                </div>

                <div className="flex flex-wrap justify-between items-center text-xs sm:text-sm text-gray-600">
                  <div>
                    <p>
                      <span className="font-semibold">Duration: </span>
                      {course.duration || "Self-paced"}
                    </p>
                    <p>
                      <span className="font-semibold">Format: </span>
                      {course.format || "Online"}
                    </p>
                  </div>

                  <div className="flex gap-2 sm:gap-3 mt-3 sm:mt-4 md:mt-0">
                    {course.enrollUrl && (
                      <a
                        href={course.enrollUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-medium text-xs sm:text-sm hover:opacity-90 transition"
                      >
                        Enroll Now
                      </a>
                    )}
                    <a
                      href={`/contact?subject=Course&course=${encodeURIComponent(course.title)}`}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-full font-medium text-xs sm:text-sm hover:bg-gray-100 transition"
                    >
                      Enquire More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
