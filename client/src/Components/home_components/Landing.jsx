import React from 'react'
import car from '../../assets/images/home/homepageCarHero.png'

export default function Landing() {
  return (
    <div className='px-5 py-10 md:p-12 flex flex-col items-center'>
        
        {/* Section 1-> Catchy text + car image */}
        <div className="upper-section flex flex-col md:flex-row justify-between">
                <div className="text md:w-[50vw] md:flex md:flex-col md:items-center md:justify-center">
                    <h1 className='text-[#F6C598] text-2xl md:text-2xl lg:text-3xl md:text-center xl:text-6xl'>Accelerate Your Lifestyle.</h1>
                    <p className='text-[#8A8A8A] text-sm md:text-base lg:text-lg md:w-[30vw] md:text-center xl:text-xl'>Experience unparalleled design and performance—where each drive is a journey of power and elegance</p>
                    <button className='text-[#F6C598] bg-gradient-to-r from-[#F6C598] via-transparent to-transparent px-5 py-1 rounded-xl border border-[#F6C598] my-5 md:text-base lg:text-xl hover:scale-110 transition'>EXPLORE MORE</button>
                </div>
                    
                <div className="flex justify-center items-center">
                  <div className="w-20 h-20 md:w-36 md:h-36 md:translate-x-11 xl:translate-x-0 xl:w-60 xl:h-60 bg-[#BBAA9A] blur-3xl rounded-full absolute -z-20" />
                  <img src={car} alt="" className='w-[1150px] xl:w-[70vw] xl:-translate-x-36'/>
                </div>
        </div>

        {/* Section2 : description text */}
        <div className="lower-section flex flex-col items-center xl:w-[60vw] xl:-translate-y-10">
                <h1 className='text-white text-md text-center md:text-xl'>From Descriptions to Keys in Your Hands</h1>
                <p className='text-[#726B6B] text-[0.8em] text-center md:text-lg'>Welcome to Turboflare, where passion for cars meets the ease of purchase. Immerse yourself in detailed car descriptions, curated to guide you towards the perfect ride. Our platform bridges the gap between information and action, empowering you to make informed decisions on your journey to owning the car of your dreams.</p>
        </div>

    </div>
    
  )
}
