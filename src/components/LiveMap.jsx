import React from "react";
const LiveMap = () => {
  return (
    <section className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
      <iframe
        title="Gym Location - Doha Qatar"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.528629362212!2d51.5444875752145!3d25.286437477653678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c550c8157759%3A0x241c0be1bbb42df!2sQR%20Gym!5e0!3m2!1sen!2s!4v1766213492563!5m2!1sen!2s"
        className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition duration-500"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

    </section>
  );
};
export default LiveMap;
