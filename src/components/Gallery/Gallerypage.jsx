import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { galleryItems } from "../../Data";
import { motion } from "framer-motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const GalleryPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 to-green-100 py-10 px-4" id="gallery-page">
            <div className="max-w-6xl mx-auto text-center">

                {/* Title Animation */}
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="text-5xl font-extrabold text-pink-700 mb-4 drop-shadow-md animate-pulse"
                >
                    Shine Grow Kids Gallery
                </motion.h1>

                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ delay: 0.3 }}
                    className="text-lg text-gray-700 mb-12 italic"
                >
                    Discover the magical moments from our vibrant preschool activities.
                </motion.p>

                {/* Carousel with Zoom & Fade effect */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <Carousel
                        autoPlay
                        infiniteLoop
                        showThumbs={false}
                        showStatus={false}
                        interval={3000}
                        className="rounded-xl shadow-xl"
                    >
                        {galleryItems.map((item, index) => (
                            <div key={index} className="relative group h-[400px] overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="object-cover w-full h-full rounded-xl transform transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute bottom-0 bg-gradient-to-t from-black via-black/60 to-transparent w-full p-4">
                                    <h3 className="text-white text-2xl font-bold drop-shadow-lg">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </motion.div>

                {/* Grid Gallery with Hover Tilt and Fade-in */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative group cursor-pointer rounded-3xl p-[3px] bg-gradient-to-tr from-pink-400 via-yellow-300 to-green-400 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div className="rounded-2xl overflow-hidden bg-white transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-[1deg]">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition duration-300"></div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl font-bold text-pink-600 text-center drop-shadow-sm group-hover:scale-105 transition duration-300">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Glowing border ring on hover */}
                            <div className="absolute -inset-[3px] rounded-3xl z-[-1] bg-gradient-to-tr from-pink-400 via-yellow-300 to-green-400 blur-md opacity-0 group-hover:opacity-100 transition duration-500"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GalleryPage;
