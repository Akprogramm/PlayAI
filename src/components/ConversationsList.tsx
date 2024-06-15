import Image from 'next/image'
import React from 'react'
import Agent from './Assets/agent.png'; 
import date from "./Assets/date.png";
import duration from "./Assets/duration.png";
import contact from "./Assets/contact.png";
import button from "./Assets/button.png";
import faceimage from "./Assets/faceimage.png";
import faceimage2 from "./Assets/faceimage2.png";
import faceimage3 from "./Assets/faceimage3.png";
import faceimage4 from "./Assets/faceimage4.png";
import transcript from "./Assets/transcript.png";
import thumbsUp from "./Assets/thumbsUp.png";
import thumbsDown from "./Assets/thumbsDown.png";

const ConversationsList = (props) => {   
  return (
    <div className="border-b-[0.5px] border-[#888888] grid gap-3 grid-cols-5 pt-3 pb-2">
        <div className="heading flex items-center leading-normal min-w-fit text-[1.5vw] xmd:text-[1vw]">
        <Image className="w-[30%] xmd:h-10 xmd:w-10" src={props.faceimage} alt="agent.png"/><pre> </pre>{props.name}</div>
        <div className="flex items-center text-[1.7vw] sm:text-[1.3vw] xmd:text-[0.8vw]"><Image className="xmd:h-auto w-[1.8vw] sm:w-[1.2vw] xmd:w-[0.8vw]" src={date} alt="date.png"/><pre> </pre>{props.date}</div>
        <div className="flex items-center text-[1.7vw] sm:text-[1.3vw] xmd:text-[0.8vw]"><Image className=" xmd:h-auto w-[1.8vw] sm:w-[1.2vw] xmd:w-[0.8vw]" src={duration} alt="duration.png"/><pre> </pre>{props.duration}</div>
        <div className="flex items-center text-[1.7vw] sm:text-[1.3vw] xmd:text-[0.8vw]"><Image className="xmd:h-auto w-[1.8vw] sm:w-[1.2vw] xmd:w-[0.8vw]" src={contact} alt="contact.png"/><pre> </pre>{props.contact}</div> 
        <div className=" flex items-center justify-end gap-2"> 
            <Image className="w-[50%] h-auto" src={transcript} alt="button.png"/> 
            <Image className="w-[20%] h-auto" src={thumbsUp} alt="thumbsUp.png"/> 
            <Image className="w-[20%] h-auto" src={thumbsDown} alt="thumbsDown.png"/> 
            </div>   
        </div>   
  )
}

export default ConversationsList
 