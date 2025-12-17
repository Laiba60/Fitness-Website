import React, { useEffect, useState } from "react";
import { FaHeadset, FaThumbsUp, FaDumbbell, FaAward } from "react-icons/fa";
import FeedbackBg from "../assets/images/feedbackbg.avif";

const stats = [
  { id: 1, icon: <FaHeadset className="text-red-600 text-4xl" />, number: 80, label: "Expert Trainer" },
  { id: 2, icon: <FaThumbsUp className="text-red-600 text-4xl" />, number: 120, label: "Client Feedback" },
  { id: 3, icon: <FaDumbbell className="text-red-600 text-4xl" />, number: 100, label: "Total Branches" },
  { id: 4, icon: <FaAward className="text-red-600 text-4xl" />, number: 70, label: "Award Winning" },
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
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: `url(${FeedbackBg})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
        {stats.map((stat, index) => (
          <div key={stat.id} className="flex flex-col items-center justify-center space-y-4">
            <div className="p-6 border-2 border-dotted border-white rounded-lg">
              {stat.icon}
            </div>
            <h2 className="text-4xl font-bold">{counters[index]}</h2>
            <p className="text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OverallFeedback;
