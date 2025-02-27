import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import carousel1 from "/assets/topview.jpg"
import carousel2 from "/assets/clg.jpg"

import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay  } from 'swiper/modules';

import './Hero.css';

const Hero = () => {
  return (
    <div className='p-[20px]  rounded-xl mt-[50px] md:mt-[80px]'>
    <Swiper
      pagination={{
        dynamicBullets: true,
        clickable:true
      }}
      navigation
      autoplay={{
        delay: 3000, 
        disableOnInteraction: false, 
      }}
      slidesPerView={1}

      loop={true}
      modules={[Navigation, Pagination, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide><img src={carousel1} className=' rounded-xl' /></SwiperSlide>
      <SwiperSlide><img src={carousel1} className='rounded-xl' /></SwiperSlide>
      <SwiperSlide><img src={carousel2} className='rounded-xl' /></SwiperSlide>
      <SwiperSlide><img src={carousel2} className='rounded-xl' /></SwiperSlide>
      <SwiperSlide><img src={carousel1} className='rounded-xl' /></SwiperSlide>
      <SwiperSlide><img src={carousel2} className='rounded-xl' /></SwiperSlide>
      <SwiperSlide><img src={carousel1} className='rounded-xl' /></SwiperSlide>
      <SwiperSlide><img src={carousel2} className='rounded-xl' /></SwiperSlide>
      <SwiperSlide><img src={carousel2} className='rounded-xl' /></SwiperSlide>
    </Swiper>
  </div>
  )
}

export default Hero

