import React from "react";
import { FiMapPin } from "react-icons/fi";

const GoogleMapEmbed = ({ src, label = "Map Location" }) => {
  if (!src) {
    return (
      <div className="text-red-500 text-center font-semibold mt-10">
        ⚠️ Map source URL is missing!
      </div>
    );
  }

  return (
    <div className="w-full mt-10 p-4 bg-white rounded-3xl shadow-xl border-4 border-blue-400 hover:shadow-2xl transition duration-300 ease-in-out">
      <div className="flex items-center gap-2 mb-4 text-blue-700 text-2xl font-semibold px-4">
        <FiMapPin className="text-3xl" />
        <span>{label}</span>
      </div>

      <div className="w-full h-[600px] rounded-xl overflow-hidden shadow-inner border mx-auto">
        <iframe
          src={src}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMapEmbed;
