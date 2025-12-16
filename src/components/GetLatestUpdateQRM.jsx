import React from "react";

const GetLatestUpdateQRM = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-5xl mx-auto bg-gradient-to-b from-[#4b0000] to-black shadow-2xl rounded-3xl overflow-hidden">
        <div className="md:flex items-stretch">

          {/* Left Content */}
          <div className="p-10 md:w-2/3 text-white">
            <div className="flex items-start gap-4 mb-6">
              <svg
                className="h-10 w-10 flex-shrink-0 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>

              <div>
                <h2 className="text-3xl font-bold leading-tight">
                  Get the Latest Updates
                </h2>
                <p className="mt-1 text-gray-200 text-lg">
                  Fitness tips straight to your inbox
                </p>
              </div>
            </div>

            {/* Form */}
            <form className="flex flex-col sm:flex-row mt-6">
            <input
  type="email"
  placeholder="Enter your email"
  className="
    flex-1 py-3 px-4
    rounded-xl sm:rounded-r-none
    bg-transparent
    border border-white
    text-white placeholder-gray-300
    shadow-md
    focus:outline-none
    focus:ring-2 focus:ring-red-500
    focus:border-red-500
    transition
  "
/>


              <button
                type="submit"
                className="mt-3 sm:mt-0 sm:ml-0 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl sm:rounded-l-none transition shadow-md flex items-center justify-center"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </form>
          </div>

         
          <div className="hidden md:block md:w-1/3">
            <img
              src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=400&q=80"
              alt="Fitness update"
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetLatestUpdateQRM;
