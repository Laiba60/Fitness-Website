import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [open, setOpen] = useState(false);
  const menuItems = [
    "HOME",
    "ABOUT",
    "SERVICES",
    "CONTACT US",
  ];
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-80 text-white backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide cursor-pointer bg-white text-black">
          FITZARO
        </h1>
        <nav className="hidden lg:flex space-x-8 text-lg font-semibold">
          {menuItems.map((item) => (
            <a key={item} className="hover:text-red-500 cursor-pointer">
              {item}
            </a>
          ))}
        </nav>
        <button
          className="lg:hidden text-3xl focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>
      <div
        className={`lg:hidden bg-black bg-opacity-90 backdrop-blur-md py-6 px-6 space-y-4 text-lg font-semibold transform transition-all duration-300 ease-in-out ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {menuItems.map((item) => (
          <a key={item} className="block hover:text-red-500 cursor-pointer">
            {item}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
