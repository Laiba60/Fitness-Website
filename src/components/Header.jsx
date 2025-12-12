import React from "react";

import { CiStopwatch } from "react-icons/ci";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
       
        <div className="flex items-center space-x-4">
          <a href="#home">
            <a className="w-32 h-auto" />QRM
          </a>
        </div>

      
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-red-500 font-semibold">
            Home
          </a>
          <a href="#about" className="hover:text-red-500 font-semibold">
            About
          </a>
          
          <a href="#service" className="hover:text-red-500 font-semibold">
            Services
          </a>
         
          
          <a href="#contact" className="hover:text-red-500 font-semibold">
            Contact
          </a>
        </nav>

        
        <div className="md:hidden">
          <button className="focus:outline-none">
            <span className="block w-8 h-0.5 bg-white mb-1"></span>
            <span className="block w-8 h-0.5 bg-white mb-1"></span>
            <span className="block w-8 h-0.5 bg-white"></span>
          </button>
        </div>
      </div>

      {/* Sidebar / Mobile Menu */}
      <div className="md:hidden bg-gray-800 text-white p-6">
        <div className="flex flex-col space-y-4">
          <a href="#home" className="hover:text-red-500 font-semibold">Home</a>
          <a href="#about" className="hover:text-red-500 font-semibold">About</a>
          <a href="#mission" className="hover:text-red-500 font-semibold">Mission</a>
          <a href="#service" className="hover:text-red-500 font-semibold">Services</a>
          <a href="#classes" className="hover:text-red-500 font-semibold">Classes</a>
          <a href="#testimonial" className="hover:text-red-500 font-semibold">Testimonial</a>
          <a href="#price" className="hover:text-red-500 font-semibold">Pricing</a>
          <a href="#trainer" className="hover:text-red-500 font-semibold">Trainer</a>
          <a href="#news" className="hover:text-red-500 font-semibold">News</a>
          <a href="#contact" className="hover:text-red-500 font-semibold">Contact</a>
        </div>

        {/* Sidebar info */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center space-x-3">
            <CiStopwatch  alt="Clock" className="w-6 h-6" />
            <div>
              <p className="text-sm">Mon - Fri: 7 AM - 10 PM</p>
              <p className="text-sm">Sat - Sun: 7 AM - 2 PM</p>
            </div>
          </div>
          <p>📞 +01 234 567 8899</p>
          <p>✉ contact@fitzaro.com</p>
          <p>🏢 121 Manila St. Brookly, CA</p>
        </div>

        {/* Social icons */}
        <div className="mt-4 flex space-x-4 text-2xl">
          <a href="https://www.facebook.com/" className="hover:text-red-500">F</a>
          <a href="https://twitter.com/" className="hover:text-red-500">T</a>
          <a href="https://www.instagram.com/" className="hover:text-red-500">I</a>
          <a href="https://www.youtube.com/" className="hover:text-red-500">Y</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
