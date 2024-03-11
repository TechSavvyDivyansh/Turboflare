import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

export default function Navbar() {
  let [menu,setMenu]=useState(false)
  return (
    <motion.header initial={{y:-90}} animate={{y:0}} transition={{duration:0.5}} className='bg-[#1F1E1E] w-[100vw] flex flex-col md:flex-row items-center p-5 md:p-7 md:px-20 gap-5 md:justify-between shadow-xl'>
          {/* LOGO+ open close menu icon */}
          <div className="flex items-center justify-between w-[90vw] md:w-[30vw]">
              <div className="text-[#F6C598] md:text-xl lg:text-2xl font-normal">TURBOFLARE</div>
              <div className="icons md:hidden">
                <i className={menu?"hidden":'bx bx-menu-alt-right text-white text-xl'} onClick={()=>{setMenu(!menu)}} />
                <i className={menu?'bx bxl-xing text-white text-xl':"hidden"} onClick={()=>{setMenu(!menu)}} />
              </div>
          </div>

          {/* navigation links */}
          <div className={menu?"":"hidden md:inline"}>
              <ul className='flex flex-col md:flex-row items-center gap-3 md:gap-4 lg:gap-16'>
                  <Link to='/' className='cursor-pointer'><li className='text-white font-normal cursor-pointer md:text-base lg:text-lg hover:text-gray-400 transition'>HOME</li></Link>
                  <Link to='/cruiseCollection' className='cursor-pointer'><li className='text-white font-normal cursor-pointer md:text-base lg:text-lg hover:text-gray-400 transition'>Cruise Collection</li></Link>
                  <Link to='/login'><li className='text-black font-normal cursor-pointer bg-[#F6C598] rounded-xl md:text-base lg:text-lg px-3 md:px-11 flex justify-center hover:bg-transparent hover: border border-[#7d6650] hover:text-[#7d6650] transition'>Sign In</li></Link>
              </ul>
          </div>
    </motion.header>
  )
}
