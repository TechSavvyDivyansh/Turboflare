import React, { useState } from 'react'

export default function ViewListingPopup(props) {

    let [image,setImage]=useState(props.carData.imageUrls[0])

  return (
    <div className='w-[100vw] h-[100vh] absolute top-0 left-0 bg-[#413f3f94] backdrop-blur flex justify-center items-center'>
        <div className="flex flex-col items-end w-[70vw] h-[80vh] bg-[#000000] shadow-2xl rounded overflow-y-scroll">
            <p onClick={()=>{props.setOpenPopup(false)}} className='cursor-pointer fixed p-3 z-10'><i className='bx bxl-xing text-2xl'></i></p>

            <div className="relative w-[100%]">
                    <img src={image} alt="" className='w-[100%] h-[80vh] object-cover brightness-75' />
                    <div className="absolute top-0 left-0 h-[100%] flex justify-between">
                            <div className="flex flex-col gap-8 w-[50%] bg-[#00000057] backdrop-blur-[8px] p-10">
                                        <div className="flex flex-col gap-10">
                                            <p className='text-center text-5xl font-medium uppercase'>{props.carData.carName}</p>
                                            <p className='w-[100%] text-center text-[#c6c5c5] font-medium line-clamp-3'>{props.carData.carDesc}</p>
                                            <div className="flex  justify-between bg-gradient-to-r from-[#1E1D1D] via-[#1E1D1D] to-transparent p-5 py-9 text-center border border-[#999595a2] rounded">
                                                <div className="">
                                                    <p className='font-semibold text-xl'>{props.carData.claimMileage}</p>
                                                    <p className='text-[#636161]'>KMPH</p>
                                                </div>
                                                <div className="">
                                                    <p className='font-semibold text-xl'>{props.carData.horsePower}</p>
                                                    <p className='text-[#636161]'>HP</p>
                                                </div>
                                                <div className="">
                                                    <p className='font-semibold text-xl'>{props.carData.carType}</p>
                                                    <p className='text-[#636161]'>(CAR TYPE)</p>
                                                </div>
                                                <div className="">
                                                    <p className='font-semibold text-xl'>{props.carData.driveType}</p>
                                                    <p className='text-[#969292]'>(DRIVE TYPE)</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" flex justify-between bg-gradient-to-r from-[#1E1D1D] via-[#1E1D1D] to-transparent border border-[#999595a2] p-5 rounded h-[220px]">
                                            {props.carData.variants.map((variant,i)=>{
                                                return <div className="flex flex-col justify-between items-center">
                                                            <p className='text-xl font-bold'>{variant.variantName}</p>
                                                            <div className="font-semibold">
                                                                    <p className='text-center text-[#8c8a8a]'>{variant.fuel}</p>
                                                                    <div className="flex gap-2 text-[#8c8a8a]">
                                                                        <p className='text-center'>{variant.manual?"MANUAL":""}</p>
                                                                        <p className='text-center'>{variant.automatic?"AUTOMATIC":""}</p>
                                                                    </div>
                                                                    <p className='text-center text-[#8c8a8a]'>{variant.adas?"ADAS":""}</p>
                                                                    <p className='text-center text-[#8c8a8a]'>{variant.adrenox?"ADRENOX":""}</p>
                                                            </div>
                                                            <p className='font-bold text-lg'>₹{variant.price.toLocaleString()}</p>
                                                    </div>
                                            })}
                                        </div>
                            </div>
                            <div className="p-10 w-[50%] flex flex-col gap-4 justify-center items-end overflow-y-auto">
                                {props.carData.imageUrls.map((img,i)=>{
                                    return <img key={i} src={img} onClick={()=>{setImage(img)}} alt="" className='w-[40%] brightness-125 h-[150px] object-cover border border-[#e5e5e5] rounded cursor-pointer'/>
                                })}
                            </div>
                    </div>
            </div>


        </div>
    </div>
  )
}
