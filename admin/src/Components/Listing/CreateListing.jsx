import React, { useEffect, useState } from 'react'
import CreateVariantPopup from './CreateVariantPopup'
import {getStorage,getDownloadURL,ref,uploadBytesResumable} from 'firebase/storage'
import {app} from '../../firebase.js'

export default function CreateListing(props) {

  let [openPopup,setOpenPopup]=useState(false)
  

  let [carData,setCarData]=useState({
    "carName":"",
    "carDesc":"",
    "carType":"",
    "driveType":"",
    "claimMileage":0,
    "horsePower":0,
    "imageUrls":[],
    "variants":[]
  })
  let [Files,setFiles]=useState([])
  let [imageUploadError,setImageUploadError]=useState(false)
  let [imageUploadErrormessage,setImageUploadErrormessage]=useState("")
  let [imageUploadSuccess,setImageUploadSuccess]=useState(false)
  let [filePerc,setFilePerc]=useState(0)
  
  useEffect(() => {
    setCarData({ ...carData, variants: props.variantData });
  }, [props.variantData]);
  
  console.log(carData);

  let handleChange=(e)=>{
      setCarData({
        ...carData,
        [e.target.id]:e.target.value
      })
  }


  const handleImgSubmit=async()=>{

        if(Files.length>=2 && File.length+carData.imageUrls.length<=5)
        {
           try {
            
                const urls=[]
                for (let i = 0; i < Files.length; i++) {
                  const url = await storeImg(Files[i]);
                  urls.push(url);
                }

                setCarData({...carData,imageUrls:carData.imageUrls.concat(urls)})
                setImageUploadSuccess(true)

           } catch (error) {
                console.log("image upload failed ",error);
                setImageUploadError(true)
                setImageUploadErrormessage(error)
           }

        }
        else
        {
          setImageUploadError(true)
          setImageUploadErrormessage("Please upload minimum of 2 images and maximum of 5 images")
        }

  }


  const storeImg=async(file)=>{

      return new Promise((resolve, reject) => {
          const storage=getStorage(app)
          const fileName=new Date().getTime()+file.name  
          const storageRef=ref(storage,fileName)


          const uploadTask=uploadBytesResumable(storageRef,file)

          uploadTask.on("state_changed",(snapshot)=>{
            const progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100
            setFilePerc(progress)
            console.log(progress);
          },(err)=>{
            reject(err)
          },()=>{
            getDownloadURL(uploadTask.snapshot.ref).then((firebaseUrl)=>{
                        resolve(firebaseUrl)
                  })
          })

      })

  }


  let handleCreateCarListing=async()=>{
        try {
            let res=await fetch('/api/listing/create-car',{
              method:"POST",
              headers:{
                "content-type":"application/json"
              },
              body:JSON.stringify(carData)
            })
            let data=await res.json()



        } catch (error) {
            
        }
  }

  const handleRemoveImg=(index)=>{
    setCarData({
        ...carData,
        imageUrls: carData.imageUrls.filter((_,i)=>{
            return i!==index
        })
    })
  }

  return (
      <div className=" p-4 w-[85vw]  mt-10 flex flex-col items-center">
          <form onSubmit={handleCreateCarListing} className="flex flex-col items-center gap-10">
                <div className="flex gap-10 w-fit mx-auto">
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
                              
                        </div>

                        <div className="right flex flex-col items-center gap-6">
                            <p>CAR IMAGES <span className="text-[#4d4c4c] p-3">The first image will be the cover(min 2 and max 5)</span></p>
                            <div className="flex gap-2 w-full">
                                <input onChange={(e)=>setFiles(e.target.files)} type="file" name="" id="" className="cursor-pointer border p-3 rounded w-full border-[#353434]" required accept='image/*' multiple/>
                                <button type='button' onClick={handleImgSubmit} className='p-3 border border-green-700 text-green-700 rounded'>UPLOAD</button>
                            </div>  

                            
                            <span>{imageUploadSuccess?<p className='text-green-600'>Image uploaded successfully</p>:(imageUploadError?<p className='text-red-700'>{imageUploadErrormessage}</p>:"")}</span>

                            <div className="w-full flex flex-col items-center gap-3">
                            {carData.imageUrls.length>0 && carData.imageUrls.map((img,index)=>{
                                return <div className='flex justify-between p-1 border border-[#4a4343] items-center w-full' key={index}>
                                            <img src={img} alt="listing img" className='w-20 h-20 object-contain rounded-lg'/>
                                            <button type='button' onClick={()=>{handleRemoveImg(index)}} className='p-3 text-red-700 rounded-lg uppercase hover:opacity-75'>Delete</button>
                                      </div>
                            })}
                            </div>                     
                            
                        </div>
                </div>
                
                <div className="flex  gap-5 ">
                      <button type='button' onClick={()=>{setOpenPopup(true)}} className='p-3 rounded border border-[#959292] text-[#959292] text-center'>ADD VARIANT</button>
                      {carData.variants.length>0 && <button type='submit' className='p-3 rounded border border-[#959292] text-[#959292] text-center'>CREATE LISTING</button>}
                </div>
          </form>
          {openPopup && <CreateVariantPopup setOpenPopup={setOpenPopup} setVariantData={props.setVariantData} variantData={props.variantData}/>}

      </div>
      
  )
}
