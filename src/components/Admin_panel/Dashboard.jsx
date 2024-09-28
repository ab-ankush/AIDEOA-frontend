import React, { useState } from "react";
import SideBar from "./SideBar";
import Main from "./DashBoardpageComponent/Main";
import Transaction_page from "./Transaction/Transaction_page";

const Dashboard = () => {
  return (
    <div className="w-screen flex max-lg:max-h-fit   lg:h-screen ">
      <div className="lg:w-[18.5%] max-lg:hidden flex justify-center  h-full py-[30px] ">
        <SideBar />
      </div>
      <div className="lg:w-[81.5%] max-lg:w-full flex flex-col justify-between items-center  h-full">
        <div className="text-center flex justify-center items-center text-[26px] h-[8.55%] w-full bg-white">
          <p>AIDEOA DASHBOARD</p>
        </div>
        <div className="flex bg-[#F7F7FA] flex-col w-full h-[90%] justify-evenly items-center">
          <Transaction_page />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
