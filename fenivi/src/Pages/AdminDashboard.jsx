import React, { useState } from "react";
import { db, storage } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function AdminDashboard() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!image) return alert("Please select an image");

    setLoading(true);

    try {
      // Upload image to Firebase Storage
      const imageRef = ref(storage, `articles/${Date.now()}-${image.name}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);

      // Save article data to Firestore
      await addDoc(collection(db, "articles"), {
        title,
        content,
        imageUrl,
        createdAt: serverTimestamp(),
      });

      setMessage("✅ Article uploaded successfully!");
      setTitle("");
      setContent("");
      setImage(null);
    } catch (error) {
      console.error(error);
      setMessage("❌ Failed to upload article");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-purple-700">
        Admin Dashboard
      </h1>
      <form
        onSubmit={handleUpload}
        className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-2xl"
      >
        <input
          type="text"
          placeholder="Article Title"
          className="w-full p-3 mb-4 border rounded-xl"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Article Content"
          className="w-full p-3 mb-4 border rounded-xl h-48"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>

        <input
          type="file"
          accept="image/*"
          className="mb-6"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-purple-600 text-white py-2 rounded-xl hover:bg-purple-700 transition"
        >
          {loading ? "Uploading..." : "Upload Article"}
        </button>

        {message && <p className="mt-4 text-center">{message}</p>}
      </form>
    </div>
  );
}
