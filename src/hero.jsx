import heroPic1 from '/images/spa-slider22.webp'
import {useEffect} from "react"
import Aos from 'aos'
import 'aos/dist/aos.css'
/*** IMPORTING LAZYLOADER */
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'

export default function Hero(){
    useEffect(()=> {
        Aos.init();
    }, [])

    return(
        <div className="hero">
            <div className="hero-flex">
                <div className="hero-sub-flex" data-aos="fade-right">
                    <LazyLoadImage 
                    src={heroPic1} alt="" 
                    className='hero-picture' 
                    effect="blur"/>
                    <div className="hero-writeup">
                        <p>We pride ourselves on providing the best</p>
                        <p>transport & shipping services available </p>
                        <p>all over the world. </p>
                    </div>
                </div>
                <div className="logistic-flex" data-aos="fade-left" data-aos-duration="2000">
                    <h2>LOGISTICS</h2>
                    <h2>PAR EXCELLENCE</h2>
                </div>
            </div>

        </div>
    )
}