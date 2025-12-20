import React from "react";
import PersonalTrainer from "../assets/images/PersonalTrainer.avif"; 
const PersonalTrainerBooking = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center"
      style={{
        backgroundImage: `url(${PersonalTrainer})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center md:justify-between">
        <div className="text-white md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold">
            Are You Looking For a  Personal Trainer For Training?
          </h1>
          <button className="bg-linear-to-b from-[#A58120] to-black text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300">
            Book Appointment
          </button>
        </div>
        <div className="md:w-1/2 hidden md:block"></div>
      </div>
    </section>
  );
};
export default PersonalTrainerBooking;
