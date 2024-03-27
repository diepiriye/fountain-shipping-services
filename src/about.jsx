import Picture from '/images/slider3.webp'
import {useEffect} from "react"
/*** IMPORTING AOS  ****/
import Aos from 'aos'
import 'aos/dist/aos.css'
/*** IMPORTING LAZYLOADER */
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'

export default function About(props){
    const aboutRef = props.aboutRef;

    useEffect(()=> {
        Aos.init();
    }, [])

    return(
        <div className="about" id="about" ref={aboutRef}>
            <div className="about-us-heading">
                <h2>About Us</h2>
            </div>
            <div className="about-us-details">
                <div className="about-image" data-aos="zoom-in" data-aos-duration="2000">
                    <LazyLoadImage src={Picture} className="about-pic" effect="blur"/>
                </div>
                <div className="about-writeup" data-aos="zoom-in-up">
                    <p>Fountain Shipping Services Limited is an indigenous shipping company that provides a wide range of shipping,</p>
                    <p>logistics and marine services in Nigerian ports and terminals. Incorporated in 2009, Fountain Shipping Services</p>
                    <p className="about-space">Limited offers top-notch services in the oil and gas industry.</p>
                    <p>We are fully positioned to meet and exceed customers’ needs for quality and satisfaction be it onshore or offshore Shipping services.</p>
                    <p>We partner with globally recognized vessel owners and oil traders navigating with-in West Africa’s territorial waters, our</p>
                    <p className="about-space">experienced personnel effectively care for our operations to ensure efficiency, quality and professionalism.</p>
                    <p>Fountain Shipping Services is duly registered with relevant government agencies involved with shipping operations.</p>
                    <p>Our offices are strategically located within Nigeria to meet our customers’ needs.</p>
                    <p className="about-space">Fountain Shipping Services Limited has a certified ISO 45001:2018 Occupational Health and Safety management system. </p>
                    <p>Our safety policy is a commitment to the implementation of ISO 45001:2018 which enables </p>
                    <p>us as an organization to provide a safe and healthy work environment. </p>
                    <p>Furthermore, Fountain Shipping Services has a certified ISO 9001:2015 Quality Management System(Q.M.S.).</p>
                    <p>The quality of our Services and Product conforms to industry standard and ISO requirements.</p>
                </div>
            </div>
            <div className="about-core">
                <div className="mission" data-aos="zoom-in">
                    <i className="fa-solid fa-rocket"></i>
                    <h2>Our mission</h2>
                    <p>To provide a world class range of professional quality services in the marine industry to all our clients.</p>
                </div>
                <div className="vision" data-aos="zoom-in">
                    <i className="fa-regular fa-lightbulb"></i>
                    <h2>Our Vision</h2>
                    <p>To be the foremost shipping company in Africa that is most admired for it's excellence, efficiency and professionalism.</p>
                </div>
                <div className="values" data-aos="zoom-in">
                    <i className="fa-regular fa-gem"></i>
                    <h2>Core Values </h2>
                    <p>We posses and have displayed varied degree of values which our clients admire viz: Professionalism, Excellence, Integrity, Commitment & Dedication.</p>
                </div>
                
            </div>
            
        </div>
    )
}