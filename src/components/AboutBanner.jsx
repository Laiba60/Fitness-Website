import React from "react";
import AllBanner from "../assets/images/AllBanner.jpg";

const AboutBanner = () => {
  return (
    <section
      className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[85vh] 
      bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${AllBanner})` }}
    >
      
      <div className="absolute inset-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="text-left text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            About Us
          </h1>
          <p className="text-sm sm:text-base text-gray-200">
            <span className="opacity-80">Home</span>
            <span className="mx-2">/</span>
            <span className="font-semibold text-[#A58120]">About Us</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
