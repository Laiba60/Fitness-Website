import React from "react";
import service3 from "../assets/images/service3.avif";
import yogaimg from "../assets/images/yogaimg.webp";
import nutritionimg from "../assets/images/nutritionimg.avif";
import groupimage from "../assets/images/groupimage.avif";
const ServiceDetail = () => {
  const services = [
    {
      imageSrc: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=800&q=80",
      
      description: "Fully Equipped Gym – Modern strength, cardio, and functional training equipment"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
      
      description: "Personal Training – Customized programs with certified trainers."
    },
    {
      imageSrc: service3,

      description: "Group Classes – From HIIT to Zumba and Yoga, find your favorite way to move."
    },
    {
      imageSrc: yogaimg,
    
      description: "Nutrition & Fitness Consultation – Get expert guidance tailored to your goals."
    },
    {
      imageSrc: nutritionimg,
      
      description: "Men’s & Women’s Sections – Separate training areas for comfort and privacy."
    },
    {
      imageSrc: groupimage,
      
      description: "Locker Rooms & Showers – Clean, safe, and convenient facilities for every member."
    }
  ];
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-red-600 font-semibold uppercase">Our Services</span>
          <h2 className="mt-3 text-4xl font-extrabold text-gray-900">Transform Your Body & Mind</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
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
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
