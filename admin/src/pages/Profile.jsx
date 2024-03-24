import React, { useEffect, useRef, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {updateAdminFailiure,updateAdminStart,updateAdminSuccess} from '../Redux/Admin/adminSlice.js'
import {app} from '../firebase.js'
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from 'firebase/storage'


export default function Profile() {
    let {currentAdmin,loading,error}=useSelector(state=>state.admin)
    const fileRef=useRef(null)
    let dispatch=useDispatch()

    let [formData,setFormData]=useState({})
    let [File,setFile]=useState(undefined)
    const [filePercent,setFilePercent]=useState(0)
    const [fileUploadError,SetFileUploadError]=useState(false)
    const [updateSuccess,setUpdateSuccess]=useState(false)

    console.log(filePercent,formData,currentAdmin._id);


    let handleProfileChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.id]:e.target.value
        })
    }



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
        else if(filePercent>0 && filePercent<100)
        {
            return (<span className='text-white text-center'>
                {`uploading ${filePercent}%`}
            </span>)
        }
        else if(filePercent===100 && !fileUploadError)
        {
            return (<span className='text-green-500 text-center'>Image Uploaded Successfully</span>)
        }

    }

    let handleUpdateAdminSubmit=async(e)=>{
        e.preventDefault()
        try {
            updateAdminStart()

            let res=await fetch(`/api/admin/updateAdmin/${currentAdmin._id}`,{
                method:"PATCH",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(formData)
                
            })
            let data=await res.json()

            if(data.success=false)
            {
                dispatch(updateAdminFailiure(data.message))
                return 
            }
            
            dispatch(updateAdminSuccess(data))
            setUpdateSuccess(true)



        } catch (error) {
            dispatch(updateAdminFailiure(error.message))
        }
    }


    
  return (
    <div className='p-7 w-[85vw] h-[100vh] flex items-center justify-center'>
        <form className='w-[25vw] flex flex-col items-center gap-4' onSubmit={handleUpdateAdminSubmit}>
            <input onChange={(e)=>setFile(e.target.files[0])} type="file" name="" id="avatar" ref={fileRef} hidden accept='image/*'/>
            <img src={formData.avatar||currentAdmin.avatar} alt="" className='w-[300px] h-[300px] rounded-full m-2 cursor-pointer object-cover' onClick={()=>{fileRef.current.click()}}/>
            {fileStatusReview()}
            <input type="text" id="name" placeholder='Name' defaultValue={currentAdmin.name} className='bg-[#161616] p-3 rounded-lg w-full focus:outline-none text-center placeholder:text-[#b6b6b6]' onChange={handleProfileChange}/>
            <input type="text" id="username" placeholder='Username' defaultValue={currentAdmin.username} className='bg-[#161616] p-3 rounded-lg w-full focus:outline-none text-center placeholder:text-[#b6b6b6]' onChange={handleProfileChange}/>
            <input type="text" id="email" placeholder='Email' defaultValue={currentAdmin.email} className='bg-[#161616] p-3 rounded-lg w-full focus:outline-none text-center placeholder:text-[#b6b6b6]' onChange={handleProfileChange}/>
            
            <select id="designation" className='bg-[#161616] py-3 w-full rounded-lg text-white placeholder:text-[#A69C93] cursor-pointer focus:outline-none px-10 text-center' onChange={handleProfileChange} defaultValue={currentAdmin.designation||""}>
                    <option value="" disabled>-- Select your designation --</option>
                    <option>CEO</option>
                    <option>CTO</option>
                    <option>General Manager</option>
                    <option>Software developer</option>
                    <option>Data Analyst</option>
                    <option>Business Analyst</option>
                    <option>HR</option>
                    <option>System Administrator</option>
            </select>

            <input type="tel" id="phone" placeholder='phone' defaultValue={currentAdmin.phone} className='bg-[#161616] p-3 rounded-lg w-full focus:outline-none text-center placeholder:text-[#b6b6b6]' onChange={handleProfileChange}/>
            <input type="password" id="password" placeholder='password' className='bg-[#161616] p-3 rounded-lg w-full focus:outline-none text-center placeholder:text-[#b6b6b6]' onChange={handleProfileChange}/>
            <button className='p-3 bg-[#2C2A2A] w-full rounded-lg' disabled={loading}>{loading?"LOADING...":"UPDATE ADMIN DETAILS"}</button>
            <p className='text-red-700 mt-5 text-center'>{error?error:""}</p>
            <p className='text-green-700 mt-5 text-center'>{updateSuccess?"User updated successfully":""}</p>
        </form>
    </div>
  )
}
