import { useState } from "react";

import { BsThreeDotsVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaArrowDownLong } from "react-icons/fa6";
import { LuUploadCloud } from "react-icons/lu";
const IdCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [userType, setUserType] = useState("Employees");
  const totalPages = 3;
  const Students = new Array(20).fill("");
  const employees = new Array(30).fill("");

  const data = [
    {
      name: "Olivia Rhye",
      employeeId: "#5412340",
      mobileNumber: "9876541230",
      email: "olivia@untitled.com",
      company: "Aideoa Ldt",
      officeAddress: "Hotel Bak.dsadasdasdas dasdasdasdasdasdasds",
      status: "Approve",
      selfAddress: "candiceTfghfghsaSasasafgsdasdasd d asd asdasd ",
      profileImage: "url-to-olivia-image",
    },
    {
      name: "Phoenix Baker",
      employeeId: "#5412310",
      mobileNumber: "9876541230",
      email: "phoenix@untitled.com",
      company: "Aideoa Ldt",
      officeAddress: "Hotel Bak...",
      status: "Approve",
      selfAddress: "our area...",
      profileImage: "url-to-phoenix-image",
    },
    {
      name: "Lana Steiner",
      employeeId: "#9876120",
      mobileNumber: "9876541230",
      email: "lana@untitled.com",
      company: "Aideoa Ldt",
      officeAddress: "Hotel Bak...",
      status: "Approve",
      selfAddress: "candiceT...",
      profileImage: "url-to-lana-image",
    },
    {
      name: "Demi Wilkinson",
      employeeId: "#2309876",
      mobileNumber: "9876541230",
      email: "demi@untitled.com",
      company: "Aideoa Ldt",
      officeAddress: "Hotel Bak...",
      status: "Approve",
      selfAddress: "area hav...",
      profileImage: "url-to-demi-image",
    },
    {
      name: "Candice Wu",
      employeeId: "#9876120",
      mobileNumber: "9876541230",
      email: "candice@untitled.com",
      company: "Aideoa Ldt",
      officeAddress: "Hotel Bak...",
      status: "Rejected",
      selfAddress: "candiceT...",
      profileImage: "url-to-candice-image",
    },
    {
      name: "Natali Craig",
      employeeId: "#9876120",
      mobileNumber: "9876541230",
      email: "natali@untitled.com",
      company: "Aideoa Ldt",
      officeAddress: "Hotel Bak...",
      status: "Approve",
      selfAddress: "natali Th...",
      profileImage: "url-to-natali-image",
    },
    {
      name: "Drew Cano",
      employeeId: "#9876120",
      mobileNumber: "9876541230",
      email: "drew@untitled.com",
      company: "Aideoa Ldt",
      officeAddress: "Hotel Bak...",
      status: "Approve",
      selfAddress: "drew can...",
      profileImage: "url-to-drew-image",
    },
    {
      name: "Kate Morrison",
      employeeId: "#9876120",
      mobileNumber: "9876541230",
      email: "kate@untitled.com",
      company: "Aideoa Ldt",
      officeAddress: "Hotel Bak...",
      status: "Approve",
      selfAddress: "katecand...",
      profileImage: "url-to-kate-image",
    },
  ];

  return (
    <div className=" bg-white rounded-xl py-4 lightdropshadowbox">
      <div className="flex flex-col">
        <div className="flex  space-x-4 mb-4 items-center">
          <div className="flex space-x-3 items-center "></div>
          <div className="flex justify-end flex-1  items-center space-x-4 ">
            <div className="relative w-[55%]" >
            <CiSearch  className="absolute  top-3 left-3"/>
              <input
                type="text"
                className="px-8 py-2 border w-full rounded-full text-sm border-gray-300"
                placeholder="Search"
              />
            </div>
            <div className='flex max-lg:flex-col gap-2'>
              <button className="bg-white text-nowrap font-semibold border shadow-md text-black py-2 px-4 rounded-md mr-2">Download all</button>
              <button className="bg-[#4B0082]  shadow-md font-semibold flex justify-center items-center gap-1  text-white py-2 px-4 rounded-md"><LuUploadCloud size={18} className=''/><span>Create</span></button>
            </div>
            </div>
        </div>
        <div className="flex justify-between px-4">
          <div className="flex space-x-3 items-center ">
            <button
              onClick={() => setUserType("Employees")}
              className={` ${
                userType === "Employees"
                  ? "bg-[#4B0082]  text-white"
                  : "bg-white text-[#4B0082]"
              } rounded-t-2xl text-sm py-2 w-40 font-medium flex gap-2 justify-center items-center`}
            >
              <span>Employees</span>
              <span
                className={`text-xs  font-bold px-2 rounded-md   ${
                  userType == "Employees"
                    ? "bg-white text-[#4B0082]"
                    : "bg-[#4B0082]  text-white"
                }`}
              >
                {employees.length}
              </span>
            </button>
            <button
              onClick={() => setUserType("Students")}
              className={` ${
                userType !== "Employees"
                  ? "bg-[#4B0082]  text-white"
                  : "bg-white text-[#4B0082]"
              } rounded-t-2xl text-sm py-2 w-40 font-medium flex gap-2 justify-center items-center`}
            >
              <span>Students</span>
              <span
                className={`text-xs  font-bold px-2 rounded-md   ${
                  userType != "Employees"
                    ? "bg-white text-[#4B0082]"
                    : "bg-[#4B0082]  text-white"
                }`}
              >
                {Students.length}
              </span>
            </button>
          </div>
          <button className="text-sm font-semibold">Filter by</button>
        </div>
      </div>
      <div className="overflow-x-scroll rounded-b-2xl">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="text-left border-b bg-gray-100 border-gray-200">
              <th className="p-2 px-4 font-medium text-sm text-gray-200">
                <input type="checkbox" className="" />
              </th>
              <th className="p-2 font-medium text-sm text-gray-400 w-52">
                Name & Photo
              </th>
              <th className="p-2 font-medium text-sm text-gray-400 ">
                Employee ID
              </th>
              <th className="p-2 font-medium text-sm text-gray-400">
                Mobile Number
              </th>
              <th className="p-2 font-medium text-sm text-gray-400">
                Email Address
              </th>
              <th className="p-2 font-medium text-sm text-gray-400">Company</th>
              <th className="p-2 font-medium text-sm text-gray-400 max-w-32">
                Office Address
              </th>
              <th className="p-2 flex items-center gap-1 font-medium text-sm text-gray-400">
                Status <FaArrowDownLong size={12} className="" />
              </th>
              <th className="p-2 font-medium text-sm text-gray-400 max-w-32">
                Self Address
              </th>
              <th className="p-2 font-medium text-sm text-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.slice(0, 7).map((item, index) => (
              <tr key={index} className="border-b border-gray-200 h-16">
                <td className="p-2 px-4 font-medium text-sm text-gray-600">
                  <input type="checkbox" />
                </td>
                <td className="p-2 font-medium text-sm text-gray-600  max-w-52 ">
                  <td className="flex items-center gap-1 whitespace-nowrap overflow-hidden text-ellipsis">
                    <img src="/public/user.png" className="w-5 rounded-full" />{" "}
                    {item.name}
                  </td>
                </td>
                <td className="p-2 font-medium text-sm text-gray-400 ">
                  {item.employeeId}
                </td>
                <td className="p-2 font-medium text-sm text-gray-400 ">
                  {item.mobileNumber}
                </td>
                <td className="p-2 font-medium text-sm text-gray-400">
                  {item.email}
                </td>
                <td className="p-2 font-medium text-sm text-gray-400">
                  {item.company}
                </td>

                <td className=" text-gray-400 max-w-32  p-2 font-medium text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                  {item.officeAddress}
                </td>
                <td className="p-2 font-medium text-xs text-gray-400">
                <td className={` rounded-full px-1 ${item.status==="Approve"?"bg-green-100 text-green-700 ":"bg-red-100 text-red-700"}`}>{item.status==="Approve"?"Approve":"Rejected"}</td>
                </td>
                <td className=" text-gray-400 max-w-32  p-2 font-medium text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                  {item.selfAddress}
                </td>
                <td className="p-2 font-medium text-sm text-gray-600 cursor-pointer">
                  <BsThreeDotsVertical />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button className="py-2 px-4 bg-white shadow-md border text-black rounded-md">
          Previous
        </button>
        <div className="space-x-2">
          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page}
              className={`py-2 px-4 rounded-md shadow-md border ${
                currentPage === page + 1
                  ? "bg-purple-700 text-white"
                  : " bg-white  text-black "
              }`}
            >
              {page + 1}
            </button>
          ))}
        </div>
        <button className="py-2 px-4  bg-white shadow-md border text-black rounded-md">
          Next
        </button>
      </div>
    </div>
  );
};

export default IdCard;
