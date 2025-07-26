import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

import slide1 from "../../assets/slideshow/kid.jpg";
import slide2 from "../../assets/slideshow/kid2.jpg";
import slide3 from "../../assets/slideshow/kid3.jpg";
import EnrollPopup from "../enrollForm/EnrollPopup";

const slides = [slide1, slide2, slide3];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [ContactForm,setContactForm]=useState(false);
const OpenContact = () => {
  setContactForm(prev => !prev);
};


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
      <>
   
    <br />
      <br />  <br />
     

     {/* Hero Section */}
      <section className="relative   flex items-center justify-center overflow-hidden bg-black z-0">
        <br />
        {/* Advanced Particle System Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Grid Pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
              linear-gradient(rgba(96, 165, 250, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(96, 165, 250, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
              animation: "drift 20s linear infinite",
            }}
          ></div>

          {/* Morphing Blob Animations */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div
              className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"
              style={{
                animation:
                  "morph 8s ease-in-out infinite, float 6s ease-in-out infinite",
                clipPath:
                  "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
              }}
            ></div>
            <div
              className="absolute top-32 right-20 w-80 h-80 bg-gradient-to-r from-pink-400/30 via-purple-500/30 to-indigo-600/30 rounded-full blur-3xl"
              style={{
                animation:
                  "morph 10s ease-in-out infinite reverse, float 8s ease-in-out infinite",
                animationDelay: "2s",
                clipPath:
                  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              }}
            ></div>
            <div
              className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-emerald-400/30 via-teal-500/30 to-cyan-600/30 rounded-full blur-3xl"
              style={{
                animation:
                  "morph 12s ease-in-out infinite, float 10s ease-in-out infinite",
                animationDelay: "4s",
                clipPath:
                  "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
              }}
            ></div>
          </div>

          {/* Floating Particle Elements */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
                transform: `scale(${0.5 + Math.random()})`,
              }}
            />
          ))}
        </div>

        {/* Interactive Cursor Trail Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(96, 165, 250, 0.1), transparent 40%)",
            }}
          ></div>
        </div>

        {/* Main Content Container */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Content - Futuristic Text Animation */}
            <div className="space-y-10">
              {/* Holographic Badge */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/50 to-purple-500/50 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative inline-flex items-center px-6 py-3 rounded-full bg-black/50 backdrop-blur-xl border border-cyan-400/50 hover:border-purple-400/50 transition-all duration-500">
                  <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-4 animate-pulse"></div>
                  <span className="text-sm font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent tracking-widest uppercase">
                    Supporting Every Child's Growth
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* 3D Text Animation */}
              <div className="space-y-6">
                <h1 className="relative">
                  <span className="block text-6xl md:text-7xl lg:text-8xl font-black leading-none">
                    <span className="relative inline-block">
                      <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent blur-sm scale-110">
                        Shine
                      </span>
                      <span className="relative bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                        Shine
                      </span>
                    </span>{" "}
                    <span className="relative inline-block">
                      <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent blur-sm scale-110">
                        and
                      </span>
                      <span className="relative bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent">
                        and
                      </span>
                    </span>
                  </span>
                  <span className="block text-6xl md:text-7xl lg:text-8xl font-black leading-none mt-4">
                    <span className="relative inline-block">
                      <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent blur-sm scale-110">
                        Grow
                      </span>
                      <span className="relative bg-gradient-to-r from-emerald-300 to-teal-400 bg-clip-text text-transparent">
                        Grow
                      </span>
                    </span>
                  </span>
                  <span className="block text-4xl md:text-5xl lg:text-6xl font-bold mt-6 text-white">
                    for{" "}
                    <span className="relative inline-block group">
                      <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent blur-lg scale-125 group-hover:scale-150 transition-transform duration-500"></span>
                      <span className="relative bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent font-black">
                        Stronger Skills
                      </span>
                      <div className="absolute -bottom-4 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                    </span>
                  </span>
                </h1>
              </div>

              {/* Holographic Description Card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative p-8 bg-black/40 backdrop-blur-2xl rounded-3xl border border-cyan-400/30 hover:border-purple-400/50 transition-all duration-500">
                  <p className="text-xl text-white leading-relaxed">
                    Shine and Grow Children's Rehab Centre provides specialized
                    therapy services in{" "}
                    <span className="font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
                      Occupational Therapy
                    </span>
                    ,{" "}
                    <span className="font-bold text-purple-400 hover:text-purple-300 transition-colors">
                      Speech Therapy
                    </span>
                    ,{" "}
                    <span className="font-bold text-blue-400 hover:text-blue-300 transition-colors">
                      Physiotherapy
                    </span>
                    , and{" "}
                    <span className="font-bold text-pink-400 hover:text-pink-300 transition-colors">
                      ABA therapy
                    </span>{" "}
                    — empowering children with the tools they need to thrive.
                  </p>
                </div>
              </div>

              {/* Futuristic CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl font-bold text-white overflow-hidden transform hover:scale-105 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center gap-3" onClick={()=>setContactForm(true)}>
                    <span className="text-lg" >Enquire Now</span>
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
                      <span className="text-lg">🚀</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-400/50 to-purple-500/50 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                </button>

                <button className="group relative px-10 py-5 bg-black/50 backdrop-blur-xl border-2 border-cyan-400/50 hover:border-purple-400/70 rounded-2xl font-bold text-cyan-300 hover:text-purple-300 transform hover:scale-105 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  <div className="relative flex items-center justify-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-lg">▶</span>
                    </div>
                    <span className="text-lg">Discover Magic</span>
                  </div>
                </button>
              </div>

              {/* Animated Statistics */}
              <div className="grid grid-cols-3 gap-8 pt-12">
                {[
                  {
                    value: "500+",
                    label: "Happy Children",
                    color: "from-cyan-400 to-blue-500",
                    icon: "👶",
                  },
                  {
                    value: "15+",
                    label: "Expert Therapists",
                    color: "from-purple-400 to-pink-500",
                    icon: "👩‍⚕️",
                  },
                  {
                    value: "8+",
                    label: "Years Experience",
                    color: "from-emerald-400 to-teal-500",
                    icon: "🏆",
                  },
                ].map((stat, index) => (
                  <div key={index} className="group text-center">
                    <div
                      className={`relative w-20 h-20 bg-gradient-to-r ${stat.color} rounded-3xl mx-auto mb-4 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl`}
                    >
                      <div className="absolute inset-0 bg-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="text-2xl">{stat.icon}</span>
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
                      ></div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-3xl font-black text-white group-hover:scale-110 transition-transform duration-300">
                        {stat.value}
                      </p>
                      <p className="text-gray-400 font-medium group-hover:text-gray-200 transition-colors duration-300">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - 3D Floating Image with Holo Effects */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Holographic Frame */}
                <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700 animate-pulse"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-3xl border border-cyan-400/30 group-hover:border-purple-400/50 transition-all duration-500"></div>

                {/* Main Image Container */}
                <div className="relative p-8 bg-black/30 backdrop-blur-2xl rounded-3xl border border-white/20 group-hover:border-cyan-400/50 transition-all duration-500 transform group-hover:scale-105 group-hover:rotate-1">
                  <img
                    src="https://cdn.builder.io/api/v1/assets/46e512984a0e438d8ede402c6ecbbd48/image-e12c0b?format=webp&width=800"
                    alt="Happy children illustration"
                    className="w-full max-w-lg h-auto transform group-hover:scale-110 transition-all duration-700 filter group-hover:brightness-110"
                  />

                  {/* Floating Holo Cards */}
                  <div className="absolute -top-6 -left-6 bg-black/60 backdrop-blur-2xl rounded-2xl p-4 border border-green-400/50 shadow-2xl transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center animate-pulse">
                        <span className="text-white text-lg">✓</span>
                      </div>
                      <div>
                        <p className="font-bold text-green-400">Success Rate</p>
                        <p className="text-2xl font-black text-white">95%</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-2xl blur-xl"></div>
                  </div>

                  <div
                    className="absolute -bottom-6 -right-6 bg-black/60 backdrop-blur-2xl rounded-2xl p-4 border border-blue-400/50 shadow-2xl transform group-hover:scale-110 group-hover:translate-y-2 transition-all duration-500"
                    style={{ animationDelay: "1s" }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center animate-bounce">
                        <span className="text-white text-lg">⭐</span>
                      </div>
                      <div>
                        <p className="font-bold text-blue-400">Rating</p>
                        <p className="text-2xl font-black text-white">4.9/5</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-xl"></div>
                  </div>

                  {/* Additional Floating Elements */}
                  <div className="absolute top-1/2 -right-12 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping"></div>
                  <div className="absolute top-1/4 -left-8 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-bounce"></div>
                  <div className="absolute bottom-1/4 -right-8 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
                </div>

                {/* Orbit Rings */}
                <div
                  className="absolute inset-0 rounded-full border border-cyan-400/20 animate-spin"
                  style={{ animationDuration: "20s" }}
                ></div>
                <div
                  className="absolute inset-4 rounded-full border border-purple-400/20 animate-spin"
                  style={{
                    animationDuration: "15s",
                    animationDirection: "reverse",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Futuristic Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group cursor-pointer">
          <div className="relative">
            <div className="w-8 h-16 border-2 border-cyan-400/50 rounded-full flex justify-center group-hover:border-purple-400/70 transition-colors duration-300">
              <div className="w-2 h-6 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full mt-3 animate-bounce"></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/20 to-purple-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          </div>
          <p className="text-cyan-300 text-xs mt-2 text-center font-medium group-hover:text-purple-300 transition-colors duration-300">
            EXPLORE
          </p>
        </div>

        <style jsx>{`
          @keyframes morph {
            0%,
            100% {
              border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            }
            50% {
              border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
            }
          }
          @keyframes drift {
            0% {
              transform: translate(0, 0);
            }
            100% {
              transform: translate(-50px, -50px);
            }
          }
        `}</style>
      </section>
  {
    ContactForm?<EnrollPopup  timeout={0}/>:null
  }
    </>
  );
};

export default Home;
