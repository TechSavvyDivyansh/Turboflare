import React from 'react'

export default function ViewListingPopup(props) {
  return (
    <div className='w-[100vw] h-[100vh] absolute top-0 left-0 bg-[#413f3f94] backdrop-blur flex justify-center items-center'>
        <div className="flex flex-col items-end w-[70vw] h-[80vh] bg-[#000000] shadow-2xl overflow-y-scroll">
            <p onClick={()=>{props.setOpenPopup(false)}} className='cursor-pointer fixed p-3 z-10'><i className='bx bxl-xing text-2xl'></i></p>

            <div className="">
                        <div className="">
                                <img src={props.carData.imageUrls[0]} alt="" className='w-[100%] h-[80vh] object-cover opacity-[20%]' />
                                <div className="">
                                        <p>{props.carData.carName}</p>
                                        <p>{props.carData.carDesc}</p>
                                        <p>{props.carData.claimMileage}</p>
                                        <p>{props.carData.horsePower}</p>
                                        <p>{props.carData.carType}</p>
                                        <p>{props.carData.driveType}</p>
                                        <div className="">
                                            {props.carData.variants.map((variant,i)=>{
                                                return <div className="">
                                                            <p>{variant.variantName}</p>
                                                            <p>{variant.price}</p>
                                                            <p>{variant.adas?"ADAS":""}</p>
                                                            <p>{variant.adrenox?"ADRENOX":""}</p>
                                                            <p>{variant.manual?"MANUAL":""}</p>
                                                            <p>{variant.automatic?"AUTOMATIC":""}</p>
                                                    </div>
                                            })}
                                        </div>
                                        <div className="">
                                            {props.carData.imageUrls.map((img,i)=>{
                                                return <img key={i} src={img} alt="" />
                                            })}
                                        </div>
                                </div>
                           </div>
            </div>

        </div>
    </div>
  )
}
