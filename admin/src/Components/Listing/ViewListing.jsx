import React, { useEffect, useState } from 'react'

export default function ViewListing() {

    let [carData,setCarData]=useState([])
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

  return (
    <div>
        {carData.map((car,index)=>{
            return <div className="" key={index}>
              <p>{car.carName}</p>
              <p>{car.carDesc}</p>
              <p>{car.carType}</p>
              <p>{car.driveType}</p>
              <p>{car.claimMileage}</p>
              <p>{car.horsePower}</p>
              <img src={car.imageUrls[0]} alt="" />
            </div>
        })}
    </div>
  )
}
