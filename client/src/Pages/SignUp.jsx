import React, { useState } from 'react'
import carImg from '../assets/images/LoginPage/black-car-with-mountain-background_7023-7051.jpg'
import { Link, useNavigate } from 'react-router-dom'

export default function SignUp() {

  let [formData,setFormData]=useState({})
  let [DispErrorMessage,setDispErrorMessage]=useState(null)
  let [Loading,setLoading]=useState(false)
  let [SuccessDisp,SetSuccessDisp]=useState(false)
  let navigate=useNavigate()


  let handleChangeSignup=(e)=>{
      setFormData({
        ...formData,
        [e.target.id]:e.target.value
      })
  }

  let handleSignupSubmit=async(e)=>{
      e.preventDefault()
      setLoading(true)

      try {

        let res=await fetch('/api/auth/signUp',{
          method:'POST',
          headers:{
            'Content-type':'application/json'
          },
          body:JSON.stringify(formData)
        })
        let data=await res.json()
        if(data.success==false)
        {
            setLoading(false)
            setDispErrorMessage(data.message)
            SetSuccessDisp(false)
            return
        }
        setLoading(false)
        setDispErrorMessage(null)
        SetSuccessDisp(true)
        navigate('/login')


      } catch (error) {
          setLoading(false)
          setDispErrorMessage(error.message)
          SetSuccessDisp(false)
      }
  }





  return (
    <div className='w-[85vw] lg:w-[50vw] xl:w-[30vw] container mx-auto my-20 lg:my-40'>
        <img src={carImg} alt="" className='w-[85vw] lg:w-[50vw] xl:w-[30vw] rounded-lg'/>
        <form className='flex flex-col' onSubmit={handleSignupSubmit}>
            <input type="text" id="name" placeholder='ENTER NAME' className='bg-[#2C2A2A] my-2 md:my-3 py-4 rounded-lg text-[#A69C93] placeholder:text-[#A69C93] cursor-auto focus:outline-none pl-10' onChange={handleChangeSignup}/>
            <input type="email" id="email" placeholder='ENTER EMAIL' className='bg-[#2C2A2A] my-2 md:my-3 py-4 rounded-lg text-[#A69C93] placeholder:text-[#A69C93] cursor-auto focus:outline-none pl-10' onChange={handleChangeSignup}/>
            <input type="text" id="username" placeholder='ENTER USERNAME' className='bg-[#2C2A2A] my-2 md:my-3 py-4 rounded-lg text-[#A69C93] placeholder:text-[#A69C93] cursor-auto focus:outline-none pl-10' onChange={handleChangeSignup}/>
            <input type="password" id="password" placeholder='ENTER PASSWORD' className='bg-[#2C2A2A] my-2 md:my-3 py-4 rounded-lg text-[#A69C93] placeholder:text-[#A69C93] cursor-auto focus:outline-none pl-10' onChange={handleChangeSignup}/>
            <input type="tel" id="phone" placeholder='ENTER PHONE NUMBER' pattern="[0-9]{10}" className='bg-[#2C2A2A] my-2 md:my-3 py-4 rounded-lg text-[#A69C93] placeholder:text-[#A69C93] cursor-auto focus:outline-none pl-10' onChange={handleChangeSignup}/>
            <select id="city" className='bg-[#2C2A2A] my-2 md:my-3 py-4 rounded-lg text-[#A69C93] placeholder:text-[#A69C93] cursor-pointer focus:outline-none px-10' onChange={handleChangeSignup} defaultValue="" required>
                    <option value="" disabled>-- Select a City --</option>
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
            <button className='bg-[#845D42] hover:bg-[#b4a290] my-2 md:my-3 py-4 rounded-lg text-white placeholder:text-[#A69C93] cursor-pointer focus:outline-none px-10' disabled={Loading}>{Loading?"LOADING...":"CREATE ACCOUNT"}</button>
            <div className="flex justify-between my-2 md:my-3">
              <p className='text-white text-sm md:text-lg'>Already Have an account?</p>
              <p className='text-[#C79D76] hover:text-[#dcba99] cursor-pointer text-sm md:text-lg'><Link to='/login' className='cursor-pointer'>SIGN IN</Link></p>
            </div>
            {DispErrorMessage && <p className='text-red-500 mt-5 m-auto'>{DispErrorMessage}</p>}
            {SuccessDisp && <p className='text-green-800 mt-5'>User Created Successfully!!!🥳</p>}
        </form>
    </div>
  )
}
