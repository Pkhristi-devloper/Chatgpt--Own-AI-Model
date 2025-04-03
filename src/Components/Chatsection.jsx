/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";

import UpperText from "./UpperText";
import Lowertext from "./Lowertext";

const Chatsection = () => {
  useEffect(() => {
    const handleThemeChange = (event) => {};
    window.addEventListener("themeChange", handleThemeChange);
    return () => {
      window.removeEventListener("themeChange", handleThemeChange);
    };
  }, []);

  return (
    <div className="w-[100%] gap-5 h-screen flex flex-col justify-start pt-2 items-center">
      <h1 className="text-2xl font-serif font-stretch-50% font-extrabold">
        PPT 4-o Model
      </h1>
      <UpperText className="w-full"/>
      <Lowertext className="w-full" />
    </div>
  );
};

export default Chatsection;
