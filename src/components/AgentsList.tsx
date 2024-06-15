import React from 'react'
import Box from "./Box"
import MenuIcon from '@mui/icons-material/Menu';

import {useDispatch, useSelector} from 'react-redux'
import { UseSelector } from 'react-redux'
import {setShow} from "../app/todoSlice"

export default function AgentsList(props) {

  const {show} = props;   

  const Dispatch = useDispatch();

  const changeShow = () => {
    Dispatch(setShow(!show));
    console.log(show);    
  }

  return (
    <div className="example flex flex-[1.87] xl:flex-[0.87] flex-col w-screen sm:pl-10 sm:pr-10 overflow-scroll xx:px-[9%]">
     <div className="bammberger z-50 xmd:hidden text-green-500 absolute top-1 right-1" onClick={changeShow} ><MenuIcon className="text-white" /></div> 
    <div className="relative search flex flex-col items-center w-full pt-8 pb-8">
        <input className="h-9 xx:h-12 z-1 w-[60%] sm:w-[40%] text-white rounded-2xl text-center bg-[#151515]" type="text" name="" id="" placeholder="Search for an agent"/>
      </div>      
        <h1 className="text-bold text-white text-2xl mb-5">Trending Today</h1>    
        <div className="tn grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-5 xx:mx-auto xx:gap-10">              
        <Box /> 
        <Box />    
        <Box />
        </div>

        <h1 className="text-bold text-white text-2xl mt-10 mb-5">You may also like</h1>    
        <div className="tn grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-5 xx:mx-auto xx:gap-10">              
        <Box />
        <Box />    
        <Box /> 
        <Box />
        <Box />    
        <Box />
        <Box />
        <Box />    
        <Box />
        </div>
      </div> 
  )   
}
