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


  

  return (
    <div className='w-[85vw] h-[100vh] p-7'>

      <div className="">
          <button className='p-3 my-5 bg-[#222222]' onClick={()=>{setOpenPopup(true)}}>CREATE NEW ADMIN</button>
          {/* <p>{total admin}</p> */}
      </div>

      {openPopup && <TeamDataPopup setOpenPopup={setOpenPopup} teamData={teamData} setTeamData={setTeamData}/>}

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
