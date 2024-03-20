import React, { useState } from 'react'
import carImg from '../assets/images/LoginPage/black-car-with-mountain-background_7023-7051.jpg'
import { Link, useNavigate } from 'react-router-dom'

export default function LogIn() {

  let [formData,setFormData]=useState({})
  let [DispErrorMessage,setDispErrorMessage]=useState(null)
  let [Loading,setLoading]=useState(false)
  let [SuccessDisp,SetSuccessDisp]=useState(false)
  let navigate=useNavigate()


  let handleChangeLogin=(e)=>{
      setFormData({
        ...formData,
        [e.target.id]:e.target.value
      })
  }

  let handleSubmitLogin=async(e)=>{
    e.preventDefault()
    setLoading(true)

    try {

      let res=await fetch('/api/auth/login',{
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
      navigate('/')


    } catch (error) {
        setLoading(false)
        setDispErrorMessage(error.message)
        SetSuccessDisp(false)
    }
}





  return (
    <div className='w-[85vw] lg:w-[50vw] xl:w-[30vw] container mx-auto my-20 lg:my-40'>
        <img src={carImg} alt="" className='w-[85vw] lg:w-[50vw] xl:w-[30vw] rounded-lg'/>
        <form className='flex flex-col' onSubmit={handleSubmitLogin}> 
            
            <input type="text" id="username" placeholder='ENTER USERNAME' className='bg-[#2C2A2A] my-2 md:my-3 py-4 rounded-lg text-[#A69C93] placeholder:text-[#A69C93] cursor-auto focus:outline-none pl-10' onChange={handleChangeLogin}/>
            <input type="password" id="password" placeholder='ENTER PASSWORD' className='bg-[#2C2A2A] my-2 md:my-3 py-4 rounded-lg text-[#A69C93] placeholder:text-[#A69C93] cursor-auto focus:outline-none pl-10' onChange={handleChangeLogin}/>
            
            <button className='bg-[#9F8E7D] hover:bg-[#b4a290] my-2 md:my-3 py-4 rounded-lg text-black placeholder:text-[#A69C93] cursor-pointer focus:outline-none px-10' disabled={Loading}>{Loading?"DRIVING YOU IN...":"LOGIN"}</button>
            <button className='bg-[#845D42] hover:bg-[#9b6f50] my-2 md:my-3 py-4 rounded-lg text-white placeholder:text-[#A69C93] cursor-pointer focus:outline-none px-10'>SIGN UP WITH GOOGLE</button>
            <div className="flex justify-between my-2 md:my-3">
              <p className='text-white text-sm md:text-lg'>Dont Have an Account? </p>
              <p className='text-[#C79D76] hover:text-[#dcba99] cursor-pointer text-sm md:text-lg'><Link to='/sign-up' className='cursor-pointer'>CREATE AN ACCOUNT</Link></p>
            </div>
            {DispErrorMessage && <p className='text-red-500 mt-5 m-auto'>{DispErrorMessage}</p>}
            {SuccessDisp && <p className='text-green-800 mt-5'>WELCOME !!!🥳</p>}
        </form>
    </div>
  )
}
