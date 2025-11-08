import React from "react";
import cardimg from "../assets/1.png";
import { Link } from "react-router-dom";

const ArticleCard = ({ id, title, excerpt, imageURL }) => {
  return (
    <div className="flex flex-col lg:flex-row m-4 md:m-8 p-6 bg-white rounded-3xl shadow-xl gap-6 shadow-purple-400">
      {/* LEFT SIDE */}
      <div className="flex flex-col flex-1">
        <h1 className="font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mb-3">
          {title || "Untitled Article"}
        </h1>

        <p className="text-sm md:text-base lg:text-lg flex-grow leading-relaxed mb-4">
          {excerpt || "No summary available."}
        </p>

        <Link to={id ? `/article/${id}` : "/article"}>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition duration-300 animate-gradient">
            Read More
          </button>
        </Link>
      </div>

      {/* RIGHT SIDE (ALWAYS SQUARE IMAGE) */}
      <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 aspect-square mx-auto lg:mx-0">
        <img
          src={imageURL || cardimg}
          alt={title || ""}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default ArticleCard;
