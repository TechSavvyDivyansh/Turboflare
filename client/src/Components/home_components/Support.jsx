import React from 'react'
import mechanicalSupport from '../../assets/images/home/mechanicalsupport.png'

export default function Support() {
  return (
    <div className='mt-10 md:mt-24 flex flex-col gap-3'>
        <div className="upper-section container flex min-w-[90vw] max-w-[90vw] flex-col-reverse md:flex-row gap-3">
            <div className="text bg-[#1F1E1E] rounded-3xl flex flex-col items-center justify-center p-10 ">
                <div className="flex flex-col items-center">
                    <h1 className='text-white text-center md:text-base xl:text-2xl'>Driving Confidence, End-to-End: Our Support, Your Assurance</h1>
                    <p className='text-[#6F6F6F] text-center my-1 text-xs xl:text-lg xl:my-7'>Experience unmatched assurance with our in-house support—because we believe in driving confidence from the showroom to every mile you conquer. With dedicated assistance and expertise directly from the company, your journey is not just about the destination; it's about the unwavering support you have along the way.</p>
                    <button className='text-[#F6C598] p-3 bg-gradient-to-r from-[#6F6F6F] via-transparent to-transparent border border-[#6F6F6F] rounded-2xl m-2 text-base md:text-xs xl:text-base w-[50vw] md:w-[30vw] lg:w-[20vw]'>Contact Us</button>
                </div>
            </div>
        <img src={mechanicalSupport} alt="" className='rounded-2xl md:w-[37vw] object-cover'/>
        </div>

        {/* <div className="lower-section bg-[#1F1E1E] w-[90vw]">
            <h1 className='text-white'>Discover Before You Drive</h1>
        </div> */}
    
    <br />
    <br />
    <br />
    <br />

    </div>
  )
}
