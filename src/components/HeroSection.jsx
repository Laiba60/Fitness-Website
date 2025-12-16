import React from "react";
import Boysbg from "../assets/images/Boysbg.avif";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${Boysbg})` }}
    >
      
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-4xl px-6 md:px-12 pt-32 md:pt-40 text-center md:text-left">
        <span className="text-red-500 font-semibold uppercase">
          The Best Fitness And Gym Studio
        </span>

        <h1 className="text-white text-4xl md:text-6xl font-extrabold mt-4 leading-tight">
          Build Your Perfect Body And Healthy Growth
        </h1>

        <p className="text-gray-200 max-w-xl mt-6">
          Risus ultricies feugiat iaculis est. Eget blandit fringilla in
          vivamus urna eu. Augue et rhoncus gravida in velit at a amet.
        </p>

        <a
          href="#appointment"
          className="inline-block mt-8 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
        >
          Book Appointment
        </a>
      </div>

      
      <a
        href="#about"
        className="absolute bottom-10 flex flex-col items-center space-y-1 animate-bounce"
      >
        <span className="block w-3 h-3 border-b-2 border-r-2 border-white rotate-45"></span>
        <span className="block w-3 h-3 border-b-2 border-r-2 border-white rotate-45"></span>
        <span className="block w-3 h-3 border-b-2 border-r-2 border-white rotate-45"></span>
      </a>
    </section>
  );
};

export default HeroSection;
