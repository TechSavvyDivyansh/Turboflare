import React from 'react'
import speedometer from '../../assets/images/home/1-149-572x306.jpg'
import interior from '../../assets/images/home/Safari-3-jpg.png'
import suspension from '../../assets/images/home/orange-suv-with-word-ford-front_148840-956.png'
import mainCar from '../../assets/images/home/1690363105.png'

export default function Features() {
  return (
    <div className='flex flex-col items-center'>
          <div className="p-7 md:px-16 upper-section w-[90vw] bg-[#1F1E1E] rounded-3xl">
                  <h1 className='text-white text-2xl mt-3 text-center'>Features Crafted to Make Your Heart Race</h1>
                  <p className='text-[#726B6B] my-6 text-center text-sm md:text-lg'>From detailed descriptions to personalized recommendations, each feature is a masterpiece designed to elevate your journey. Welcome to a world where every detail matters, and every feature is a testament to unparalleled excellence. Your dream car experience begins with us.</p>
                  <div className="feature-cards flex flex-col items-start justify-between md:flex-row gap-7">
                          <div className="card md:w-[25vw] flex flex-col items-center">
                              <img src={speedometer} alt="" className='rounded-xl lg:h-[25vh] xl:h-[30vh]'/>
                              <h1 className='text-white mt-5 text-center'>fuel efficiency meets driving pleasure</h1>
                              <p className='text-[#726B6B] my-3 text-center line-clamp-2 hover:line-clamp-none'>Enjoy the freedom to go the extra mile, where each drop of fuel propels you farther, and every journey becomes an eco-friendly joyride</p>
                          </div>
                          <div className="card md:w-[25vw] flex flex-col items-center">
                              <img src={interior} alt="" className='rounded-xl lg:h-[25vh] xl:h-[30vh]'/>
                              <h1 className='text-white mt-5 text-center'>Cool Comforts, Stylish Retreats</h1>
                              <p className='text-[#726B6B] my-3 text-center line-clamp-2 hover:line-clamp-none'>Elevate your space with interior design beyond cool; then, enjoy cool comforts and effortless drives where style seamlessly meets ease.</p>
                          </div>
                          <div className="card md:w-[25vw] flex flex-col items-center">
                              <img src={suspension} alt="" className='rounded-xl lg:h-[25vh] xl:h-[30vh]'/>
                              <h1 className='text-white mt-5 text-center'>Unmatched stability, supreme suspension</h1>
                              <p className='text-[#726B6B] my-3 text-center line-clamp-2 hover:line-clamp-none'>Every drive is a symphony of smooth precision and road mastery—a fusion of stability,  performance and comfort in perfect harmony.</p>
                          </div>
                  </div>
          </div>

          <div className="lower-section flex flex-col md:flex-row gap-4 w-[90vw] m-5">
              <img src={mainCar} alt=""className='rounded-3xl md:w-[40vw] md:h-[30vh] xl:h-auto object-cover '/>
              <div className="text bg-[#1F1E1E] rounded-3xl py-5 flex flex-col items-center md:p-12 md:w-[50vw] md:px-7 lg:px-16 md:h-[30vh] xl:h-auto">
                  <div className="flex flex-col items-center md:-translate-y-8 xl:translate-y-0">
                        <h1 className='text-white text-2xl text-center m-5 md:m-1 xl:m-5 md:text-sm lg:text-2xl'>Driving Thrills Redefined</h1>
                        <p className='text-[#6F6F6F] text-center mx-5 md:m-1 xl:m-5 text-base md:text-xs xl:text-base'>Unleash the road's symphony – where every turn is a performance, every mile an adventure, and every drive redefines the thrill of the open journey. Power meets precision for an exhilarating drive. Achieve remarkable mileage without compromising on safety, as every journey is a testament to our commitment to performance, efficiency, and the sheer joy of driving</p>
                        <button className='text-[#F6C598] p-3 bg-gradient-to-r from-[#6F6F6F] via-transparent to-transparent border border-[#6F6F6F] rounded-2xl m-2 text-base md:text-xs xl:text-base lg:w-[20vw]'>EXPLORE OUR COLLECTION</button>
                  </div>
              </div>
        </div>
    </div>
  )
}
