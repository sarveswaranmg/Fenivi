import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { useAuth } from "../contexts/AuthContext";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [filterType, setFilterType] = useState("all"); // all, upcoming, past
  const { isAdmin } = useAuth();
  const navigate = useNavigate();

  // Fetch events from Firestore
  useEffect(() => {
    const q = query(collection(db, "events"), orderBy("date", "desc"));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setEvents(list);
        setLoading(false);
      },
      (err) => {
        console.error("Error fetching events:", err);
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, []);

  // Filter and sort events
  const getFilteredAndSortedEvents = () => {
    let filtered = [...events];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Apply time-based filter
    if (filterType === "upcoming") {
      filtered = filtered.filter((e) => new Date(e.date) >= today);
    } else if (filterType === "past") {
      filtered = filtered.filter((e) => new Date(e.date) < today);
    }

    // Apply search filter
    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (e) =>
          e.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          e.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          e.organizer?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply sorting
    switch (sortOrder) {
      case "newest":
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case "oldest":
        filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case "a-z":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "z-a":
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }

    return filtered;
  };

  const filteredEvents = getFilteredAndSortedEvents();

  return (
    <div className="w-full bg-white text-gray-900 min-h-screen">
      {/* ===== Header Section ===== */}
      <section className="w-full py-24 px-6 text-center max-w-7xl mx-auto lg:px-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Grow Your Network & Skills
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
          with Our Events
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Explore upcoming and past events organized by Fenivi Research
          Solutions — from conferences and policy dialogues to community-driven
          initiatives that bridge science and society.
        </p>
        <div className="w-20 h-[3px] bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mt-6 rounded-full" />
      </section>

      {/* ===== Event Filter Buttons & Search ===== */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
        {/* Filter Buttons */}
        <div className="flex justify-center items-center gap-3 flex-wrap mb-6">
          {[
            { label: "All Events", value: "all" },
            { label: "Upcoming", value: "upcoming" },
            { label: "Past", value: "past" },
          ].map((btn) => (
            <button
              key={btn.value}
              onClick={() => setFilterType(btn.value)}
              className={`px-5 py-2 rounded-full border text-sm font-medium transition ${filterType === btn.value
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-transparent"
                : "bg-white border-gray-200 hover:bg-gray-100 text-gray-700"
                }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/*Search and Sort Controls*/}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          {/* Search Bar*/}
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search events by title, description, or organizer..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-12 py-3 bg-white border-2 border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowSortMenu(!showSortMenu)}
              className="flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-gray-200 rounded-xl text-gray-700 text-sm font-medium hover:border-gray-300 hover:bg-gray-50 transition-all shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
              </svg>
              <span>
                {sortOrder === "newest" && "Newest First"}
                {sortOrder === "oldest" && "Oldest First"}
                {sortOrder === "a-z" && "A-Z"}
                {sortOrder === "z-a" && "Z-A"}
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${showSortMenu ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showSortMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-10">
                <button
                  onClick={() => {
                    setSortOrder("newest");
                    setShowSortMenu(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 text-sm hover:bg-purple-50 transition-colors ${sortOrder === "newest" ? "bg-purple-50 text-purple-700 font-semibold" : "text-gray-700"
                    }`}
                >
                  Newest First
                </button>
                <button
                  onClick={() => {
                    setSortOrder("oldest");
                    setShowSortMenu(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 text-sm hover:bg-purple-50 transition-colors ${sortOrder === "oldest" ? "bg-purple-50 text-purple-700 font-semibold" : "text-gray-700"
                    }`}
                >
                  Oldest First
                </button>
                <button
                  onClick={() => {
                    setSortOrder("a-z");
                    setShowSortMenu(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 text-sm hover:bg-purple-50 transition-colors ${sortOrder === "a-z" ? "bg-purple-50 text-purple-700 font-semibold" : "text-gray-700"
                    }`}
                >
                  A-Z
                </button>
                <button
                  onClick={() => {
                    setSortOrder("z-a");
                    setShowSortMenu(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 text-sm hover:bg-purple-50 transition-colors ${sortOrder === "z-a" ? "bg-purple-50 text-purple-700 font-semibold" : "text-gray-700"
                    }`}
                >
                  Z-A
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ===== Event List ===== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        {loading && (
          <p className="text-center text-gray-500 text-lg">Loading events...</p>
        )}

        {!loading && filteredEvents.length === 0 && (
          <p className="text-center text-gray-500 text-lg">
            {searchQuery
              ? "No events found matching your search."
              : filterType === "upcoming"
                ? "No upcoming events at the moment."
                : filterType === "past"
                  ? "No past events available."
                  : "No events available at the moment."}
          </p>
        )}

        <div className="space-y-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="flex flex-col md:flex-row gap-6 p-6 border border-gray-100 rounded-3xl shadow-sm hover:shadow-lg transition-all bg-white"
            >
              {/* Event Image */}
              <div className="md:w-1/3 w-full overflow-hidden rounded-2xl relative">
                <img
                  src={event.thumbnailUrl}
                  alt={event.title}
                  className="w-full h-52 md:h-48 object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                />
                {/* Edit Button (Admin Only) */}
                {isAdmin && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/admin/edit-event/${event.id}`);
                    }}
                    className="absolute top-3 right-3 bg-white hover:bg-gray-100 text-gray-800 px-3 py-1.5 rounded-full text-xs font-medium shadow-lg transition-all flex items-center gap-1 z-10"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Edit
                  </button>
                )}
              </div>

              {/* Event Content */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  {event.category && (
                    <span className="inline-block text-xs px-3 py-1 bg-purple-100 text-purple-700 font-medium rounded-full mb-3">
                      {event.category}
                    </span>
                  )}
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                    {event.description}
                  </p>
                </div>

                <div className="flex flex-wrap justify-between items-center text-sm text-gray-600">
                  <div>
                    <p>
                      <span className="font-semibold">Organized by: </span>
                      {event.organizer || "Fenivi Research Solutions"}
                    </p>
                    <p>
                      <span className="font-semibold">Date: </span>
                      {new Date(event.date).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}{" "}
                      at {event.time || "TBA"}
                    </p>
                  </div>

                  <div className="flex gap-3 mt-4 md:mt-0">
                    {event.ticketUrl && (
                      <a
                        href={event.ticketUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-medium text-sm hover:opacity-90 transition"
                      >
                        Buy Ticket
                      </a>
                    )}
                    <Link
                      to={`/events/${event.id}`}
                      className="px-4 py-2 border border-gray-300 rounded-full font-medium text-sm hover:bg-gray-100 transition"
                    >
                      See Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
