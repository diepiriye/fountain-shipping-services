import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import picture1 from '/images/slider2.jpeg';
import picture2 from '/images/slider3.jpeg'
import picture3 from '/images/spa-slider22.webp'


export default function Slider(){
    return(
        <Swiper
        modules={[Navigation, Pagination, Autoplay ]}
        style={{background: "white", marginRight: "100px", marginLeft: "100px",
                marginTop: "50px", borderTopRightRadius: "50px", borderTopLeftRadius: "50px"

        }}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 7000}}
        pagination={{ clickable: true }}
        >
          <SwiperSlide>
                <div className="picture-container">
                    <img src={picture1} alt="slider1" className="slide-pictures" />
                    <div className="picture-message">
                        <h1>The Easemobile Spa </h1>
                        <p>A mobile-Spa that creates magical</p>
                    </div>
                   
                </div>
          </SwiperSlide>
          <SwiperSlide>
                <div className="picture-container">
                    <img src={picture2} alt="slider1" className="slide-pictures" />
                    <div className="picture-message">
                        <h1>The Easemobile Spa </h1>
                        <p>A mobile-Spa that creates magical</p>
                    </div>
                   
                </div>
          </SwiperSlide>
          <SwiperSlide>
                <div className="picture-container">
                    <img src={picture3} alt="slider1" className="slide-pictures" />
                    <div className="picture-message">
                        <h1>The Easemobile Spa </h1>
                        <p>A mobile-Spa that creates magical</p>
                    </div>
                    
                </div>
          </SwiperSlide>
        </Swiper>
    )
}
