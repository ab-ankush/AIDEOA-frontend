import React from "react";
import { FiDownload } from "react-icons/fi";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";
const MembershipComponent = () => {
  return (
    <div className="min-h-screen mainBackgroundImg  flex justify-center flex-col items-center">
      <div className="flex justify-center mt-3">
        <img src={"logoback.png"} className="w-24 " alt="logo" />
      </div>
      <div className=" p-8  flex flex-col gap-12 max-w-[831px]  items-center text-center">
        <h1 className="font-black text-4xl text-white leading-relaxed ">
          AIDEOA - All India Diploma Engineers & Officials Association
        </h1>
        <p className="font-medium text-xl text-gray-200 leading-9 ">
          One step With Transparency
        </p>
        <div className="flex flex-col gap-14 items-center">
          <Link to={"/home"}>
          <div className="glass-effect relative flex justify-center rounded-full w-72 h-14 cursor-pointer">
            <button className="text-white font-medium text-lg mr-10"> Join Membership</button>
            <p className="w-14 h-14  absolute top-0 right-0 rounded-full membershipBtn">  <MdOutlineArrowRightAlt size={30} className="top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%] text-white absolute" /></p>
          
          </div>
          </Link>
       
          <div className="text-white flex items-center gap-2 cursor-pointer">
            <button className="font-semibold">Download ID</button>
            <FiDownload />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipComponent;
