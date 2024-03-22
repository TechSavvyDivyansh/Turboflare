import React from 'react'

export default function Navbar() {
  return (
    <div className='w-[20vw] h-[100vh] bg-[#161616] flex flex-col items-center p-4'>
        <div className="flex flex-col items-center gap-4 p-6">
            <p className='text-[#F6C598] text-3xl'>TURBOFLARE</p>
            <div className="flex flex-col items-center gap-3">
                <img src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yNl8zZF9pbGx1c3RyYXRpb25fb2ZfYV9ib3lfc2l0dGluZ19vbl90aGVfZmxvb18zMjc1NTFkMC1mMzRiLTQ3NzItYjg4YS1hOGM5Yzg2ODFiMzFfMS5qcGc.jpg" alt="" className='w-[150px] h-[150px] rounded-full'/>
                <p className='text-[#a7a5a5] text-center'>SALES!</p>
            </div>
            <ul className='flex flex-col gap-14 mt-24'>
                <li className='text-white text-center text-xl cursor-pointer hover:bg-[#2C2A2A] p-2 px-4 rounded-lg'>REPORT</li>
                <li className='text-white text-center text-xl cursor-pointer hover:bg-[#2C2A2A] p-2 px-4 rounded-lg'>LISTING</li>
                <li className='text-white text-center text-xl cursor-pointer hover:bg-[#2C2A2A] p-2 px-4 rounded-lg'>CUSTOMER DATA</li>
                <li className='text-white text-center text-xl cursor-pointer hover:bg-[#2C2A2A] p-2 px-4 rounded-lg'>SALES TEAM</li>
                <li className='text-white text-center text-xl cursor-pointer hover:bg-[#2C2A2A] p-2 px-4 rounded-lg'>ADVERTISEMENT</li>
            </ul>
        </div>
    </div>
  )
}
