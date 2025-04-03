/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { dataContext } from "../context/UserContext";


const UpperText = () => {
  const { recentPrompt, showResult, resultData, loading } = useContext(dataContext);

  return (
    <div className="h-[75%] w-full flex justify-start items-start flex-col overflow-auto no-scrollbar ">
      {showResult ? (
        // 🟢 Show Response from Gemini AI
        <div className="w-full">
          <div className="userbox flex items-start gap-3 m-3 w-[90%] justify-startnpm ">
            <img
              src="https://images.unsplash.com/photo-1667476546616-3a47d3b0698a?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="user"
              className="w-[3vw] h-[3vw] object-cover rounded-full"
            />
           <p>{recentPrompt}</p> 
          </div>
          <div className="aibox flex items-start gap-3 m-3 w-[90%] justify-start">
            <img
              src="https://plus.unsplash.com/premium_photo-1677094310913-0e393f34cb2c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="ai"
              className="w-[3vw] h-[3vw] object-cover rounded-full"
            />
            {loading ? <div className="w-full flex shrink-0 overflow-hidden "> 
              <div className="loader w-full">
              <hr className=" bg-gradient-to-r outline-0 animate-pulse border-0 bg-repeat-x bg-contain to-gray-600/10 from-gray-200 via-gray-400 py-2 w-full my-[5px]" />
              <hr className=" bg-gradient-to-r outline-0 animate-pulse border-0 bg-repeat-x bg-contain to-gray-600/10 from-gray-200 via-gray-400 py-2 w-full my-[5px]" />
              <hr className=" bg-gradient-to-r outline-0 animate-pulse border-0 bg-repeat-x bg-contain to-gray-600/10 from-gray-200 via-gray-400 py-2 w-full my-[5px]" />
              <hr className=" bg-gradient-to-r outline-0 animate-pulse border-0 bg-repeat-x bg-contain to-gray-600/10 from-gray-200 via-gray-400 py-2 w-full my-[5px]" />
              </div>
              <div className="loader w-full">
              <hr className=" bg-gradient-to-r outline-0 animate-pulse border-0 bg-repeat-x bg-contain to-gray-600/10 from-gray-200 via-gray-400 py-2 w-full my-[5px]" />
              <hr className=" bg-gradient-to-r outline-0 animate-pulse border-0 bg-repeat-x bg-contain to-gray-600/10 from-gray-200 via-gray-400 py-2 w-full my-[5px]" />
              <hr className=" bg-gradient-to-r outline-0 border-0 animate-pulse bg-repeat-x bg-contain to-gray-600/10 from-gray-200 via-gray-400 py-2 w-full my-[5px]" />
              <hr className=" bg-gradient-to-r outline-0 border-0 animate-pulse bg-repeat-x bg-contain to-gray-600/10 from-gray-200 via-gray-400 py-2 w-full my-[5px]" />
              </div>
               </div> : <p className="w-full">{resultData}</p> }
          </div>
        </div>
      ) : (
        // 🟢 Show Default Welcome Message if No Response
        <div className="w-full h-full flex items-center justify-center flex-col">
          <div>
            <h1 className='text-[5.3vw] font-["gilroy"] capitalize bg-gradient-to-r from-indigo-600 via-purple-400 to-pink-600 text-transparent overflow-hidden leading-none tracking-tight font-extrabold bg-clip-text'>
              Hello Priyanshu
            </h1>
          </div>
          <div>
            <h1 className='text-[5.3vw] font-["gilroy"] capitalize bg-gradient-to-r to-indigo-600 via-purple-400 from-pink-600 text-transparent overflow-hidden leading-none tracking-tight font-extrabold bg-clip-text'>
              I&apos;m Your own AI assistant
            </h1>
          </div>
          <div>
            <h1 className='text-[5.3vw] font-["gilroy"] capitalize bg-gradient-to-r from-indigo-600 via-purple-400 to-pink-600 text-transparent overflow-hidden leading-none tracking-tight font-extrabold bg-clip-text'>
              What can I help you with?
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpperText;
