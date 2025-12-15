import React from "react";
import service3 from "../assets/images/service3.avif";
import yogaimg from "../assets/images/yogaimg.webp";
import nutritionimg from "../assets/images/nutritionimg.avif";

const ServiceDetail = () => {
  const services = [
    {
      imageSrc: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=800&q=80",
      title: "Strength Training",
      description: "Build muscle, increase power, and improve overall strength."
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
      title: "Cardio Fitness",
      description: "Boost stamina and heart health with guided cardio sessions."
    },
    {
      imageSrc: service3,
      title: "Personal Coaching",
      description: "One-on-one training tailored to your fitness goals."
    },
    {
      imageSrc: yogaimg,
      title: "Yoga & Flexibility",
      description: "Enhance flexibility, balance, and inner peace with guided yoga."
    },
    {
      imageSrc: nutritionimg,
      title: "Nutrition Guidance",
      description: "Get personalized meal plans to fuel your workouts and recovery."
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1584467735876-33822a1f4dbd?auto=format&fit=crop&w=800&q=80",
      title: "Group Classes",
      description: "Stay motivated and engaged with high-energy group sessions."
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-red-600 font-semibold uppercase">Our Services</span>
          <h2 className="mt-3 text-4xl font-extrabold text-gray-900">Transform Your Body & Mind</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Professional fitness services designed to help you stay strong, healthy, and confident.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="relative h-80 overflow-hidden rounded-xl group shadow-lg">
              {/* Image */}
              <img
                src={service.imageSrc}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>
              {/* Text */}
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
