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
import user from "../components/Assets/user.png"
import x from "./Assets/x.png"
import discord from "./Assets/discord.png";
import qm from "./Assets/qm.png";
import LogoutIcon from '@mui/icons-material/Logout';
import logout from "../components/Assets/logout.png"
import { useRouter } from "next/navigation";

import {useDispatch, useSelector} from 'react-redux'
import { UseSelector } from 'react-redux'   
import { redirect } from "next/dist/server/api-utils";
import {setActive,setShow} from "../app/todoSlice"

import alfread from "../components/Assets/alfread.png";
import bruce from "../components/Assets/bruce.png";
import batman from "../components/Assets/batman.png";
import colombo from "../components/Assets/colombo.png";


export default function SideBar() {    

  // const [active,setActive] = useState(0);  
  const show = useSelector(state=> state.show);  
  const router = useRouter();

  const active = useSelector((state)=> state.active); 

  const Dispatch = useDispatch(); 
 
  const changeShow = (item) => {
    Dispatch(setShow(false)); 
    Dispatch(setActive(item));
    console.log(show);       
  }
         
  return ( 
    
 <div className={`${show? "trans2" : "trans"} w-[210px] example z-[150] overflow-scroll pt-1 pb-2 pl-3 pr-3 flex none flex-col bg-[#000000] text-white min-h-screen max-h-screen border-r-[2px] border-[#151515]`}>   

      <div className="top flex flex-col pl-1 w-[100%]"> 
        <Image          
          className="w-[25%] h-[15%] m-auto 2 mt-3 mb-3 cursor-pointer"
          src={logo}  
          alt="can't load image" 
          onClick={()=>{
            router.push("/DashBoard");
            Dispatch(setActive(-1)); 
           }}      
        />    

         
        <div className={`text-xs flex items-center pt-2 pb-2 pl-3 rounded-lg cursor-pointer ${active==0 ? "container" : ""}`} onClick={
          ()=>{
            changeShow(0)
            router.push('/CreateAgent')
          }}>
          <AddIcon className="mr-3"/> Create Agent    
        </div> 
        <div className={`text-xs flex items-center pt-2 pb-2 pl-3 rounded-lg cursor-pointer ${active==1 ? "container" : ""}`} onClick={()=>{changeShow(1)
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
      <div className="text-xs text-[#888888] pt-5 pb-1">YOUR AGENTS</div>
      <div className="middler  min-h-[60px] overflow-y-scroll example mb-3">
        <div className="items">
        <div className={`text-xs b3 pl-2 pr-2 pt-3 pb- flex justify-between items-center rounded-lg  cursor-pointer ${active==8 ? "container" : ""}`}> 
          <div className="text-xs t1 flex justify-center items-center">
          <Image className="h-[30px] w-[30px] rounded-full" src={colombo} alt="sorry can't load image"/><pre className="text-xs t1"> Jensen Huang
            </pre></div>
          <Image className="w-3" src={dot} alt="sorry can't load image"/>       
          </div> 
          <div className={`text-xs b3 pl-2 pr-2 pt-3 pb- flex justify-between items-center rounded-lg ${active==8 ? "container" : ""}`}> 
          <div className="text-xs t1 flex justify-center items-center">
          <Image className="h-[30px] w-[30px] rounded-full" src={alfread} alt="sorry can't load image"/><pre className="text-xs t1"> Alfread
            </pre></div>
          <Image className="w-3" src={dot} alt="sorry can't load image"/>       
          </div> 
          <div className={`text-xs b3 pl-2 pr-2 pt-3 pb- flex justify-between items-center rounded-lg ${active==8 ? "container" : ""}`}> 
          <div className="text-xs t1 flex justify-center items-center">
          <Image className="h-[30px] w-[30px] rounded-full" src={bruce} alt="sorry can't load image"/><pre className="text-xs t1"> Bruce wayn
            </pre></div>
          <Image className="w-3" src={dot} alt="sorry can't load image"/>       
          </div> 
          <div className={`text-xs b3 pl-2 pr-2 pt-3 pb- flex justify-between items-center rounded-lg ${active==8 ? "container" : ""}`}> 
          <div className="text-xs t1 flex justify-center items-center">
          <Image className="h-[30px] w-[30px] rounded-full" src={batman} alt="sorry can't load image"/><pre className="text-xs t1"> Batman
            </pre></div>
          <Image className="w-3" src={dot} alt="sorry can't load image"/>       
          </div> 
          <div className={`text-xs b3 pl-2 pr-2 pt-3 pb- flex justify-between items-center rounded-lg ${active==8 ? "container" : ""}`}> 
          <div className="text-xs t1 flex justify-center items-center">
          <Image className="h-[30px] w-[30px] rounded-full" src={batman} alt="sorry can't load image"/><pre className="text-xs t1"> Batman
            </pre></div>
          <Image className="w-3" src={dot} alt="sorry can't load image"/>       
          </div> 
          <div className={`text-xs b3 pl-2 pr-2 pt-3 pb- flex justify-between items-center rounded-lg ${active==8 ? "container" : ""}`}> 
          <div className="text-xs t1 flex justify-center items-center">
          <Image className="h-[30px] w-[30px] rounded-full" src={batman} alt="sorry can't load image"/><pre className="text-xs t1"> Batman
            </pre></div>
          <Image className="w-3" src={dot} alt="sorry can't load image"/>       
          </div> 
          <div className={`text-xs b3 pl-2 pr-2 pt-3 pb- flex justify-between items-center rounded-lg ${active==8 ? "container" : ""}`}> 
          <div className="text-xs t1 flex justify-center items-center">
          <Image className="h-[30px] w-[30px] rounded-full" src={batman} alt="sorry can't load image"/><pre className="text-xs t1"> Batman
            </pre></div>
          <Image className="w-3" src={dot} alt="sorry can't load image"/>       
          </div> 
          <div className={`text-xs b3 pl-2 pr-2 pt-3 pb- flex justify-between items-center rounded-lg ${active==8 ? "container" : ""}`}> 
          <div className="text-xs t1 flex justify-center items-center">
          <Image className="h-[30px] w-[30px] rounded-full" src={batman} alt="sorry can't load image"/><pre className="text-xs t1"> Batman
            </pre></div>
          <Image className="w-3" src={dot} alt="sorry can't load image"/>       
          </div> 
          <div className={`text-xs b3 pl-2 pr-2 pt-3 pb- flex justify-between items-center rounded-lg ${active==8 ? "container" : ""}`}> 
          <div className="text-xs t1 flex justify-center items-center">
          <Image className="h-[30px] w-[30px] rounded-full" src={batman} alt="sorry can't load image"/><pre className="text-xs t1"> Batman
            </pre></div>
          <Image className="w-3" src={dot} alt="sorry can't load image"/>       
          </div> 
          <div className={`text-xs b3 pl-2 pr-2 pt-3 pb- flex justify-between items-center rounded-lg ${active==8 ? "container" : ""}`}> 
          <div className="text-xs t1 flex justify-center items-center">
          <Image className="h-[30px] w-[30px] rounded-full" src={batman} alt="sorry can't load image"/><pre className="text-xs t1"> Batman
            </pre></div>
          <Image className="w-3" src={dot} alt="sorry can't load image"/>       
          </div> 
          <div className={`text-xs b3 pl-2 pr-2 pt-3 pb- flex justify-between items-center rounded-lg ${active==8 ? "container" : ""}`}> 
          <div className="text-xs t1 flex justify-center items-center">
          <Image className="h-[30px] w-[30px] rounded-full" src={batman} alt="sorry can't load image"/><pre className="text-xs t1"> Batman
            </pre></div>
          <Image className="w-3" src={dot} alt="sorry can't load image"/>       
          </div> 
          <div className={`text-xs b3 pl-2 pr-2 pt-3 pb- flex justify-between items-center rounded-lg ${active==8 ? "container" : ""}`}> 
          <div className="text-xs t1 flex justify-center items-center">
          <Image className="h-[30px] w-[30px] rounded-full" src={batman} alt="sorry can't load image"/><pre className="text-xs t1"> Batman
            </pre></div>
          <Image className="w-3" src={dot} alt="sorry can't load image"/>       
          </div> 
          <div className={`text-xs b3 pl-2 pr-2 pt-3 pb- flex justify-between items-center rounded-lg ${active==8 ? "container" : ""}`}> 
          <div className="text-xs t1 flex justify-center items-center">
          <Image className="h-[30px] w-[30px] rounded-full" src={colombo} alt="sorry can't load image"/><pre className="text-xs t1"> Colombo
            </pre></div>
          <Image className="w-3" src={dot} alt="sorry can't load image"/>       
          </div> 
        </div>
        </div>  

      <div className="w-100% min-h-fit flex flex-col gap-2 pl-1 pr-3"> 
        <div className={`text-[10px] rounded-lg b1 flex justify-center items-center text-white pl-3 pr-3 pt-2 pb-2 cursor-pointer ${active==7 ? "container" : ""}`} onClick={()=>{changeShow(7)}}><Image className="h-4 w-4 mr-3" src={watch} alt="sorry can't find image " /> 29,617,066 minutes left</div>  
        <div className={`text-xs b2 pl-5 pr-5 pt-2 pb-2 flex justify-center items-center bg-[#151515]  cursor-pointer text-[#B4FD83] rounded-lg`}>Upgrade your Plan</div>
        <div className={`text-xs b3 pl-2 pr-1 pt-1 pb-2 flex justify-between items-center rounded-lg cursor-pointer ${active==8 ? "container" : ""}`} onClick={()=>{changeShow(8)}}> 
          <div className="text-xs t1 flex justify-center items-center cursor-pointer">
          <Image className="h-[25px] w-[25px]" src={user} alt="sorry can't load image"/><pre className="text-xs font-bold t1"> devs@play.ht 
            </pre></div>
          <Image className="h-[25px] w-[25px]" src={logout} alt="sorry can't load image"/>       
          </div>  
        <div className="text-xs t1 b4 flex rounded-lg justify-evenly flex-wrap gap-2">   
        <Image className="flex w-[40%] max-h-[40px] cursor-pointer" src={x} alt="sorry can't find image " />
       <Image className="flex w-[40%] max-h-[40px] cursor-pointer" src={discord} alt="sorry can't find image " /> 
        </div>   
      </div>       
    </div>   
  ); 
}