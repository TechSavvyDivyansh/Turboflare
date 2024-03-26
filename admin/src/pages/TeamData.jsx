import React, { useEffect, useState } from 'react'

export default function TeamData() {

  let [teamData,setTeamData]=useState([])
  let [newAdminData,setNewAdminData]=useState({})
  console.log(newAdminData)
  console.log(teamData);


  useEffect(()=>{
    let getTeamData=async()=>{

      try {
        let res=await fetch(`/api/admin/teamData`)
        let data=await res.json()

        if(data.success==false)
        {
          console.log(data.message);
        }

        setTeamData(data) 

      } catch (error) {
        console.log(error);
      }

    }

    getTeamData()

  },[])


  let handleNewAdminChange=(e)=>{
      setNewAdminData({
        ...newAdminData,
        [e.target.id]:e.target.value 
      })
  }

  let handleAdminSubmit=async(e)=>{
      e.preventDefault()

      try {

        let res=await fetch('/api/adminAuth/sign-up',{
          method:"POST",
          headers:{
            "Content-type":"application/json"
          },
          body:JSON.stringify(newAdminData)
        })
        let data=res.json()
        console.log(data)

        let emailres=await fetch('/api/adminAuth/email',{
          method:"POST",
          headers:{
            "Content-type":"application/json"
          },
          body:JSON.stringify({
             "email":newAdminData.email,
             "subject":`hello ${newAdminData.name}`,
             "messageText":`username:${newAdminData.username} password:${newAdminData.password}`
          })
        })

        let emailData=emailres.json()
        console.log(emailData);
        
      } catch (error) {
        console.log(error);
      }


  }

  return (
    <div className='w-[85vw] h-[100vh] p-7'>

      <div className="flex flex-col items-center p-14">
        <p className='m-2'>CREATE NEW ADMIN</p>
        <form className='flex flex-col items-center gap-2 w-[20vw]' onSubmit={handleAdminSubmit}>
            <input type="text" placeholder='ENTER NAME' className='bg-[#161616] p-2 text-center w-full focus:outline-none' onChange={handleNewAdminChange} id="name"/>
            <input type="text" placeholder='ENTER USERNAME' className='bg-[#161616] p-2 text-center w-full focus:outline-none' onChange={handleNewAdminChange} id="username"/>
            <input type="text" placeholder='ENTER EMAIL' className='bg-[#161616] p-2 text-center w-full focus:outline-none' onChange={handleNewAdminChange} id="email"/>
            <input type="text" placeholder='ENTER PASSWORD' className='bg-[#161616] p-2 text-center w-full focus:outline-none' onChange={handleNewAdminChange} id="password"/>
            <button className='p-2 bg-[#2C2A2A] w-full'>CREATE ADMIN</button>
        </form>
      </div>


      <div className="overflow-x-auto">
              <table className='border-separate border-spacing-y-2'>
                  <thead>
                    <tr className='bg-[#2C2A2A]'>
                      <th className='w-[12%] text-left p-4'>Sr No.</th>
                      <th className='w-[12%] text-left'>Name</th>
                      <th className='w-[12%] text-left'>Username</th>
                      <th className='w-[12%] text-left'>Email</th>
                      <th className='w-[12%] text-left'>Designation</th>
                      <th className='w-[12%] text-left'>Phone</th>
                      <th className='w-[12%] text-left'></th>
                    </tr>
                  </thead>
                  <tbody>
                      {teamData.map((team,index)=>{
                        const isAdmin=team.isAdmin
                          return <tr key={index} className='bg-[#161616]'>
                                    <td className='text-left p-5'>{index+1}</td>
                                    <td className='text-left'>{team.name}</td>
                                    <td className='text-left'>{team.username}</td>
                                    <td className='text-left'>{team.email}</td>
                                    <td className='text-left'>{team.designation}</td>
                                    <td className='text-left'>{team.phone}</td>
                                    <td className='text-left flex p-4 gap-3'>
                                      <input type="checkbox" checked={isAdmin}/>
                                      <button>{isAdmin?"REMOVE ADMIN":"MAKE ADMIN"}</button>
                                    </td>
                                </tr>
                      })}
                  </tbody>
              </table>
      </div>
    </div>
  )
}
