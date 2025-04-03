/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { LuSendHorizontal } from "react-icons/lu";
import Darkmode from "./Darkmode";
import { dataContext } from "../context/UserContext";

const Lowertext = () => {
  const { sent, input, setInput } = useContext(dataContext);

  const handleClick = (input) => {
    sent(input);
  };
  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      handleClick(input);
    }
  };
  return (
    <div className="w-full h-[20%] flex items-center justify-center">
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        onKeyDown={handleEnterKey}
        placeholder="Enter your message..."
        className="bg-zinc-400/45 px-5 py-2 text-2xl rounded-full border-[1px] hover:bg-zinc-300 outline-0 w-[50%] text-black"
        value={input}
      />
      {input.trim() && <button
        onClick={() => handleClick(input)}
        className="mx-2 text-3xl bg-zinc-400 hover:bg-zinc-300 cursor-pointer rounded-full p-3"
      >
        <LuSendHorizontal />
      </button>}
      <Darkmode />
    </div>
  );
};

export default Lowertext;
