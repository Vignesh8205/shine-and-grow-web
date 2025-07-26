import React from "react";
import { motion } from "framer-motion";

const Categories = ({ icon, category }) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  
  return (
    <motion.div
      variants={item}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.02, y: -4 }}
      className="flex items-center flex-col gap-4 sm:gap-6 text-center relative"
    >
      {/* Icon Container */}
      <div className="relative">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-Teal/10 to-yellow/10 rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
          <div className="text-3xl sm:text-4xl text-Teal group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        </div>
        <div className="absolute -inset-2 bg-gradient-to-br from-Teal/20 to-yellow/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
      </div>
      
      {/* Category Name */}
      <div className="space-y-2">
        <h4 className="text-lg sm:text-xl font-bold text-Teal group-hover:text-yellow transition-colors duration-300">
          {category}
        </h4>
        <div className="w-12 h-0.5 bg-gradient-to-r from-Teal to-yellow mx-auto rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* View More Link */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="text-sm font-medium text-gray hover:text-Teal transition-colors duration-300 px-4 py-2 rounded-full hover:bg-Teal/5 group-hover:bg-Teal/10"
      >
        Explore More →
      </motion.button>
    </motion.div>
  );
};

export default Categories;
