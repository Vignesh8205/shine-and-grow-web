import React, { useState, useEffect } from 'react';
import { galleryItems, slides } from '../../Data';

const AwardCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h2 className="text-4xl font-extrabold text-center text-purple-700 mb-12 drop-shadow-md">
        Our Services
      </h2>

      <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row transition-all duration-500">
        {/* Left Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={slides[current].image}
            alt="Award"
            className="w-full h-full object-cover transition-all duration-700 ease-in-out"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 w-full p-8 flex flex-col justify-center space-y-5 bg-gray-50">
          <h3 className="text-lg font-semibold text-purple-600 uppercase tracking-wide">
            Explore Our Support
          </h3>

          <h4 className="text-3xl font-bold text-gray-800 leading-snug">
            {slides[current].title}
          </h4>

          <p className="text-gray-600 text-base leading-relaxed">
            {slides[current].description}
          </p>
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 text-purple-700 border border-purple-200 rounded-full p-2 shadow-md z-10"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 text-purple-700 border border-purple-200 rounded-full p-2 shadow-md z-10"
        >
          &#8594;
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === current ? 'bg-purple-600 scale-125' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AwardCarousel;
