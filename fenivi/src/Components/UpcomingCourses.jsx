import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot, limit } from "firebase/firestore";
import gsap from "gsap";
import { Calendar, MapPin, Clock } from "lucide-react";

export default function UpcomingCourses() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const sectionRef = useRef(null);

    useEffect(() => {
        // We only want upcoming or ongoing ones for this section
        const q = query(collection(db, "courses"), orderBy("createdAt", "desc"), limit(6));
        const unsub = onSnapshot(q, (snap) => {
            setCourses(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
            setLoading(false);
        });
        return () => unsub();
    }, []);

    useEffect(() => {
        if (!sectionRef.current || courses.length === 0) return;

        const cards = sectionRef.current.querySelectorAll(".upcoming-course-card");
        gsap.fromTo(
            cards,
            { opacity: 0, x: 20 },
            {
                opacity: 1,
                x: 0,
                duration: 0.6,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, [courses]);

    if (loading || courses.length === 0) return null;

    return (
        <section ref={sectionRef} className="w-full py-12 lg:py-20 bg-gray-50/50">
            <div className="page-container">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Upcoming <span className="text-purple-600">Courses</span>
                    </h2>
                    <Link to="/courses" className="text-purple-600 font-semibold hover:underline text-sm">
                        View All Courses →
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="upcoming-course-card relative bg-white rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col sm:flex-row gap-6 items-center"
                        >
                            {/* Category Badge - Top Left */}
                            <div className="absolute top-4 left-4 z-10">
                                <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm ${course.category === 'upcoming' ? 'bg-purple-100 text-purple-700' :
                                        course.category === 'ongoing' ? 'bg-green-100 text-green-700' :
                                            'bg-gray-100 text-gray-700'
                                    }`}>
                                    {course.category || 'Upcoming'}
                                </span>
                            </div>

                            {/* Price Badge - Top Right */}
                            <div className="absolute top-4 right-4 z-10">
                                <span className="bg-white/90 backdrop-blur-sm border border-gray-100 px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold text-purple-600 shadow-sm">
                                    {course.price || 'Free'}
                                </span>
                            </div>

                            {/* Thumbnail - Left (Rounded Rect) */}
                            <div className="w-full sm:w-48 h-40 flex-shrink-0">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover rounded-2xl shadow-md border border-gray-50"
                                />
                            </div>

                            {/* Content - Right */}
                            <div className="flex-1 space-y-3 w-full">
                                <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight line-clamp-1">
                                    {course.title}
                                </h3>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                                        <MapPin size={14} className="text-purple-500" />
                                        <span>{course.location || 'Online'}</span>
                                    </div>

                                    <div className="flex items-center gap-4 text-gray-500 text-sm italic">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={14} className="text-purple-500" />
                                            <span>{course.courseDate ? new Date(course.courseDate).toLocaleDateString('en-GB') : 'TBA'}</span>
                                        </div>
                                        {course.courseTime && (
                                            <div className="flex items-center gap-2">
                                                <Clock size={14} className="text-purple-500" />
                                                <span>{course.courseTime}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <Link
                                        to="/contact"
                                        className="inline-block px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
