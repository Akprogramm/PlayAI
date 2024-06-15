import React from 'react'
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import scanner from "./Assets/scanner.png";
import listening from "./Assets/listening.png";
import faceimage from "./Assets/faceimage.png";
import message2 from "./Assets/message2.png";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import {useDispatch, useSelector} from 'react-redux'
import { UseSelector } from 'react-redux'
import {setShow} from "../app/todoSlice"    

export default function Agent() {

const show = useSelector(state => state.show);   

  const Dispatch = useDispatch();

  const changeShow = () => {
      Dispatch(setShow(!show));  
      console.log(show);
    }    

  return (  
    <>
      <div className="bammberger z-5 xmd:hidden text-green-500 absolute top-1 right-1" onClick={changeShow} ><MenuIcon className="text-white" /></div> 
      <div className="flex flex-[1.87] xl:flex-[0.87] pt-10 pb-5"> 
        <div className="card h-full w-[55%] sm:w-[40%]  xl:w-[32%] m-auto">
          <div className="top1 flex">
            <div className="agentFace"> 
              <Image
              className="sm:w-auto" 
                src={faceimage}
                alt="sorry can't load this image right now"
              />
            </div>
            <div className="flex flex-col justify-center gap-1 pl-2">
              <div className="head agentHead font-bold">Aaron Levie</div>
              <div className="flex agentCmt items-center text-[#D9D9D9]"> 
                <Image
                  className="set-cmimg" 
                  src={message2} 
                  height={15}
                  alt="can't load image"
                /> <pre> </pre>
                2.7k conversations
              </div>
                <div className="agentParagraph">Co-founder of cloud-based content management Box.</div>
            </div>
            <div className="ak"><MoreHorizIcon className="text-[#B4FD83] p-0 relative top-0"/></div>
          </div>
          <div className="middle flex flex-col gap-3 mt-5">
          <div className="text-[#D9D9D9] text-[4.5vw] sm:text-base xx:text-2xl">Try asking me about...</div>
          <div className="w-full"><input className="bg-[#151515] w-full text-xs ssm:text-base p-1 ssm:p-2 rounded-md focus:ring focus:ring-[#B4FD83] focus:outline-none xx:p-3 xx:text-lg" type="text" placeholder="How did you start Box" /></div>
          <div className="w-full"><input className="bg-[#151515] w-full text-xs ssm:text-base p-1 ssm:p-2 rounded-md focus:ring focus:ring-[#B4FD83] focus:outline-none xx:p-3 xx:text-lg" type="text" placeholder="What makes a start up successful" /></div> 
          </div>
          <div className="imgBox pt-10 flex justify-center items-center"><Image className="imgScanner " src={scanner} alt="Sorry can't load image"/></div>
          <div className="mt-5 lisening flex items-center justify-center xx:text-3xl"> <Image className="h-5 w-5 xx:h-8 xx:w-8" src={listening} alt="Sorry can't load image" /><pre> </pre> listening... </div>
          <div className="flex justify-center items-center pt-2 pb-2 xx:text-2xl">0.07</div>
          <div className="btn bg-[#EF4444] pt-2 pb-2 flex justify-center items-center rounded-full txt-sm ssm:text-base xx:text-2xl xx:py-4">End Conversation</div>
        </div>
      </div> 
      </>
  )
}
