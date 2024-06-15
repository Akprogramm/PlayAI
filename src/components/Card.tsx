import Image from 'next/image'
import React from 'react'
import cardimage from "./Assets/cardimage.png"
import dot from "./Assets/dot.png"
import MicIcon from '@mui/icons-material/Mic';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import watch from "./Assets/watch.png";

const Card = (props) => {
  const {ppr} = props;
  return (
    <div className="bg-[#121212] min-h-[500px] p-3 rounded-2xl mt-3 flex flex-col justify-between w-[80%]  sm:w-full m-auto">
        <div> 
        <div className="c1 flex justify-between">
            <Image className="w-20" src={cardimage} alt="Sorry can't load image"/>
            <div className="flex items-center gap-3">
            <div className=" talk bg-[#1C1C1C] text-[#B4FD83] px-2 py-1 ssm:px-4 ssm:py-2 rounded-full flex justify-center items-center text-xs ssm:text-base"><MicIcon className=""/>Talk</div>
            <div className="ssm:text-base dot bg-[#1C1C1C] text-[#B4FD83] px-2 py-1 ssm:px-4 ssm:py-2 rounded-full flex justify-center items-center"><MoreHorizIcon className=""/></div> 
            </div>   
        </div>  
        <div className="full-name">Jensen Huang Nvidia</div>
        <div className="contact text-base py-2"><LocalPhoneIcon/>+X-XXX-XXX-XXXX</div>
        { ppr ?  <p className="font-normal text-sm">{ppr.substring(0,500)}</p> : ""}
        <div className="c2 flex flex-col gap-1 mt-5">
        <div className="conv text-[#888888] flex text-sm items-center gap-2"><i className="fa-regular fa-comment"></i> 15 conversations</div>
        <div className="minutes text-[#888888] flex text-sm items-center gap-2"><Image className="h-3 w-3" src={watch} alt="can't load image"/> 23.7 minutes</div>
        <div className="know text-[#888888] flex text-sm items-center gap-2"><i className="fa-regular fa-file-lines"></i> 0 knowledge resources added</div>
        </div>
        </div> 

        <button className="bg-[#1C1C1C] text-[#B4FD83] w-full rounded-full py-2 text-base">View Agent  <i className="fa-solid fa-chevron-right font-normal text-xs"></i></button>
    </div>
  )
}

export default Card
