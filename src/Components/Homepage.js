import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import How from './How'
import Pricing from './Pricing'
import Footer from './Footer'
function Homepage() {
  return (
    <div>
        <Navbar/>
        <Home/>
        <About/>
        <How/>
        <Pricing/>
        <Footer/>
    </div>
  )
}

export default Homepage
