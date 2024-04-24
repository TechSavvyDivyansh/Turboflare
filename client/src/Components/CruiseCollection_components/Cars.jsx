import React, { useEffect, useState } from 'react'

export default function Cars() {

    let [CarData,setCarData]=useState([])
    console.log(CarData);

    useEffect(()=>{

        let getCars=async()=>{

            let res=await fetch('/api/listing/get-cars')
            let data=await res.json()

            setCarData(data)

        }

        getCars()

    },[])


  return (
    <div className='w-[100vw] flex flex-col items-center'>
        <div className="w-[90vw] h-[100vh] m-2 mb-10 z-10 bg-[#101010] p-10">

            <div className=" flex flex-col items-center">
                <p id="SUVS" className='text-white text-2xl font-bold'>SUVS</p>
                <div className="flex">
                        {CarData.map((car,i)=>{
                            if(car.carType=="SUV")
                            {
                                return <div key={i} className="m-3">
                                        <img src={car.imageUrls[0]} alt=""  className='h-[40vh] w-[20vw] object-cover'/>
                                        <p className='text-white'>{car.carName}</p>
                                   </div>
                            }
                        })}
                </div>
                

            </div>
        
        </div>
    </div>
  )
}
