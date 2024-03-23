import React, { useEffect, useState } from 'react'

export default function CustomerData() {

  let [clientsData,setClientsData]=useState([])
  console.log(clientsData);

  useEffect(()=>{
    let userData=async()=>{
      try {
        let res=await fetch('/api/admin/userData')
        let data=await res.json()
        if(data.success==false)
        {
          console.log(data.message);
          return;
        }

        setClientsData(data)

        
      } catch (error) {
        console.log(error);
      }
    }


    userData()

  },[])


  return (
    <div className='p-10'>
      <div className="m-10 flex gap-4">
        <span className='p-4 bg-[#161616]'><span>{clientsData.length}</span> users</span>
        <span className='p-4 bg-[#161616] cursor-pointer'>DOWNLOAD REPORT</span>
      </div>
      <table className='flex flex-col gap-4 w-[80vw]'>
        <thead>
          <tr className='flex bg-[#2C2A2A] px-8 py-2 rounded-lg'>
            <th className='text-white text-left w-[7%] '>SR NO.</th>
            <th className='text-white text-left w-[15%] '>Username</th>
            <th className='text-white text-left w-[16%] '>Customer Name</th>
            <th className='text-white text-left w-[13%] '>Phone</th>
            <th className='text-white text-left w-[20%] '>Email</th>
            <th className='text-white text-left w-[13%] '>City</th>
            <th className='text-white text-left w-[12.5%] '>User Since</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className='flex flex-col gap-3'>
            {clientsData.map((data,index)=>{
              return(
                <tr key={index} className='flex justify-between items-center bg-[#161616] px-8 py-2 '>
                  <td className='text-white w-[4%] text-left '>{index+1}</td>
                  <td className='text-white w-[14%] text-left '>{data.username}</td>
                  <td className='text-white w-[16%] text-left '>{data.name}</td>
                  <td className='text-white w-[10%] text-left '>{data.phone}</td>
                  <td className='text-white w-[19%] text-left '>{data.email}</td>
                  <td className='text-white w-[12%] text-center '>{data.city}</td>
                  <td className='text-white w-[15%] text-center'>{data.createdAt.substring(0,4)}</td>
                  <td>
                    <div className=" flex flex-col gap-3">
                      <button className='px-2 bg-red-700'>DELETE</button>
                      <button className='px-2 bg-green-700'>CONTACT</button>
                    </div>
                  </td>
                </tr>
              )
            })}
        </tbody>

      </table>
    </div>
  )
}
