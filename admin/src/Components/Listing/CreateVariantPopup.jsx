import React from 'react'

export default function CreateVariantPopup(props) {
  return (
    <div className=' absolute top-0 left-0 w-[100vw] h-[100vh] flex items-center justify-center bg-[#3432326c] backdrop-blur'>
        <div className="variant-popup bg-[#373232] p-14 flex flex-col items-center gap-8 rounded shadow-2xl">
                                <p onClick={()=>{props.setOpenPopup(false)}} className='absolute translate-x-[13vw] -translate-y-11 cursor-pointer'><i class='bx bxl-xing text-2xl'></i></p>
                                <p className="text-white">Create new variant</p>
                                <input
                                  type="text"
                                  className="p-3 bg-[#161616] w-96 cursor-auto focus:outline-none rounded"
                                  placeholder="VARIANT NAME"
                                />
                                <input
                                  type="text"
                                  className="p-3 bg-[#161616] w-96 cursor-auto focus:outline-none rounded"
                                  placeholder="PRICE"
                                />
                                <div className="checkboxes flex gap-5">
                                      <div className="flex gap-3">
                                          <input type="checkbox" id="" className="w-5 cursor-pointer"/>
                                          <span className="text-white">ADAS</span>
                                      </div>
                                      <div className="flex gap-3">
                                          <input type="checkbox" id="" className="w-5 cursor-pointer"/>
                                          <span className="text-white">ADRENOX</span>
                                      </div>
                                      <div className="flex gap-3">
                                          <input type="checkbox" id="" className="w-5 cursor-pointer"/>
                                          <span className="text-white">MANUAL</span>
                                      </div>
                                      <div className="flex gap-3">
                                          <input type="checkbox" id="" className="w-5 cursor-pointer"/>
                                          <span className="text-white">AUTOMATIC</span>
                                      </div>
                                </div>
                                <div className="">
                                    <select className="bg-black cursor-pointer focus:outline-none  p-2 rounded">
                                        <option value="">Petrol</option>
                                        <option value="">DIESEL</option>
                                        <option value="">ELECTRIC/HYBRID</option>
                                    </select>

                                </div>
                                <button className='p-3 bg-black w-96 rounded'>CREATE VARIANT</button>
                        </div>
    </div>
  )
}
