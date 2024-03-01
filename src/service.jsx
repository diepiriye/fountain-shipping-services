import Picture from '/images/spa-slider22.webp'
import SlopRemoval from '/images/slop removal.jpeg'
import Cash from '/images/cash-to-master.webp'
import Chandler from '/images/ship-chandlers.jpeg'
import ShipMain from '/images/ship-main.jpeg'
import Freight from '/images/freight.svg'
import ShipToShip from '/images/ship-to-ship.jpeg'
import TugBoat from '/images/tug.jpeg'
import Intel from '/images/port.jpeg'
import {useEffect} from "react"
import Aos from 'aos'
import 'aos/dist/aos.css'
/*** IMPORTING LAZYLOADER */
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'

export default function Services(props){
    const serviceRef = props.serviceRef;

    useEffect(()=> {
        Aos.init();
    }, [])
    return(
        <div className="services-container" id="service" ref={serviceRef}>
            <div className="service-tittle" data-aos="zoom-in">
                <h2>Our Services</h2>
            </div>
            <div className="services">
                <div className="service-image" data-aos="flip-up">
                    <LazyLoadImage src={ShipMain} alt="" className="service-pic" effect="blur"/>
                </div>
                <div className="service-writeup" data-aos="fade-left">
                   <h2>Ship Management</h2> 
                   <p>We have the professional competence in handling and managing vessels on-behalf of our principals and our own vessels.</p>
                   <p>With skilled hands both on shore and on board, we are committed to deliver the best ship management experience.</p>
                </div>
            </div>
            <div className="services">
                <div className="service-writeup" data-aos="fade-right">
                   <h2>Freight Management</h2> 
                   <p>Our freight team is very experienced in handling any shape, size and weight of cargo to and from any where in the world.</p>
                   <p>Our corverage extends to 180 countries.</p>
                </div>
                <div className="service-image" data-aos="flip-up">
                <LazyLoadImage src={Freight} alt="" className="service-pic" effect="blur" width="100%"/>
                </div>
            </div>
            <div className="services">
                <div className="service-image" data-aos="flip-up">
                <LazyLoadImage src={TugBoat} alt="" className="service-pic" effect="blur"/>
                </div>
                <div className="service-writeup" data-aos="fade-left">
                   <h2>Maritime Equipment Leasing</h2> 
                   <p>We lease out maritime equipment like fenders, hoses, tug boats, service boats, etc. to our esteemed clients</p>
                </div>
            </div>
            <div className="services">
                <div className="service-writeup" data-aos="fade-right">
                   <h2>Ship Chandelling</h2> 
                   <p>In todays shipping business, you need a trusted ship chandler to provide you with the provisions and supplies you need to keep your vessel on course.</p>
                   <p>We understand that short lead times, affordable and dependable service delivery are crucial for your vessel, and your crew. We have a full range of competitively priced services.</p>
                </div>
                <div className="service-image" data-aos="flip-up">
                <img src={Chandler} alt="" className="service-pic" />
                </div>
            </div>
            <div className="services">
                <div className="service-image" data-aos="flip-up">
                    <img src={Cash} alt="" className="service-pic" />
                </div>
                <div className="service-writeup" data-aos="fade-left">
                   <h2>Cash TO Master</h2> 
                   <p>We represent ship owners in supplying all ship masters' needs especially transferring cash to master.</p>
                </div>
            </div>
            <div className="services">
                <div className="service-writeup" data-aos="fade-right">
                   <h2>Shipping and Market Intelligence</h2> 
                   <p>Fountain Shipping Services assists her clients in gathering relevant shipping information within the ports to enhance effective decision making.</p>
                </div>
                <div className="service-image" data-aos="flip-up">
                    <img src={Intel} alt="" className="service-pic" />
                </div>
            </div>
            <div className="services">
                <div className="service-image" data-aos="flip-up">
                    <img src={ShipToShip} alt="" className="service-pic" />
                </div>
                <div className="service-writeup" data-aos="fade-left">
                   <h2>S.T.S Operation</h2> 
                   <p>We provide logistics and maritime equipment for safe ship-to-ship cargo transfer.</p>
                </div>
            </div>
            <div className="services">
                <div className="service-writeup" data-aos="fade-right">
                   <h2>Slops Removal</h2> 
                   <p>Fountain Shipping Services has the professional competence in ship management, slops and freight.</p>
                </div>
                <div className="service-image" data-aos="flip-up">
                    <img src={SlopRemoval} alt="" className="service-pic" />
                </div>
            </div>
        </div>
    )
}