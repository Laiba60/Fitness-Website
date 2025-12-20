import React, { useEffect, useState } from "react";
import { FaHeadset, FaThumbsUp, FaDumbbell, FaAward } from "react-icons/fa";
import FeedbackBg from "../assets/images/feedbackbg.avif";
const stats = [
  { id: 1, icon: <FaHeadset className="text-white text-4xl sm:text-5xl" />, number: 80, label: "Expert Trainer" },
  { id: 2, icon: <FaThumbsUp className="text-white text-4xl sm:text-5xl" />, number: 120, label: "Client Feedback" },
  { id: 3, icon: <FaDumbbell className="text-white text-4xl sm:text-5xl" />, number: 100, label: "Total Branches" },
  { id: 4, icon: <FaAward className="text-white text-4xl sm:text-5xl" />, number: 70, label: "Award Winning" },
];
const OverallFeedback = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));
  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCounters((prev) => {
          const newCounters = [...prev];
          if (newCounters[index] < stat.number) {
            newCounters[index] += 1;
          }
          return newCounters;
        });
      }, 20);
    });
    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section
      className="relative bg-cover bg-center py-16 sm:py-20 lg:py-24"
      style={{ backgroundImage: `url(${FeedbackBg})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-12">
          Our Achievements
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 text-center text-white">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="flex flex-col items-center justify-center space-y-4 p-6 sm:p-8 border-2 border-dotted border-white rounded-xl sm:rounded-2xl bg-linear-to-b from-[#A58120] to-black backdrop-blur-sm"
            >
              <div className="flex items-center justify-center p-4 rounded-full bg-white/10">
                {stat.icon}
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold">{counters[index]}</h2>
              <p className="text-lg sm:text-xl">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OverallFeedback;
