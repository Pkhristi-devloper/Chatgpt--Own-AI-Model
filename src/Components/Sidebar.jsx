/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { dataContext } from "../context/UserContext";

const Sidebar = () => {
  const [extend, setExtend] = useState(false);
  let {sent, prevPrompts, newChat} = useContext(dataContext);
  async function loadPrevPrompt(prompt){
    sent(prompt);
  }
  return (
    <div
      className={` ${
        !extend ? "w-fit p-0" : "w-[25%] "
      }  bg-zinc-500 sidebar rounded-r-xl py-2 h-screen`}
    >
      <GiHamburgerMenu
        onClick={() => {
          setExtend(!extend);
        }}
        className="text-3xl m-2 bg-zinc-600 w-fit h-10 p-2 rounded-full cursor-pointer hover:bg-zinc-500 hover:text-zinc-100"
      />
      <div onClick={()=>newChat()} className="w-100px h-10 px-4 py-3 rounded-2xl flex justify-start items-center gap-3 text-lg my-3 hover:bg-zinc-400 hover:text-zinc-900 cursor-pointer active:scale-95 transition-all transition-2 md:w-[100%] md:text-2xl">
        <FaPlus />
        {extend && <p>New Chat</p>}
        {/* <p>New Chat</p> */}
      </div>
      <div
        className={`h-130 no-scrollbar overflow-scroll mt-5 border-t-zinc-400/50 border-t-2 `}
      >
        {prevPrompts.map((item,index)=>{
          return(
            <div key={index} onClick={()=>loadPrevPrompt(item)} className="w-full px-4 py-3 rounded-2xl flex justify-start items-center gap-3 text-xl my-3 hover:bg-zinc-400 hover:text-zinc-900 cursor-pointer active:scale-95 transition-all transition-2">
          <FaRegMessage />
          {extend && <p>{item.slice(0,10) + "..."}</p>}
        </div>
          )
        })}
        
      </div>
    </div>
  );
};

export default Sidebar;
