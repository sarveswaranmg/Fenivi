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
              Fenivi was founded in 2017 by two experienced researchers who saw a persistent gap between evidence, policy, practice, and real community needs. In many settings, community priorities do not align with what programme implementers deliver—often due to limited consideration of cultural context and local realities.
            </p>
            <p className="mb-4">Despite India’s abundance of data, it is rarely transformed into actionable insights that guide locally appropriate solutions. Fenivi emerged to bridge this gap by generating real-world evidence and converting it into practical, community-aligned knowledge.</p>
            
            <p className="mb-4">We focus on hydrology, health, and social development, creating measurable impact through collaboration, convergence, innovation, and deep grassroots understanding. We believe in India’s potential and the power of partnerships to turn data into collective wisdom for sustainable development.</p>
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
{/* GREY BACKGROUND UNDER STATS */}
<div className="w-full mt-6 p-6">
  <div className="grid grid-cols-2 gap-4">

    <div className="rounded-xl bg-gray-50 shadow-sm p-5 flex flex-col justify-center items-start">
      <div className="text-2xl md:text-3xl font-extrabold text-gray-900">5+</div>
      <div className="text-sm text-gray-600 mt-2">Years of Impact</div>
      <p className="text-xs text-gray-500 mt-1 leading-relaxed">
        Over half a decade of generating real-world evidence and supporting
        impactful decision-making across diverse sectors in India.
      </p>
    </div>

    <div className="rounded-xl bg-gray-50 shadow-sm p-5 flex flex-col justify-center items-start">
      <div className="text-2xl md:text-3xl font-extrabold text-gray-900">200+</div>
      <div className="text-sm text-gray-600 mt-2">Publications</div>
      <p className="text-xs text-gray-500 mt-1 leading-relaxed">
        A growing body of scientific work published through collaborations with
        researchers, institutions, and field practitioners nationwide.
      </p>
    </div>

    <div className="rounded-xl bg-gray-50 shadow-sm p-5 flex flex-col justify-center items-start">
      <div className="text-2xl md:text-3xl font-extrabold text-gray-900">100+</div>
      <div className="text-sm text-gray-600 mt-2">Projects</div>
      <p className="text-xs text-gray-500 mt-1 leading-relaxed">
        Successfully executed multi-disciplinary projects that address community
        needs, guide policy, and advance sustainable development outcomes.
      </p>
    </div>

    <div className="rounded-xl bg-gray-50 shadow-sm p-5 flex flex-col justify-center items-start">
      <div className="text-2xl md:text-3xl font-extrabold text-gray-900">15+</div>
      <div className="text-sm text-gray-600 mt-2">Partners</div>
      <p className="text-xs text-gray-500 mt-1 leading-relaxed">
        Collaborating with government agencies, NGOs, academic institutions, and
        global networks to co-create meaningful, evidence-backed solutions.
      </p>
    </div>

  </div>
</div>

        </div>
      </div>
    </section>
  );
}
