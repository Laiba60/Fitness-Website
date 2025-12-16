import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutUS from '../components/AboutUS'
import GetLatestUpdateQRM from "../components/GetLatestUpdateQRM";
import Footer from "../components/Footer";
import GymMission from "../components/GymMission";
import Servicesintro from '../components/Servicesintro'
import ServiceDetail from "../components/ServiceDetail";
import Contact from "../components/Contact";
import OurProfessionalTrainer from "../components/OurProfessionalTrainer";
const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutUS/>
      <GymMission/>
      <Servicesintro/>
      <ServiceDetail/>
      <OurProfessionalTrainer/>
      <GetLatestUpdateQRM />
      <Footer />
      <Contact/>


    </div>
  );
};
export default Home;
