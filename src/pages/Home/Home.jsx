import React from 'react'
import Header from '../../components/home/Header'
import Slider from '../../components/home/Slider'
import About from "../../components/home/about"
import Services from '../../components/home/Services'
import HowItWorks from '../../components/home/HowItWorks'
import AutoSlider from '../../components/home/AutoSlider'
import WhyChooseUs from '../../components/home/WhyChoooseUs'
import TestimonialSlider from '../../components/home/TestimonialSlider'
import Footer from '../../components/home/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <Slider/>
      <About/> 
      <Services/>
      <HowItWorks/>
      <AutoSlider/>
      <WhyChooseUs/>
      <TestimonialSlider/>
      <Footer/>
    </div>
  )
}

export default Home
