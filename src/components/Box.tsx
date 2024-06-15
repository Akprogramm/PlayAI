"use client"
import React from 'react'
import Image from 'next/image'
import profilePic from "./Assets/profilePic.png"
import message2 from "./Assets/message2.png"
import dot from "./Assets/dot.png"
import rightMark from "./Assets/rightmark.png" 
import { useRouter } from 'next/navigation'
 
const box = () => {    
  
  const router = useRouter(); 
  return (  
    <div className="2xl:max-w-fit flex gap-2 bg-[#151515] text-white rounded-lg pt-1 pb-1 pl-1 pr-2 sm:pt-2 sm:pb-2 sm:pl-3 sm:pr-3 h-fit" onClick={()=>{ router.push('/AgentProfile') }}>
      <div className="flex justify-center items-center"><Image src={profilePic} alt="can't load image"/></div>
      <div className="flex flex-col item-start justify-center">   
        <span><pre className="flex items-center set-text sm:text-base xx:text-2xl">Aeron Levi <Image className="set-cmimg2 h-[15px] w-[15px]" src={rightMark} alt="can't load image"/></pre></span>
        <p className="sm:text-sm set-text2 xmd:text-xs lg:text-base xx:text-lg text-[#D1D5DB]">Co-founder of cloud-based content management</p> 
        <span className="flex items-center"><Image className="set-cmimg sm:w-[23px] sm:h-[20px] xx:w-[25px] xx:h-[22px]" src={message2} alt="can't load image"/><pre className="set-text3 sm:text-base xx:text-xl"> 4.8k</pre></span>            
      </div>    
      <div className="flex"><Image className="mt-2 sm:mt-5 h-fit" src={dot} alt="can't load image"/></div>
    </div> 
  )
}

export default box
