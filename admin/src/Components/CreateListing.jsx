import React from 'react'

export default function CreateListing() {
  return (
      <div className="flex p-10 justify-around items-center w-[85vw] h-[100vh]">
            <div className="left flex flex-col gap-5">
                  <input
                    type="text"
                    className="p-3 rounded-lg bg-[#2C2A2A] text-center w-96 cursor-auto focus:outline-none"
                    placeholder="car name"
                    required
                  />
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    className="p-3 rounded-lg bg-[#2C2A2A] text-center w-96 cursor-auto focus:outline-none resize-none"
                    placeholder="CAR DESCRIPTION"
                    required
                  ></textarea>
                  <select className='p-3 rounded-lg bg-[#2C2A2A] text-center w-96 cursor-pointer focus:outline-none' name="" id="" defaultValue="" required>
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
                  <select className='p-3 rounded-lg bg-[#2C2A2A] text-center w-96 cursor-pointer focus:outline-none' name="" id="" defaultValue="" required>
                    <option disabled value="">--Select Drive type--</option>
                    <option>FWD</option>
                    <option>RWD</option>
                    <option>AWD</option>
                  </select>
                  <input
                    type="text"
                    className="p-3 rounded-lg bg-[#2C2A2A] text-center w-96 cursor-auto focus:outline-none"
                    placeholder="claim mileage"
                    required
                  />
                  <input
                    type="text"
                    className="p-3 rounded-lg bg-[#2C2A2A] text-center w-96 cursor-auto focus:outline-none"
                    placeholder="HorsePower"
                    required
                  />
            </div>

            <div className="center flex flex-col items-center gap-12">
                        <div className="variant1 flex flex-col items-center gap-4">
                                <p className="text-white">Variant 1</p>
                                <input
                                  type="text"
                                  className="p-3 rounded-lg bg-[#2C2A2A] text-center w-96 cursor-auto focus:outline-none"
                                  placeholder="VARIANT NAME"
                                />
                                <input
                                  type="text"
                                  className="p-3 rounded-lg bg-[#2C2A2A] text-center w-96 cursor-auto focus:outline-none"
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
                                    <select className="bg-black cursor-pointer focus:outline-none border p-2">
                                        <option value="">Petrol</option>
                                        <option value="">DIESEL</option>
                                        <option value="">ELECTRIC/HYBRID</option>
                                    </select>

                                </div>
                        </div>
                        <div className="variant2 flex flex-col items-center gap-4">
                                    <p className="text-white">Variant 2</p>
                                    <input
                                      type="text"
                                      className="p-3 rounded-lg bg-[#2C2A2A] text-center w-96 cursor-auto focus:outline-none"
                                      placeholder="VARIANT NAME"
                                    />
                                    <input
                                      type="text"
                                      className="p-3 rounded-lg bg-[#2C2A2A] text-center w-96 cursor-auto focus:outline-none"
                                      placeholder="PRICE"
                                    />
                                    <div className="flex gap-5">
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
                                        <select className="bg-black cursor-pointer focus:outline-none border p-2">
                                            <option value="">Petrol</option>
                                            <option value="">DIESEL</option>
                                            <option value="">ELECTRIC/HYBRID</option>
                                        </select>
                                </div>
                        </div>
                        <div className="variant3 flex flex-col items-center gap-4">
                                <p className="text-white">Variant 3</p>
                                <input
                                  type="text"
                                  className="p-3 rounded-lg bg-[#2C2A2A] text-center w-96 cursor-auto focus:outline-none"
                                  placeholder="VARIANT NAME"
                                />
                                <input
                                  type="text"
                                  className="p-3 rounded-lg bg-[#2C2A2A] text-center w-96 cursor-auto focus:outline-none"
                                  placeholder="PRICE"
                                />
                                <div className="flex gap-5">
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
                                    <select className="bg-black cursor-pointer focus:outline-none border p-2">
                                        <option value="">Petrol</option>
                                        <option value="">DIESEL</option>
                                        <option value="">ELECTRIC/HYBRID</option>
                                    </select>

                                </div>
                        </div>
            </div>
            <div className="right flex flex-col items-center gap-10 w-64">
                <p>CAR IMAGES <span className="text-[#4d4c4c] p-3">The first image will be the cover(min 3 and max 4)</span></p>
                <input type="file" name="" id="" className="cursor-pointer" required/>
                <button className="bg-[#2C2A2A] p-3 rounded-xl">CREATE LISTING</button>
            </div>
        
      </div>
      
  )
}
