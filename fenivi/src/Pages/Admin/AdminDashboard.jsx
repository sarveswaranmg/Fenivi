import React, { useState } from "react";
import AdminArticleForm from "./Components/AdminArticleForm";
import AdminProjectForm from "./Components/AdminProjectForm";
import AdminEventForm from "./Components/AdminEventForm";
import { Menu, X } from "lucide-react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("articles");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const tabs = [
    { id: "articles", label: "Articles", icon: "📰" },
    { id: "projects", label: "Projects", icon: "📁" },
    { id: "events", label: "Events", icon: "📅" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 md:bg-gray-100">
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white shadow-md z-50 px-4 py-3 flex items-center justify-between">
        <h2 className="text-lg sm:text-xl font-bold text-purple-700">
          Admin Panel
        </h2>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg transition"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed md:static inset-y-0 left-0 z-40 w-64 sm:w-72 md:w-56 lg:w-64 bg-white shadow-lg flex flex-col p-4 sm:p-5 md:p-4 lg:p-6 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } mt-14 md:mt-0`}
      >
        <h2 className="hidden md:block text-xl lg:text-2xl font-bold text-purple-700 mb-6 lg:mb-8">
          Admin Panel
        </h2>

        {/* Tab Buttons */}
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              setSidebarOpen(false);
            }}
            className={`text-left py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg mb-2 sm:mb-3 font-medium transition text-sm sm:text-base ${
              activeTab === tab.id
                ? "bg-purple-600 text-white"
                : "hover:bg-gray-200 text-gray-700"
            }`}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30 mt-14"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6 md:p-6 lg:p-8 mt-14 md:mt-0">
        {activeTab === "articles" && <AdminArticleForm />}
        {activeTab === "projects" && <AdminProjectForm />}
        {activeTab === "events" && <AdminEventForm />}
      </div>
    </div>
  );
}
