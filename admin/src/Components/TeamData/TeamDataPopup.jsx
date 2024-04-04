import React, { useState } from 'react'

export default function TeamDataPopup(props) {

    let [newAdminData,setNewAdminData]=useState({})
    let [loading,setLoading]=useState(false)
    let handleNewAdminChange=(e)=>{
        setNewAdminData({
          ...newAdminData,
          [e.target.id]:e.target.value 
        })
    }
  
    let handleAdminSubmit=async(e)=>{
        e.preventDefault()
        setLoading(true)
  
        try {
  
          let res=await fetch('/api/adminAuth/sign-up',{
            method:"POST",
            headers:{
              "Content-type":"application/json"
            },
            body:JSON.stringify(newAdminData)
          })
  
  
          if(res.ok)
          {
            let data=res.json()
            props.setTeamData([...props.teamData,newAdminData])
          }
  
          let emailres=await fetch('/api/adminAuth/email',{
            method:"POST",
            headers:{
              "Content-type":"application/json"
            },
            body:JSON.stringify({
               "email":newAdminData.email,
               "subject":`hello ${newAdminData.name}`,
               "messageText":`
               <head>
                  <style>      
                        h1 {
                            color: #333333;
                            text-align:center;
                        }
                
                        p {
                            color: #666666;
                            text-align:center;
                        }
                
                        .button {
                            background-color: #161616;
                            color: white;
                            text-decoration: none;
                            padding: 10px 20px;
                            border-radius: 5px;
                            cursor:pointer;
                            margin-x:auto;
                            margin-left:670px;
                            margin-top:20px;                          
                        }
                
                        .button:hover {
                            background-color: black;
                        }
                
                        .footer {
                            margin-top: 60px;
                            text-align: center;
                            color: #999999;
                        }
  
                        .main-info
                        {
                            font-weight:600;
                            color:black;
                        }
  
                  </style>
               </head> 
               <body>
                      <div class="container">
                          <h1 class="heading">Welcome to Turboflare🥳</h1>
                          <p>Congratulations on joining our team! We're thrilled to have you on board.</p>
                          <p>Your username: <span class="main-info">${newAdminData.username}</span></p>
                          <p>Your temporary password: <span class="main-info">${newAdminData.password}</span></p>
                          <p>Please log in to our website using the credentials provided and update your profile.</p>
                          <a href="www.google.com" class="button" style="color:white;">Log In to your Account</a>
                      </div>
                      <div class="footer">
                          <p>This email was sent by Turboflare. If you have any questions, please contact our support team.</p>
                          <p>EMAIL- divyanshmodi2510@gmail.com PHONE:9137228225</p>
                          <p>©<span> COPYRIGHT-TURBOFLARE</span></p>
                      </div>
               </body>`
            })
          })
  
          let emailData=emailres.json()

          if(emailData.success==false)
          {
            setLoading(false)
            console.log(emailData.message);
          }

          setLoading(false)
          props.setOpenPopup(false)
          
        } catch (error) {
          setLoading(false)
          console.log(error);
        }
  
  
    }
  return (
    <div className='w-[100vw] h-[100vh] absolute top-0 left-0 flex items-center justify-center bg-[#413f3f94] backdrop-blur'>
        <div className="flex flex-col items-end p-14 bg-black rounded ">
                <button disabled={loading} onClick={()=>{props.setOpenPopup(false)}} className={`absolute translate-x-9 -translate-y-11 ${loading?"text-[#515050]":"text-[#ffffff]"}`}><i className='bx bxl-xing text-2xl'></i></button>
                <form className='flex flex-col items-center gap-5 w-[20vw]' onSubmit={handleAdminSubmit}>
                    <p className='mb-5'>CREATE NEW ADMIN</p>
                    <input type="text" placeholder='ENTER NAME' className='bg-[#161616] p-3 text-left w-full focus:outline-none rounded' onChange={handleNewAdminChange} id="name"/>
                    <input type="text" placeholder='ENTER USERNAME' className='bg-[#161616] p-3 text-left w-full focus:outline-none rounded' onChange={handleNewAdminChange} id="username"/>
                    <input type="text" placeholder='ENTER EMAIL' className='bg-[#161616] p-3 text-left w-full focus:outline-none rounded' onChange={handleNewAdminChange} id="email"/>
                    <input type="text" placeholder='ENTER PASSWORD' className='bg-[#161616] p-3 text-left w-full focus:outline-none rounded' onChange={handleNewAdminChange} id="password"/>
                    <button className='p-4 rounded m-3 bg-[#2C2A2A] w-full' disabled ={loading}>{loading?"CREATING....":"CREATE ADMIN"}</button>
                </form>
        </div>
    </div>
  )
}
