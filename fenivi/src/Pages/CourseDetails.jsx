import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc, collection, query, limit, onSnapshot } from "firebase/firestore";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    MapPin,
    Calendar,
    Clock,
    CheckCircle2,
    ArrowLeft,
    Users,
    Award,
    BookOpen,
    Globe,
    Share2
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CourseDetails = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [relatedCourses, setRelatedCourses] = useState([]);
    const pageRef = useRef(null);

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const docRef = doc(db, "courses", id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setCourse({ id: docSnap.id, ...docSnap.data() });
                }
            } catch (error) {
                console.error("Error fetching course:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCourse();

        // Fetch related courses
        const q = query(collection(db, "courses"), limit(3));
        const unsub = onSnapshot(q, (snap) => {
            setRelatedCourses(snap.docs
                .map((d) => ({ id: d.id, ...d.data() }))
                .filter(c => c.id !== id)
            );
        });

        return () => unsub();
    }, [id]);

    useEffect(() => {
        if (!loading && course && pageRef.current) {
            const ctx = gsap.context(() => {
                gsap.from(".course-hero-content > *", {
                    opacity: 0,
                    y: 30,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out",
                });

                gsap.from(".course-sidebar-card", {
                    opacity: 0,
                    x: 30,
                    duration: 0.8,
                    delay: 0.4,
                    ease: "power3.out",
                });

                gsap.from(".content-section", {
                    opacity: 0,
                    y: 40,
                    duration: 0.8,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: ".content-section",
                        start: "top 80%",
                    },
                });
            }, pageRef);

            return () => ctx.revert();
        }
    }, [loading, course]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="relative w-20 h-20">
                    <div className="absolute inset-0 border-4 border-purple-100 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-purple-600 rounded-full border-t-transparent animate-spin"></div>
                </div>
            </div>
        );
    }

    if (!course) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-white">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Course not found</h2>
                <Link to="/courses" className="text-purple-600 flex items-center gap-2 font-semibold">
                    <ArrowLeft size={20} /> Back to Courses
                </Link>
            </div>
        );
    }

    return (
        <div ref={pageRef} className="bg-slate-50 min-h-screen">
            {/* HEADER BACKGROUND */}
            <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                </div>

                <div className="absolute inset-0 flex items-end pt-24 md:pt-32">
                    <div className="max-w-7xl mx-auto px-4 md:px-8 w-full pb-12 md:pb-20">
                        <Link
                            to="/courses"
                            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors group"
                        >
                            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                            Back to all courses
                        </Link>

                        <div className="course-hero-content space-y-4 max-w-3xl">
                            <div className="flex flex-wrap gap-3">
                                <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white ${course.category === 'upcoming' ? 'bg-purple-600' :
                                    course.category === 'ongoing' ? 'bg-green-600' : 'bg-blue-600'
                                    }`}>
                                    {course.category || 'Upcoming'}
                                </span>
                                <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white border border-white/30">
                                    {course.price || 'Free'}
                                </span>
                            </div>

                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                                {course.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm md:text-base">
                                <div className="flex items-center gap-2">
                                    <Calendar size={18} className="text-purple-400" />
                                    <span>{course.courseDate ? new Date(course.courseDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Flexible Start'}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={18} className="text-purple-400" />
                                    <span>{course.courseTime || 'Self-paced'}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Globe size={18} className="text-purple-400" />
                                    <span>{course.format || 'Online'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 -mt-10 pb-24 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">

                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* OVERVIEW SECTION */}
                        <section className="content-section bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <BookOpen className="text-purple-600" /> Course Overview
                            </h2>
                            <div className="prose prose-purple max-w-none text-slate-600 leading-relaxed">
                                {course.description.split('\n').map((para, i) => (
                                    <p key={i} className="mb-4">{para}</p>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                                <div className="flex items-start gap-4 p-5 rounded-2xl bg-purple-50 border border-purple-100/50">
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                                        <Award className="text-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Professional Certification</h4>
                                        <p className="text-sm text-slate-500">Earn a certificate of completion</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-5 rounded-2xl bg-indigo-50 border border-indigo-100/50">
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                                        <Users className="text-indigo-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Expert Guidance</h4>
                                        <p className="text-sm text-slate-500">Learn from seasoned researchers</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* WHAT YOU'LL LEARN */}
                        <section className="content-section bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-8">What You'll Learn</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                {[
                                    "Advanced research methodologies",
                                    "Data analysis and visualization techniques",
                                    "Academic writing and publication strategies",
                                    "Grant proposal development",
                                    "Project management in research",
                                    "Ethical considerations in modern research"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 size={20} className="text-green-500 flex-shrink-0" />
                                        <span className="text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* RELATED COURSES (OPTIONAL) */}
                        {relatedCourses.length > 0 && (
                            <section className="content-section">
                                <div className="flex justify-between items-end mb-8">
                                    <h2 className="text-2xl font-bold text-slate-900 italic underline">Explore More Programs</h2>
                                    <Link to="/courses" className="text-purple-600 font-semibold hover:underline">View all</Link>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {relatedCourses.map((related) => (
                                        <Link
                                            key={related.id}
                                            to={`/courses/${related.id}`}
                                            className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-purple-200 transition-all hover:shadow-md"
                                        >
                                            <div className="aspect-video overflow-hidden">
                                                <img
                                                    src={related.image}
                                                    alt={related.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                            <div className="p-5">
                                                <h4 className="font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-1">
                                                    {related.title}
                                                </h4>
                                                <div className="flex items-center gap-4 text-xs text-slate-500">
                                                    <span className="px-2 py-0.5 rounded bg-slate-100">{related.level}</span>
                                                    <span className="flex items-center gap-1"><Clock size={12} /> {related.duration}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* SIDEBAR */}
                    <div className="space-y-6">
                        <div className="course-sidebar-card sticky top-32">
                            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-purple-500/5 border border-slate-100 overflow-hidden relative">
                                {/* GLASS HIGHLIGHT */}
                                <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-100 rounded-full blur-3xl opacity-50"></div>

                                <div className="relative z-10">
                                    <div className="mb-6">
                                        <span className="text-sm text-slate-500 font-medium">Course Fee</span>
                                        <div className="text-4xl font-extrabold text-slate-900 mt-1">{course.price || 'Free'}</div>
                                    </div>

                                    <div className="space-y-5 mb-8">
                                        <div className="flex items-center justify-between py-3 border-b border-slate-50 text-sm">
                                            <div className="flex items-center gap-2 text-slate-500">
                                                <Clock size={16} /> <span>Duration</span>
                                            </div>
                                            <span className="font-bold text-slate-900">{course.duration}</span>
                                        </div>
                                        <div className="flex items-center justify-between py-3 border-b border-slate-50 text-sm">
                                            <div className="flex items-center gap-2 text-slate-500">
                                                <Globe size={16} /> <span>Format</span>
                                            </div>
                                            <span className="font-bold text-slate-900">{course.format}</span>
                                        </div>
                                        <div className="flex items-center justify-between py-3 border-b border-slate-50 text-sm">
                                            <div className="flex items-center gap-2 text-slate-500">
                                                <Award size={16} /> <span>Level</span>
                                            </div>
                                            <span className="font-bold text-slate-900">{course.level}</span>
                                        </div>
                                        <div className="flex items-center justify-between py-3 border-b border-slate-50 text-sm">
                                            <div className="flex items-center gap-2 text-slate-500">
                                                <MapPin size={16} /> <span>Location</span>
                                            </div>
                                            <span className="font-bold text-slate-900">{course.location || 'Online'}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <a
                                            href="/contact"
                                            className="w-full h-14 flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl font-bold text-lg hover:shadow-lg hover:shadow-purple-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
                                        >
                                            Enroll Now
                                        </a>
                                        <button className="w-full h-14 flex items-center justify-center border-2 border-slate-100 text-slate-500 rounded-2xl font-bold transition-all hover:bg-slate-50 gap-2">
                                            <Share2 size={20} /> Share Course
                                        </button>
                                    </div>

                                    <p className="mt-6 text-center text-xs text-slate-400">
                                        Secure enrollment through our platform. <br />
                                        Need help? <Link to="/contact" className="text-purple-600 font-medium hover:underline">Contact Admissions</Link>
                                    </p>
                                </div>
                            </div>

                            {/* WHY ENROLL CARD */}
                            <div className="mt-6 bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                                <h3 className="text-lg font-bold mb-4 relative z-10">Why enroll with Fenivi?</h3>
                                <ul className="space-y-4 relative z-10">
                                    <li className="flex gap-3 text-sm text-slate-300">
                                        <CheckCircle2 size={18} className="text-purple-400 flex-shrink-0" />
                                        <span>Access to premium research tools and databases</span>
                                    </li>
                                    <li className="flex gap-3 text-sm text-slate-300">
                                        <CheckCircle2 size={18} className="text-purple-400 flex-shrink-0" />
                                        <span>LIFETIME access to updated course materials</span>
                                    </li>
                                    <li className="flex gap-3 text-sm text-slate-300">
                                        <CheckCircle2 size={18} className="text-purple-400 flex-shrink-0" />
                                        <span>Networking opportunities with global experts</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CourseDetails;
