import React from 'react'
import { Navbar } from '../Navbar/Navbar';
import { Header } from '../Header/Header';
import { IndivisualCategory } from '../IndivisualCategory/IndivisualCategory';
import { Section } from '../Section/Section';
import { Services } from '../Services/Services';
import { ServiceSlide } from '../ServiceSlide/ServiceSlide';
import { Slideshow } from '../Slideshow/Slideshow';


export const Homepage = () => {
  return (
    <div>
        <Header />
        <Navbar />
        <Section />
        <Slideshow />
        <Services />
        <ServiceSlide />
        <ServiceSlide />
        <ServiceSlide />
        <IndivisualCategory />
        <IndivisualCategory />
    </div>
  )
}
