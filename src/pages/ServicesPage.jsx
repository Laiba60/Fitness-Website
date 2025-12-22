import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ServiceDetail from '../components/ServiceDetail'
import GetLatestUpdateQRM from '../components/GetLatestUpdateQRM'
import ServicesBanner from '../components/ServicesBanner'
const Services = () => {
  return (
    <div>
      <Header/> 
      <ServicesBanner/>
      <ServiceDetail/> 
      <GetLatestUpdateQRM/>
      <Footer/>

    </div>
  )
}

export default Services