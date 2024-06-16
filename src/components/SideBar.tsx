"use client";
import React, { useState } from "react";  
import logo from "./Assets/logo.png";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import AddBusinessIcon from "@mui/icons-material/AddBusiness"; 
import SearchIcon from "@mui/icons-material/Search";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import myagents from "./Assets/myagents.png";
import developer from "./Assets/developer.png";
import message from "./Assets/message.png";
import card from "./Assets/card.png";
import community from "./Assets/community.png";
import watch from "./Assets/watch.png";   
import wolf from "./Assets/wolf.png";
import dot from "./Assets/dot.png"

import x from "./Assets/x.png"
import discord from "./Assets/discord.png";
import qm from "./Assets/qm.png";

import { useRouter } from "next/navigation";

import {useDispatch, useSelector} from 'react-redux'
import { UseSelector } from 'react-redux'   
import { redirect } from "next/dist/server/api-utils";
import {setActive,setShow} from "../app/todoSlice"
import { RootState } from '../../src/app/store';

export default function SideBar() {    

  const router = useRouter();
  
  const { show, active } = useSelector((state: RootState) => state);

  const Dispatch = useDispatch(); 

  const changeShow = (item) => {
    Dispatch(setShow(false));
    Dispatch(setActive(item));
    console.log(show);     
  }
        
  return (
    
 <div className={`${show? "trans2" : "trans"} example z-50 overflow-scroll p-3 flex justify-between max-w-[200px] sm:max-w-max sm:flex-[0.4] xl:flex-[0.13] xx:flex-[0.09] xx:min-w-fit none flex-col bg-[#000000] text-white min-h-screen max-h-screen border-r-[2px] border-[#151515]`}>   

      <div className="top flex flex-col justify-between pl-1 w-[100%] h-min">
        <Image          
          className="w-[25%] h-[15%] m-auto 2 mt-3 mb-3 cursor-pointer"  
          src={logo}  
          alt="can't load image" 
          onClick={()=>{
            router.push("/DashBoard");
            Dispatch(setActive(-1));
           }}    
        />   

         
        <div className={`text-xs flex items-center pt-3 pb-3 pl-3 rounded-lg cursor-pointer ${active==0 ? "container" : ""}`} onClick={()=>{changeShow(0)
          router.push('/CreateAgent') 
        }}>
          <AddIcon className="mr-3"/> Create Agent
        </div> 
        <div className={`text-xs flex items-center pt-3 pb-3 pl-3 rounded-lg cursor-pointer ${active==1 ? "container" : ""}`} onClick={()=>{changeShow(1)
         router.push("/MyAgents");
        }}>
          <Image
            className="h-5 w-5 mr-3 flex justify-center items-center"
            src={myagents}
            alt="can't load image" 
          />{" "}
          My Agents
        </div>
        <div className={`text-xs flex items-center pt-3 pb-3 pl-3 rounded-lg cursor-pointer ${active==2 ? "container" : ""} `} onClick={()=>{changeShow(2)}}>
          <SearchIcon className="mr-2"/> Explore Agents
        </div>
        <div className={`text-xs flex items-center pt-3 pb-3 pl-3 rounded-lg cursor-pointer ${active==3 ? "container" : ""}`} onClick={()=>{changeShow(3)}}>
          <Image
            className="h-5 w-5 mr-3 flex justify-center items-center"
            src={developer}
            alt="can't load image"    
          />{" "}
          For Developers
        </div>
        <div className={`text-xs flex pt-3 pb-3 pl-3 rounded-lg cursor-pointer ${active==4 ? "container" : ""}`} onClick={()=>{
          changeShow(4)
          router.push('/Conversations');
          
          }}>
          <Image
            className="h-5 w-5 mr-3 flex justify-center items-center"
            src={message}
            alt="can't load image"
          />{" "} 
          Conversations
        </div>
        <div className={`text-xs flex pt-3 pb-3 pl-3 rounded-lg cursor-pointer ${active==5 ? "container" : ""}`} onClick={()=>{changeShow(5)}}>
          <Image
            className="h-5 w-5 mr-3 flex justify-center items-center"
            src={card}
            alt="can't load image"
          />{" "}
          Billing
        </div>
        <div className={`text-xs flex pt-3 pb-3 pl-3 rounded-lg cursor-pointer ${active==6 ? "container" : ""}`} 
        onClick={()=>{
          changeShow(6)
          router.push("/Community");
          }}>
          <Image
            className="h-5 w-5 mr-3 flex justify-center items-center"
            src={community}
            alt="can't load image"
          />
          Community
        </div>
      </div>     

      <div className=" w-100% min-h-fit flex flex-col gap-2 pl-1 pr-3"> 
        <div className={`text-[10px] rounded-lg b1 flex justify-center items-center text-white pl-3 pr-3 pt-3 pb-3 cursor-pointer ${active==7 ? "container" : ""}`} onClick={()=>{changeShow(7)}}><Image className="h-4 w-4 mr-3" src={watch} alt="sorry can't find image " /> 9,957 minutes left</div>  
        <div className={`text-xs b2 pl-3 pr-3 pt-3 pb-3 flex justify-center items-center bg-[#151515] text-[#B4FD83] rounded-lg cursor-pointer`}>Upgrade your Plan</div>
        <div className={`text-xs b3 pl-2 pr-2 pt-3 pb- flex justify-between items-center rounded-lg cursor-pointer ${active==8 ? "container" : ""}`} onClick={()=>{changeShow(8)}}> 
          <div className="text-xs t1 flex justify-center items-center">  
          <Image className="h-[30px] w-[30px]" src={wolf} alt="sorry can't load image"/><pre className="text-xs t1"> WolfCycle
            </pre></div>
          <Image className="w-3" src={dot} alt="sorry can't load image"/>       
          </div>  
        <div className="text-xs t1 b4 flex rounded-lg justify-evenly flex-wrap gap-2">   
        <Image className="flex max-w-12 cursor-pointer " src={x} alt="sorry can't find image " />
       <Image className="flex max-w-12 cursor-pointer" src={discord} alt="sorry can't find image " />
       <Image className="flex max-w-12 cursor-pointer" src={qm} alt="sorry can't find image " />   
        </div>   
      </div>       
    </div>   
  ); 
}     
 
