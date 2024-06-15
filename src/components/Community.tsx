import React from 'react'

import {useDispatch, useSelector} from 'react-redux'
import { UseSelector } from 'react-redux'
import {setShow} from "../app/todoSlice" 
import MenuIcon from '@mui/icons-material/Menu';
import Box from './Box';
import Messages from "./Messages"


const Community = () => {
  
  const show = useSelector((state)=> state.show); 

  const Dispatch = useDispatch();

  const changeShow = () => {
    Dispatch(setShow(!show));
    console.log(show);    
  }

  return (
    <div className="example xx:px-[10%] flex flex-[1.87] xl:flex-[0.87] flex-col overflow-scroll py-10 px-2 sm:px-10">
      <div className="bammberger z-50 xmd:hidden text-green-500 absolute top-1 right-1" onClick={changeShow} ><MenuIcon className="text-white" /></div> 
      <div className="">
      <h1 className="text-white text-2xl font-bold mb-5">Featured agents</h1>
      <div className="tn grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-5">
      <Box />
      <Box /> 
      <Box />
      </div>

      <h1 className="text-white text-2xl font-bold mt-10 mb-5">Jump right in</h1>
      <div className="msgPar columns-2 lg:columns-3">
      <Messages msg="What’s up, I’m one of the founders at playHT. I’m here to answer your questions on anything about our products. What’s up, I’m one of the founders at playHT. I’m here to answer your questions on anything about our products." name="Hammad Sayed"/> 
      <Messages msg="10 small productivity hacks that completely changed my workflow..." name="Ali Abdaal"/>
      <Messages msg="What makes a startup success? I think it really comes down to these three things..." name="Aeron Levie"/>
      <Messages msg="What makes a startup success? I think it really comes down to these three things..." name="Eren Yeager"/>
      <Messages msg="What makes a startup success? I think it really comes down to these three things..." name="Aeron Levie"/>
      <Messages msg="What’s up, I’m one of the founders at playHT. I’m here to answer your questions on anything about our products. What’s up, I’m one of the founders at playHT. I’m here to answer your questions on anything about our products." name="Hammad Sayed"/> 
      <Messages msg="10 small productivity hacks that completely changed my workflow..." name="Ali Abdaal"/>
      <Messages msg="What makes a startup success? I think it really comes down to these three things..." name="Eren Yeager"/>
      </div> 
      </div>
    </div>
  )
}

export default Community
