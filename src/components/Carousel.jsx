import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules'
import "swiper/css"
import "swiper/css/navigation"
// import "swiper/css/autoplay"

const Carousel = () => {
  return (
    <div>
      <div className="h-[600px] bg-white"> 
      <Swiper 
      loop={true}
       spaceBetween={0}
        className="h-[50%"
        navigation={true}
        modules ={[Navigation, Autoplay]}
        autoplay={{
            delay:4500
        }}
        >
      <SwiperSlide>
        <img src ={"../images/carousel_1.jpg" } alt={"nice"}/>
      </SwiperSlide>

      <SwiperSlide>
        <img src ={"../images/carousel_2.jpg" } alt={"nice"}/>
      </SwiperSlide>

      <SwiperSlide className = "bg-black">
        <video controls muted="muted"
        className= "object-cover"
        >
            <source src={"../images/carousel_vid.mp4"} type="video/mp4" />
        </video>
      </SwiperSlide>

      <SwiperSlide>
        <img src ={"../images/carousel_3.jpg" } alt={"nice"}/>
      </SwiperSlide>

      <SwiperSlide>
        <img src ={"../images/carousel_4.jpg" } alt={"nice"}/>
      </SwiperSlide>

      

      </Swiper>
      <div className= " h-[50%] bg-gradient-to-b from-stone-900"/>
      </div>
    </div>
  )
}

export default Carousel
