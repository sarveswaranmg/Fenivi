import React, { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { ArrowLeft } from "lucide-react";
import { PRIMARY } from "../../theme";

export default function Article() {
  const { id } = useParams();
  const location = useLocation();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!db) {
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        // Determine if fetching from articles or blogs based on current path
        const isBlog = location.pathname.includes("/blog/");
        const collectionName = isBlog ? "blogs" : "articles";

        const docRef = doc(db, collectionName, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setArticle({ id: docSnap.id, ...docSnap.data() });
          setError(null);
        } else {
          setError(`${isBlog ? 'Blog' : 'Article'} not found`);
        }
      } catch (err) {
        console.error("Fetch article error:", err);
        setError("Failed to load content. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
  }, [id, location.pathname]);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen py-20">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-gray-100 rounded-full animate-spin" style={{ borderTopColor: PRIMARY }}></div>
          <p className="text-gray-500 animate-pulse text-sm">Loading content...</p>
        </div>
      </div>
    );

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Oops!</h2>
        <p className="text-gray-600 mb-6">{error}</p>
        <button
          onClick={() => window.history.back()}
          className="btn-primary"
        >
          Go Back
        </button>
      </div>
    );
  }

  if (!article) return null;

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
      <div className="w-full max-w-5xl mx-auto mt-24 md:mt-28 px-4 md:px-0">
        <Link
          to="/knowledge-hub"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-4 transition-colors group text-sm font-medium"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Knowledge Hub
        </Link>
        <img
          src={mainImg}
          alt="Article banner"
          className="w-full h-64 md:h-[22rem] object-cover rounded-3xl shadow-lg"
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-5 md:px-0 mt-8 mb-24">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-snug text-gray-900">
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
          <p className="text-justify">{description || content}</p>
        </div>

        {/* Gallery */}
        {gallery.length > 0 && (
          <div className="mt-14">
            <h3 className="text-2xl font-semibold mb-5 text-gray-900">
              Gallery
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {gallery.slice(0, 10).map((g, i) => (
                <div
                  key={i}
                  className="relative group overflow-hidden rounded-xl shadow-md"
                >
                  <img
                    src={g}
                    alt={`gallery-${i}`}
                    className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
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
