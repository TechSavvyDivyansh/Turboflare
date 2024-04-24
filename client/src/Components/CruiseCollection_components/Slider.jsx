import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import fortuner from '../../assets/images/Cruise Collection/toyota-fortuner-yvujuqnic9e56nsg.jpg'
import jeep from '../../assets/images/Cruise Collection/jeep-truck-military-car-post-apocalypse-landscape-game-wallpaper-art-illustration-rust-photo.jpg'
import hatchback from '../../assets/images/Cruise Collection/image2.png'

let cars=[
    {
        "name":"ToyotaFortuner",
        "image":fortuner,
        "tagline":"Discover the cutting-edge SUVs defining this era",
        "type":"SUVS",
        "opacity":"100"
    },
    {
        "name":"JEEP",
        "image":jeep,
        "tagline":"Explore our diverse off-road lineup for ultimate adventure",
        "type":"OFF ROADERS",
        "opacity":"100"
    },
    {
      "name":"ToyotaFortuner",
      "image":hatchback,
      "tagline":"Explore our diverse off-road lineup for ultimate adventure",
      "type":"HATCHBACK",
      "opacity":"40"
  }
]


export default function Slider() {
  return (
    <div>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          speed:600,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
                {cars.map((car,i)=>{
                    return <SwiperSlide key={i}>
                        <div className="flex justify-center items-center">
                            <img src={car.image} alt="" className={`w-[100vw] h-[80vh] object-cover my-2 opacity-${car.opacity}`}/>
                            <div className="flex flex-col items-center translate-x-[25vw] -translate-y-[10vh] absolute">
                                <p className='text-white font-[600] text-4xl w-[30vw] text-center'>{car.tagline}</p>
                                <a href={`#${car.type}`}><button className='p-3 m-5 px-7 bg-[#F6C598] text-black'>EXPLORE {car.type}</button></a>
                            </div>
                        </div>
                    </SwiperSlide>
                })}
        </Swiper>
    </div>
  )
}
