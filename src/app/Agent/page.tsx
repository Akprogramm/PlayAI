"use client"
import React from "react";
import SideBar from "../../components/SideBar";

import Agent from "../../components/Agent";

import ReduxProvider from "../redux-provider";

const page = () => { 


  return (
    <ReduxProvider>
    <div className="flex max-h-screen h-screen overflow-hidden w-screen bg-[#000000] text-white">
     <SideBar /> 
     <Agent/>  
    </div>
    </ReduxProvider>
  );
};

export default page;
