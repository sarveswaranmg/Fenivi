import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="w-full bg-white text-gray-900 min-h-screen">
      {/* ===== Header Section ===== */}
      <section className="w-full py-24 px-6 md:px-16 lg:px-24 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Grow Your Network & Skills
        </h1>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
          with Our Events
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Explore upcoming and past events organized by Fenivi Research
          Solutions — from conferences and policy dialogues to community-driven
          initiatives that bridge science and society.
        </p>
        <div className="w-20 h-[3px] bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mt-6 rounded-full" />
      </section>

      {/* ===== Event Filter Buttons ===== */}
      <div className="flex justify-center items-center gap-3 flex-wrap mb-12">
        {["All Events", "Upcoming", "Past"].map((btn, i) => (
          <button
            key={i}
            className={`px-5 py-2 rounded-full border text-sm font-medium transition ${
              i === 0
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-transparent"
                : "bg-white border-gray-200 hover:bg-gray-100 text-gray-700"
            }`}
          >
            {btn}
          </button>
        ))}
      </div>

      {/* ===== Event List ===== */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 pb-24">
        {loading && (
          <p className="text-center text-gray-500 text-lg">Loading events...</p>
        )}

        {!loading && events.length === 0 && (
          <p className="text-center text-gray-500 text-lg">
            No events available at the moment.
          </p>
        )}

        <div className="space-y-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="flex flex-col md:flex-row gap-6 p-6 border border-gray-100 rounded-3xl shadow-sm hover:shadow-lg transition-all bg-white"
            >
              {/* Event Image */}
              <div className="md:w-1/3 w-full overflow-hidden rounded-2xl">
                <img
                  src={event.thumbnailUrl}
                  alt={event.title}
                  className="w-full h-52 md:h-48 object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                />
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
                    <a
                      href={`/events/${event.id}`}
                      className="px-4 py-2 border border-gray-300 rounded-full font-medium text-sm hover:bg-gray-100 transition"
                    >
                      See Details
                    </a>
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
