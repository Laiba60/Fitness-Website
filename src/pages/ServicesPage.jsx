import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ServiceDetail from '../components/ServiceDetail'
import GetLatestUpdateQRM from '../components/GetLatestUpdateQRM'
const Services = () => {
  return (
    <div>
      <Header/> 
      <ServiceDetail/> 
      <GetLatestUpdateQRM/>
      <Footer/>

    </div>
  )
}

export default Services