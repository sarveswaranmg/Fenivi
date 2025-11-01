import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import articleImg from "../assets/1.png";

export default function Article() {
  return (
    <div className="flex flex-col items-center w-full bg-white text-gray-800">
      {/* Banner */}
      <div className="w-[95%] md:w-[90%] lg:w-[85%] mt-8">
        <img
          src={articleImg}
          alt="Article banner"
          className="w-full h-80 md:h-[28rem] object-cover rounded-3xl shadow-md"
        />
      </div>

      {/* Article Content */}
      <div className="w-[95%] md:w-[90%] lg:w-[80%] xl:w-[75%] mt-10 mb-20">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          Hydrological Insights from the Pallikaranai Catchment
        </h1>

        {/* Meta Info */}
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

          {/* Share Icons */}
          <div className="flex items-center gap-3 mt-2 md:mt-0">
            <span>Share:</span>
            <FaInstagram className="hover:text-purple-600 cursor-pointer" />
            <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
            <FaTwitter className="hover:text-sky-500 cursor-pointer" />
            <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
          </div>
        </div>

        {/* Article Text */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            The Pallikaranai catchment, located in the southern part of Chennai, represents one of
            the last remaining freshwater wetlands in the city, playing a critical role in groundwater
            recharge, stormwater regulation, and biodiversity support. However, rapid urbanization and
            unplanned development have severely stressed the hydrological balance of this region.
          </p>

          <p>
            Encroachment, landfill activities, and the proliferation of impervious surfaces have
            significantly reduced natural infiltration, exacerbating surface runoff and increasing the
            risk of urban flooding during the monsoon season. This study emphasizes the need to understand
            the intricate hydrological processes within the catchment, including the interplay between
            rainfall patterns, soil permeability, and surface water flow.
          </p>

          <p>
            Strategies such as the restoration of wetlands, creation of decentralized stormwater retention
            systems, and promotion of permeable surfaces can help in attenuating peak runoff and improving
            groundwater recharge.
          </p>

          <p>
            Additionally, community engagement and policy enforcement play a pivotal role in ensuring the
            long-term sustainability of these interventions. By combining scientific hydrological insights
            with practical urban management approaches, the study underscores the importance of a holistic
            framework that balances urban development with the ecological integrity of the Pallikaranai
            catchment.
          </p>
        </div>
      </div>
    </div>
  );
}
