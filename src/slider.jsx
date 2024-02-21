import {useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import picture1 from '/images/slider2.jpeg';
import picture2 from '/images/slider3.jpeg'
/*** IMPORTING LAZYLOADER */
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'
/***IMPORT AOS  */
import Aos from 'aos'
import 'aos/dist/aos.css'


export default function Slider(){
    useEffect(()=> {
        Aos.init();
    }, [])

    return(
        <div className="swiper-containers">
            <Swiper
            modules={[Navigation, Pagination, Autoplay ]}
            style={{background: "black", 
                   borderTopRightRadius: "50px", borderTopLeftRadius: "50px"
            }}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 7000}}
            pagination={{ clickable: true }}
            >
            <SwiperSlide>
                {({ isActive }) => (
                    <div className={`picture-container ${isActive ? 'active' : 'not-active'}`}>
                        <LazyLoadImage src={picture1} alt="slider1" className="slide-pictures" effect="blur"/>
                        {isActive && (
                        <div className="picture-message">
                            <h1 data-aos="flip-left" data-aos-delay="300">We Provide Professional </h1>
                            <h1 data-aos="flip-left" data-aos-delay="700">Logistics Services in the Marine industry </h1>   
                        </div>
                        )}
                    </div>
                )}
            </SwiperSlide>
            <SwiperSlide>
                {({ isActive }) => (
                    <div className={`picture-container ${isActive ? 'active' : 'not-active'}`}>
                        <LazyLoadImage src={picture1} alt="slider1" className="slide-pictures" effect="blur"/>
                        {isActive && (
                        <div className="picture-message">
                            <h1 data-aos="flip-left" data-aos-delay="300">With Entergrity and Excellence</h1>
                        </div>
                        )}
                    </div>
                )}
            </SwiperSlide>
            <SwiperSlide>
                {({ isActive }) => (
                    <div className={`picture-container ${isActive ? 'active' : 'not-active'}`}>
                        <LazyLoadImage src={picture1} alt="slider1" className="slide-pictures" effect="blur"/>
                        {isActive && (
                        <div className="picture-message">
                            <h1 data-aos="flip-left" data-aos-delay="300">We are your Logistics Solutions</h1>
                        </div>
                        )}
                    </div>
                )}
            </SwiperSlide>
            </Swiper>
        </div>
    )
}
