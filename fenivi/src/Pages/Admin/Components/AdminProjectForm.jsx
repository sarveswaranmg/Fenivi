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

export default function AdminProjectForm() {
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [galleryFiles, setGalleryFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [projects, setProjects] = useState([]);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!db) return;
    const q = query(collection(db, "projects"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      setProjects(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
    return () => unsub();
  }, []);

  const handleGalleryChange = (e) => {
    const files = Array.from(e.target.files || []);
    setGalleryFiles(files.slice(0, 10));
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!title || !city || !description) {
      setMessage("Please fill all fields.");
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
        `projects/thumbnails/${Date.now()}-${thumbnailFile.name}`
      );
      await uploadBytes(thumbRef, thumbnailFile);
      const thumbnailUrl = await getDownloadURL(thumbRef);

      const galleryUrls = [];
      for (let i = 0; i < galleryFiles.length; i++) {
        const f = galleryFiles[i];
        const gRef = storageRefFn(
          storage,
          `projects/gallery/${Date.now()}-${i}-${f.name}`
        );
        await uploadBytes(gRef, f);
        const url = await getDownloadURL(gRef);
        galleryUrls.push(url);
      }

      const projectData = {
        title,
        city,
        description,
        date: date ? new Date(date).toISOString() : new Date().toISOString(),
        thumbnailUrl,
        gallery: galleryUrls,
        createdAt: serverTimestamp(),
      };

      await addDoc(collection(db, "projects"), projectData);

      setMessage("✅ Project uploaded successfully!");
      setTitle("");
      setCity("");
      setDescription("");
      setDate("");
      setThumbnailFile(null);
      setGalleryFiles([]);
      const thumbInput = document.getElementById("project-thumb");
      if (thumbInput) thumbInput.value = "";

      const galleryInput = document.getElementById("project-gallery");
      if (galleryInput) galleryInput.value = "";
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to upload project.");
    } finally {
      setLoading(false);
    }
  };

  async function handleDeleteProject(project) {
    if (!project) return;
    setDeleting(true);
    try {
      if (project.thumbnailUrl) {
        const thumbPath = decodeURIComponent(
          project.thumbnailUrl.split("/o/")[1].split("?")[0]
        );
        const thumbRef = storageRefFn(storage, thumbPath);
        await deleteObject(thumbRef).catch(() => { });
      }

      if (project.gallery && project.gallery.length > 0) {
        for (const url of project.gallery) {
          const gPath = decodeURIComponent(url.split("/o/")[1].split("?")[0]);
          const gRef = storageRefFn(storage, gPath);
          await deleteObject(gRef).catch(() => { });
        }
      }

      await deleteDoc(doc(db, "projects", project.id));
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
        Manage Projects
      </h1>

      {/* Upload form */}
      <form
        onSubmit={handleUpload}
        className="bg-white p-3 sm:p-4 md:p-6 rounded-2xl sm:rounded-3xl shadow-xl w-full max-w-3xl mb-6 sm:mb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <input
            type="text"
            placeholder="Project Title"
            className="w-full p-2 sm:p-2.5 md:p-3 border rounded-lg sm:rounded-xl text-sm sm:text-base"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="City / Location"
            className="w-full p-2 sm:p-2.5 md:p-3 border rounded-lg sm:rounded-xl text-sm sm:text-base"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <input
            type="date"
            className="w-full p-2 sm:p-2.5 md:p-3 border rounded-lg sm:rounded-xl text-sm sm:text-base"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <textarea
          placeholder="Project Description"
          className="w-full p-2 sm:p-2.5 md:p-3 mt-3 sm:mt-4 border rounded-lg sm:rounded-xl h-32 sm:h-40 md:h-48 text-sm sm:text-base"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <div className="flex flex-col md:flex-row gap-3 sm:gap-4 mt-3 sm:mt-4 items-start">
          <div className="flex-1 w-full">
            <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
              Thumbnail (single)
            </label>
            <input
              id="project-thumb"
              type="file"
              accept="image/*"
              className="text-xs sm:text-sm w-full"
              onChange={(e) => setThumbnailFile(e.target.files?.[0] || null)}
              required
            />
            {thumbnailFile && (
              <div className="text-xs sm:text-sm mt-1.5 sm:mt-2 truncate">{thumbnailFile.name}</div>
            )}
          </div>

          <div className="flex-1 w-full">
            <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
              Gallery (up to 10)
            </label>
            <input
              id="project-gallery"
              type="file"
              accept="image/*"
              multiple
              className="text-xs sm:text-sm w-full"
              onChange={handleGalleryChange}
            />
            {galleryFiles.length > 0 && (
              <div className="text-xs sm:text-sm mt-1.5 sm:mt-2">
                {galleryFiles.length} file(s) selected
              </div>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-4 sm:mt-5 md:mt-6 w-full bg-purple-600 text-white py-2 sm:py-2.5 rounded-lg sm:rounded-xl hover:bg-purple-700 transition text-sm sm:text-base font-medium"
        >
          {loading ? "Uploading..." : "Upload Project"}
        </button>

        {message && <p className="mt-3 sm:mt-4 text-center text-sm sm:text-base">{message}</p>}
      </form>

      {/* Project list */}
      <div className="w-full max-w-4xl px-3 sm:px-4 md:px-0">
        <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Your Projects</h2>
        <div className="grid grid-cols-1 gap-2 sm:gap-3">
          {projects.map((p) => (
            <div
              key={p.id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow hover:shadow-md transition gap-2 sm:gap-0"
            >
              <div className="flex flex-col">
                <span className="font-semibold text-sm sm:text-base">{p.title}</span>
                <span className="text-xs sm:text-sm text-gray-600">{p.city}</span>
              </div>

              <div className="flex gap-4 items-center">
                <Link
                  to={`/admin/edit-project/${p.id}`}
                  className="text-purple-600 hover:text-purple-800 text-xs sm:text-sm font-medium"
                >
                  ✏️ Edit
                </Link>
                <button
                  onClick={() => setConfirmDelete(p)}
                  className="flex items-center gap-1 text-red-600 hover:text-red-800 font-medium text-xs sm:text-sm"
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Delete confirmation */}
      {confirmDelete && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white p-4 sm:p-6 rounded-xl w-full max-w-sm sm:w-80 shadow-xl text-center">
            <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Delete Project?</h3>
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
                onClick={() => handleDeleteProject(confirmDelete)}
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
