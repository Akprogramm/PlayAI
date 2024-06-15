"use client"

import React from 'react'

import ReduxProvider from "../redux-provider";
import SideBar from '../../components/SideBar';
import Conversations from '../../components/Conversations';

const page = () => {
  return (
    <ReduxProvider>
    <div className="flex h-screen overflow-hidden w-screen bg-[#000000]">
      <SideBar />      
      <Conversations /> 
    </div>
    </ReduxProvider>
  )
}

export default page
