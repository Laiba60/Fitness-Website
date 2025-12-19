import React from "react";
import { Link } from "react-router-dom";
import { FaBullseye } from "react-icons/fa";
import { RiFacebookFill, RiInstagramLine } from "react-icons/ri";
import  LogoQRM from "../assets/images/LogoQRM.jpg";
const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-[#4b0000] to-black text-white relative">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
         <img
        src={LogoQRM}
        alt="QR Gym Logo"
        className="
          w-12
        sm:w-14
        md:w-16
        lg:w-20
        h-auto
        mb-2
        object-contain
        rounded-md"
  
          />



          <p className="text-gray-300 text-sm leading-relaxed">
            Welcome to <span className="font-semibold">QR Gym</span>, your ultimate destination for fitness, strength, and transformation. Located in <span className="font-semibold">Al Refaa, Doha – Qatar</span>, QR Gym inspires and empowers individuals of all fitness levels.
          </p>
        </div>
        <div className="text-center sm:text-left">
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <p className="text-gray-300 text-sm mb-4">
            Mail: contact@qrgym.com <br />
            Phone: 66474187
          </p>
          <h4 className="text-lg font-semibold mb-2">Address</h4>
          <p className="text-gray-300 text-sm">
            First floor, directly opposite the National Museum – Al Riffa area, Doha, Qatar
          </p>
        </div>
        <div className="text-center sm:text-left">
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="text-gray-300 text-sm space-y-1">
            <li><Link to="/" className="hover:text-red-500 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-red-500 transition">About Us</Link></li>
            <li><Link to="/services" className="hover:text-red-500 transition">Our Services</Link></li>
            <li><Link to="/contact" className="hover:text-red-500 transition">Contact Us</Link></li>
          </ul>
        </div>
        <div className="text-center sm:text-left">
          <h4 className="text-lg font-semibold mb-2">Working Hours</h4>
          <p className="text-gray-300 text-sm mb-4">
            Everyday: 6 am to 2 am
          </p>
          <h4 className="text-lg font-semibold mb-2">Our Socials</h4>
          <div className="flex justify-center sm:justify-start gap-3">
            <a href="https://www.facebook.com/profile.php?id=61583350382077&amp;sk" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-600 transition p-2 rounded-full bg-white/5">
              <RiFacebookFill size={20} />
            </a>
            <a href="https://www.instagram.com/qr_gym?igsh=MmdyNzlobGtlbWE&amp;utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-500 transition p-2 rounded-full bg-white/5">
              <RiInstagramLine size={20} />
            </a>
            <a href="https://www.tiktok.com/@qrgym0?_r=1&amp;_t=ZS-9197GaYMHQ7" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition p-2 rounded-full bg-white/5">
              TikTok
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 mt-12 pt-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} <span className="text-white font-semibold">QR Gym</span>. All Rights Reserved.
          </p>
          <a href="https://mediasolutionsqa.com/" className="mx-auto md:mx-0">
           <div className="bg-red-600 p-2 rounded flex items-center justify-center">
        <FaBullseye className="text-white h-6 w-6" />
       </div>
        </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
