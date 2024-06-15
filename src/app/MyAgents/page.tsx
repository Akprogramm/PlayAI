"use client"
import React from 'react'
import Myagents from '../../components/Myagents'
import SideBar2 from "../../components/SideBar2"
import ReduxProvider from "../redux-provider";

const page = () => {
  return (
    <ReduxProvider>
    <div className="flex max-h-screen overflow-hidden w-screen bg-[#000000]">
      <SideBar2 />  
      <Myagents />
    </div>  
    </ReduxProvider> 
  )
}

export default page
