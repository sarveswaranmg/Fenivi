import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db, storage } from "../../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import {
  ref as storageRefFn,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

export default function EditArticle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [place, setPlace] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [gallery, setGallery] = useState([]);
  const [newGalleryFiles, setNewGalleryFiles] = useState([]);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const docRef = doc(db, "articles", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setTitle(data.title || "");
          setAuthor(data.author || "");
          setPlace(data.place || "");
          setDescription(data.description || "");
          setThumbnailUrl(data.thumbnailUrl || "");
          setGallery(data.gallery || []);
          if (data.publishedAt) {
            const date = new Date(data.publishedAt);
            setPublishedDate(date.toISOString().split("T")[0]);
          }
        } else {
          setMessage("Article not found");
        }
      } catch (err) {
        console.error("Error fetching article:", err);
        setMessage("Error loading article");
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  const handleSave = async (e) => {
    e.preventDefault();
    if (!title || !author || !description) {
      setMessage("Please fill title, author and description.");
      return;
    }

    setSaving(true);
    setMessage("");

    try {
      let newThumbnailUrl = thumbnailUrl;

      // Upload new thumbnail if selected
      if (thumbnailFile) {
        const thumbRef = storageRefFn(
          storage,
          `articles/thumbnails/${Date.now()}-${thumbnailFile.name}`
        );
        await uploadBytes(thumbRef, thumbnailFile);
        newThumbnailUrl = await getDownloadURL(thumbRef);
      }

      // Upload new gallery images
      const newGalleryUrls = [];
      for (let i = 0; i < newGalleryFiles.length; i++) {
        const f = newGalleryFiles[i];
        const gRef = storageRefFn(
          storage,
          `articles/gallery/${Date.now()}-${i}-${f.name}`
        );
        await uploadBytes(gRef, f);
        const url = await getDownloadURL(gRef);
        newGalleryUrls.push(url);
      }

      const updatedData = {
        title,
        author,
        place: place || "",
        description,
        thumbnailUrl: newThumbnailUrl,
        gallery: [...gallery, ...newGalleryUrls],
        publishedAt: publishedDate
          ? new Date(publishedDate).toISOString()
          : new Date().toISOString(),
      };

      await updateDoc(doc(db, "articles", id), updatedData);
      setMessage("Article updated successfully!");
      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (err) {
      console.error("Error updating article:", err);
      setMessage("Error updating article: " + err.message);
    } finally {
      setSaving(false);
    }
  };

  const removeGalleryImage = (index) => {
    setGallery(gallery.filter((_, i) => i !== index));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading article...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Edit Article</h1>
          <button
            onClick={() => navigate("/dashboard")}
            className="text-gray-600 hover:text-gray-900 transition"
          >
            ← Back
          </button>
        </div>

        {message && (
          <div className={`mb-4 p-3 rounded-lg ${message.includes("Error") || message.includes("Please") ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-6">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Author *
              </label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Place
              </label>
              <input
                type="text"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Published Date
            </label>
            <input
              type="date"
              value={publishedDate}
              onChange={(e) => setPublishedDate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
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
              Current Thumbnail
            </label>
            {thumbnailUrl && (
              <img
                src={thumbnailUrl}
                alt="Current thumbnail"
                className="w-full h-48 object-cover rounded-lg mb-2"
              />
            )}
            <label className="block text-sm font-medium text-gray-700 mb-2 mt-4">
              Change Thumbnail (optional)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setThumbnailFile(e.target.files?.[0] || null)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Gallery Images
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
              {gallery.map((img, idx) => (
                <div key={idx} className="relative">
                  <img
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => removeGalleryImage(idx)}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Add More Gallery Images (optional, max 10)
            </label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => setNewGalleryFiles(Array.from(e.target.files || []).slice(0, 10))}
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
