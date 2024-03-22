import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='w-[20vw] h-[100vh] bg-[#161616] p-3'>
        <div className="flex flex-col items-center m-4 gap-10">
            <p className='text-2xl text-[#F6C598]'>TURBOFLARE</p>
            <img src="https://img.freepik.com/premium-photo/anime-boy-man-avatar-ai-generative-art_225753-7456.jpg" alt="" className='w-[150px] h-[150px] rounded-full'/>
            <p className='text-[#9c9898]'>ADMIN NAME</p>
            <ul className="flex flex-col gap-10 my-8">
                <Link to="/report"><li className='text-white text-center text-xl cursor-pointer'>REPORT</li></Link>
                <Link to="/listing"><li className='text-white text-center text-xl cursor-pointer'>LISTING</li></Link>
                <Link to="/customer-data"><li className='text-white text-center text-xl cursor-pointer'>CUSTOMER DATA</li></Link>
                <Link to="/sales-team"><li className='text-white text-center text-xl cursor-pointer'>SALES TEAM</li></Link>
                <Link to="/advertisement"><li className='text-white text-center text-xl cursor-pointer'>ADVERTISEMENT</li></Link>
            </ul>
        </div>
    </div>
  )
}
