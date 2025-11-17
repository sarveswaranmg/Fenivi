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

export default function AdminEventForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [galleryFiles, setGalleryFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [events, setEvents] = useState([]);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!db) return;
    const q = query(collection(db, "events"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      setEvents(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
    return () => unsub();
  }, []);

  const handleGalleryChange = (e) => {
    const files = Array.from(e.target.files || []);
    setGalleryFiles(files.slice(0, 10));
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!title || !description || !date) {
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
        `events/thumbnails/${Date.now()}-${thumbnailFile.name}`
      );
      await uploadBytes(thumbRef, thumbnailFile);
      const thumbnailUrl = await getDownloadURL(thumbRef);

      const galleryUrls = [];
      for (let i = 0; i < galleryFiles.length; i++) {
        const f = galleryFiles[i];
        const gRef = storageRefFn(
          storage,
          `events/gallery/${Date.now()}-${i}-${f.name}`
        );
        await uploadBytes(gRef, f);
        const url = await getDownloadURL(gRef);
        galleryUrls.push(url);
      }

      const eventData = {
        title,
        description,
        date: date ? new Date(date).toISOString() : new Date().toISOString(),
        thumbnailUrl,
        gallery: galleryUrls,
        createdAt: serverTimestamp(),
      };

      await addDoc(collection(db, "events"), eventData);

      setMessage("✅ Event uploaded successfully!");
      setTitle("");
      setDescription("");
      setDate("");
      setThumbnailFile(null);
      setGalleryFiles([]);
      document.getElementById("event-thumb").value = "";
      document.getElementById("event-gallery").value = "";
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to upload event.");
    } finally {
      setLoading(false);
    }
  };

  async function handleDeleteEvent(event) {
    if (!event) return;
    setDeleting(true);
    try {
      if (event.thumbnailUrl) {
        const thumbPath = decodeURIComponent(
          event.thumbnailUrl.split("/o/")[1].split("?")[0]
        );
        const thumbRef = storageRefFn(storage, thumbPath);
        await deleteObject(thumbRef).catch(() => {});
      }

      if (event.gallery && event.gallery.length > 0) {
        for (const url of event.gallery) {
          const gPath = decodeURIComponent(url.split("/o/")[1].split("?")[0]);
          const gRef = storageRefFn(storage, gPath);
          await deleteObject(gRef).catch(() => {});
        }
      }

      await deleteDoc(doc(db, "events", event.id));
      setConfirmDelete(null);
    } catch (err) {
      console.error("Delete failed:", err);
    } finally {
      setDeleting(false);
    }
  }

  return (
    <div className="flex flex-col items-center pt-12">
      <h1 className="text-3xl font-bold mb-6 mt-8 text-purple-700">
        Manage Events
      </h1>

      <form
        onSubmit={handleUpload}
        className="bg-white p-6 rounded-3xl shadow-xl w-full max-w-3xl mb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Event Title"
            className="w-full p-3 border rounded-xl"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="date"
            className="w-full p-3 border rounded-xl"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <textarea
          placeholder="Event Description"
          className="w-full p-3 mt-4 border rounded-xl h-48"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <div className="flex flex-col md:flex-row gap-4 mt-4 items-start">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-2">
              Thumbnail (single)
            </label>
            <input
              id="event-thumb"
              type="file"
              accept="image/*"
              onChange={(e) => setThumbnailFile(e.target.files?.[0] || null)}
              required
            />
            {thumbnailFile && (
              <div className="text-sm mt-2">{thumbnailFile.name}</div>
            )}
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium mb-2">
              Gallery (optional)
            </label>
            <input
              id="event-gallery"
              type="file"
              accept="image/*"
              multiple
              onChange={handleGalleryChange}
            />
            {galleryFiles.length > 0 && (
              <div className="text-sm mt-2">
                {galleryFiles.length} file(s) selected
              </div>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full bg-purple-600 text-white py-2 rounded-xl hover:bg-purple-700 transition"
        >
          {loading ? "Uploading..." : "Upload Event"}
        </button>

        {message && <p className="mt-4 text-center">{message}</p>}
      </form>

      {/* Event list */}
      <div className="w-full max-w-4xl">
        <h2 className="text-xl font-semibold mb-4">Your Events</h2>
        <div className="grid grid-cols-1 gap-3">
          {events.map((e) => (
            <div
              key={e.id}
              className="flex items-center justify-between bg-white p-4 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="flex flex-col">
                <span className="font-semibold">{e.title}</span>
                <span className="text-sm text-gray-600">
                  {new Date(e.date).toLocaleDateString()}
                </span>
              </div>
              <button
                onClick={() => setConfirmDelete(e)}
                className="flex items-center gap-1 text-red-600 hover:text-red-800 font-medium"
              >
                🗑️ Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      {confirmDelete && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-80 shadow-xl text-center">
            <h3 className="text-lg font-semibold mb-3">Delete Event?</h3>
            <p className="text-sm text-gray-600 mb-5">
              Are you sure you want to delete <b>{confirmDelete.title}</b>?
            </p>
            <div className="flex justify-between gap-3">
              <button
                onClick={() => setConfirmDelete(null)}
                className="flex-1 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteEvent(confirmDelete)}
                disabled={deleting}
                className="flex-1 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
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
