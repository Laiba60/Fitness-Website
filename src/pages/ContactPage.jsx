import React from 'react'
import Contact from '../components/Contact'
import ContactInfoItem from '../components/ContactInfoItem'
import Footer from '../components/Footer'
import ContactBanner from '../components/ContactBanner'
const ContactPage = () => {
  return (
   <div className="">
     <ContactBanner/>
    <Contact/>
   
    <ContactInfoItem/>
    <Footer/>
   </div>
  )
}
export default ContactPage