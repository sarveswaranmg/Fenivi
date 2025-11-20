import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import placeholder from "../assets/1.png";
import { db } from "../firebase.js";
import { doc, getDoc } from "firebase/firestore";

export default function HomeArticleCard({ id }) {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    async function load() {
      if (!db || !id) {
        setLoading(false);
        return;
      }
      try {
        const d = await getDoc(doc(db, "articles", id));
        if (mounted && d.exists()) setArticle({ id: d.id, ...d.data() });
      } catch (err) {
        console.error("Error loading article:", err);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => {
      mounted = false;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="h-80 rounded-2xl bg-gray-100 animate-pulse" />
    );
  }
  if (!article) {
    return null;
  }

  const img = article.imageURL || article.imageUrl || placeholder;
  const dateStr = article.createdAt && article.createdAt.toDate
    ? new Date(article.createdAt.toDate()).toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : article.createdAt || "";

  return (
    <Link to={id ? `/article/${id}` : "/article"} className="block">
      <div className="relative rounded-2xl overflow-hidden h-80 shadow-lg group">
        <img
          src={img}
          alt={article.title || "Article"}
          className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/30" />
        {dateStr && (
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-block bg-blue-500 text-white text-sm px-4 py-1 rounded-full shadow">
              {dateStr}
            </span>
          </div>
        )}
        <div className="absolute left-6 right-6 bottom-6 z-10">
          <h3 className="text-white text-lg md:text-2xl font-extrabold leading-tight drop-shadow-lg">
            {article.title}
          </h3>
        </div>
      </div>
    </Link>
  );
}