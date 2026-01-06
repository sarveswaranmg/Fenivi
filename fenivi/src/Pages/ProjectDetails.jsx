import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const docRef = doc(db, "projects", id);
        const snapshot = await getDoc(docRef);
        if (snapshot.exists()) {
          setProject(snapshot.data());
        } else {
          console.error("Project not found");
        }
      } catch (err) {
        console.error("Error fetching project:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading project details...
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Project not found.
      </div>
    );
  }

  return (
    <div className="w-full bg-white text-gray-900 min-h-screen">
      {/* ===== Banner ===== */}
      <div className="w-full h-[60vh] relative overflow-hidden">
        <img
          src={project.thumbnailUrl}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end px-8 md:px-16 lg:px-24 pb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2 drop-shadow-lg max-w-7xl mx-auto w-full">
            {project.title}
          </h1>
          {project.category && (
            <span className="inline-block bg-white/20 backdrop-blur-md text-white text-sm px-4 py-1 rounded-full w-fit font-medium">
              {project.category}
            </span>
          )}
        </div>
      </div>

      {/* ===== Main Content ===== */}
      <section className="max-w-7xl mx-auto py-20 px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Content */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-6">{project.title}</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-10 whitespace-pre-line">
            {project.description}
          </p>

          {/* Additional project details */}
          {project.impact && (
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">Impact</h3>
              <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
                {project.impact}
              </p>
            </div>
          )}

          {project.outcomes && (
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">Outcomes</h3>
              <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
                {project.outcomes}
              </p>
            </div>
          )}

          {/* Project Link */}
          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:shadow-lg hover:scale-105 transition-all"
            >
              Learn More →
            </a>
          )}
        </div>

        {/* Right Gallery */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold mb-4">Gallery</h3>
          {project.gallery && project.gallery.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {project.gallery.map((image, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center">
              <p className="text-gray-500">No images available</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
