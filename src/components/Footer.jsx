import React from "react";
import { Link } from "react-router-dom";
import { FaBullseye } from "react-icons/fa";
import { RiFacebookFill, RiInstagramLine } from "react-icons/ri";
import LogoQRM from "../assets/images/LogoQRM.jpg";

const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-[#A58120] to-black text-white">
      
    
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        
      
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <img
            src={LogoQRM}
            alt="QR Gym Logo"
            className="w-12 sm:w-14 lg:w-16 h-auto mb-4 object-contain rounded-md"
          />
          <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
            Welcome to <span className="font-semibold">QR Gym</span>, your ultimate
            destination for fitness, strength, and transformation. Located in{" "}
            <span className="font-semibold">Al Refaa, Doha – Qatar</span>.
          </p>
        </div>

        {/* Contact */}
        <div className="text-center sm:text-left">
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <p className="text-gray-300 text-sm mb-4">
            Mail: contact@qrgym.com <br />
            Phone: 66474187
          </p>

          <h4 className="text-lg font-semibold mb-2">Address</h4>
          <p className="text-gray-300 text-sm">
            First floor, opposite National Museum – Al Riffa, Doha, Qatar
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center sm:text-left">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Our Services", path: "/services" },
              { label: "Contact Us", path: "/contact" },
            ].map((link, i) => (
              <li key={i}>
                <Link
                  to={link.path}
                  className="hover:text-[#A58120] transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours & Socials */}
        <div className="text-center sm:text-left">
          <h4 className="text-lg font-semibold mb-4">Working Hours</h4>
          <p className="text-gray-300 text-sm mb-6">
            Everyday: 6 am – 2 am
          </p>

          <h4 className="text-lg font-semibold mb-3">Our Socials</h4>
          <div className="flex justify-center sm:justify-start gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61583350382077&sk"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <RiFacebookFill size={20} />
            </a>
            <a
              href="https://www.instagram.com/qr_gym"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <RiInstagramLine size={20} />
            </a>
            <a
              href="https://www.tiktok.com/@qrgym0"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 transition text-sm"
            >
              TikTok
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-semibold">QR Gym</span>. All Rights Reserved.
          </p>

          <a href="https://mediasolutionsqa.com/" target="_blank" rel="noopener noreferrer">
            <div className="bg-[#A58120] p-2 rounded-full hover:scale-105 transition">
              <FaBullseye className="text-white h-6 w-6" />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
