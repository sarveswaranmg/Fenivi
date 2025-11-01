import { useState, useEffect } from "react";

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Check if redirected back with success parameter
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setShowSuccess(true);
      // Clear the URL parameter
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-200 via-purple-100 to-pink-100 flex items-center justify-center py-12">
      <div className="w-full max-w-6xl px-4 md:px-8">
        {/* Header Section */}
        <div className="text-center pb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-3">
            Contact Us
          </h1>
          <p className="text-base md:text-lg text-gray-700">
            Any question or remarks? Just write us a message!
          </p>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg relative">
            <strong className="font-bold">Message sent successfully! </strong>
            <span className="block sm:inline">
              You will get a reply within 48 hours.
            </span>
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute top-0 bottom-0 right-0 px-4 py-3"
            >
              <span className="text-2xl">&times;</span>
            </button>
          </div>
        )}

        {/* Main Contact Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
            {/* Left Side - Contact Information */}
            <div className="lg:col-span-2 bg-gradient-to-br from-purple-600 to-purple-800 text-white p-6 md:p-8 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-3">Contact Information</h2>
                <p className="text-purple-100 mb-8 text-sm">
                  Say something to start a live chat!
                </p>

                {/* Contact Details */}
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <span className="text-sm">+1012 3456 789</span>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <span className="text-sm">demo@gmail.com</span>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-sm">
                      132 Dartmouth Street Boston,
                      <br />
                      Massachusetts 02156 United States
                    </span>
                  </div>
                </div>

                {/* Social Media Icons */}
                <div className="flex gap-3 mt-12">
                  <button className="w-9 h-9 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/30 rounded-full -mb-16 -mr-16"></div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="lg:col-span-3 p-6 md:p-8">
              <form
                action="https://formsubmit.co/sarveswaranmg@gmail.com"
                method="POST"
                className="space-y-5"
              >
                {/* Formsubmit Configuration */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input
                  type="hidden"
                  name="_subject"
                  value="New Contact Form Submission from Fenivi Website"
                />
                <input
                  type="hidden"
                  name="_next"
                  value={`${window.location.origin}${window.location.pathname}?success=true`}
                />

                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="First_Name"
                      className="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none py-1.5 text-sm transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="Last_Name"
                      placeholder="Doe"
                      className="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none py-1.5 text-sm transition-colors"
                    />
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none py-1.5 text-sm transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="Phone_Number"
                      placeholder="+1 012 3456 789"
                      className="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none py-1.5 text-sm transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Subject Selection */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-3">
                    Select Subject?
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      "General Inquiry",
                      "General Inquiry",
                      "General Inquiry",
                      "General Inquiry",
                    ].map((subject, index) => (
                      <label
                        key={index}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="Subject"
                          value={subject}
                          defaultChecked={index === 0}
                          className="w-4 h-4 text-purple-600"
                        />
                        <span className="text-sm text-gray-700">{subject}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Write your message.."
                    rows="3"
                    className="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none py-1.5 text-sm resize-none transition-colors"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
