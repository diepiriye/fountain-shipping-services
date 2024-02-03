import { useState } from 'react';
import Hero from './hero.jsx'
import Slider from './slider.jsx'
//import Navbar from './navbarr.jsx'
import About from  './about.jsx'
import Services from  './service.jsx'
import Footer from  './footer.jsx'

function App() {
  return (
    <div className="App">
      
      <Hero />
      <Slider />
      <About />
      <Services />
      <Footer />
    </div>
  )
}

export default App
