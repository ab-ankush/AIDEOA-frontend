import React from "react";
import { IoMdHome, IoIosPersonAdd, IoIosPeople } from "react-icons/io";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { TiDocumentText } from "react-icons/ti";
import { FaRegQuestionCircle, FaPhoneSquareAlt, FaBell } from "react-icons/fa";
import { PiIdentificationBadgeDuotone } from "react-icons/pi";
import { SiChainlink } from "react-icons/si";

const sidebar = [
  { icon: IoMdHome, heading: "Dashboard" },
  { icon: IoIosPersonAdd, heading: "Members" },
  { icon: RiMoneyRupeeCircleLine, heading: "Transaction" },
  { icon: SlCalender, heading: "Events" },
  { icon: TiDocumentText, heading: "Resource" },
  { icon: FaRegQuestionCircle, heading: "Query" },
  { icon: PiIdentificationBadgeDuotone, heading: "ID Card" },
  { icon: FaPhoneSquareAlt, heading: "Contact us" },
  { icon: FaBell, heading: "Notification" },
  { icon: SiChainlink, heading: "Common Links" },
  { icon: IoIosPeople, heading: "Our Teams" },
];

const AdminSidebar = ({ activeComponent, setActiveComponent }) => {
  return (
    <div className="flex">
 
      <div className="bg-white w-full h-screen p-4 shadow-lg">
        <div className="text-[#5A2175] text-2xl font-bold mb-6 flex items-center">
          <img src="/public/AIDEOA LOGO 3.png" className="w-10" alt="Logo" />
          AIDEOA
        </div>
        <ul className="flex flex-col gap-2">
          {sidebar.map((item, index) => {
            const Icon = item.icon;
            return (
              <li
                key={index}
                className={`flex justify-between items-center p-2 py-3 rounded-lg cursor-pointer ${
                  activeComponent === item.heading ? "bg-[#5A2175] text-white" : "hover:bg-gray-200"
                }`} 
                onClick={() => setActiveComponent(item.heading)} 
              >
                <div className="flex  items-center justify-start">
                <Icon
                  className={`w-[24px] h-[24px] ml-1 ${
                    activeComponent === item.heading ? "text-white" : "text-black"
                  }`} 
                />
                <span className={`ml-4 text-lg font-semibold ${activeComponent === item.heading ? "text-white" : "text-[#5A2175]"}`}>
                  {item.heading}
                </span>
                </div>
        
                <span>{'>'}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
