import React from "react";
import Bannerimage from "../assets/images/Bannerimage.avif";
import AllBanner from "../assets/images/AllBanner.jpg";
const ContactBanner = () => {
  return (
    <section
      className="relative h-[45vh] sm:h-[55vh] lg:h-[65vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${AllBanner})` }}
    >
      <div className="absolute inset-0 "></div>
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
        <div className="text-left text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            About Us
          </h1>
          <p className="text-sm sm:text-base text-gray-200">
            <span className="opacity-80">Home</span>
            <span className="mx-2">/</span>
            <span className="font-semibold text-white">About Us</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
