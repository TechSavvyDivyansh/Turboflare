import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from 'firebase/storage'
import {app} from '../../firebase'

export default function Left_profile() {

    const fileRef=useRef(null)

    const {currentUser}=useSelector(state=>state.user)
    const [File,setFile]=useState(undefined)
    const [filePercent,setFilePercent]=useState(0)
    const [fileUploadError,SetFileUploadError]=useState(false)
    const [formData,setFormData]=useState({})
    console.log(formData);


    useEffect(()=>{
        if(File)
        {   
            handleFileUpload(File)
        }
    },[File])


    let handleFileUpload=(File)=>{
        const storage=getStorage(app)
        const fileName=new Date().getTime()+File.name
        const storageRef=ref(storage,fileName)
        const uploadTask=uploadBytesResumable(storageRef,File)
        

        uploadTask.on('state_changed',
            (snapshot)=>{
                const progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100
                setFilePercent(Math.round(progress))
            },(error)=>{
                SetFileUploadError(true)
            },
            ()=>{
                getDownloadURL(uploadTask.snapshot.ref).then((firebaseFileUrl)=>{
                                setFormData({...formData,avatar:firebaseFileUrl})
                        })
            }
        )
    }


    let fileStatusReview=()=>{
        if(fileUploadError)
        {
            return (<span className='text-red-700 text-center'>Error Uploading Image(Image must be less than 2MB)</span>)
        }
        if(filePercent>0 && filePercent<100)
        {
            return (<span className='text-white text-center'>
                {`uploading ${filePercent}%`}
            </span>)
        }
        if(filePercent===100 && !fileUploadError)
        {
            return (<span className='text-green-500 text-center'>Image Uploaded Successfully</span>)
        }

    }


  return (
    <div className='md:w-[50vw] xl:w-[30vw] h-[90vh] p-10 bg-[#000000]'>
        <div className="max-w-lg p-5 mx-auto">
            <h1 className='text-white text-center m-9 text-xl'>PROFILE</h1>
            <form className='flex flex-col gap-4'>
                <input onChange={(e)=>setFile(e.target.files[0])} type="file" ref={fileRef} hidden accept='image/*'/>
                <img src={formData.avatar||currentUser.avatar} alt="" className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2' onClick={()=>{fileRef.current.click()}}/>

                {fileStatusReview()}


                <input type="text" placeholder='name' defaultValue={currentUser.name} className='p-3 rounded-lg cursor-auto bg-[#2C2A2A] text-[#B4ADAD] focus:outline-none placeholder:text-[#B4ADAD]'/>
                <input type="text" placeholder='email' defaultValue={currentUser.email} className='p-3 rounded-lg cursor-auto bg-[#2C2A2A] text-[#B4ADAD] focus:outline-none placeholder:text-[#B4ADAD]'/>
                <input type="text" placeholder='username' defaultValue={currentUser.username} className='p-3 rounded-lg cursor-auto bg-[#2C2A2A] text-[#B4ADAD] focus:outline-none placeholder:text-[#B4ADAD]'/>
                <input type="password" placeholder='password' className='p-3 rounded-lg cursor-auto bg-[#2C2A2A] text-[#B4ADAD] focus:outline-none placeholder:text-[#B4ADAD]'/>
                <button className='bg-[#B4ADAD] text-[#2C2A2A] p-3 rounded-lg'>UPDATE USER</button>
            </form>
                <div className="flex justify-between py-4">
                    <p className='text-[#F6C598] hover:text-red-400 cursor-pointer'>DELETE ACCOUNT</p>
                    <p className='text-[#F6C598] hover:text-red-400 cursor-pointer'>SIGN OUT</p>
                </div>
        </div>
    </div>
  )
}
