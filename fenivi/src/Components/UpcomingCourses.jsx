import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot, limit } from "firebase/firestore";
import gsap from "gsap";
import { Calendar, MapPin, Clock, IndianRupee, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { PRIMARY, PRIMARY_LIGHT, PRIMARY_BG } from "../theme";

export default function UpcomingCourses() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const sectionRef = useRef(null);
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

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
                <div className="flex items-start justify-between mb-8">
                    <div>
                        <h2 className="text-2xl md:text-2xl font-normal text-gray-900 leading-tight">
                            Learn With Fenivi
                        </h2>
                        <p className="text-gray-400 text-sm mt-2 max-w-lg leading-relaxed">
                            Research backed learning for professionals and changemakers  built from real-world evidence to help you grow, lead, and create lasting impact.
                        </p>
                    </div>

                    <div className="flex items-center gap-4 mt-1">
                        <div className="hidden sm:flex items-center gap-2">
                            <button
                                onClick={() => scroll('left')}
                                className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 transition-all shadow-sm bg-white hover:opacity-80"
                                style={{}}
                                aria-label="Scroll Left"
                            >
                                <ChevronLeft size={18} />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 transition-all shadow-sm bg-white hover:opacity-80"
                                aria-label="Scroll Right"
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>
                        <Link to="/courses" className="font-semibold hover:underline text-sm whitespace-nowrap" style={{color: PRIMARY}}>
                            View All →
                        </Link>
                    </div>
                </div>

                <div className="relative">
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide scroll-smooth snap-x items-stretch"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {/* Custom CSS to hide scrollbar for Chrome/Safari */}
                        <style>{`
                            .scrollbar-hide::-webkit-scrollbar {
                                display: none;
                            }
                        `}</style>

                        {courses.slice(0, 5).map((course) => (
                            <div
                                key={course.id}
                                className="upcoming-course-card flex-shrink-0 w-[300px] sm:w-[340px] snap-start relative bg-white rounded-xl p-2 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col sm:flex-row gap-3 items-start"
                            >
                                {/* Category & Badge - Inside Image */}
                                <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg">
                                    <div className="absolute top-0 left-0 z-10">
                                        <span
                                            className="px-2 py-0.5 rounded-br-lg text-[7px] font-normal uppercase tracking-[0.1em] shadow-[1px_1px_3px_rgba(0,0,0,0.1)] border-b border-r text-white"
                                            style={{backgroundColor: course.category === 'ongoing' ? '#059669' : PRIMARY, borderColor: course.category === 'ongoing' ? '#047857' : PRIMARY_LIGHT}}
                                        >
                                            {course.category || 'Upcoming'}
                                        </span>
                                    </div>
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Content - Right */}
                                <div className="flex-1 w-full flex flex-col justify-between h-24">
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-900 leading-tight line-clamp-2">
                                            {course.title}
                                        </h3>

                                        <div className="mt-1 space-y-0.5">
                                            <div className="flex items-center gap-1.5 text-gray-500 text-[10px]">
                                                <MapPin size={10} style={{color: PRIMARY_LIGHT}} />
                                                <span className="truncate">{course.location || 'Online'}</span>
                                            </div>

                                            <div className="text-gray-500 text-[10px] italic">
                                                <div className="flex items-center gap-1.5">
                                                    <Calendar size={10} style={{color: PRIMARY_LIGHT}} />
                                                    <span>{course.courseDate ? new Date(course.courseDate).toLocaleDateString('en-GB') : 'TBA'}</span>
                                                    {course.courseTime && (
                                                        <>
                                                            <Clock size={10} className="ml-1" style={{color: PRIMARY_LIGHT}} />
                                                            <span>{course.courseTime}</span>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between gap-1.5">
                                        <div className="flex items-center gap-1 text-gray-500 text-[10px] italic">
                                            <IndianRupee size={10} style={{color: PRIMARY_LIGHT}} />
                                            <span>{course.price || 'Free'}</span>
                                        </div>
                                        <Link
                                            to={`/courses/${course.id}`}
                                            className="px-3 py-1 text-white text-[9px] font-bold rounded-lg hover:shadow-lg transition-all"
                                            style={{background: `linear-gradient(135deg, ${PRIMARY_LIGHT}, ${PRIMARY})`}}
                                        >
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* View All Card - Matched Height */}
                        <div className="flex-shrink-0 w-[140px] snap-start">
                            <Link to="/courses" className="h-full block">
                                <div className="h-full border-2 border-dashed rounded-xl flex flex-col items-center justify-center group transition-all p-4" style={{backgroundColor: PRIMARY_BG, borderColor: PRIMARY_LIGHT}}>
                                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mb-2 shadow-sm group-hover:scale-110 transition-transform">
                                        <ArrowRight size={16} style={{color: PRIMARY}} />
                                    </div>
                                    <span className="text-[10px] font-bold" style={{color: PRIMARY}}>View All</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
