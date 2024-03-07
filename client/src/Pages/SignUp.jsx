import React from 'react'
import carImg from '../assets/images/LoginPage/black-car-with-mountain-background_7023-7051.jpg'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='w-[85vw] lg:w-[50vw] xl:w-[30vw] container mx-auto my-20 lg:my-40'>
        <img src={carImg} alt="" className='w-[85vw] lg:w-[50vw] xl:w-[30vw] rounded-lg'/>
        <form className='flex flex-col'>
            <input type="text" placeholder='ENTER NAME' className='bg-[#2C2A2A] my-2 md:my-3 py-4 rounded-lg text-[#A69C93] placeholder:text-[#A69C93] cursor-auto focus:outline-none pl-10'/>
            <input type="email" name="" id="" placeholder='ENTER EMAIL' className='bg-[#2C2A2A] my-2 md:my-3 py-4 rounded-lg text-[#A69C93] placeholder:text-[#A69C93] cursor-auto focus:outline-none pl-10'/>
            <input type="text" placeholder='ENTER USERNAME' className='bg-[#2C2A2A] my-2 md:my-3 py-4 rounded-lg text-[#A69C93] placeholder:text-[#A69C93] cursor-auto focus:outline-none pl-10'/>
            <input type="password" name="" id="" placeholder='ENTER PASSWORD' className='bg-[#2C2A2A] my-2 md:my-3 py-4 rounded-lg text-[#A69C93] placeholder:text-[#A69C93] cursor-auto focus:outline-none pl-10'/>
            <input type="tel" name="" id="" placeholder='ENTER PHONE NUMBER' className='bg-[#2C2A2A] my-2 md:my-3 py-4 rounded-lg text-[#A69C93] placeholder:text-[#A69C93] cursor-auto focus:outline-none pl-10'/>
            <select className='bg-[#2C2A2A] my-2 md:my-3 py-4 rounded-lg text-[#A69C93] placeholder:text-[#A69C93] cursor-pointer focus:outline-none px-10'>
                    <option>Mumbai</option>
                    <option>Delhi</option>
                    <option>Bangalore</option>
                    <option>Kolkata</option>
                    <option>Chennai</option>
                    <option>Hyderabad</option>
                    <option>Pune</option>
                    <option>Ahmedabad</option>
                    <option>Jaipur</option>
                    <option>Surat</option>
                    <option>Lucknow</option>
                    <option>Kanpur</option>
                    <option>Nagpur</option>
                    <option>Patna</option>
                    <option>Indore</option>
            </select>
            <button className='bg-[#9F8E7D] hover:bg-[#b4a290] my-2 md:my-3 py-4 rounded-lg text-black placeholder:text-[#A69C93] cursor-pointer focus:outline-none px-10'>CREATE ACCOUNT</button>
            <button className='bg-[#845D42] hover:bg-[#9b6f50] my-2 md:my-3 py-4 rounded-lg text-white placeholder:text-[#A69C93] cursor-pointer focus:outline-none px-10'>SIGN UP WITH GOOGLE</button>
            <div className="flex justify-between my-2 md:my-3">
              <p className='text-white text-sm md:text-lg'>Already Have an account?</p>
              <p className='text-[#C79D76] hover:text-[#dcba99] cursor-pointer text-sm md:text-lg'><Link to='/login' className='cursor-pointer'>SIGN IN</Link></p>
            </div>
        </form>
    </div>
  )
}
