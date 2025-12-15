import React from 'react';

const GetLatestUpdateQRM = () => {
  return (
    <div className="
      max-w-md mx-auto
      bg-gradient-to-r from-red-800 to-white
      shadow-xl rounded-xl overflow-hidden md:max-w-2xl
    ">
      <div className="md:flex">
        <div className="p-8 w-full">
          <div className="flex items-center space-x-4 mb-4">
            {/* Paper airplane icon */}
            <div className="shrink-0">
              <svg
                className="h-8 w-8 text-white"
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
            </div>

            <div>
              <div className="text-2xl font-bold text-white">
                Get Latest Update Of
              </div>
              <div className="text-2xl font-bold text-white">
                Fitness Tips
              </div>
            </div>
          </div>

          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Email Address"
              className="
                flex-1 w-full py-2 px-4
                bg-white text-gray-700 placeholder-gray-400
                shadow-md rounded-l-lg
                focus:outline-none focus:ring-2 focus:ring-red-600
              "
            />

            <button
              type="submit"
              className="
                shrink-0 bg-red-600 hover:bg-red-700
                text-white font-bold py-2 px-4
                rounded-r-lg
                focus:outline-none focus:ring-2 focus:ring-red-600
              "
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
      </div>
    </div>
  );
};

export default GetLatestUpdateQRM;
