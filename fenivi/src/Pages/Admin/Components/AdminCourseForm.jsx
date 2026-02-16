import React, { useEffect, useState } from "react";
import { db, storage } from "../../../firebase";
import {
    collection,
    addDoc,
    serverTimestamp,
    query,
    orderBy,
    onSnapshot,
    deleteDoc,
    doc,
} from "firebase/firestore";
import {
    ref as storageRefFn,
    uploadBytes,
    getDownloadURL,
    deleteObject,
} from "firebase/storage";
import { Link } from "react-router-dom";

export default function AdminCourseForm() {
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
    const [price, setPrice] = useState("Free");
    const [thumbnailFile, setThumbnailFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [courses, setCourses] = useState([]);
    const [confirmDelete, setConfirmDelete] = useState(null);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        if (!db) return;
        const q = query(collection(db, "courses"), orderBy("createdAt", "desc"));
        const unsub = onSnapshot(q, (snap) => {
            setCourses(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
        });
        return () => unsub();
    }, []);

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!title || !description || !duration || !format || !level) {
            setMessage("Please fill all required fields.");
            return;
        }
        if (!thumbnailFile) {
            setMessage("Please select a thumbnail image.");
            return;
        }

        setLoading(true);
        setMessage("");

        try {
            const thumbRef = storageRefFn(
                storage,
                `courses/thumbnails/${Date.now()}-${thumbnailFile.name}`,
            );
            await uploadBytes(thumbRef, thumbnailFile);
            const thumbnailUrl = await getDownloadURL(thumbRef);

            const courseData = {
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
                image: thumbnailUrl,
                badgeColor: "bg-gradient-to-br from-purple-500 to-indigo-600 text-white",
                gradient: "bg-gradient-to-br from-purple-500 to-indigo-600",
                createdAt: serverTimestamp(),
            };

            await addDoc(collection(db, "courses"), courseData);

            setMessage("✅ Course uploaded successfully!");
            setTitle("");
            setDescription("");
            setDuration("");
            setFormat("");
            setLevel("");
            setBadge("");
            setLocation("");
            setCourseDate("");
            setCourseTime("");
            setCategory("upcoming");
            setPrice("Free");
            setThumbnailFile(null);
            document.getElementById("course-thumb").value = "";
        } catch (err) {
            console.error(err);
            setMessage("❌ Failed to upload course.");
        } finally {
            setLoading(false);
        }
    };

    async function handleDeleteCourse(course) {
        if (!course) return;
        setDeleting(true);
        try {
            if (course.image) {
                const thumbPath = decodeURIComponent(
                    course.image.split("/o/")[1].split("?")[0],
                );
                const thumbRef = storageRefFn(storage, thumbPath);
                await deleteObject(thumbRef).catch(() => { });
            }

            await deleteDoc(doc(db, "courses", course.id));
            setConfirmDelete(null);
        } catch (err) {
            console.error("Delete failed:", err);
        } finally {
            setDeleting(false);
        }
    }

    return (
        <div className="flex flex-col items-center pt-6 sm:pt-8 md:pt-12 px-3 sm:px-4 md:px-6">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-5 md:mb-6 mt-4 sm:mt-6 md:mt-8 text-purple-700">
                Manage Courses
            </h1>

            <form
                onSubmit={handleUpload}
                className="bg-white p-3 sm:p-4 md:p-6 rounded-2xl sm:rounded-3xl shadow-xl w-full max-w-3xl mb-6 sm:mb-8"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    <input
                        type="text"
                        placeholder="Course Title"
                        className="w-full p-2 sm:p-2.5 md:p-3 border rounded-lg sm:rounded-xl text-sm sm:text-base"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Duration (e.g. 30 Hours)"
                        className="w-full p-2 sm:p-2.5 md:p-3 border rounded-lg sm:rounded-xl text-sm sm:text-base"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Format (e.g. Online, Hybrid)"
                        className="w-full p-2 sm:p-2.5 md:p-3 border rounded-lg sm:rounded-xl text-sm sm:text-base"
                        value={format}
                        onChange={(e) => setFormat(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Level (e.g. Beginner, Advanced)"
                        className="w-full p-2 sm:p-2.5 md:p-3 border rounded-lg sm:rounded-xl text-sm sm:text-base"
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Badge (e.g. Certificate, Workshop)"
                        className="w-full p-2 sm:p-2.5 md:p-3 border rounded-lg sm:rounded-xl text-sm sm:text-base"
                        value={badge}
                        onChange={(e) => setBadge(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Location / Online"
                        className="w-full p-2 sm:p-2.5 md:p-3 border rounded-lg sm:rounded-xl text-sm sm:text-base"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <input
                        type="date"
                        className="w-full p-2 sm:p-2.5 md:p-3 border rounded-lg sm:rounded-xl text-sm sm:text-base"
                        value={courseDate}
                        onChange={(e) => setCourseDate(e.target.value)}
                    />
                    <input
                        type="time"
                        className="w-full p-2 sm:p-2.5 md:p-3 border rounded-lg sm:rounded-xl text-sm sm:text-base"
                        value={courseTime}
                        onChange={(e) => setCourseTime(e.target.value)}
                    />
                    <select
                        className="w-full p-2 sm:p-2.5 md:p-3 border rounded-lg sm:rounded-xl text-sm sm:text-base"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="upcoming">Upcoming</option>
                        <option value="ongoing">Ongoing</option>
                        <option value="completed">Completed</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Price (e.g. Free or $99)"
                        className="w-full p-2 sm:p-2.5 md:p-3 border rounded-lg sm:rounded-xl text-sm sm:text-base"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <div className="w-full md:col-span-2">
                        <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 text-gray-700">
                            Course Image
                        </label>
                        <input
                            id="course-thumb"
                            type="file"
                            accept="image/*"
                            className="text-xs sm:text-sm w-full"
                            onChange={(e) => setThumbnailFile(e.target.files?.[0] || null)}
                            required
                        />
                    </div>
                </div>

                <textarea
                    placeholder="Course Description"
                    className="w-full p-2 sm:p-2.5 md:p-3 mt-3 sm:mt-4 border rounded-lg sm:rounded-xl h-32 sm:h-40 md:h-48 text-sm sm:text-base"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="mt-4 sm:mt-5 md:mt-6 w-full bg-purple-600 text-white py-2 sm:py-2.5 rounded-lg sm:rounded-xl hover:bg-purple-700 transition text-sm sm:text-base font-medium"
                >
                    {loading ? "Uploading..." : "Upload Course"}
                </button>

                {message && (
                    <p className="mt-3 sm:mt-4 text-center text-sm sm:text-base font-medium text-purple-600">
                        {message}
                    </p>
                )}
            </form>

            {/* Course list */}
            <div className="w-full max-w-4xl px-3 sm:px-4 md:px-0">
                <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                    Your Courses
                </h2>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                    {courses.map((c) => (
                        <div
                            key={c.id}
                            className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow hover:shadow-md transition gap-2 sm:gap-0"
                        >
                            <div className="flex flex-col">
                                <span className="font-semibold text-sm sm:text-base">
                                    {c.title}
                                </span>
                                <span className="text-xs sm:text-sm text-gray-600">
                                    {c.duration} | {c.level}
                                </span>
                            </div>

                            <div className="flex gap-4 items-center">
                                <Link
                                    to={`/admin/edit-course/${c.id}`}
                                    className="text-purple-600 hover:text-purple-800 text-xs sm:text-sm font-medium"
                                >
                                    ✏️ Edit
                                </Link>
                                <button
                                    onClick={() => setConfirmDelete(c)}
                                    className="flex items-center gap-1 text-red-600 hover:text-red-800 font-medium text-xs sm:text-sm"
                                >
                                    🗑️ Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {confirmDelete && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white p-4 sm:p-6 rounded-xl w-full max-w-sm sm:w-80 shadow-xl text-center">
                        <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">
                            Delete Course?
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-5">
                            Are you sure you want to delete <b>{confirmDelete.title}</b>?
                        </p>
                        <div className="flex justify-between gap-2 sm:gap-3">
                            <button
                                onClick={() => setConfirmDelete(null)}
                                className="flex-1 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 text-sm sm:text-base"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => handleDeleteCourse(confirmDelete)}
                                disabled={deleting}
                                className="flex-1 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm sm:text-base"
                            >
                                {deleting ? "Deleting..." : "Delete"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
