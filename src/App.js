import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Food from './components/food/Food'
import Footer from './components/footer/Footer'

// import images

import FrenchFry from './assets/FrenchFry.jpg'
import pexels1 from './assets/pexels1.jpg'
import pexels2 from './assets/pexels2.jpg'
import sandwich from './assets/sandwich.jpg'
import hero from './assets/hero.jpg'


const App = () => {
  return (
    <>
    <Navbar />  
    <Hero />
    <Food bgImg1={FrenchFry} bgImg2={sandwich} bgImg3={hero} />
    <Footer />
    </>
  )
}

export default App
