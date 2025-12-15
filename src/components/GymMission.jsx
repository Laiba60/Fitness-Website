import React from 'react';
import mission from '../assets/images/mission.webp';

const GymMission = () => {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        
        <div className="flex flex-col space-y-8">
          {/* MISSION */}
          <div>
            <p className="text-red-500 font-bold uppercase tracking-widest">MISSION</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
              Unlock every member's full potential.
            </h2>
            <p className="text-gray-400 mt-3">
              Personalized training, expert guidance, and a supportive community to keep you consistent and growing.
            </p>
          </div>

          {/* VISION */}
          <div>
            <p className="text-red-500 font-bold uppercase tracking-widest">VISION</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
              Inspire fitness as a lifestyle.
            </h2>
            <p className="text-gray-400 mt-3">
              To be Qatar’s most trusted fitness community, setting the standard for quality, innovation, and results.
            </p>
          </div>
        </div>

        {/* Right Column: Image */}
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
