import React, { useState } from "react";
import AdminArticleForm from "../Components/AdminArticleForm";
import AdminProjectForm from "../Components/AdminProjectForm";
import AdminEventForm from "../Components/AdminEventForm"; // 👈 new component for events

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("articles");

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg flex flex-col p-6">
        <h2 className="text-2xl font-bold text-purple-700 mb-8">
          Admin Panel
        </h2>

        {/* Articles */}
        <button
          onClick={() => setActiveTab("articles")}
          className={`text-left py-3 px-4 rounded-lg mb-3 font-medium transition ${
            activeTab === "articles"
              ? "bg-purple-600 text-white"
              : "hover:bg-gray-200 text-gray-700"
          }`}
        >
          📰 Articles
        </button>

        {/* Projects */}
        <button
          onClick={() => setActiveTab("projects")}
          className={`text-left py-3 px-4 rounded-lg mb-3 font-medium transition ${
            activeTab === "projects"
              ? "bg-purple-600 text-white"
              : "hover:bg-gray-200 text-gray-700"
          }`}
        >
          📁 Projects
        </button>

        {/* Events */}
        <button
          onClick={() => setActiveTab("events")}
          className={`text-left py-3 px-4 rounded-lg mb-3 font-medium transition ${
            activeTab === "events"
              ? "bg-purple-600 text-white"
              : "hover:bg-gray-200 text-gray-700"
          }`}
        >
          📅 Events
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {activeTab === "articles" && <AdminArticleForm />}
        {activeTab === "projects" && <AdminProjectForm />}
        {activeTab === "events" && <AdminEventForm />}
      </div>
    </div>
  );
}
