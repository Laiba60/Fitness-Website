import React from 'react'
import Contact from '../components/Contact'
import ContactInfoItem from '../components/ContactInfoItem'
import Footer from '../components/Footer'
import ContactBanner from '../components/ContactBanner'
import LiveMap from '../components/LiveMap'
const ContactPage = () => {
  return (
   <div className="">
     <ContactBanner/>
    <Contact/>
   <LiveMap/>
    <ContactInfoItem/>
    <Footer/>
   </div>
  )
}
export default ContactPage