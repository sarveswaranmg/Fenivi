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
      <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-center">
          {/* IMAGE */}
          <div className="relative order-2 lg:order-1">
            <img
              src={coursesAndResearch}
              alt="Courses and Research"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto h-auto select-none transform duration-700"
              style={{
                filter: "drop-shadow(0 10px 30px rgba(147, 51, 234, 0.3))",
              }}
            />
          </div>

          {/* TEXT CONTENT */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl italic text-gray-900 mt-8 sm:mt-10 md:mt-12">
              Building the
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mt-2">
              Next Generation of Researchers
            </h3>

            <p className="text-gray-700 mt-4 md:mt-6 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
              Fenivi offers structured, flexible research training programs
              designed for students, PhD scholars, clinicians, and young
              professionals.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Static Course Cards (Three Column Layout) ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pb-12 md:pb-16">
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

                <a
                  href="/courses/psycho-oncology-research"
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

                <a
                  href="/courses/research-methodology-scientific-writing"
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

                <a
                  href="/courses/research-skill-workshops"
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

                <a
                  href="/courses/faculty-development-programs"
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

                <a
                  href="/courses/mentorship-programs"
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
                      href={`/courses/${course.id}`}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-full font-medium text-xs sm:text-sm hover:bg-gray-100 transition"
                    >
                      Learn More
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
