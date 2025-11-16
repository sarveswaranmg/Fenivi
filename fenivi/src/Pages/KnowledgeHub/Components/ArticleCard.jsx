import React, { useState, useEffect } from "react";
import cardimg from "../../../assets/1.png";
import { Link } from "react-router-dom";

const ArticleCard = ({
  id,
  title,
  description,
  author,
  place,
  publishedAt,
  imageUrl,
  loading,
}) => {
  const [open, setOpen] = useState(false);

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-md p-4 flex flex-col gap-3 animate-pulse">
        <div className="w-full h-40 bg-slate-200 rounded-lg" />
        <div className="h-4 bg-slate-200 rounded-md w-3/4" />
        <div className="h-3 bg-slate-200 rounded-md w-full" />
        <div className="h-3 bg-slate-200 rounded-md w-5/6" />
      </div>
    );
  }

  const img = imageUrl || cardimg;

  const formattedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "N/A";
useEffect(() => {
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  // FIX: cleanup always restores scroll on navigation
  return () => {
    document.body.style.overflow = "auto";
  };
}, [open]);

  return (
    <>
      {/* Card */}
      <div
  onClick={() => setOpen(true)}
  className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col gap-3"
>
  <div className="relative w-full h-60">
    <img
      src={img}
      alt={title}
      className="w-full h-full object-cover rounded-lg"
    />
    {formattedDate && (
      <span className="absolute top-2 left-2 bg-gradient-to-br from-[#6b21a8] to-[#8b5cf6] text-white text-[11px] px-2 py-2 rounded-full shadow">
        {formattedDate}
      </span>
    )}
  </div>

  <h2 className="font-semibold text-lg line-clamp-2">{title}</h2>
  <p className="text-sm text-gray-700">
    {author} {place ? `• ${place}` : ""}
  </p>
</div>


      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md animate-fadeIn"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-[92%] md:w-[70%] h-[70vh] max-h-[750px] rounded-3xl shadow-2xl overflow-hidden bg-white/60 backdrop-blur-xl flex animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
              }}
              className="absolute top-3 right-4 z-30 text-white text-2xl font-bold hover:opacity-70"
            >
              ✕
            </button>

            {/* Left Content */}
            <div className="w-full md:w-1/2 p-6 text-white flex flex-col">
              <div className="overflow-y-auto flex-1 pr-2 mt-6">
                <h2 className="text-3xl font-semibold mb-2">{title}</h2>

                <p className="text-sm opacity-90 mb-4">
                  {author} {place ? `• ${place}` : ""} • {formattedDate}
                </p>

                <p className="whitespace-pre-line text-[15px] leading-relaxed ">
                  {description || "No description available."}
                </p>
              </div>

              <div className="w-full flex justify-center mt-4 mb-3">
                <Link
                  to={`/article/${id}`}
                  className="bg-white/80 text-black text-center py-2 px-6 rounded-full hover:bg-white transition font-medium backdrop-blur-lg"
                >
                  Open Full Page
                </Link>
              </div>
            </div>

            {/* Thumbnail Only */}
            <div className="hidden md:flex w-1/2 p-8 items-center justify-center">
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.25s ease forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default ArticleCard;
