/* eslint-disable no-unused-vars */
import React from "react";
import Sidebar from "./Components/Sidebar";
import Chatsection from "./Components/Chatsection";

const App = () => {
  return (
    <div className="flex gap-5  w-full h-screen overflow-hidden">
      <Sidebar />
      <Chatsection />
    </div>
  );
};

export default App;
