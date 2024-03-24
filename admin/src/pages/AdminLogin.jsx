import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {loginFailiure,loginStart,loginSuccess} from '../Redux/Admin/adminSlice.js'
import {useNavigate} from 'react-router-dom'

export default function AdminSignup() {
  let [formData,setFormData]=useState({})
  const {currentAdmin,loading,error}=useSelector((state)=>state.admin)


  let dispatch=useDispatch()
  let navigate=useNavigate()

  let handleChangeLogin=(e)=>{
    setFormData({
      ...formData,
      [e.target.id]:e.target.value
    })
}
console.log(currentAdmin);

let handleSignupSubmit=async(e)=>{
    e.preventDefault()
    dispatch(loginStart())

    try {

      let res=await fetch('/api/adminAuth/login',{
        method:'POST',
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify(formData)
      })
      let data=await res.json()
      if(data.success==false)
      {
          dispatch(loginFailiure(data.message))
          return
      }
      dispatch(loginSuccess(data))
      navigate('/report')


    } catch (error) {
        dispatch(loginFailiure(error.message))
    }


    
}

  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
        <div className='w-[85vw] lg:w-[50vw] xl:w-[30vw] container mx-auto my-20 lg:my-40'>
        {/* <img src={carImg} alt="" className='w-[85vw] lg:w-[50vw] xl:w-[30vw] rounded-lg'/> */}
        <form className='flex flex-col' onSubmit={handleSignupSubmit}>
            <input type="text" id="username" placeholder='ENTER USERNAME' className='bg-[#2C2A2A] my-2 md:my-3 py-4 rounded-lg text-[#A69C93] placeholder:text-[#A69C93] cursor-auto focus:outline-none pl-10' onChange={handleChangeLogin}/>
            <input type="password" id="password" placeholder='ENTER PASSWORD' className='bg-[#2C2A2A] my-2 md:my-3 py-4 rounded-lg text-[#A69C93] placeholder:text-[#A69C93] cursor-auto focus:outline-none pl-10' onChange={handleChangeLogin}/>
            
            
            
            <button className='bg-[#845D42] hover:bg-[#a47452] my-2 md:my-3 py-4 rounded-lg text-white placeholder:text-[#A69C93] cursor-pointer focus:outline-none px-10' disabled={loading}>{loading?"LOADING...":"REQUEST ACCESS"}</button>
            
            {error && <p className='text-red-500 mt-5 m-auto'>{error}</p>}
        </form>
    </div>
    </div>
  )
}
