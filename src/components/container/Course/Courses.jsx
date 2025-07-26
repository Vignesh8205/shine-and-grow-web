import React from "react";
import { categories } from "../../../Data";
import { courses } from "../../../Data";
import Categories from "./Categories";
import Course from "./Course";

const Courses = () => {
  return (
    <div className="section py-16 px-4 sm:px-8 lg:px-20" id="courses">
      <div className="text-center mb-16">
        <h2 className="sm:text-4xl text-3xl font-bold mb-5 text-Teal">
          Explore Our Exciting <span className="text-dark-Teal">Learning Categories</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-800 leading-7 max-w-[800px] mx-auto">
          At ShineGrow Kids, we offer a variety of courses designed to inspire and engage children in a fun and interactive way. Each category is carefully curated to develop important skills through creativity, exploration, and personalized learning. Explore the exciting learning opportunities we have for your child!
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {categories.map((category) => (
          <div key={category.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
            <Categories {...category} />
          </div>
        ))}
      </div>

      {/* Popular Courses */}
      <h3 className="text-xl sm:text-2xl font-bold mb-8 text-center text-Teal">
        Most Popular Learning Adventures
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">  
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl shadow-md p-6 border-2 border-blue-500 hover:shadow-2xl hover:border-purple-500 transition-all duration-300 transform hover:scale-105 flex justify-center"
          >
            <Course {...course} />
          </div>

        ))}
      </div>
    </div>
  );
};

export default Courses;
