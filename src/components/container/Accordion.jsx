import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({ id, title, answer }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (id) => {
    setActiveIndex(id === activeIndex ? null : id);
  };

  return (
    <motion.div
      className="rounded-xl bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 p-4 shadow-xl mb-4"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => handleClick(id)}
      >
        <h3 className="text-lg sm:text-xl font-extrabold text-purple-800">
          {title}
        </h3>
        <motion.div
          animate={{ rotate: id === activeIndex ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <BsChevronDown className="text-purple-600 text-xl" />
        </motion.div>
      </div>

      {/* Content */}
      <AnimatePresence initial={false}>
        {id === activeIndex && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="mt-3 overflow-hidden"
          >
            <div className="text-sm sm:text-base text-purple-700 leading-relaxed bg-white p-3 rounded-md shadow-inner">
              ✨ {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Accordion;
