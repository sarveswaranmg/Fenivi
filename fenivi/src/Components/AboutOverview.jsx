import React from "react";

export default function AboutOverview() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">
        {/* LEFT: TEXT CARD */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10 h-full flex flex-col">
          <p className="text-xs font-semibold text-gray-500 mb-3 uppercase">
            How It Started
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
            Our Journey Towards <br /> Research-Driven Impact
          </h2>

          <div className="text-gray-600 text-base md:text-lg leading-relaxed flex-1">
            <p className="mb-4">
              Founded in 2017, Fenivi Research Solutions bridges the gap between
              policy, practice, and community needs through actionable research
              and evidence-based insights that drive sustainable development.
            </p>
            <p>
              Our goal is to create measurable impact across hydrology, health,
              and social development through innovation, collaboration, and data.
            </p>
          </div>
        </div>

        {/* RIGHT: IMAGE + STATS CARD */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm h-full flex flex-col overflow-hidden">
          {/* IMAGE */}
          <div className="p-6 pb-0">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop"
                alt="Fenivi collaboration"
                className="w-full h-[300px] md:h-[340px] object-cover"
              />
            </div>
          </div>

          {/* GREY BACKGROUND UNDER STATS */}
          <div className=" w-full mt-6 p-6">
            <div className="grid grid-cols-2 gap-4">
              <div className=" rounded-xl bg-gray-50 shadow-sm p-5 flex flex-col justify-center items-start">
                <div className="text-2xl md:text-3xl font-extrabold text-gray-900">8+</div>
                <div className="text-sm text-gray-600 mt-2">Years of Impact</div>
              </div>

              <div className=" rounded-xl bg-gray-50 shadow-sm p-5 flex flex-col justify-center items-start">
                <div className="text-2xl md:text-3xl font-extrabold text-gray-900">200+</div>
                <div className="text-sm text-gray-600 mt-2">Publications</div>
              </div>

              <div className=" rounded-xl bg-gray-50 shadow-sm p-5 flex flex-col justify-center items-start">
                <div className="text-2xl md:text-3xl font-extrabold text-gray-900">30+</div>
                <div className="text-sm text-gray-600 mt-2">Projects</div>
              </div>

              <div className=" rounded-xl bg-gray-50 shadow-sm p-5 flex flex-col justify-center items-start">
                <div className="text-2xl md:text-3xl font-extrabold text-gray-900">15+</div>
                <div className="text-sm text-gray-600 mt-2">Partners</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
