import React from "react";
import { Link } from "react-router-dom";
import cardimg from "../../../assets/1.png";

const ArticleCard = ({
  id,
  title,
  author,
  place,
  publishedAt,
  imageUrl,
  loading,
}) => {
  if (loading) {
    return (
      <div className="h-80 rounded-2xl bg-gray-100 animate-pulse" />
    );
  }

  const img = imageUrl || cardimg;

  const formattedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "";

  return (
    <Link to={`/article/${id}`} className="block">
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
      </div>
    </Link>
  );
};

export default ArticleCard;
