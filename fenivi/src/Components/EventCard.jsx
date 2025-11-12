import React from "react";

export default function EventCard({ title, description, date, thumbnailUrl }) {
  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "N/A";

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col gap-3">
      <div className="relative w-full h-48">
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
        <span className="absolute top-2 left-2 bg-purple-600 text-white text-[11px] px-2 py-1 rounded-full shadow">
          {formattedDate}
        </span>
      </div>

      <h2 className="font-semibold text-lg line-clamp-2">{title}</h2>
      <p className="text-sm text-gray-700 line-clamp-3">{description}</p>

      <button className="mt-auto bg-purple-600 text-white py-2 rounded-full hover:bg-purple-700 transition">
        Register
      </button>
    </div>
  );
}
