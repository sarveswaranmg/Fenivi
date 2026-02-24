import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db, storage } from "../../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import {
    ref as storageRefFn,
    uploadBytes,
    getDownloadURL,
} from "firebase/storage";

export default function EditCourse() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState("");

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState("");
    const [format, setFormat] = useState("");
    const [level, setLevel] = useState("");
    const [badge, setBadge] = useState("");
    const [location, setLocation] = useState("");
    const [courseDate, setCourseDate] = useState("");
    const [courseTime, setCourseTime] = useState("");
    const [category, setCategory] = useState("upcoming");
    const [price, setPrice] = useState("");
    const [thumbnailUrl, setThumbnailUrl] = useState("");
    const [thumbnailFile, setThumbnailFile] = useState(null);

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const docRef = doc(db, "courses", id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setTitle(data.title || "");
                    setDescription(data.description || "");
                    setDuration(data.duration || "");
                    setFormat(data.format || "");
                    setLevel(data.level || "");
                    setBadge(data.badge || "");
                    setLocation(data.location || "");
                    setCourseDate(data.courseDate || "");
                    setCourseTime(data.courseTime || "");
                    setCategory(data.category || "upcoming");
                    setPrice(data.price || "");
                    setThumbnailUrl(data.image || "");
                } else {
                    setMessage("Course not found");
                }
            } catch (err) {
                console.error("Error fetching course:", err);
                setMessage("Error loading course");
            } finally {
                setLoading(false);
            }
        };

        fetchCourse();
    }, [id]);

    const handleSave = async (e) => {
        e.preventDefault();
        if (!title || !description || !duration || !format || !level) {
            setMessage("Please fill all required fields.");
            return;
        }

        setSaving(true);
        setMessage("");

        try {
            let newThumbnailUrl = thumbnailUrl;

            if (thumbnailFile) {
                const thumbRef = storageRefFn(
                    storage,
                    `courses/thumbnails/${Date.now()}-${thumbnailFile.name}`,
                );
                await uploadBytes(thumbRef, thumbnailFile);
                newThumbnailUrl = await getDownloadURL(thumbRef);
            }

            const updatedData = {
                title,
                description,
                duration,
                format,
                level,
                badge: badge || "Certificate",
                location: location || "",
                courseDate: courseDate || "",
                courseTime: courseTime || "",
                category: category || "upcoming",
                price: price || "Free",
                image: newThumbnailUrl,
            };

            await updateDoc(doc(db, "courses", id), updatedData);
            setMessage("Course updated successfully!");
            setTimeout(() => navigate("/dashboard"), 1500);
        } catch (err) {
            console.error("Error updating course:", err);
            setMessage("Error updating course: " + err.message);
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-600">Loading course...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">Edit Course</h1>
                    <button
                        onClick={() => navigate("/dashboard")}
                        className="text-gray-600 hover:text-gray-900 transition"
                    >
                        ← Back
                    </button>
                </div>

                {message && (
                    <div
                        className={`mb-4 p-3 rounded-lg ${message.includes("Error") || message.includes("Please") ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}
                    >
                        {message}
                    </div>
                )}

                <form onSubmit={handleSave} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Title *
                            </label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Duration *
                            </label>
                            <select
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            >
                                <option value="">Select Duration</option>
                                <option value="Flexible">Flexible</option>
                                <option value="Self-paced">Self-paced</option>
                                <option value="1 Month">1 Month</option>
                                <option value="3 Months">3 Months</option>
                                <option value="6 Months">6 Months</option>
                                <option value="30 Hours">30 Hours</option>
                                <option value="Course Specific">Course Specific</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Format *
                            </label>
                            <select
                                value={format}
                                onChange={(e) => setFormat(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            >
                                <option value="">Select Format</option>
                                <option value="Online">Online</option>
                                <option value="In-person">In-person</option>
                                <option value="Hybrid">Hybrid</option>
                                <option value="Workshop">Workshop</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Level *
                            </label>
                            <select
                                value={level}
                                onChange={(e) => setLevel(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            >
                                <option value="">Select Level</option>
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                                <option value="All Levels">All Levels</option>
                                <option value="Expert">Expert</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Badge
                            </label>
                            <input
                                type="text"
                                value={badge}
                                onChange={(e) => setBadge(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Location
                            </label>
                            <input
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Date
                            </label>
                            <input
                                type="date"
                                value={courseDate}
                                onChange={(e) => setCourseDate(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Timing / Start Type
                            </label>
                            <select
                                value={courseTime}
                                onChange={(e) => setCourseTime(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            >
                                <option value="">Select Time/Type</option>
                                <option value="Flexible Start">Flexible Start</option>
                                <option value="Self-paced">Self-paced</option>
                                <option value="Evening Batches">Evening Batches</option>
                                <option value="Morning Batches">Morning Batches</option>
                                <option value="Weekends Only">Weekends Only</option>
                                <option value="Full-time">Full-time</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Category
                            </label>
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            >
                                <option value="upcoming">Upcoming</option>
                                <option value="ongoing">Ongoing</option>
                                <option value="completed">Completed</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Price
                            </label>
                            <input
                                type="text"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Description *
                        </label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows="4"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Current Course Image
                        </label>
                        {thumbnailUrl && (
                            <img
                                src={thumbnailUrl}
                                alt="Current thumbnail"
                                className="w-full h-48 object-cover rounded-lg mb-2"
                            />
                        )}
                        <label className="block text-sm font-medium text-gray-700 mb-2 mt-4">
                            Change Image (optional)
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setThumbnailFile(e.target.files?.[0] || null)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    <div className="flex gap-4">
                        <button
                            type="submit"
                            disabled={saving}
                            className="flex-1 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition disabled:opacity-50"
                        >
                            {saving ? "Saving..." : "Save Changes"}
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate("/dashboard")}
                            className="px-8 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
