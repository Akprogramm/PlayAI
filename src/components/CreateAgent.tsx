"use client"
import React from 'react'
import ImageUploading from 'react-images-uploading';
import MenuIcon from '@mui/icons-material/Menu';
import speker from "./Assets/speaker.png";
import microphone from "./Assets/microphone.png";
import Image from 'next/image';

import {useDispatch, useSelector} from 'react-redux'
import { UseSelector } from 'react-redux'
import {setShow} from "../app/todoSlice"
import logo2 from "./Assets/logo2.png"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import save from "./Assets/save.png";
import { useRouter } from 'next/navigation';

const CreateAgent = () => {

  const router = useRouter();

  const show = useSelector((state)=> state.show);  

  const Dispatch = useDispatch();

  const changeShow = () => { 
    Dispatch(setShow(!show)); 
    console.log(show);     
  }

  return ( 
    <div className='flex example overflow-x-scroll absolute w-screen h-screen'>   

      <div className="save fixed right-3 bottom-3 bg-[#B4FD83] p-3 rounded-full z-50"><Image className='h-5 w-5' src={save} alt="can't load image"/></div>
     
      <div className="heading text-white font-bold text-center bg-black p-2 w-[100%] fixed top-0 z-50  sm:text-[2vw] 2xl:text-[1.5vw]" onClick={()=>{router.push('/CreateAgent')}}>Create your Agent
      <div className="bammberger z-[150] xmd:hidden text-green-500 absolute top-1 right-1" onClick={changeShow} ><MenuIcon className="text-white" /></div>
      </div>

     <div className="z-10 absolute right-0 pt-14 w-[100%] h-screen flex flex-col lg:flex-row"> 
    <div className="flex justify-center m-auto xx:text-[2rem]">             
      <form action="" className=" w-[85vw] sm:w-[55vw] xmd:w-[40vw] xl:w-[30vw] gap-[2vh] flex flex-col text-white">    
       <div className="a1 flex justify-between gap-5">   
        <div className="l1 w-[50%]">
            <label htmlFor="" className="text-[0.5rem] sm:text-[0.6rem] xx:text-[0.8rem]">AGENT VOICE</label>
            <div className="bg-[#151515] text-[#B4FD83] font-bold p-3 pl-5 rounded-2xl text-[2vw] md:text-[1vw] flex justify-start items-center">
            <Image className="h-5 w-6" src={speker} alt="speaker" /> <pre> </pre> Select a voice</div> 
        </div> 
        <div className="l2 w-[50%]"> 
            <label htmlFor="" className="text-[0.5rem] sm:text-[0.6rem] xx:text-[0.8rem]">WANT A CUSTOM VOICE</label> 
            <div className="bg-[#151515] text-[#B4FD83] font-bold pl-2 pr-2 pt-3 pb-3 rounded-2xl text-[2vw] md:text-[1vw] flex justify-center items-center">
            <Image className="h-5 w-4 xx:h-6 xx:w-5" src={microphone} alt="microphone" /> <pre> </pre> Create a voice clone</div> 
        </div>
       </div>  

       <div className="a2">
        <label htmlFor="" className='text-[0.6rem] xx:text-[0.8rem]'>AVATAR</label>
        <div className='flex justify-center items-center bg-[#151515] text-[#B4FD83] p-3 font-bold rounded-2xl text-sm xx:text-[1.5rem] xx:p-5'><i className="fa-regular fa-image"></i> <pre> </pre> Upload Image</div> 
       </div>

       <div className="a3">
       <label htmlFor="" className='text-[0.6rem] xx:text-[0.8rem]'>NAME</label>
       <div className='bg-[#151515] text-white p-3 font-bold rounded-2xl text-xs xx:text-[1.5rem] xx:p-5'>Cloned Aaron</div>
       </div>
       
       <div className='a4'>
       <label htmlFor="" className='flex text-white text-[0.6rem] p-1 xx:text-[0.8rem]'>AGENT BEHAVIOUR TYPE <pre> </pre> <div className='text-[#888888]'> (OPTIONAL)</div></label>
       <div className='bg-[#151515] text-[#B4FD83] p-3 font-bold rounded-2xl text-sm mb-2 xx:text-[1.5rem] xx:p-5'>
        <div className="text-[#B4FD83]">Professional Use Case</div> 
        <div className="text-[#888888] text-[0.6rem] xx:text-[1rem] xx:pt-3">Configured to be more polite, formal, staying on task and assisting.</div>
       </div>
       <div className='bg-[#151515] text-[#B4FD83] p-3 font-bold rounded-2xl text-sm xx:text-[1.5rem] xx:p-5'>
        <div className="text-[#B4FD83]">Character Use Case</div>
        <div className="text-[#888888] text-[0.6rem] xx:text-[1rem] xx:pt-3">Configured to assume and impersonate identity.</div>
       </div>
       </div>

       <div className="a5 relative text-xs xx:text-[0.8rem]">
        <label className="block xx:text-lg" htmlFor="">Describe how should your agent behave</label>
        <label className='text-[#888888]' htmlFor="">Give instructions to your AI about how it should behave and interact with others in conversation.</label>
        <textarea className="bg-[#151515] w-[100%] min-h-[100px] rounded-xl placeholder:text-[#888888] placeholder:absolute placeholder:bottom-0 p-3 focus:ring focus:ring-[#B4FD83] focus:outline-non" placeholder='0/10000'></textarea>
       </div> 
          <button className='flex justify-center items-center bg-[#B4FD83] text-black font-bold w-[100%] p-3 rounded-full text-lg'><i className="fa-solid fa-user-plus"></i><pre> </pre> Create Agent</button>
          <div className="save text-[#888888] w-[100%] text-[2.2vw] sm:text-[1.5vw] xmd:text-[1.2vw] lg:text-[0.8vw] flex justify-center">Create and use of agent is subject to the <pre> </pre> <div className='underline'>PlayAI Terms of Service</div></div>   
      </form> 
    </div>  

    <div className="mt-20 messageBox flex flex-col justify-center items-center w-[70%] sm:w-[40%] lg:w-[25%] gap-3 m-auto lg:absolute lg:top-[30%] lg:right-[1%] xl:right-[5%]">
      <h1 className='text-white xx:text-2xl'>Play Preview</h1> 
      <div className="boxx bg-[#151515] p-4 rounded-xl">
       <div className="flex text-white font-bold items-center xx:text-3xl"><Image className='h-14 w-14 xx:h-20 xx:w-20' src={logo2} alt="can't load image"/> <pre> </pre> Cloned Aaron </div>
       <p className="text-[#888888] xx:text-2xl">Description of what your agents does and what makes it unique</p> 
      </div>
    <div className="mb-10 bg-[#151515] text-[#B4FD83] text-center py-4 px-5 w-fit rounded-xl xx:text-2xl"><LocalPhoneIcon/> Preview Your Agent</div>     
    </div>

    </div>

    </div>
  )
} 

export default CreateAgent
