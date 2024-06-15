"use client"

import React from 'react'
import ReduxProvider from "../redux-provider";
import Community from '../../components/Community';
import SideBar from '../../components/SideBar';
 
const page = () => {
  return (
    <ReduxProvider>
    <div className="flex max-h-screen overflow-hidden w-screen bg-[#000000]">
      <SideBar />  
      <Community />
    </div>
    </ReduxProvider>
  )
}

export default page 