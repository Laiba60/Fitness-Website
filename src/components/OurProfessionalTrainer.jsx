import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Trainer1 from "../assets/images/Trainer1.jpg";
import Trainer2 from "../assets/images/trainer2.jpg";
import Trainer3 from "../assets/images/trainer3.jpg";

const trainers = [
  {
    name: "Ketty Smith",
    role: "Trainer",
    image: Trainer1,
  },
 
   
  {
    name: "Lipsa Smith",
    role: "Trainer",
    image: Trainer2,
  },
  {
    name: "Ali Shah",
    role: "Trainer",
    image: Trainer3,
  },
];

const OurProfessionalTrainer = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-red-500 font-semibold tracking-widest uppercase">
          Best Trainer
        </p>
        <h2 className="text-4xl font-bold mt-2 mb-14">
          Our Professional Trainer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="relative group bg-linear-to-b from-[#4b0000] to-black 
                         rounded-3xl px-6 pt-16 pb-8 text-white shadow-lg
                         transition-all duration-500
                         hover:scale-105 hover:shadow-2xl"
            >
              {/* Trainer Image */}
              <div className="absolute -top-14 left-1/2 -translate-x-1/2">
                <div
                  className="w-28 h-28 rounded-full border-4 border-black 
                             overflow-hidden bg-white
                             transition-transform duration-500
                             group-hover:scale-110"
                >
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <h3 className="mt-8 text-xl font-semibold text-red-500 transition-colors duration-300 group-hover:text-white">
                {trainer.name}
              </h3>

              <p className="text-sm mb-4">{trainer.role}</p>

              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                Consectetur morbi sed gravida diam. Sed in felis a pellentesque
                vel molestie cras vitae. Feugiat elit turpis sed viverra.
              </p>

              {/* Social Icons */}
              <div className="flex justify-center gap-4">
                {[FaFacebookF, FaTwitter, FaInstagram].map(
                  (Icon, i) => (
                    <span
                      key={i}
                      className="w-9 h-9 flex items-center justify-center 
                                 rounded-full border border-red-500 text-red-500
                                 transition-all duration-300
                                 hover:bg-red-500 hover:text-white
                                 hover:scale-110 cursor-pointer"
                    >
                      <Icon size={14} />
                    </span>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProfessionalTrainer;
