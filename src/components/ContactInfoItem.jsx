import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const ContactInfoItem = () => {
  const items = [
    {
      title: "Address",
      content: (
        <>
          First floor, directly opposite the National Museum – Al Riffa area, <br />
          Doha, Qatar
        </>
      ),
    },
    {
      title: "Contact",
      content: (
        <>
          Mail: <span className="text-white">contact@qrgym.com</span> <br />
          Phone: <span className="text-white">66474187</span>
        </>
      ),
    },
    {
      title: "Opening Hours",
      content: <>Everyday : 6 am to 2 am</>,
    },
    {
      title: "Our Socials",
      content: (
        <div className="flex space-x-4 mt-2 text-gray-300">
          <a
            href="https://www.facebook.com/profile.php?id=61583350382077&amp;sk"
            target="_blank"
            rel="noreferrer"
            className=" transform hover:scale-110 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/qr_gym?igsh=MmdyNzlobGtlbWE&amp;utm_source=qr"
            target="_blank"
            rel="noreferrer"
            className=" transform hover:scale-110 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@qrgym0?_r=1&amp;_t=ZS-9197GaYMHQ7"
            target="_blank"
            rel="noreferrer"
            className=" transform hover:scale-110 transition"
          >
            <FaTiktok />
          </a>
        </div>
      ),
    },
  ];

  return (
    <footer className="bg-linear-to-b from-[#A58120] to-black text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <div
  key={index}
  className="border border-gray-700 p-6 rounded-lg 
            bg-linear-to-b from-[#A58120] to-black
             text-white 
             transition-all duration-300 
            hover:from-[#A58120]
             hover:to-black 
             hover:shadow-lg"
>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300 leading-relaxed">{item.content}</p>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default ContactInfoItem;
