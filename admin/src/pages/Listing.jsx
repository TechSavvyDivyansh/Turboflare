import React, { useState } from "react";
import CreateListing from "../Components/Listing/CreateListing";
import {Link} from 'react-router-dom'
import ManageVariants from "../Components/Listing/ManageVariants";

export default function Listing() {
  let [variantData,setVariantData]=useState([])
  return (
    <div className="flex flex-col gap-14 overflow-y-scroll h-[100vh] w-[85vw] overflow-x-hidden">
      <div className="flex justify-between px-32 py-7  bg-[#171717] border border-[#363636]">
        <p className="text-white cursor-pointer">CREATE LISTING</p>
        <Link to='view-listing'><p className="text-white cursor-pointer">VIEW ALL LISTING</p></Link>
      </div>
      <div className="flex flex-col items-center">
        <CreateListing variantData={variantData} setVariantData={setVariantData}/>
        <ManageVariants variantData={variantData} setVariantData={setVariantData}/>
      </div>
    </div>
  );
}
