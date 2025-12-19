import React from 'react';
import mission from '../assets/images/mission.webp';

const GymMission = () => {
  return (
    <section className="bg-linear-to-b from-[#4b0000] to-black text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col space-y-8">
          <div>
            <p className="text-red-500 font-bold uppercase tracking-widest">MISSION</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
              Unlock every member's full potential.
            </h2>
            <p className="text-gray-400 mt-3">
              To help every member unlock their full potential through personalized training, expert guidance, and a supportive community that motivates consistency and growth.
              We’re on a mission to redefine fitness by creating a space where everyone feels empowered to start — and stay — on their fitness journey.   
            </p>
          </div>
          <div>
            <p className="text-red-500 font-bold uppercase tracking-widest">VISION</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
              Inspire fitness as a lifestyle.
            </h2>
            <p className="mt-3 text-gray-400  text-left leading-relaxed">
              To become Qatar’s most trusted and inspiring fitness community — where passion meets performance.
             We envision a future where fitness becomes a lifestyle, not a task, and where QR Gym sets the standard for quality, innovation, and results.
            </p>

          </div>
        </div>
        <div className="relative">
          <img
            src={mission}
            alt="Couple working out in gym"
            className="w-full h-auto object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default GymMission;
