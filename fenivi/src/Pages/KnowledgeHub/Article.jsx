import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!db) return;
      try {
        const docRef = doc(db, "articles", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setArticle({ id: docSnap.id, ...docSnap.data() });
        }
      } catch (err) {
        console.error("Fetch article error:", err);
      }
    };
    fetchArticle();
  }, [id]);

  if (!article)
    return (
      <div className="flex items-center justify-center min-h-screen text-xl">
        Loading...
      </div>
    );

  const {
    title,
    description,
    content,
    thumbnailUrl,
    imageUrl,
    gallery = [],
    author,
    place,
    publishedAt,
  } = article;

  const mainImg = thumbnailUrl || imageUrl || "/favicon.ico";
  const formattedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "";

  return (
    <div className="min-h-screen bg-white text-gray-800 overflow-x-hidden">
      {/* Banner */}
      <div className="w-full max-w-6xl mx-auto mt-8">
        <img
          src={mainImg}
          alt="Article banner"
          className="w-full h-80 md:h-[30rem] object-cover rounded-3xl shadow-lg"
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-5 md:px-0 mt-10 mb-24">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-snug text-gray-900">
          {title}
        </h1>

        {/* Metadata */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 pb-4 mb-10 text-gray-500 text-sm">
          <div className="flex items-center flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-lg">
                👤
              </div>
              <span className="text-gray-700 font-medium">
                {author || "Unknown Author"}
              </span>
            </div>

            {formattedDate && <span>• {formattedDate}</span>}
            {place && <span>• {place}</span>}
          </div>

          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <span className="font-medium text-gray-600">Share:</span>
            <FaInstagram className="text-gray-400 hover:text-pink-600 cursor-pointer transition" />
            <FaFacebookF className="text-gray-400 hover:text-blue-600 cursor-pointer transition" />
            <FaTwitter className="text-gray-400 hover:text-sky-500 cursor-pointer transition" />
            <FaLinkedinIn className="text-gray-400 hover:text-blue-700 cursor-pointer transition" />
          </div>
        </div>

        {/* Description / Content */}
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p>{description || content}</p>
        </div>

        {/* Gallery */}
        {gallery.length > 0 && (
          <div className="mt-14">
            <h3 className="text-2xl font-semibold mb-5 text-gray-900">
              Gallery
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {gallery.slice(0, 10).map((g, i) => (
                <div key={i} className="relative group overflow-hidden rounded-xl shadow-md">
                  <img
                    src={g}
                    alt={`gallery-${i}`}
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition"></div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
