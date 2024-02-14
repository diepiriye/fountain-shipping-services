import { useState } from 'react';
import Hero from './hero.jsx'
import Slider from './slider.jsx'
import Navbar from './navbarr.jsx'
import About from  './about.jsx'
import Services from  './service.jsx'
import Contact from  './contact.jsx'
import Form from  './form.jsx'
import Footer from  './footer.jsx'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Slider />
      <About />
      <Services />
      <Contact />
      <Form />
      <Footer />
    </div>
  )
}

export default App
