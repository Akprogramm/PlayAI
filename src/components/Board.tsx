"use client"
import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import AgentsList from './AgentsList';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Agent from './Agent';




import {useDispatch, useSelector} from 'react-redux'
import { UseSelector } from 'react-redux'
import { addoTodo } from '../app/todoSlice';

export default function Board() {
  
  const ss = useSelector(st=> st);
 
  return ( 
    <div className="flex h-screen overflow-hidden w-screen bg-[#000000]"> 
      <SideBar/> 
      <AgentsList show={ss.show}/>
    </div> 
  )  
}