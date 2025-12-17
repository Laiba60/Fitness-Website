import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutUS from '../components/AboutUS'
import GetLatestUpdateQRM from "../components/GetLatestUpdateQRM";
import Footer from "../components/Footer";
import GymMission from "../components/GymMission";
import Servicesintro from '../components/Servicesintro'
import ServiceDetail from "../components/ServiceDetail";
import OurProfessionalTrainer from "../components/OurProfessionalTrainer";
import PersonalTrainerBooking from "../components/PersonalTrainerBooking";
import OverallFeedback from "../components/OverallFeedback";
const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutUS/>
      <GymMission/>
      <Servicesintro/>
      <ServiceDetail/>
      <PersonalTrainerBooking />
      <OurProfessionalTrainer/>
      <OverallFeedback/>
      <GetLatestUpdateQRM />
      <Footer />
     
    </div>
  );
};
export default Home;
