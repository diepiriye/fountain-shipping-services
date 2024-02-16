//import { useState } from 'react';
import Hero from './hero.jsx'
import Slider from './slider.jsx'
import Navbar from './navbarr.jsx'
import About from  './about.jsx'
import Services from  './service.jsx'
import Contact from  './contact.jsx'
import Form from  './form.jsx'
import Footer from  './footer.jsx'
import {useRef} from "react"

function App() {
    const homeRef = useRef();
    const aboutRef = useRef();
    const serviceRef = useRef();
    const contactRef = useRef();
  return (
    <div className="App" id="home" ref={homeRef}>
      <Navbar 
        homeRef={homeRef}
        aboutRef={aboutRef}
        serviceRef={serviceRef}
        contactRef={contactRef}
      />
      <Hero />
      <Slider />
      <About aboutRef={aboutRef}/>
      <Services serviceRef={serviceRef}/>
      <Contact contactRef={contactRef} />
      <Form />
      <Footer />
    </div>
  )
}

export default App
