import React, { useState } from 'react'

export default function EditVariantPopup(props) {
  let [data,setData]=useState(props.editVariantData)

  let handleVariantChange=(e)=>{
      if(e.target.type==="checkbox")
      {
          setData({...data,[e.target.id]:e.target.checked})
      }
      else
      {
        setData({...data,[e.target.id]:e.target.value})
      }
  }

  const handleCreateVariant = (e) => {
      e.preventDefault();
      const newData=props.variantData
      newData[props.index]=data 

      props.setVariantData(newData);
      props.setOpenPopup(false);
  };

  return (
    <div className=' absolute top-0 left-0 w-[100vw] h-[100vh] flex items-center justify-center bg-[#3432326c] backdrop-blur'>
        <form onSubmit={handleCreateVariant} className="variant-popup bg-[#373232] p-14 flex flex-col items-center gap-8 rounded shadow-2xl">
                                <p onClick={()=>{props.setOpenPopup(false)}} className='absolute translate-x-[13vw] -translate-y-11 cursor-pointer'><i className='bx bxl-xing text-2xl'></i></p>
                                <p className="text-white">Create new variant</p>
                                <input
                                  type="text"
                                  className="p-3 bg-[#161616] w-96 cursor-auto focus:outline-none rounded"
                                  placeholder="VARIANT NAME"
                                  onChange={handleVariantChange}
                                  id='variantName'
                                  defaultValue={data.variantName}
                                  required
                                />
                                <input
                                  type="number"
                                  className="p-3 bg-[#161616] w-96 cursor-auto focus:outline-none rounded"
                                  placeholder="PRICE"
                                  onChange={handleVariantChange}
                                  defaultValue={data.price}
                                  id='price'
                                  required
                                />
                                <div className="checkboxes flex gap-5">
                                      <div className="flex gap-3">
                                          <input type="checkbox" id="adas" className="w-5 cursor-pointer" onChange={handleVariantChange} defaultChecked={data.adas}/>
                                          <span className="text-white">ADAS</span>
                                      </div>
                                      <div className="flex gap-3">
                                          <input type="checkbox" id="adrenox" className="w-5 cursor-pointer" onChange={handleVariantChange} defaultChecked={data.adrenox}/>
                                          <span className="text-white">ADRENOX</span>
                                      </div>
                                      <div className="flex gap-3">
                                          <input type="checkbox" id="manual" className="w-5 cursor-pointer" onChange={handleVariantChange} defaultChecked={data.manual}/>
                                          <span className="text-white">MANUAL</span>
                                      </div>
                                      <div className="flex gap-3">
                                          <input type="checkbox" id="automatic" className="w-5 cursor-pointer" onChange={handleVariantChange} defaultChecked={data.automatic}/>
                                          <span className="text-white">AUTOMATIC</span>
                                      </div>
                                </div>
                                <div className="">
                                    <select defaultValue={data.fuel} className="bg-black cursor-pointer focus:outline-none px-5 p-2 rounded"  onChange={handleVariantChange} id="fuel" required>
                                        <option selected={"Petrol"?true:false}>Petrol</option>
                                        <option selected={"DIESEL"?true:false}>DIESEL</option>
                                        <option selected={"ELECTRIC/HYBRID"?true:false}>ELECTRIC/HYBRID</option>
                                    </select>

                                </div>
                                <button className='p-3 bg-black w-96 rounded'>UPDATE VARIANT</button>
                        </form>
    </div>
  )
}
