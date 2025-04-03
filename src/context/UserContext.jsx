/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";
import run from "../Gemini"; // Importing the run function from Gemini.js

export const dataContext = createContext();

const UserContext = ({ children }) => {
  const [input, setInput] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  // Function to send prompt
  async function sent(input) {
    try {
      setResultData("");
      setShowResult(true);
      setPrevPrompts((prev) => [...prev, input]); // Adding prompt to previous prompts array
      setRecentPrompt(input);
      setLoading(true);
      let responce = await run(input);
      setLoading(false);
      setResultData(responce.replace(/(\*{1,3}|`)/g, ""));
      setShowResult(true);
      setInput("");
    } catch (error) {
      console.error("Error in sent function:", error);
    }
  }
  async function newChat(){
    setShowResult(false);
    setLoading(false)

  }
  const data = {
    sent,
    input,
    setInput,
    showResult,
    setShowResult,
    loading,
    setLoading,
    resultData,
    setResultData,
    recentPrompt,
    setRecentPrompt,
    prevPrompts,
    setPrevPrompts,
    newChat,
  };

  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
};

export default UserContext;
