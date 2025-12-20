import React from "react";
import service3 from "../assets/images/service3.avif";
import yogaimg from "../assets/images/yogaimg.webp";
import nutritionimg from "../assets/images/nutritionimg.avif";
import groupimage from "../assets/images/groupimage.avif";
const ServiceDetail = () => {
  const services = [
    {
      imageSrc: "https://qrgym.online/wp-content/uploads/2025/11/10-500x600.jpg",
      
      description: "Fully Equipped Gym – Modern strength, cardio, and functional training equipment"
    },
    {
      imageSrc: "https://qrgym.online/wp-content/uploads/2025/11/8-1-500x600.jpg",
      
      description: "Personal Training – Customized programs with certified trainers."
    },
    {
      imageSrc: "https://qrgym.online/wp-content/uploads/2025/11/9-500x600.jpg",

      description: "Group Classes – From HIIT to Zumba and Yoga, find your favorite way to move."
    },
    {
      imageSrc: "https://qrgym.online/wp-content/uploads/2025/11/12-500x600.jpg",
    
      description: "Nutrition & Fitness Consultation – Get expert guidance tailored to your goals."
    },
    {
      imageSrc: "https://qrgym.online/wp-content/uploads/2025/11/11-500x600.jpg",
      
      description: "Men’s & Women’s Sections – Separate training areas for comfort and privacy."
    },
    {
      imageSrc: "https://qrgym.online/wp-content/uploads/2025/11/4-500x600.jpg",
      
      description: "Locker Rooms & Showers – Clean, safe, and convenient facilities for every member."
    }
  ];
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#A58120] font-semibold uppercase">Our Services</span>
          <h2 className="mt-3 text-4xl font-extrabold text-[#A58120]">Transform Your Body & Mind</h2>
          <p className="mt-4 text-[#A58120] max-w-2xl mx-auto">
            Professional fitness services designed to help you stay strong, healthy, and confident.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="relative h-80 overflow-hidden rounded-xl group shadow-lg">
              <img
                src={service.imageSrc}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                
               <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white leading-relaxed">
               {service.description}
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
