import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {signOutAdminFailiure,signOutAdminStart,signOutAdminSuccess} from '../Redux/Admin/adminSlice.js'

export default function Navbar() {
  let {currentAdmin}=useSelector(state=>state.admin)
  let dispatch=useDispatch()
  let navigate=useNavigate()

  let handleSignOut=async()=>{
      try {
        dispatch(signOutAdminStart())
        let res=await fetch('/api/auth/signout')
        let data=await res.json()

        if(data.success==false)
        {
            dispatch(signOutAdminFailiure(data.message))
            return 
        }
        dispatch(signOutAdminSuccess(data))
        navigate('/')
        

      } catch (error) {
        dispatch(signOutAdminFailiure(error.message))
      }
  }


  return (
    <div className='w-[15vw] h-[100vh] bg-[#161616] p-3 flex flex-col justify-between items-center'>
        <div className="flex flex-col items-center m-4 gap-10">
            <p className='text-2xl text-[#F6C598]'>TURBOFLARE</p>
            <img src={currentAdmin.avatar} alt="" className='w-[150px] h-[150px] rounded-full object-cover'/>
            <p className='text-[#9c9898]'>{currentAdmin.username}</p>
            <ul className="flex flex-col gap-10 my-8">
                <Link to="/report"><li className='text-white text-center text-xl cursor-pointer'>DASHBOARD</li></Link>
                <Link to="/report"><li className='text-white text-center text-xl cursor-pointer'>REPORT</li></Link>
                <Link to="/view-listing"><li className='text-white text-center text-xl cursor-pointer'>LISTING</li></Link>
                <Link to="/customer-data"><li className='text-white text-center text-xl cursor-pointer'>CUSTOMER DATA</li></Link>
                {currentAdmin.isAdmin && <Link to="/team-data"><li className='text-white text-center text-xl cursor-pointer'>TEAM DATA</li></Link>}
                <Link to="/advertisement"><li className='text-white text-center text-xl cursor-pointer'>ADVERTISEMENT</li></Link>
            </ul>
        </div>
        <div className="flex justify-between -translate-y-7 w-[90%]">
        <Link to='/profile'><button className='bg-[#2C2A2A] p-2 text-[#b6b6b6]'>View Profile</button></Link>
          <p className='text-[#b6b6b6] cursor-pointer p-2' onClick={handleSignOut}>Sign Out</p>
        </div>
    </div>
  )
}
