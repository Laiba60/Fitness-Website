import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutBanner from '../components/AboutBanner'
import AboutUs from '../components/AboutUS'
import GymMission from '../components/GymMission'
import GetLatestUpdateQRM from '../components/GetLatestUpdateQRM'
const AboutPage = () => {
  return (
    <div>
      <Header/>
      <AboutBanner/>
      <AboutUs/>
      <GymMission/>

      <GetLatestUpdateQRM/>
      <Footer/>
    </div>
  )
}
export default AboutPage