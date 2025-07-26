import React from "react";
import { motion } from "framer-motion";
import about from "../../assets/About.jpg";

// Utility to split text into motion spans


const AnimatedText = ({ text }) => {
  return (
    <motion.div
      className="inline-block"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2 cursor-default"
          variants={{
            hidden: { opacity: 0, y: 40, scale: 0.8 },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            },
          }}
          whileHover={{
            scale: 1.2,
            color: "#ff61a6",
            textShadow: "0px 4px 6px rgba(255, 97, 166, 0.7)",
          }}
          style={{
            background: "linear-gradient(45deg, #ff61a6, #14b8a6)",
            backgroundClip: "text",
            color: "transparent",
            textFillColor: "transparent",
            WebkitBackgroundClip: "text",
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};




const About = () => {
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="border-[3px] border-solid border-Teal rounded-lg shadow-lg"
        >
          <img src={about} alt="About ShineGrow Kids" className="p-4 rounded-lg" />
        </motion.div>

        {/* Text Content Section */}
        <div>
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5 leading-snug">
            <AnimatedText text="Nurturing Bright Futures with" />
            <br />
            <AnimatedText text="Joyful Learning" />
          </div>

          <motion.p
            className="text-base sm:text-lg text-gray-800 leading-relaxed mb-6 font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            At ShineGrow Kids, we specialize in engaging and inclusive online education for children aged 3 to 12 — including those with special learning needs. Our platform features animated lessons, interactive quizzes, fun worksheets, and real-time progress tracking. With a focus on creativity, empathy, and personalized growth, we make learning a joyful experience for every child.
          </motion.p>

          <motion.p
            className="text-base sm:text-lg text-gray-800 leading-relaxed mb-6 font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our certified educators use visual learning aids, storytelling, music, and structured routines to make every lesson accessible and enjoyable. We also offer dedicated sessions tailored for children with learning differences such as ADHD, autism, and speech delays — ensuring no child is left behind. Parents stay connected with regular progress updates and workshops to support their child’s learning journey from home.
          </motion.p>


          <motion.button
            className="py-3 px-6 text-sm border border-solid border-Teal text-Teal hover:bg-Teal hover:text-white transition rounded-lg font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discover Our Story
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default About;
