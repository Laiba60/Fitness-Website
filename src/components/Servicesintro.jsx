import React from "react";
import serviceintro from "../assets/images/serviceintro.webp";

const Serviceintro = () => {
  return (
    <section className="relative bg-gray-100 overflow-hidden py-20">
      <div className="max-w-7xl mx-auto flex items-center relative">
        
        <div className="relative z-10 bg-white shadow-xl rounded-lg px-10 py-16 w-full lg:w-1/2">
          
          <svg
            className="hidden lg:block absolute top-0 right-0 h-full w-24 text-white translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <span className="text-sm font-semibold uppercase tracking-wide text-red-600">
            OUR SERVICES
          </span>

          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Solutions for moving{" "}
            <span className="text-red-600">better & healthier</span>
          </h1>

          <p className="mt-6 text-gray-500 text-lg max-w-xl">
            Sed enim purus diam faucibus amet a dolor sed. Orci porttitor fames sed
            ullamcorper et nunc dui. Sit eget morbi lorem non arcu faucibus cras.
            Ipsum sapien pretium sollicitudin et tortor.
          </p>

          <div className="mt-8">
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 text-white bg-red-600 hover:bg-red-700 rounded-md text-base font-medium transition"
            >
              Book Appointment
            </a>
          </div>
        </div>

        
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[45%]">
          <div className="overflow-hidden rounded-xl shadow-2xl">
            <img
              src={serviceintro}
              alt="Person working out"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Serviceintro;
