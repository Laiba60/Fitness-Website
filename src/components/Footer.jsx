import React from "react";
import {
  RiFacebookFill,
  RiInstagramLine,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-black text-white relative">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">

        {/* Column 1: About & Image */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <img
            src="https://qrgym.online/wp-content/uploads/2025/11/0f2b9d21-7bea-41dc-b896-3d28afae81aa-e1763027190366.jpeg"
            alt="QR Gym"
            className="w-full sm:w-80 mb-4 rounded-lg object-cover"
          />
          <p className="text-gray-300 text-sm leading-relaxed">
            Welcome to <span className="font-semibold">QR Gym</span>, your ultimate destination for fitness, strength, and transformation. Located in <span className="font-semibold">Al Refaa, Doha – Qatar</span>, QR Gym inspires and empowers individuals of all fitness levels.
          </p>
        </div>

        {/* Column 2: Contact & Address */}
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

        {/* Column 3: Quick Links */}
        <div className="text-center sm:text-left">
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="text-gray-300 text-sm space-y-1">
            <li><a href="#" className="hover:text-red-500 transition">Home</a></li>
            <li><a href="#" className="hover:text-red-500 transition">About Us</a></li>
            <li><a href="#" className="hover:text-red-500 transition">Our Services</a></li>
            <li><a href="#" className="hover:text-red-500 transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 4: Working Hours & Socials */}
        <div className="text-center sm:text-left">
          <h4 className="text-lg font-semibold mb-2">Working Hours</h4>
          <p className="text-gray-300 text-sm mb-4">
            Everyday: 6 am to 2 am
          </p>

          <h4 className="text-lg font-semibold mb-2">Our Socials</h4>
          <div className="flex justify-center sm:justify-start gap-3">
            <a href="https://www.facebook.com/profile.php?id=61583350382077" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-600 transition p-2 rounded-full bg-white/5">
              <RiFacebookFill size={20} />
            </a>
            <a href="https://www.instagram.com/qr_gym" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-500 transition p-2 rounded-full bg-white/5">
              <RiInstagramLine size={20} />
            </a>
            <a href="https://www.tiktok.com/@qrgym0" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-black transition p-2 rounded-full bg-white/5">
              TikTok
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20 mt-12 pt-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} <span className="text-white font-semibold">QR Gym</span>. All Rights Reserved.
          </p>
          <a href="https://mediasolutionsqa.com/" className="mx-auto md:mx-0">
            <img src="/wp-content/uploads/2023/03/white-logo.png" alt="Media Solutions" className="h-8" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
