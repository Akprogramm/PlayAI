import React from 'react'

import {useDispatch, useSelector} from 'react-redux'
import { UseSelector } from 'react-redux'
import {setShow} from "../app/todoSlice" 
import MenuIcon from '@mui/icons-material/Menu';
import Card from './Card';

const Myagents = () => {

    const show = useSelector((state)=> state.show); 

    const Dispatch = useDispatch();
  
    const changeShow = () => {
      Dispatch(setShow(!show));
      console.log(show);
    }
  return (    
    <div className="w-full xmd:w-[calc(100%-210px)] overflow-y-scroll example">
        <div className="bammberger z-50 xmd:hidden justify-start text-green-300 absolute top-1 right-1" onClick={changeShow} ><MenuIcon className="text-white" /></div> 
     <div className="text-white font-bold flex flex-col sm:flex-row sm:text-2xl ssm:w-[85%] xmd:w-[80%] xl:w-[65%] m-auto p-2 sticky top-0 bg-black">My Agents  <pre className="flex items-end font-bold text-[#B4FD83] text-sm sm:text-base">   + create New Agents </pre></div>
     <div className="text-white font-bold grid sm:grid-cols-2 gap-3 text-2xl ssm:w-[85%] xmd:w-[80%] xl:w-[65%] m-auto xx:w-[45%]">
      <Card />
      <Card ppr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam odio, tempore eius aliquid dolores molestiae sequi autem earum, ipsum nobis molestias id, iure totam nostrum itaque pariatur facilis officiis deserunt."/> 
      <Card /> 
      <Card /> 
     </div>
    </div> 
  )
}      

export default Myagents
