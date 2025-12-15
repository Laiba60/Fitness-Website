import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutUS from '../components/AboutUS'
import GetLatestUpdateQRM from "../components/GetLatestUpdateQRM";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutUS/>
      <GetLatestUpdateQRM />
      <Footer />
    </div>
  );
};

export default Home;
