import React, { useEffect, useState } from 'react'
import ViewListingPopup from '../Components/Listing/ViewListingPopup'
import { Link } from 'react-router-dom'

export default function ViewListing() {

    let [carData,setCarData]=useState([])
    let [openPopup,setOpenPopup]=useState(false)
    let [currentCarData,setCurrentCarData]=useState({})
    useEffect(()=>{
        let getData=async()=>{
            try {
              let res=await fetch('/api/listing/get-cars')
              const data=await res.json()
              setCarData(data)
            } catch (error) {
              console.log(error);
            }
        }

        getData()

    },[])

    let managePopup=(currentCar)=>{
        setCurrentCarData(currentCar)
        setOpenPopup(true)
    }

  return (
    <div className="p-10 w-[85vw] flex flex-col items-center gap-5 overflow-y-scroll">
          <p className='text-center text-2xl'>LISTINGS</p>
          <div className='w-[90%] flex flex-col gap-3'>
              <Link to='/create-listing'><button className='text-white p-3 my-3 bg-[#1f1e1e] w-fit'>CREATE NEW LISTING</button></Link>
              {carData.map((car,index)=>{
                  return <div className="flex items-center justify-between bg-[#2C2A2A]" key={index}>
                              <img src={car.imageUrls[0]} className='w-20 h-20 object-cover' alt="" />
                              <p>{car.carName}</p>
                              <p>{car.variants.length} Variants</p>
                              <div className="flex items-center gap-10 px-10">
                                <button className='p-2 bg-[#161616]'>DELETE LISTING</button>
                                <button className='p-2 bg-[#161616]'>EDIT LISTING</button>
                                <button onClick={()=>{managePopup(car)}} className='p-2 bg-[#161616]'>VIEW LISTING</button>
                              </div>
                         </div>
                 })}
          </div>
          {openPopup && <ViewListingPopup setOpenPopup={setOpenPopup} carData={currentCarData}/>}
    </div>
  )
}
