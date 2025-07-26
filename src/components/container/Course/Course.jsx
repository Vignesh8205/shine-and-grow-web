import React, { useState } from "react";
import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import EnrollForm from "../../enrollForm/EnrollForm";
import EnrollPopup from "../../enrollForm/EnrollPopup";

const Course = ({ image, category, title, participants, rating }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {/* Course Card */}
      <div className="relative group w-full max-w-xs rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 transform hover:scale-105 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">

        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute top-2 left-2 bg-yellow text-black text-xs px-3 py-1 rounded-full font-bold shadow-lg">
            {category}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 text-white space-y-3">
          <h2 className="text-lg font-bold leading-tight line-clamp-2">{title}</h2>

          <div className="flex items-center justify-between text-sm text-teal-100">
            <div className="flex items-center gap-1">
              <AiOutlineUser className="text-lg text-white" />
              <span>{participants}</span>
            </div>

            <div className="flex items-center gap-1">
              <AiOutlineStar className="text-yellow-400 text-lg" />
              <span>{rating}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-white/10">
            <a href="#enroll">
              <button

                className="px-3 py-1 text-sm rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white transition-all"
              >
                Enroll
              </button>
            </a>

          </div>
        </div>
      </div>

      {/* Popup Modal */}


      {/* Slide-in animation */}

    </>
  );
};

export default Course;
