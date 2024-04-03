import React, { useState } from 'react'
import EditVariantPopup from './EditVariantPopup'

export default function ManageVariants(props) {

    let handleDeleteVariant=(index)=>{
        let updatedVariants=props.variantData.filter((_,i)=>i!==index)
        props.setVariantData(updatedVariants)
    }

    let [editVariant,setEditVariant]=useState(false)
    let [editvariantData,setEditVariantData]=useState({})


    let handleEditVariant=(vdata)=>{
        setEditVariantData(vdata)
        setEditVariant(true)
    }


  return (
    <div className=''>
        <table className='w-[75vw] m-14'>
                    <thead>
                    {props.variantData.length>0 && <tr className='bg-[#2C2A2A]'>
                        <td className='w-[12.5%] text-center p-3'>Name</td>
                        <td className='w-[12.5%] text-center'>Price</td>
                        <td className='w-[12.5%] text-center'>Fuel type</td>
                        <td className='w-[12.5%] text-center'>ADAS</td>
                        <td className='w-[12.5%] text-center'>Adrenox</td>
                        <td className='w-[12.5%] text-center'>Manual</td>
                        <td className='w-[12.5%] text-center'>Automatic</td>
                        <td className='w-[12.5%] text-center'></td>
                    </tr>}
                    </thead>
                    <tbody>
                        {props.variantData.length>0 && props.variantData.map((variant,index)=>{
                            return <tr key={index} className='bg-[#161616]'>
                                    <td className='w-[12.5%] text-center p-3'>{variant.variantName}</td>
                                    <td className='w-[12.5%] text-center'>{variant.price}</td>
                                    <td className='w-[12.5%] text-center'>{variant.fuel}</td>
                                    <td className='w-[12.5%] text-center'>{variant.adas?"yes":"no"}</td>
                                    <td className='w-[12.5%] text-center'>{variant.adrenox?"yes":"no"}</td>
                                    <td className='w-[12.5%] text-center'>{variant.manual?"yes":"no"}</td>
                                    <td className='w-[12.5%] text-center'>{variant.automatic?"yes":"no"}</td>
                                    <td className='w-[12.5%] text-center flex gap-3 items-center'>
                                        <button className='p-1 m-4' onClick={()=>{handleEditVariant(variant)}}>EDIT</button>
                                        {editVariant && <EditVariantPopup variantData={editvariantData} setEditVariant={setEditVariant}/>}
                                        <button onClick={()=>{handleDeleteVariant(index)}} className='p-1 m-4'>DELETE</button>
                                    </td>
                                    </tr>
                        })}
                    </tbody>
                </table>
    </div>
  )
}
