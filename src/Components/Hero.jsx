import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import carousel1 from "/assets/topview.jpg"
import carousel2 from "/assets/clg.jpg"
import AB from "../assets/College/AB.webp";  // Relative path from the file
import I3 from "../assets/College/I3.webp";
import Hospital from "../assets/College/Hospital.webp";
import bank2 from "../assets/College/Bank2.webp";
import Gate from "../assets/College/Gate.webp";
import sklm from "../assets/College/sklm.webp";
import Entrance from "../assets/College/Entrance.webp";
import Hostels from "../assets/College/Hostels.webp";
import Yogasala from "../assets/College/Yogasala.webp";
import library from "../assets/College/library2.webp";
import lib from "../assets/College/lib.webp";
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
      <SwiperSlide><img src={AB} className=' rounded-xl' /></SwiperSlide>
      <SwiperSlide><img src={I3} className='rounded-xl' /></SwiperSlide>
      <SwiperSlide><img src={lib} className='rounded-xl' /></SwiperSlide>
      <SwiperSlide><img src={Entrance} className='rounded-xl' /></SwiperSlide>
      <SwiperSlide><img src={Gate} className='rounded-xl' /></SwiperSlide>
      <SwiperSlide><img src={bank2} className='rounded-xl' /></SwiperSlide>
      <SwiperSlide><img src={Hostels} className='rounded-xl' /></SwiperSlide>
      <SwiperSlide><img src={Yogasala} className='rounded-xl' /></SwiperSlide>
      <SwiperSlide><img src={Hospital} className='rounded-xl' /></SwiperSlide>
      <SwiperSlide><img src={library} className='rounded-xl' /></SwiperSlide>
      <SwiperSlide><img src={sklm} className='rounded-xl' /></SwiperSlide>
    </Swiper>
  </div>
  )
}

export default Hero

