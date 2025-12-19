import React from 'react';
import Boyimg from '../assets/images/Boyimg.jpg';
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/about"); 
  };

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
         
          <div className="order-2 md:order-1 relative">
         <div className="absolute inset-0 flex flex-col justify-center items-start text-red-600 opacity-70 no-pain-animation">

              {['NO PAIN NO GAIN', 'NO PAIN NO GAIN', 'NO PAIN NO GAIN', 'NO PAIN NO GAIN', 'NO PAIN NO GAIN']
                .map((text, index) => (
                  <p 
                    key={index} 
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-widest leading-none"
                    style={{ marginLeft: `${index * 5}px` }}
                  >
                    {text}
                  </p>
              ))}
            </div>

            <div className="relative z-10">
              <img
                src={Boyimg} 
                alt="Man working out with a dumbbell"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right Side Content */}
          <div className="order-1 md:order-2">
            <span className="text-red-600 font-semibold uppercase tracking-wider mb-4 block">
              ABOUT QR GYM
            </span>
            
            <p className="text-gray-600 mb-8 leading-relaxed text-left">
              Welcome to <span className="font-semibold">QR Gym</span>, your ultimate destination for fitness, strength, and transformation. Located in the heart of <span className="font-semibold">Al Refaa, Doha – Qatar</span>, QR Gym is designed to inspire and empower individuals of all fitness levels. Our state-of-the-art facilities, expert trainers, and motivating environment make every workout an opportunity to become stronger — both physically and mentally. At QR Gym, we believe that fitness is not just about building your body, it’s about building your confidence, your energy, and your lifestyle.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Duis quis odio quis dui sagittis laoreet.',
                'Suspendisse tempus felis a libero mollis ultrices.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                'Suspendisse tempus felis a libero mollis ultrices..'
              ].map((item, index) => (
                <li key={index} className="flex items-start text-gray-600">
                  <svg className="shrink-0 h-6 w-6 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <button onClick={handleClick} className="bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition duration-300">
              Learn More
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
