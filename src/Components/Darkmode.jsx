/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { FiSun } from "react-icons/fi";
import { LuMoon } from "react-icons/lu";

const Darkmode = () => {
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    // Apply theme on initial load and when mode changes
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("themeMode", "dark");
      // Dispatch custom event
      window.dispatchEvent(
        new CustomEvent("themeChange", { detail: { mode: "dark" } })
      );
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("themeMode", "light");
      // Dispatch custom event
      window.dispatchEvent(
        new CustomEvent("themeChange", { detail: { mode: "light" } })
      );
    }
  }, [mode]);

  const toggle = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  return (
    <div>
      <button
        onClick={toggle}
        className={`p-3 mx-2 text-3xl rounded-full ${
          mode === "dark"
            ? "bg-zinc-700 hover:bg-zinc-600"
            : "bg-zinc-400 hover:bg-zinc-500 text-black"
        } transition-colors duration-200`}
      >
        {mode === "dark" ? <LuMoon /> : <FiSun />}
      </button>
    </div>
  );
};

export default Darkmode;
