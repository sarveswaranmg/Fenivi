import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import ContactButton from "../Components/ContactButton";

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
      <ContactButton />
      {/* ===== Header Section ===== */}
      <section className="w-full py-24 px-6 md:px-16 lg:px-24 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Building the Next Generation of Researchers
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed mt-6">
          Fenivi offers structured, flexible research training programs designed
          for students, PhD scholars, clinicians, and young professionals.
        </p>
        <div className="w-20 h-[3px] bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mt-6 rounded-full" />
      </section>

      {/* ===== Static Course Cards (Two Column Layout) ===== */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Course Card 1 */}
          <div className="group relative h-96 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20">
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop"
              alt="Psycho-Oncology"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 border border-white/10"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>

            {/* Content with Glass Effect */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="bg-purple-300/20 backdrop-blur-md rounded-2xl p-6 border border-purple-400/20 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-4">
                  Certificate Course in Psycho-Oncology Research
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-300 text-xs mb-1">Duration</p>
                    <p className="text-white text-sm font-light">30 hours</p>
                  </div>
                  <div>
                    <p className="text-gray-300 text-xs mb-1">Format</p>
                    <p className="text-white text-sm font-light">Hybrid</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Course Card 2 */}
          <div className="group relative h-96 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20">
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&h=600&fit=crop"
              alt="Research Methodology"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 border border-white/10"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>

            {/* Content with Glass Effect */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="bg-purple-300/20 backdrop-blur-md rounded-2xl p-6 border border-purple-400/20 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-4">
                  Certificate Course in Research Methodology & Scientific
                  Writing
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-300 text-xs mb-1">Duration</p>
                    <p className="text-white text-sm font-light">40 hours</p>
                  </div>
                  <div>
                    <p className="text-gray-300 text-xs mb-1">Format</p>
                    <p className="text-white text-sm font-light">Online</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Course Card 3 */}
          <div className="group relative h-96 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20">
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=1200&h=600&fit=crop"
              alt="Research Skills"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 border border-white/10"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>

            {/* Content with Glass Effect */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="bg-purple-300/20 backdrop-blur-md rounded-2xl p-6 border border-purple-400/20 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-4">
                  Short-Term Research Skill Workshops
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-300 text-xs mb-1">Duration</p>
                    <p className="text-white text-sm font-light">15 hours</p>
                  </div>
                  <div>
                    <p className="text-gray-300 text-xs mb-1">Format</p>
                    <p className="text-white text-sm font-light">In-Person</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Course Card 4 */}
          <div className="group relative h-96 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20">
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200&h=600&fit=crop"
              alt="Faculty Development"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 border border-white/10"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>

            {/* Content with Glass Effect */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="bg-purple-300/20 backdrop-blur-md rounded-2xl p-6 border border-purple-400/20 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-4">
                  Faculty Development & Institutional Programs
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-300 text-xs mb-1">Duration</p>
                    <p className="text-white text-sm font-light">50 hours</p>
                  </div>
                  <div>
                    <p className="text-gray-300 text-xs mb-1">Format</p>
                    <p className="text-white text-sm font-light">Hybrid</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Course Card 5 */}
          <div className="group relative h-96 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20">
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&h=300&fit=crop"
              alt="Mentorship"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 border border-white/10"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>

            {/* Content with Glass Effect */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="bg-purple-300/20 backdrop-blur-md rounded-2xl p-6 border border-purple-400/20 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-4">
                  Mentorship for Thesis, Grant Writing & Publications
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-300 text-xs mb-1">Duration</p>
                    <p className="text-white text-sm font-light">Custom</p>
                  </div>
                  <div>
                    <p className="text-gray-300 text-xs mb-1">Format</p>
                    <p className="text-white text-sm font-light">1-on-1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Course Card 6 - Coming Soon */}
          <div className="group relative h-96 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20">
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=600&fit=crop"
              alt="Coming Soon"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 border border-white/10"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>

            {/* Content with Glass Effect */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="bg-purple-300/20 backdrop-blur-md rounded-2xl p-6 border border-purple-400/20 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-4">
                  More Courses Coming Soon
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-300 text-xs mb-1">Status</p>
                    <p className="text-white text-sm font-light">Coming</p>
                  </div>
                  <div>
                    <p className="text-gray-300 text-xs mb-1">Availability</p>
                    <p className="text-white text-sm font-light">Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Dynamic Course List from Firestore ===== */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 pb-24">
        {loading && (
          <p className="text-center text-gray-500 text-lg">
            Loading courses...
          </p>
        )}

        <div className="space-y-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex flex-col md:flex-row gap-6 p-6 border border-gray-100 rounded-3xl shadow-sm hover:shadow-lg transition-all bg-white"
            >
              {/* Course Image */}
              <div className="md:w-1/3 w-full overflow-hidden rounded-2xl">
                <img
                  src={
                    course.thumbnailUrl || "https://via.placeholder.com/400x300"
                  }
                  alt={course.title}
                  className="w-full h-52 md:h-48 object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Course Content */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  {course.level && (
                    <span className="inline-block text-xs px-3 py-1 bg-purple-100 text-purple-700 font-medium rounded-full mb-3">
                      {course.level}
                    </span>
                  )}
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                    {course.description}
                  </p>
                </div>

                <div className="flex flex-wrap justify-between items-center text-sm text-gray-600">
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

                  <div className="flex gap-3 mt-4 md:mt-0">
                    {course.enrollUrl && (
                      <a
                        href={course.enrollUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-medium text-sm hover:opacity-90 transition"
                      >
                        Enroll Now
                      </a>
                    )}
                    <a
                      href={`/courses/${course.id}`}
                      className="px-4 py-2 border border-gray-300 rounded-full font-medium text-sm hover:bg-gray-100 transition"
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
