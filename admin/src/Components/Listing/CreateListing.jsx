import React, { useState } from 'react'
import CreateVariantPopup from './CreateVariantPopup'

export default function CreateListing() {

  let [openPopup,setOpenPopup]=useState(false)
  let [carData,setCarData]=useState({})
  console.log(carData);

  let handleChange=(e)=>{
      setCarData({
        ...carData,
        [e.target.id]:e.target.value
      })
  }

  return (
      <div className="flex justify-center p-10 gap-10 w-[85vw] h-[100vh] mt-10">
            <div className="left flex flex-col gap-5 w-[25vw]">
                  <input
                    type="text"
                    className="p-3 rounded bg-[#2C2A2A] w-full cursor-auto focus:outline-none"
                    placeholder="car name"
                    id='carName'
                    onChange={handleChange}
                    required
                  />
                  <textarea
                    name=""
                    id="carDesc"
                    cols="30"
                    rows="10"
                    className="p-3 rounded bg-[#2C2A2A] w-full cursor-auto focus:outline-none resize-none"
                    placeholder="CAR DESCRIPTION"
                    onChange={handleChange}
                    required
                  ></textarea>
                  <select className='p-3 rounded bg-[#2C2A2A] w-full cursor-pointer focus:outline-none' name="" id="carType" defaultValue="" onChange={handleChange} required>
                    <option disabled value="">--Select Car type--</option>
                    <option>SUV</option>
                    <option>Luxury</option>
                    <option>Sports Coupe</option>
                    <option>Hatchback</option>
                    <option>Sedan</option>
                    <option>Compact/Subcompact Suv</option>
                    <option>MUV</option>
                    <option>Convertible</option>
                  </select>
                  <select className='p-3 rounded bg-[#2C2A2A] w-full cursor-pointer focus:outline-none' name="" id="driveType" defaultValue="" onChange={handleChange} required>
                    <option disabled value="">--Select Drive type--</option>
                    <option>FWD</option>
                    <option>RWD</option>
                    <option>AWD</option>
                  </select>
                  <input
                    type="text"
                    className="p-3 rounded bg-[#2C2A2A] w-full cursor-auto focus:outline-none"
                    placeholder="claim mileage"
                    id='claimMileage'
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    className="p-3 rounded bg-[#2C2A2A] w-full cursor-auto focus:outline-none"
                    placeholder="HorsePower"
                    id='horsePower'
                    onChange={handleChange}
                    required
                  />
                  <button onClick={()=>{setOpenPopup(true)}} className='p-3 rounded border border-[#959292] text-[#959292] text-center w-full'>ADD VARIANT</button>
            </div>

            <div className="right flex flex-col items-center gap-10">
                <p>CAR IMAGES <span className="text-[#4d4c4c] p-3">The first image will be the cover(min 3 and max 4)</span></p>
                <div className="flex gap-2 w-full">
                    <input type="file" name="" id="" className="cursor-pointer border p-3 rounded w-full border-[#353434]" required accept='image/*' multiple/>
                    <button className='p-3 border border-green-700 text-green-700 rounded'>UPLOAD</button>
                </div>
                <button className="border border-[#959292] text-[#959292] p-3 rounded w-full">CREATE LISTING</button>
            </div>
            {openPopup && <CreateVariantPopup setOpenPopup={setOpenPopup}/>}

      </div>
      
  )
}
