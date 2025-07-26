import React from "react";
import { categories } from "../../../Data";
import { courses } from "../../../Data";
import Categories from "./Categories";
import Course from "./Course";

const Courses = () => {
  return (
    <div className="section py-16 px-4 sm:px-8 lg:px-20 bg-gradient-to-br from-HummingBird via-white to-Solitude" id="courses">
      {/* Header Section */}
      <div className="text-center mb-20 max-w-4xl mx-auto">
        <div className="inline-block mb-4 px-6 py-2 bg-Teal/10 rounded-full">
          <span className="text-Teal font-semibold text-sm uppercase tracking-wide">Learning Categories</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-Teal leading-tight">
          Explore Our Exciting <span className="bg-gradient-to-r from-Teal to-yellow bg-clip-text text-transparent">Learning Adventures</span>
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray leading-8 max-w-3xl mx-auto opacity-90">
          At ShineGrow Kids, we offer a variety of courses designed to inspire and engage children in a fun and interactive way. Each category is carefully curated to develop important skills through creativity, exploration, and personalized learning.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-24">
        {categories.map((category, index) => (
          <div 
            key={category.id} 
            className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-Teal/10 overflow-hidden"
            style={{
              animationDelay: `${index * 0.1}s`,
              animation: 'fade-in 0.6s ease-out forwards'
            }}
          >
            <div className="relative p-6 sm:p-8">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-Teal/20 to-yellow/20 rounded-bl-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Categories {...category} />
            </div>
          </div>
        ))}
      </div>

      {/* Popular Courses Section */}
      <div className="text-center mb-16">
        <div className="inline-block mb-4 px-6 py-2 bg-yellow/20 rounded-full">
          <span className="text-Teal font-semibold text-sm uppercase tracking-wide">Popular Courses</span>
        </div>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-Teal mb-4">
          Most Popular Learning Adventures
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-Teal to-yellow mx-auto rounded-full"></div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">  
        {courses.map((course, index) => (
          <div
            key={course.id}
            className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border-2 border-transparent hover:border-Teal/30 overflow-hidden"
            style={{
              animationDelay: `${index * 0.15}s`,
              animation: 'scale-in 0.6s ease-out forwards'
            }}
          >
            <div className="relative p-6 lg:p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-Teal/5 via-transparent to-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <Course {...course} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Decoration */}
      <div className="mt-20 text-center">
        <div className="inline-flex items-center gap-2 text-Teal/60">
          <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-Teal/40"></div>
          <span className="text-sm font-medium">Discover More Adventures</span>
          <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-Teal/40"></div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
