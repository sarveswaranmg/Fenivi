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
    Share2,
    IndianRupee,
    CreditCard
} from "lucide-react";
import { PRIMARY, PRIMARY_LIGHT, PRIMARY_DARK, PRIMARY_BG } from "../theme";
import QRImage from "../assets/payment-qr.png";

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
                    y: 20,
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
            <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Course not found</h2>
                <Link to="/courses" className="flex items-center gap-2 font-semibold transition-colors" style={{ color: PRIMARY }}>
                    <ArrowLeft size={20} /> Back to Courses
                </Link>
            </div>
        );
    }

    return (
        <div ref={pageRef} className="bg-slate-50 min-h-screen">
            {/* HEADER BACKGROUND */}
            <div className="relative h-[350px] md:h-[450px] w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                </div>

                <div className="absolute inset-0 flex items-end">
                    <div className="max-w-7xl mx-auto px-4 md:px-8 w-full pb-10 md:pb-16">
                        <Link
                            to="/courses"
                            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-4 transition-colors group text-sm font-medium"
                        >
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                            Back to courses
                        </Link>

                        <div className="course-hero-content space-y-4 max-w-3xl">
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-sm"
                                    style={{ backgroundColor: course.category === 'ongoing' ? '#059669' : PRIMARY }}>
                                    {course.category || 'Upcoming'}
                                </span>
                                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/40 backdrop-blur-md text-white border border-white/20 shadow-sm flex items-center gap-1">
                                    {course.price && course.price !== 'Free' && !course.price.toString().includes('₹') && <span>₹</span>}
                                    {course.price || 'Free'}
                                </span>
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                                {course.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm">
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} className="text-purple-400" />
                                    <span>{course.courseDate ? new Date(course.courseDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Flexible Start'}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={16} className="text-purple-400" />
                                    <span>{course.courseTime || 'Self-paced'}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Globe size={16} className="text-purple-400" />
                                    <span>{course.format || 'Online'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 -mt-8 pb-24 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">

                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* OVERVIEW SECTION */}
                        <section className="content-section bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <BookOpen className="text-purple-600" size={24} /> Course Overview
                            </h2>
                            <div className="prose prose-purple max-w-none text-slate-600 leading-relaxed text-base md:text-lg">
                                {course.description.split('\n').map((para, i) => (
                                    <p key={i} className="mb-4">{para}</p>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                                <div className="flex items-start gap-4 p-5 rounded-2xl border transition-all" style={{ backgroundColor: PRIMARY_BG, borderColor: 'transparent' }}>
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                                        <Award style={{ color: PRIMARY }} size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Professional Certification</h4>
                                        <p className="text-xs text-slate-500">Earn a recognized certificate</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-5 rounded-2xl bg-indigo-50 border border-indigo-100/50">
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                                        <Users className="text-indigo-600" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Expert Guidance</h4>
                                        <p className="text-xs text-slate-500">1-on-1 mentorship available</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* WHAT YOU'LL LEARN */}
                        <section className="content-section bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-8">What You'll Learn</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                                {[
                                    "Advanced research methodologies",
                                    "Data analysis and visualization techniques",
                                    "Academic writing and publication strategies",
                                    "Grant proposal development",
                                    "Project management in research",
                                    "Ethical considerations in modern research"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <div className="p-1 rounded-full bg-green-50 mt-1">
                                            <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                                        </div>
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* RELATED COURSES */}
                        {relatedCourses.length > 0 && (
                            <section className="content-section">
                                <div className="flex justify-between items-end mb-6">
                                    <h2 className="text-2xl font-bold text-slate-900">Recommended for You</h2>
                                    <Link to="/courses" className="text-sm font-semibold hover:underline" style={{ color: PRIMARY }}>View all programs</Link>
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
                                                <h4 className="font-bold text-slate-900 mb-2 transition-colors line-clamp-1 group-hover:text-primary">
                                                    {related.title}
                                                </h4>
                                                <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
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
                    <div className="relative">
                        <div className="course-sidebar-card sticky top-24 space-y-6">
                            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden isolate">
                                {/* Decor */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/2"></div>

                                <div className="mb-6">
                                    <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Course Price</span>
                                    <div className="text-4xl font-black text-slate-900 mt-1 flex items-center gap-1">
                                        {course.price && course.price !== 'Free' && !course.price.toString().includes('₹') && <span className="text-2xl font-semibold opacity-50">₹</span>}
                                        {course.price || 'Free'}
                                    </div>
                                    {course.earlyBirdDiscount && (
                                        <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 bg-red-50 text-red-600 rounded-lg border border-red-100 animate-pulse">
                                            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                                            <span className="text-[10px] font-bold uppercase tracking-wider">Early Bird Discount Active</span>
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-4 mb-8">
                                    {[
                                        { icon: Clock, label: "Duration", value: course.duration },
                                        { icon: Globe, label: "Format", value: course.format },
                                        { icon: Award, label: "Level", value: course.level },
                                        { icon: MapPin, label: "Location", value: course.location || "Online" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center justify-between pb-3 border-b border-slate-50 last:border-0 last:pb-0">
                                            <div className="flex items-center gap-2 text-slate-400">
                                                <item.icon size={16} />
                                                <span className="text-xs font-semibold">{item.label}</span>
                                            </div>
                                            <span className="text-sm font-bold text-slate-800">{item.value}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-3">
                                    <a
                                        href="/contact"
                                        className="w-full h-14 flex items-center justify-center text-white rounded-xl font-bold text-base hover:shadow-lg transition-all hover:brightness-110 active:scale-[0.98]"
                                        style={{ backgroundColor: PRIMARY }}
                                    >
                                        Enroll Now
                                    </a>
                                    <button
                                        onClick={() => {
                                            if (navigator.share) {
                                                navigator.share({
                                                    title: course.title,
                                                    url: window.location.href
                                                }).catch(err => console.error("Error sharing:", err));
                                            } else {
                                                navigator.clipboard.writeText(window.location.href);
                                                alert("Course link copied to clipboard!");
                                            }
                                        }}
                                        className="w-full h-14 flex items-center justify-center border-2 border-slate-100 text-slate-500 rounded-xl font-bold text-sm transition-all hover:bg-slate-50 hover:border-slate-200 gap-2"
                                    >
                                        <Share2 size={18} /> Share Course
                                    </button>
                                </div>

                                <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                                    <p className="text-xs font-bold text-slate-800 uppercase tracking-widest mb-4">Direct Payment</p>
                                    <div className="bg-slate-50 p-4 rounded-2xl inline-block border border-slate-100 shadow-inner">
                                        <img
                                            src={course.paymentQR || QRImage}
                                            alt="Payment QR"
                                            className="w-32 h-32 md:w-40 md:h-40 object-contain mix-blend-multiply"
                                        />
                                    </div>
                                    <p className="mt-3 text-[10px] text-slate-500 font-medium">
                                        Scan QR with any UPI app to pay <br />
                                        <span className="text-slate-300">GPay, PhonePe, Paytm, etc.</span>
                                    </p>
                                </div>

                                <p className="mt-6 text-center text-[10px] text-slate-400 italic">
                                    Need assistance? <Link to="/contact" className="font-bold underline" style={{ color: PRIMARY }}>Contact Support</Link>
                                </p>
                            </div>

                            {/* WHY ENROLL MINI CARD */}
                            <div className="bg-slate-900 rounded-2xl p-6 text-white overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-600/10 blur-2xl rounded-full"></div>
                                <h3 className="text-sm font-extrabold mb-4 flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-purple-400" />
                                    Why Fenivi?
                                </h3>
                                <ul className="space-y-3">
                                    <li className="text-[11px] text-slate-400 leading-relaxed font-medium">
                                        • Premium research tools access
                                    </li>
                                    <li className="text-[11px] text-slate-400 leading-relaxed font-medium">
                                        • Lifetime course material updates
                                    </li>
                                    <li className="text-[11px] text-slate-400 leading-relaxed font-medium">
                                        • Private Discord research community
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
