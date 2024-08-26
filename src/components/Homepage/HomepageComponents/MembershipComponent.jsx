import React from "react";
import { FiDownload } from "react-icons/fi";
import { MdOutlineArrowRightAlt } from "react-icons/md";
const MembershipComponent = () => {
  return (
    <div className="min-h-screen mainBackgroundImg  flex justify-center flex-col items-center">
      <div className="flex justify-center">
        <img src={"/AIDEOA LOGO 1.jpg"} className="w-[101px] " alt="logo" />
      </div>
      <div className=" p-8  flex flex-col gap-6 max-w-[831px] r items-center text-center">
        <h1 className="font-black text-[42px] text-white leading-[74px] tracking-[1%]">
          AIDEOA - All India Diploma Engineers & Officials Association
        </h1>
        <p className="font-medium text-[20px] text-white leading-[37.9px] tracking-[1%]">
          One step With Transparency
        </p>
        <div className="flex flex-col gap-12 items-center">
          <div className="glass-effect relative flex justify-center rounded-full w-[273px] h-[61px]">
            <button className="text-white font-medium text-[18px] mr-10"> Join Membership</button>
            <p className="w-[61px] h-[61px]  absolute top-0 right-0 rounded-full bg-custom-gradient">  <MdOutlineArrowRightAlt size={30} className="top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%] text-white absolute" /></p>
          
          </div>
          <div className="text-white flex items-center gap-2">
            <button className="font-semibold">Download ID</button>
            <FiDownload />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipComponent;
