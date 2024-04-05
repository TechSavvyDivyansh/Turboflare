import React, { useEffect, useState } from 'react'
import TeamDataPopup from '../Components/TeamData/TeamDataPopup'

export default function TeamData() {

  let [teamData,setTeamData]=useState([])
  let [openPopup,setOpenPopup]=useState(false)
  


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

  let ToggleAdmin=async(id,currentIsAdmin)=>{
      try {
        let res=await fetch(`/api/admin/toggle-admin/${id}`,{
          method:"PATCH"
        })

        let data=res.json()

        if(res.ok)
        {
            setTeamData(prevTeamData => {
                  return prevTeamData.map(member => {
                          if (member._id === id) {
                            return { ...member, isAdmin: !currentIsAdmin };
                          }
                          return member;
                  });
            });
        } 
      } catch (error) {
        console.log(error);
      }
  }

  let handleToggleDisable=async(id,currentIsEnable)=>{
      try {
          let res=await fetch(`/api/admin/toggle-disable/${id}`,{
            method:"PATCH"
          })

          let data=res.json()
          if(res.ok)
          {
             setTeamData(prevTeamData=>{
                  return prevTeamData.map((member)=>{
                      if(member._id===id)
                      {
                        return {...member,isEnabled:!currentIsEnable}
                      }
                      return member
                  })
             })
          }


      } catch (error) {
          console.log(error);
      }
  }


  

  return (
    <div className='w-[85vw] h-[100vh] p-7'>
      <p className='text-center text-2xl'>TEAM DATA</p>
      <div className="">
          <button className='p-3 my-5 bg-[#222222]' onClick={()=>{setOpenPopup(true)}}>CREATE NEW ADMIN</button>
          {/* <p>{total admin}</p> */}
      </div>

      {openPopup && <TeamDataPopup setOpenPopup={setOpenPopup} teamData={teamData} setTeamData={setTeamData}/>}

      <div className="overflow-x-auto">
              <table className='border-separate border-spacing-y-[2px] border-spacing-x-[2px]'>
                  <thead>
                    <tr className='bg-[#2C2A2A]'>
                      <th className='w-[6%] text-center p-4'>Sr No.</th>
                      <th className='w-[12%] text-center'>Name</th>
                      <th className='w-[12%] text-center'>Username</th>
                      <th className='w-[12%] text-center'>Email</th>
                      <th className='w-[12%] text-center'>Designation</th>
                      <th className='w-[12%] text-center'>Phone</th>
                      <th className='w-[12%] text-center'></th>
                      <th className='w-[12%] text-center'></th>
                    </tr>
                  </thead>
                  <tbody>
                      {teamData.map((team,index)=>{
                          const isAdmin=team.isAdmin
                          const isEnabled=team.isEnabled
                          return <tr key={index} className='bg-[#161616]'>
                                    <td className={`text-center w-[6%] p-5 ${isEnabled?"text-white":"text-[#4a4a4a]"}`}>{index+1}</td>
                                    <td className={`text-center ${isEnabled?"text-white":"text-[#4a4a4a]"}`}>{team.name}</td>
                                    <td className={`text-center ${isEnabled?"text-white":"text-[#4a4a4a]"}`}>{team.username}</td>
                                    <td className={`text-center ${isEnabled?"text-white":"text-[#4a4a4a]"}`}>{team.email}</td>
                                    <td className={`text-center p-5 ${isEnabled?"text-white":"text-[#4a4a4a]"}`}>{team.designation}</td>
                                    <td className={`text-center ${isEnabled?"text-white":"text-[#4a4a4a]"}`}>{team.phone}</td>
                                    <td className='text-center flex p-4 gap-3'>
                                      <input type="checkbox" disabled={!isEnabled} checked={isAdmin}/>
                                      <button className={`text-center ${isEnabled?"text-white":"text-[#4a4a4a]"}`} disabled={!isEnabled} onClick={()=>{ToggleAdmin(team._id,isAdmin)}}>{isAdmin?"SUPER ADMIN":"ADMIN"}</button>
                                    </td>
                                    <td className='text-center'><button className='p-2' onClick={()=>{handleToggleDisable(team._id,isEnabled)}} >{isEnabled?"Disable Admin":"ENABLE ADMIN"}</button></td>
                                </tr>
                      })}
                  </tbody>
              </table>
      </div>
    </div>
  )
}
