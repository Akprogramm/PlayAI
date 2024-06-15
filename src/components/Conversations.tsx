import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import {useDispatch, useSelector} from 'react-redux'
import { UseSelector } from 'react-redux'
import {setShow} from "../app/todoSlice"
import Image from 'next/image';
import Agent from './Assets/agent.png'; 
import date from "./Assets/date.png";
import duration from "./Assets/duration.png";
import contact from "./Assets/contact.png"; 
import button from "./Assets/button.png";
import ConversationsList from './ConversationsList';
import faceimage from "./Assets/faceimage.png";
import faceimage2 from "./Assets/faceimage2.png";
import faceimage3 from "./Assets/faceimage3.png";
import faceimage4 from "./Assets/faceimage4.png";

const Conversations = () => {
  
  const show = useSelector((state)=> state.show); 

  const Dispatch = useDispatch();

  const changeShow = () => {
    Dispatch(setShow(!show));
    console.log(show);    
  }
 
  return (   
    <div className="text-white example flex overflow-scroll scroll-smooth sm:flex-[1.87] xl:flex-[0.87] flex-col  pb-3 xl:px-10 xx:px-[10%]">   
     
     <div className="bammberger z-50 xmd:hidden text-green-500 absolute top-1 right-1" onClick={changeShow} ><MenuIcon className="text-white" /></div>
       <h1 className="text-xl sm:text-3xl text-center font-bold mb-5 w-[100%] top-0 sticky bg-black 2xl:text-4xl">Conversations</h1>

    <div className="ok xl:w-[82%] mx-auto min-w-fit pl-3 pr-3 ">   

       <div className="border-b-[0.5px] border-[#888888] text-[#888888] min-w-fit grid grid-cols-5 gap-3 pb-3 ">
        <div className=" heading flex items-center text-[2vw] sm:text-[1.3vw] xmd:text-[0.8vw]"> 
        <Image className="w-[40%] sm:w-[30%] xmd:h-10 xmd:w-10 text-[1.8vw] sm:text-[1.5vw] xmd:text-[1vw]" src={Agent} alt="agent.png"/><pre> </pre>Agent In Use</div>
        <div className=" flex items-center text-[2.5vw] sm:text-[1.3vw] xmd:text-[0.8vw]"><Image className="xmd:h-auto w-[1.8vw] xmd:w-[0.8vw] xx:h-6 xx:w-6" src={date} alt="date.png"/><pre> </pre>Date</div>
        <div className="flex items-center text-[2.5vw] sm:text-[1.3vw] xmd:text-[0.8vw]"><Image className="h-auto w-[1.8vw] sm:w-[1.2vw] xmd:w-[0.8vw] xx:h-6 xx:w-6" src={duration} alt="duration.png"/><pre> </pre>Duration</div>
        <div className="flex items-center text-[2.2vw] sm:text-[1.3vw] xmd:text-[0.8vw]"><Image className="h-auto w-[1.8vw] sm:w-[1.2vw] xmd:w-[0.8vw] xx:h-6 xx:w-6" src={contact} alt="contact.png"/><pre> </pre>Contact ID</div> 
        <div className=" flex items-center justify-end text-[2.5vw] sm:text-[1.3vw] xmd:text-[0.8vw]"><Image className="w-[45%] h-auto xx:h-12 xx:w-28" src={button} alt="button.png"/></div>   
        </div> 

         < ConversationsList faceimage={faceimage2} name="wolfcycle Crypto Arena" date="Feb 4,2024" duration="6:00" contact="(484) 764-6058" />
        < ConversationsList faceimage={faceimage3} name="wolfcycle USC" date="Feb 4,2024" duration="7:42" contact="(484) 764-6058" />
        < ConversationsList faceimage={faceimage3} name="wolfcycle USC" date="Feb 4,2024" duration="12:00" contact="(484) 764-6058" />
        < ConversationsList faceimage={faceimage2} name="wolfcycle Crypto Arena" date="Feb 4,2024" duration="3:52" contact="(484) 764-6058" />
        < ConversationsList faceimage={faceimage2} name="wolfcycle Crypto Arena" date="Feb 4,2024" duration="9:01" contact="(484) 764-6058" />
        < ConversationsList faceimage={faceimage2} name="wolfcycle Crypto Arena" date="Feb 4,2024" duration="10:33" contact="(484) 764-6058" />
        < ConversationsList faceimage={faceimage3} name="wolfcycle USC" date="Feb 4,2024" duration="7:59" contact="(484) 764-6058" />
        < ConversationsList faceimage={faceimage4} name="wolfcycle USC" date="Feb 4,2024" duration="2:12" contact="(484) 764-6058" />
        < ConversationsList faceimage={faceimage2} name="wolfcycle Crypto Arena" date="Feb 4,2024" duration="3:52" contact="(484) 764-6058" />
        < ConversationsList faceimage={faceimage2} name="wolfcycle Crypto Arena" date="Feb 4,2024" duration="9:01" contact="(484) 764-6058" />
        < ConversationsList faceimage={faceimage2} name="wolfcycle Crypto Arena" date="Feb 4,2024" duration="10:33" contact="(484) 764-6058" />
        </div>
    </div>
  )
}

export default Conversations