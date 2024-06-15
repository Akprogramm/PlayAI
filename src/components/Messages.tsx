import React from 'react'
import rightmark from "./Assets/rightmark.png"
import Image from 'next/image';
import faceimage from "./Assets/faceimage.png"

const Messages = (props) => {
    const {msg,name} = props;
  return (
    <div className="bg-[#121212] text-[#888888] h-fit py-3 px-2 text-2xl rounded-lg inline-block mb-[20px] min-w-full">
        <p className="text-xs justify-end items-end sm:text-base">{msg}</p>
        <div className="flex float-right gap-3">
        <div className="text-sm mt-5 flex items-center">{name} <pre> </pre> <Image className="w-[15px] h-[15px]" src={rightmark} alt="rightmark"/></div> 
        <Image className="h-[40px] w-[40px]" src={faceimage} alt="faceimage"/>
        </div>
    </div>
  )
}

export default Messages 
