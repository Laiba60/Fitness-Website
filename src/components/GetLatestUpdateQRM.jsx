import React from "react";

const GetLatestUpdateQRM = () => {
  return (
    <section className="py-9 bg-gray-100">
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-red-700 via-red-600 to-red-500 shadow-2xl rounded-2xl overflow-hidden">
        <div className="md:flex items-center">
          
          {/* Left Content */}
          <div className="p-18 md:w-2/3 text-white">
            <div className="flex items-center space-x-4 mb-6">
              {/* Paper airplane icon */}
              <svg
                className="h-10 w-10 text-white"
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
                <p className="mt-1 text-lg font-medium">
                  Fitness tips straight to your inbox
                </p>
              </div>
            </div>

            {/* Form */}
            <form className="flex flex-col sm:flex-row gap-4 sm:gap-0 mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 py-3 px-4 rounded-lg sm:rounded-r-none sm:rounded-l-lg shadow-md focus:outline-none focus:ring-2 focus:ring-white text-gray-800"
              />
              <button
                type="submit"
                className="flex items-center justify-center bg-white text-red-600 font-bold py-3 px-6 rounded-lg sm:rounded-l-none sm:rounded-r-lg hover:bg-gray-100 transition-colors duration-300 shadow-md"
              >
                <svg
                  className="h-6 w-6 "
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

          
          <div className="hidden md:block md:w-1/3 mr-6">
            <img
              src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=400&q=80"
              alt="Fitness update"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetLatestUpdateQRM;
