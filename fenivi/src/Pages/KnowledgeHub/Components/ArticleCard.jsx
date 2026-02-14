import React from "react";
import { Link, useNavigate } from "react-router-dom";
import cardimg from "../../../assets/1.png";
import { useAuth } from "../../../contexts/AuthContext";

const ArticleCard = ({
  id,
  title,
  author,
  place,
  publishedAt,
  imageUrl,
  loading,
  type = "article",
}) => {
  const { isAdmin } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return <div className="h-80 rounded-2xl bg-gray-100 animate-pulse" />;
  }

  const img = imageUrl || cardimg;

  const formattedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "";

  const basePath = type === "blog" ? "blog" : "article";

  const handleEditClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/admin/edit-${basePath}/${id}`);
  };

  return (
    <Link to={`/${basePath}/${id}`} className="block">
      <div className="relative rounded-2xl overflow-hidden h-80 shadow-lg group">
        {/* Image */}
        <img
          src={img}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Date Badge */}
        {formattedDate && (
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-block bg-gradient-to-br from-[#6b21a8] to-[#8b5cf6] text-white text-sm px-4 py-1 rounded-full shadow">
              {formattedDate}
            </span>
          </div>
        )}

        {/* Edit Button (Admin Only) */}
        {isAdmin && (
          <button
            onClick={handleEditClick}
            className="absolute top-4 right-4 z-10 bg-white hover:bg-gray-100 text-gray-800 px-3 py-1.5 rounded-full text-xs font-medium shadow-lg transition-all flex items-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            Edit
          </button>
        )}

        {/* Title + Author */}
        <div className="absolute left-6 right-6 bottom-6 z-10">
          <h3 className="text-white text-lg md:text-2xl font-extrabold leading-tight drop-shadow-lg">
            {title}
          </h3>

          {(author || place) && (
            <p className="text-white/90 text-sm mt-1 drop-shadow-lg">
              {author} {place ? `• ${place}` : ""}
            </p>
          )}
        </div>
        <div className="w-full h-10 bg-black"></div>
      </div>
    </Link>
  );
};

export default ArticleCard;
