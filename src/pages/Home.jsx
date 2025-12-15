import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutUS from '../components/AboutUS'
import GetLatestUpdateQRM from "../components/GetLatestUpdateQRM";
import Footer from "../components/Footer";
import GymMission from "../components/GymMission";
import Servicesintro from '../components/Servicesintro'
const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutUS/>
      <GymMission/>
      <Servicesintro/>
      <GetLatestUpdateQRM />
      <Footer />
    </div>
  );
};
export default Home;
