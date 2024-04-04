import React, { useEffect, useState } from 'react'
import {CSVLink} from 'react-csv'

export default function CustomerData() {

  let [clientsData,setClientsData]=useState([])
  console.log(clientsData);

  let headers=[
    {label:'Username',key:'username'},
    {label:'Customer Name',key:'name'},
    {label:'Phone',key:'phone'},
    {label:'Email',key:'email'},
    {label:'City',key:'city'},
    {label:'User Since',key:'createdAt'}
  ]




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

        // setClientsData(data)
        setClientsData(data.map(item=>({...item,createdAt:item.createdAt.substring(0,4)})))
        
      } catch (error) {
        console.log(error);
      }
    }


    userData()

  },[])


  let handleDelete=async(id)=>{
      try {

        let res=await fetch(`/api/admin/deleteUser/${id}`,{
          method:"DELETE",
          headers:{
            'Content-type':'application/json'
          }
        })
        let data=await res.json()

        if(data.success==false)
        {
           log(data.message)
        }

        else
        {
          let updatedData=[...clientsData]
          setClientsData(updatedData.filter(user=>user._id!==id))
        }


      } catch (error) {
          console.log(error);
      }

  }


  return (
    <div className='p-10'>
       <p className='text-center text-2xl'>CUSTOMER DATA</p>
      <div className="m-10 flex gap-4">
        <span className='p-4 bg-[#161616]'>{clientsData.length} Users</span>
        <CSVLink data={clientsData} headers={headers} filename={'data.csv'} className='bg-[#161616] p-4 flex flex-col item-center'>Download CSV</CSVLink>
      </div>
      <table className='border-separate border-spacing-y-2 w-[80vw]'>
        <thead>
          <tr className='bg-[#2C2A2A]'>
            <th className='w-[12%] text-left p-4'>SR NO.</th>
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
        <tbody>
            {clientsData.map((data,index)=>{
              return(
                <tr key={index} className='bg-[#161616]'>
                  <td className='text-left p-5'>{index+1}</td>
                  <td className='text-left'>{data.username}</td>
                  <td className='text-left' >{data.name}</td>
                  <td className='text-left' >{data.phone}</td>
                  <td className='text-left' >{data.email}</td>
                  <td className='text-left '>{data.city}</td>
                  <td className='text-left'>{data.createdAt}</td>
                  <td>
                    <div className=" flex flex-col gap-3 p-3">
                      <button className='px-2 bg-[#2f2f2f]' onClick={()=>{handleDelete(data._id)}}>DELETE</button>
                      <button className='px-2 bg-[#686767] text-black'>CONTACT</button>
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
