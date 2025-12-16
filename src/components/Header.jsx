import React, { useState, useEffect } from "react";
import { CiStopwatch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "About", "Services", "Contact"];

  const getLinkPath = (item) => {
    switch (item) {
      case "Home":
        return "/";
      case "About":
        return "/about";
      case "Services":
        return "/services";
      case "Contact":
        return "/contact";
      default:
        return "/";
    }
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 backdrop-blur-sm
        ${
          scrolled
            ? "bg-white text-black shadow-md"
            : "bg-linear-to-b from-[#4b0000] to-black text-white"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
        <Link
          to="/"
          className={`text-2xl font-bold transition-colors duration-300 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          QRM
        </Link>

        <nav className="hidden md:flex ml-auto space-x-8 font-semibold">
          {navLinks.map((item) => (
            <Link
              key={item}
              to={getLinkPath(item)}
              className="hover:text-red-500 transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden ml-auto p-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-6 h-0.5 bg-current mb-1"></span>
          <span className="block w-6 h-0.5 bg-current mb-1"></span>
          <span className="block w-6 h-0.5 bg-current"></span>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white text-black px-6 py-6 space-y-4 transition-all duration-300 ease-in-out">
          {navLinks.map((item) => (
            <Link
              key={item}
              to={getLinkPath(item)}
              className="block font-semibold hover:text-red-500"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}

          <div className="pt-4 border-t">
            <div className="flex items-center gap-3 text-sm">
              <CiStopwatch className="w-5 h-5" />
              <span>Mon – Fri: 7 AM – 10 PM</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
