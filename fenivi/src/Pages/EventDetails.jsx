import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export default function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const docRef = doc(db, "events", id);
        const snapshot = await getDoc(docRef);
        if (snapshot.exists()) {
          setEvent(snapshot.data());
        } else {
          console.error("Event not found");
        }
      } catch (err) {
        console.error("Error fetching event:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, [id]);

  // Check if event is in future
  const isEventInFuture = event && new Date(event.date) >= new Date();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading event details...
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Event not found.
      </div>
    );
  }

  return (
    <div className="w-full bg-white text-gray-900 min-h-screen">
      {/* ===== Banner ===== */}
      <div className="w-full h-[60vh] relative overflow-hidden">
        <img
          src={event.thumbnailUrl}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end px-8 md:px-16 lg:px-24 pb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2 drop-shadow-lg max-w-7xl mx-auto w-full">
            {event.title}
          </h1>
          {event.category && (
            <span className="inline-block bg-white/20 backdrop-blur-md text-white text-sm px-4 py-1 rounded-full w-fit font-medium">
              {event.category}
            </span>
          )}
        </div>
      </div>

      {/* ===== Main Content ===== */}
      <section className="max-w-7xl mx-auto py-20 px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Content */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-6">{event.title}</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-10 whitespace-pre-line">
            {event.description}
          </p>

          {/* Register Button */}
          {isEventInFuture &&
          event.registrationOpen &&
          event.registrationFormUrl ? (
            <a
              href={event.registrationFormUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:shadow-lg hover:scale-105 transition-all"
            >
              Register Now →
            </a>
          ) : isEventInFuture &&
            event.registrationOpen &&
            event.registrationUrl ? (
            <a
              href={event.registrationUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:shadow-lg hover:scale-105 transition-all"
            >
              Register Now →
            </a>
          ) : (
            <button
              disabled
              className="inline-block bg-gray-300 text-gray-600 px-8 py-3 rounded-full font-semibold text-lg cursor-not-allowed"
            >
              Registration Closed
            </button>
          )}
        </div>

        {/* Right Sidebar */}
        <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 space-y-5">
          <h3 className="text-xl font-semibold mb-3">Event Details</h3>
          <div className="space-y-3 text-gray-700 text-base">
            <p>
              <span className="font-semibold">Date: </span>
              {new Date(event.date).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </p>
            {event.time && (
              <p>
                <span className="font-semibold">Time: </span>
                {event.time}
              </p>
            )}
            {event.venue && (
              <p>
                <span className="font-semibold">Venue: </span>
                {event.venue}
              </p>
            )}
            {event.organizer && (
              <p>
                <span className="font-semibold">Organizer: </span>
                {event.organizer}
              </p>
            )}
          </div>
          {isEventInFuture && event.ticketUrl && (
            <a
              href={event.ticketUrl}
              target="_blank"
              rel="noreferrer"
              className="block text-center w-full mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-full font-medium hover:scale-105 transition-all"
            >
              Buy Ticket
            </a>
          )}
        </div>
      </section>
    </div>
  );
}
