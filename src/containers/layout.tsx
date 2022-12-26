import React from "react";
import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";

export const Layout = ({ children }) => {
  return (
    <div className="h-[100vh] w-[100vw] 2xl:w-[1440px] mx-auto flex flex-row no-scrollbar">
      <Sidebar />
      <div className="w-[100%] flex flex-col no-scrollbar">
        <Header />
        <div className="mt-0 h-[100%] overflow-auto no-scrollbar">
          {children}
        </div>
        {/* {children} */}
      </div>
      {/* <div className="flex flex-row md:mt-[56px]">
        <Header />
        <div className="mt-14 md:mt-0 h-screen flex-1 overflow-x-auto no-scrollbar">
          {children}
        </div>
      </div> */}
    </div>
  );
};
