import React from "react";

const ContactUs = () => {
  return (
    <section className="relative bg-black text-white">
      
     
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1579758629938-03607ccdbaba')",
        }}
      ></div>

     
      <div className="absolute inset-0 bg-black/80"></div>

     
      <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="text-red-500 uppercase tracking-widest font-semibold">
            Our Statics
          </span>

          <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold leading-tight">
            Every day is a chance <br /> to become better.
          </h1>

          <p className="mt-6 text-gray-300 max-w-xl leading-relaxed">
            Quis bibendum mi auctor lectus arcu, sapien cursus pharetra.
            Facilisis ut dignissim volutpat a sit quis pharetra habitasse nec.
            Ut faucibus habitant magna sed morbi lectus suscipit in enim.
          </p>

          {/* PROGRESS BARS */}
          <div className="mt-10 space-y-6">

            {/* BAR 1 */}
            <div>
              <div className="flex justify-between mb-2 text-sm font-semibold">
                <span>Client Satisfaction</span>
                <span>90%</span>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded">
                <div className="h-2 bg-red-600 rounded w-[90%]"></div>
              </div>
            </div>

            {/* BAR 2 */}
            <div>
              <div className="flex justify-between mb-2 text-sm font-semibold">
                <span>Support Customer</span>
                <span>80%</span>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded">
                <div className="h-2 bg-red-600 rounded w-[80%]"></div>
              </div>
            </div>

          </div>
        </div>

       
        <div className="bg-white/10 backdrop-blur-xl p-10 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Contact Us
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded bg-white text-black focus:outline-none"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 rounded bg-white text-black focus:outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded bg-white text-black focus:outline-none"
            />

            <textarea
              rows="4"
              placeholder="Message..."
              className="w-full p-3 rounded bg-white text-black focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 py-3 rounded text-white font-bold transition"
            >
              SUBMIT NOW
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;
