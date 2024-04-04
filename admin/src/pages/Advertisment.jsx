import React from 'react'

export default function Advertisment() {
  return (
    <div className='w-[85vw] flex flex-col items-center gap-36 my-10'>
        <p className='text-center text-2xl'>ADVERTISMENT PANEL</p>
        <div className="flex flex-col items-center gap-2 w-[30vw]">
                <input type="file" name="" id="" className='cursor-pointer border border-[#535252] w-full p-3 rounded'/>
                <input type="text" placeholder='Heading for advertisement' className='w-full p-3 focus:outline-none bg-[#2C2A2A] placeholder:text-[#BAB8B8] text-center rounded'/>
                <input type="text" placeholder='subject for advertisement' className='w-full p-3 focus:outline-none bg-[#2C2A2A] placeholder:text-[#BAB8B8] text-center rounded'/>
                <textarea name="" id="" cols="60" rows="10" placeholder='advertisement text' className='w-full bg-[#2C2A2A] placeholder:text-[#BAB8B8] text-center rounded focus:outline-none resize-none'></textarea>
                <button className='p-2 bg-[#161616] w-full rounded'>SEND ADVERTISMENT</button>
        </div>
    </div>
  )
}
