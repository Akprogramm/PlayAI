"use client"
import React, { useState } from 'react'
import Board from "../../components/Board" 

import ReduxProvider from "../redux-provider";
 
export default function page() { 

  return (
    <ReduxProvider>
    <div className="flex p-0 m-0">   
      <Board/>   
    </div>   
    </ReduxProvider>
  )  
}    

    