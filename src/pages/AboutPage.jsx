import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutBanner from '../components/AboutBanner'
import AboutUs from '../components/AboutUS'
import GetLatestUpdateQRM from '../components/GetLatestUpdateQRM'
const AboutPage = () => {
  return (
    <div>
      <Header/>
      <AboutBanner/>
      <AboutUs/>
      <GetLatestUpdateQRM/>
      <Footer/>
    </div>
  )
}
export default AboutPage