import React from 'react'
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import faceimage from "./Assets/faceimage.png";
import message2 from "./Assets/message2.png"

import {useDispatch, useSelector} from 'react-redux' 
import { UseSelector } from 'react-redux'
import {setShow} from "../app/todoSlice"    
import { useRouter } from 'next/navigation'

export default function AgentProfile() {

  const router = useRouter(); 

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

        <div className="card h-full w-[55%] sm:w-[45%] xmd:w-[50%]  xl:w-[35%] xx:w-[32%] m-auto flex flex-col justify-center relative">
        <div className='bg-[#151515] p-3 xmd:p-5 rounded-xl flex flex-col items-center gap-5'>
          <div className="top1 flex rounded-xl bg-[#151515]"> 
            <div className="agentFace bg-[#151515]">   
              <Image 
              className="sm:w-auto xx:w-36"  
                src={faceimage}
                alt="sorry can't load this image right now"
              /> 
            </div>
            <div className="bg-[#151515] flex flex-col justify-center gap-1 pl-2 relative">
              <div className="head agentHead font-bold flex justify-between items-center ">Aaron Levie 
              <MoreHorizIcon className="bg-[#1C1C1C] text-[#B4FD83] rounded-full p-1 text-[20px]"/></div>
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
          </div>
          <div className="text-white relative flex flex-wrap gap-2 text-[1.5vw] sm:text-[1vw]">
            <div className="startup py-1 px-3 bg-[#2B2B2B] text-[#b0b0b0] rounded-full">Startup growth strategies</div>
            <div className="leader py-1 px-3 bg-[#2B2B2B] text-[#b0b0b0] rounded-full">Leadership style</div>
            <div className="box py-1 px-3 bg-[#2B2B2B] text-[#b0b0b0] rounded-full">Box</div>
            <div className="content py-1 px-3 bg-[#2B2B2B] text-[#b0b0b0] rounded-full">Content management</div>
          </div>
          </div>

          <div className="btn bg-[#B4FD83] text-black py-2 flex justify-center items-center rounded-full  ssm:text-base font-bold absolute bottom-0 w-[100%] xx:text-3 xx:p-4" onClick={()=>{router.push('/Agent')}} >Talk</div>
        </div>
      </div> 
      </>
  )
}
