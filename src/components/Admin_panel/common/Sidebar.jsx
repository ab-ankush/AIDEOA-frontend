import React, { useState } from "react";
import { FiPieChart } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { MdEventAvailable } from "react-icons/md";
import { MdOutlineQueryBuilder } from "react-icons/md";
import { IoIosContact } from "react-icons/io";

function Sidebar(props) {
  const [isOpen, setIsOpen] = useState(false); // To toggle the menu in smaller screens
  const [color, setColor] = useState({
    m: true,
    u: false,
    t: false,
    T: false,
    e: false,
    q: false,
    c: false,
  });

  const changeColor = (data) => {
    setColor(data);
    props.setit(data);
  };

  return (
    <div>
      {/* Hamburger menu for small screens */}
      <div className="md:hidden p-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl text-purple-600"
        >
          <AiOutlineMenu />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`h-full flex flex-col justify-between items-center rounded-tr-3xl rounded-br-3xl shadow-2xl 
        md:block ${isOpen ? "block" : "hidden"} md:w-20 w-full bg-white`}
      >
        <div className="py-4 space-y-5 flex flex-col justify-around items-center">
          <img src="/images/logo.png" className="w-10 h-10" alt="" />
          <button
            id="member"
            className={`relative w-8 h-8 group ${
              color.m ? "text-red-600" : "text-purple-600"
            } `}
            onClick={() => {
              changeColor({
                m: true,
                u: false,
                t: false,
                T: false,
                e: false,
                q: false,
                c: false,
              });
            }}
          >
            <FiPieChart size={35}/>        
              
            <span className="absolute left-[50px] bottom-[5px] opacity-0 -translate-x-1/2 w-max bg-gray-700 text-white text-xs rounded-lg px-2 py-1 transition-opacity  group-hover:opacity-100">
            Chart 
            </span>
          </button>
          <button
            id="user"
            className={`relative w-8 h-8 group ${
              color.u ? "text-red-600" : "text-purple-600"
            }`}
            onClick={(e) => {
              changeColor({
                m: false,
                u: true,
                t: false,
                T: false,
                e: false,
                q: false,
                c: false,
              });
            }}
          >
            <IoPersonOutline size={35}/>
            <span className="absolute left-[60px] bottom-[5px] opacity-0 -translate-x-1/2 w-max bg-gray-700 text-white text-xs rounded-lg px-2 py-1 transition-opacity  group-hover:opacity-100">
            Members 
            </span>
          </button>
          <button
            id="trans"
            className={`relative w-8 h-8 group  ${
              color.t ? "text-red-600" : "text-purple-600"
            } `}
            onClick={() => {
              changeColor({
                m: false,
                u: false,
                t: true,
                T: false,
                e: false,
                q: false,
                c: false,
              });
            }}
          >
            <AiOutlineDollar size={35}/>
            <span className="absolute left-[70px] bottom-[5px] opacity-0  -translate-x-1/2 w-max bg-gray-700 text-white text-xs rounded-lg px-2 py-1 transition-opacity  group-hover:opacity-100">
            Transaction
            </span>
          </button>
          <button
            id="events"
            className={`relative w-8 h-8 group ${
              color.e ? "text-red-600" : "text-purple-600"
            } `}
            onClick={() => {
              changeColor({
                m: false,
                u: false,
                t: false,
                T: false,
                e: true,
                q: false,
                c: false,
              });
            }}
          >
            <MdEventAvailable size={35} />
            <span className="absolute left-[60px] bottom-[5px] opacity-0 -translate-x-1/2 w-max bg-gray-700 text-white text-xs rounded-lg px-2 py-1 transition-opacity  group-hover:opacity-100">
              Events
            </span>
          </button>
          <button
            id="query"
            className={`relative w-8 h-8 group ${
              color.q ? "text-red-600" : "text-purple-600"
            } `}
            onClick={() => {
              changeColor({
                m: false,
                u: false,
                t: false,
                T: false,
                e: false,
                q: true,
                c: false,
              });
            }}
          >
            <MdOutlineQueryBuilder size={35}  />
            <span className="absolute left-[60px] bottom-[5px] opacity-0 -translate-x-1/2 w-max bg-gray-700 text-white text-xs rounded-lg px-2 py-1 transition-opacity  group-hover:opacity-100">
              Query
            </span>
          </button>
          <button
            id="contact"
            className={`relative w-8 h-8 group  ${
              color.c ? "text-red-600" : "text-purple-600"
            } `}
            onClick={() => {
              changeColor({
                m: false,
                u: false,
                t: false,
                T: false,
                e: false,
                q: false,
                c: true,
              });
            }}
          >
            <IoIosContact size={35} />
            <span className="absolute left-[60px] bottom-[5px] opacity-0 -translate-x-1/2 w-max bg-gray-700 text-white text-xs rounded-lg px-2 py-1 transition-opacity  group-hover:opacity-100">
              Contact
            </span>
          </button>
        </div>
        <IoSettingsOutline className="w-8 h-8  text-purple-600 mb-4 mx-auto " />
      </div>
    </div>
  );
}

export default Sidebar;
