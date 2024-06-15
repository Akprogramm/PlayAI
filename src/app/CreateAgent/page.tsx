"use client"
import React from 'react'

import ReduxProvider from "../redux-provider";
import SideBar2 from '../../components/SideBar2';
import CreateAgent from '../../components/CreateAgent';

const page = () => { 
  return (
    <ReduxProvider> 
    <div className="flex h-screen overflow-hidden bg-[#000000]">
      <SideBar2 />      
      <CreateAgent />
    </div>
    </ReduxProvider>
  )
}

export default page
