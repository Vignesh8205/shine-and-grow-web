import React from "react";
import teacher1 from "../../assets/teacher1.png";
import teacher2 from "../../assets/teacher2.png";
import { accordions } from "../../Data";
import Accordion from "./Accordion";

const Teacher = () => {
  return (
    <div className="section py-16 px-4 bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50" id="teacher">
      {/* Instructor Highlight Section */}
      <div className="grid sm:grid-cols-2 place-items-center gap-12">
        {/* Block 1 */}
        <div className="p-4">
          <h2 className="font-extrabold text-[1.75rem] sm:text-[2.25rem] text-purple-800 leading-tight mb-5">
            Become an <span className="text-teal-500 underline">Inspiring Instructor</span>
            <br /> on <span className="text-pink-500 font-black">FunLearn</span>
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-7 mb-6">
            Share your unique skills and spark curiosity in young minds! Teach exciting topics
            with fun tools, flexible schedules, and full support from our team.
          </p>
          <button className="py-3 px-6 bg-teal-500 hover:bg-teal-600 transition-all text-white rounded-xl text-sm font-bold shadow-md">
            Start Teaching
          </button>
        </div>

        <div className="p-4 md:w-3/4 sm:row-start-1">
          <img src={teacher1} alt="FunLearn Teacher 1" className="rounded-xl shadow-xl" />
        </div>

        {/* Block 2 */}
        <div className="p-4">
          <h2 className="font-extrabold text-[1.75rem] sm:text-[2.25rem] text-purple-800 leading-tight mb-5">
            Share Your <span className="text-yellow-500 underline">Passion</span><br /> with Curious Kids
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-7 mb-6">
            Whether it's science, storytelling, art, or tech — make learning magical and joyful!
            We make it easy to get started, reach learners, and grow your teaching journey.
          </p>
          <button className="py-3 px-6 bg-pink-500 hover:bg-pink-600 transition-all text-white rounded-xl text-sm font-bold shadow-md">
            Get Started
          </button>
        </div>

        <div className="p-4 md:w-3/4">
          <img src={teacher2} alt="FunLearn Teacher 2" className="rounded-xl shadow-xl" />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="text-center mt-20">
        <h2 className="text-[1.75rem] sm:text-[2.25rem] font-extrabold text-purple-800 mb-4">
          Frequently <span className="text-teal-500">Asked Questions</span>
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Everything you need to know before joining FunLearn as a learner or instructor!
        </p>
      </div>

      <div className="mt-12 max-w-[750px] mx-auto px-2">
        {accordions.map((accordion) => (
          <Accordion key={accordion.id} {...accordion} />
        ))}
      </div>
    </div>
  );
};

export default Teacher;
