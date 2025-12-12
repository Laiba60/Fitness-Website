import React from "react";
import BgImage from "../assets/images/bgimage.jpg"; 

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center min-h-screen flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${BgImage})` }} 
    >
      
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-4xl px-6 text-center md:text-left">
       
        <span className="text-red-600 text-lg font-semibold uppercase">
          The Best Fitness And Gym Studio
        </span>
        <h1 className="text-white text-4xl md:text-6xl font-bold mt-4 mb-6 leading-tight">
          Build Your Perfect Body And Healthy Growth
        </h1>
        <p className="text-white text-lg mb-6">
          Risus ultricies feugiat iaculis est. Eget blandit fringilla in
          vivamus urna eu. Augue et rhoncus gravida in velit at a amet. Dolor
          lacinia tristique morbi sed turpis turpis tellus cras in.
        </p>
        <a
          href="#appointment"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-full transition duration-300"
        >
          Book Appointment
        </a>
      </div>

    
      <a
        href="#about"
        className="absolute bottom-10 flex flex-col items-center space-y-1 animate-bounce"
      >
        <span className="block w-2 h-2 border-b-2 border-r-2 border-white rotate-45"></span>
        <span className="block w-2 h-2 border-b-2 border-r-2 border-white rotate-45"></span>
        <span className="block w-2 h-2 border-b-2 border-r-2 border-white rotate-45"></span>
      </a>

      
      <div className="absolute left-6 bottom-24 flex flex-col items-center space-y-4">
        <div className="w-0 h-0 border-l-15px border-r-15px border-b-30px border-l-transparent border-r-transparent border-b-red-600"></div>
        <div className="flex flex-col space-y-2 text-white text-sm font-semibold">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            FB
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            IG
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            YT
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
