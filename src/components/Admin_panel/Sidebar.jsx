import React from "react";
import { FiPieChart } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
const Sidebar = () => {
  return (
    <div className=" h-full flex flex-col justify-between items-center  rounded-lg shadow-xl">
      <div className="py-4 space-y-5">
        <img src="/images/logo.png" className="w-10 h-10" alt="" />
        <FiPieChart className="w-8 h-8 bg-white text-purple-600" />
        <IoPersonOutline className="w-8 h-8 bg-white text-purple-600 " />
        <AiOutlineDollar className="w-8 h-8 bg-white text-purple-600 " />
      </div>
      <IoSettingsOutline className="w-8 h-8 bg-white text-purple-600 mb-4 " />
    </div>
  );
};

export default Sidebar;
