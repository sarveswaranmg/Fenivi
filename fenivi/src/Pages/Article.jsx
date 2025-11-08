import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const docRef = doc(db, "articles", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setArticle(docSnap.data());
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

  return (
    <div className="flex flex-col items-center w-full bg-white text-gray-800">
      <div className="w-[95%] md:w-[90%] lg:w-[85%] mt-8">
        <img
          src={article.imageUrl}
          alt="Article banner"
          className="w-full h-80 md:h-[28rem] object-cover rounded-3xl shadow-md"
        />
      </div>

      <div className="w-[95%] md:w-[90%] lg:w-[80%] xl:w-[75%] mt-10 mb-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          {article.title}
        </h1>

        <div className="flex flex-wrap items-center justify-between border-b pb-4 mb-8 text-gray-500 text-sm">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-lg">
                👤
              </div>
              <span>Name of the Person</span>
            </div>
            <span>• Date</span>
            <span>• Place</span>
            <span>• Time</span>
          </div>

          <div className="flex items-center gap-3 mt-2 md:mt-0">
            <span>Share:</span>
            <FaInstagram className="hover:text-purple-600 cursor-pointer" />
            <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
            <FaTwitter className="hover:text-sky-500 cursor-pointer" />
            <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
          </div>
        </div>

        <div className="space-y-6 text-lg leading-relaxed">
          <p>{article.content}</p>
        </div>
      </div>
    </div>
  );
}
