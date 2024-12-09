import React from 'react'
import HomeTop from '../components/Home'
import FAQComponent from '../components/faqs'
import Footer from '../components/footer'
import ClubOrbit from '../components/ClubOrbit'
import Carousel from '../components/CarouselPage'
import Navbar from '../components/Navbar'
const Home = () => {
  return (
    <>
    <Navbar/>
    <Carousel/>
      <HomeTop />
      <ClubOrbit />
      <FAQComponent /> 
      <Footer />
    </>
  )
}

export default Home
