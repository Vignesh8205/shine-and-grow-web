import React from "react";
import { FaChalkboardTeacher, FaTools, FaBriefcase, FaClock, FaHandshake, FaBullseye } from "react-icons/fa";

const features = [
  {
    icon: <FaChalkboardTeacher className="text-3xl text-yellow-500" />,
    title: "Expert Instructors",
    desc: "Learn from industry professionals with 10+ years of experience",
  },
  {
    icon: <FaTools className="text-3xl text-purple-500" />,
    title: "Hands-on Learning",
    desc: "Build real projects and gain practical experience",
  },
  {
    icon: <FaBriefcase className="text-3xl text-pink-600" />,
    title: "Job Placement",
    desc: "95% placement rate with top tech companies",
  },
  {
    icon: <FaClock className="text-3xl text-pink-400" />,
    title: "Flexible Schedule",
    desc: "Weekend and evening batches available",
  },
  {
    icon: <FaHandshake className="text-3xl text-yellow-500" />,
    title: "Industry Partnerships",
    desc: "Direct connections with 500+ hiring partners",
  },
  {
    icon: <FaBullseye className="text-3xl text-blue-500" />,
    title: "Continuous Support",
    desc: "Lifetime access to course materials and community",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Why Choose <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 text-transparent bg-clip-text">LearnLaunch Institute?</span>
        </h2>
        <p className="text-gray-600 mb-10 text-lg">
          We're not just another training institute. We're your partners in building a successful tech career with industry-relevant skills and real-world experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div key={index} className="border rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
