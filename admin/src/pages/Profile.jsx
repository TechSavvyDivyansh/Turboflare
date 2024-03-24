import React, { useRef } from 'react'
import {useSelector} from 'react-redux'


export default function Profile() {
    let {currentAdmin}=useSelector(state=>state.admin)
    const fileRef=useRef(null)
    
  return (
    <div className='p-7 w-[85vw] h-[100vh] flex items-center justify-center'>
        <form className='w-[25vw] flex flex-col items-center gap-4'>
            <input type="file" name="" id="" ref={fileRef} hidden accept='image/*'/>
            <img src={currentAdmin.avatar} alt="" className='w-[300px] h-[300px] rounded-full m-2 cursor-pointer' onClick={()=>{fileRef.current.click()}}/>
            <input type="text" placeholder='Name' defaultValue={currentAdmin.name} className='bg-[#161616] p-3 rounded-lg w-full focus:outline-none text-center placeholder:text-[#b6b6b6]'/>
            <input type="text" placeholder='Username' defaultValue={currentAdmin.username} className='bg-[#161616] p-3 rounded-lg w-full focus:outline-none text-center placeholder:text-[#b6b6b6]'/>
            <input type="text" placeholder='Email' defaultValue={currentAdmin.email} className='bg-[#161616] p-3 rounded-lg w-full focus:outline-none text-center placeholder:text-[#b6b6b6]'/>
            <input type="text" placeholder='Designation' defaultValue={currentAdmin.designation} className='bg-[#161616] p-3 rounded-lg w-full focus:outline-none text-center placeholder:text-[#b6b6b6]'/>
            <input type="tel" placeholder='phone' defaultValue={currentAdmin.phone} className='bg-[#161616] p-3 rounded-lg w-full focus:outline-none text-center placeholder:text-[#b6b6b6]'/>
            <input type="password" placeholder='password' className='bg-[#161616] p-3 rounded-lg w-full focus:outline-none text-center placeholder:text-[#b6b6b6]'/>
            <button className='p-3 bg-[#2C2A2A] w-full rounded-lg'>UPDATE ADMIN DETAILS</button>
        </form>
    </div>
  )
}
