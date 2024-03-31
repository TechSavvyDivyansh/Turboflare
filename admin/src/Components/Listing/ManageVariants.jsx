import React from 'react'

export default function ManageVariants(props) {
  return (
    <div>
        <table className='w-[75vw] m-14'>
                    <thead>
                    <tr>
                        <td className='w-[12.5%] text-center'>Name</td>
                        <td className='w-[12.5%] text-center'>Price</td>
                        <td className='w-[12.5%] text-center'>Fuel type</td>
                        <td className='w-[12.5%] text-center'>ADAS</td>
                        <td className='w-[12.5%] text-center'>Adrenox</td>
                        <td className='w-[12.5%] text-center'>Manual</td>
                        <td className='w-[12.5%] text-center'>Automatic</td>
                        <td className='w-[12.5%] text-center'></td>
                    </tr>
                    </thead>
                    <tbody>
                        {props.variantData.length>0 && props.variantData.map((variant,index)=>{
                            return <tr key={index}>
                                    <td className='w-[12.5%] text-center'>{variant.variantName}</td>
                                    <td className='w-[12.5%] text-center'>{variant.price}</td>
                                    <td className='w-[12.5%] text-center'>{variant.fuel}</td>
                                    <td className='w-[12.5%] text-center'>{variant.adas?"yes":"no"}</td>
                                    <td className='w-[12.5%] text-center'>{variant.adrenox?"yes":"no"}</td>
                                    <td className='w-[12.5%] text-center'>{variant.manual?"yes":"no"}</td>
                                    <td className='w-[12.5%] text-center'>{variant.automatic?"yes":"no"}</td>
                                    <td className='w-[12.5%] text-center flex flex-col items-center'>
                                        <button>EDIT</button>
                                        <button>DELETE</button>
                                    </td>
                                    </tr>
                        })}
                    </tbody>
                </table>
    </div>
  )
}
