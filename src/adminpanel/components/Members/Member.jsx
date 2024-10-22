import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowDownLong } from "react-icons/fa6";
import { LuUploadCloud } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import useMembers from "../../../hooks/useMembers";

const data = [
  {
    name: "Olivia Rhye",
    employeeId: "#5412340",
    mobileNumber: "9876541230",
    email: "olivia@untitled.com",
    company: "22-5-2024",
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
    company: "22-5-2024",
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
    company: "22-5-2024",
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
    company: "22-5-2024",
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
    company: "22-5-2024",
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
    company: "22-5-2024",
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
    company: "22-5-2024",
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
    company: "22-5-2024",
    officeAddress: "Hotel Bak...",
    status: "Approve",
    selfAddress: "katecand...",
    profileImage: "url-to-kate-image",
  },
];
const Member = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [userType, setUserType] = useState("Employees");
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const totalPages = 3;

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(data.map((_, index) => index));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectItem = (index) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((item) => item !== index));
    } else {
      setSelectedItems([...selectedItems, index]);
    }
  };
  const {dataList}=useMembers(userType)

  return (
    <>
      <div className=" bg-white  py-4 rounded-xl lightdropshadowbox">
        <div className="flex px-4 flex-col">
          <div className="flex  space-x-4 mb-4 items-center">
            <div className="flex w-[34%] h-[40%] items-center gap-2">
              <h3 className="h-full  text-[18px] font-[500]">Member</h3>
              {/* <p className="text-[14px] px-3 text-purple-800 rounded-lg bg-purple-200 my-auto">
                100 users
              </p> */}
            </div>
         
            <div className="flex justify-end flex-1  items-center space-x-4 ">
              <div className="relative w-[55%]">
                <CiSearch className="absolute  top-3 left-3" />
                <input
                  type="text"
                  className="px-8 py-2 border w-full rounded-full text-sm border-gray-300"
                  placeholder="Search"
                />
              </div>
              {selectedItems.length >= 2 && <MdDelete size={26} />}
              <div className="flex max-lg:flex-col gap-2">
                <button className="bg-white text-nowrap font-semibold border shadow-md text-black py-2 px-4 rounded-md mr-2">
                  Filter by
                </button>
                <button className="bg-white text-nowrap font-semibold border shadow-md text-black py-2 px-4 rounded-md mr-2">
                  Download all
                </button>
                <button className="bg-[#4B0082]  shadow-md font-semibold flex justify-center items-center gap-1  text-white py-2 px-4 rounded-md">
                  <LuUploadCloud size={18} className="" />
                  <span>Create</span>
                </button>
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
             {      userType!=='Students' &&  <span
                    className={`text-xs  font-bold px-2 rounded-md   ${
                      userType == "Employees"
                        ? "bg-white text-[#4B0082]"
                        : "bg-[#4B0082]  text-white"
                    }`}
                  >
                      {dataList.length}
                    </span>}
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
                 {userType==='Students' &&<span
                    className={`text-xs  font-bold px-2 rounded-md   ${
                      userType != "Employees"
                        ? "bg-white text-[#4B0082]"
                        : "bg-[#4B0082]  text-white"
                    }`}
                  >
                  {dataList.length}
                  </span>}
                </button>
              </div>
              <button className="text-sm font-semibold">Filter by</button>
            </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="text-left border-b bg-gray-100 border-gray-200 h-16">
                <td className="p-2 px-4 font-medium text-sm text-gray-200">
                  <input
                    type="checkbox"
                    className="checked:bg-purple-500 checked:border-purple-500 size-4 bg-col"
                    checked={selectAll}
                    onChange={handleSelectAll}
                  />
                </td>
                <th className="py-3 px-4 text-left font-medium text-sm w-52 text-gray-500">
                  Name & Photo
                </th>
            
                <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                  Mobile Number
                </th>
                <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                  Email Address
                </th>
                <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                  Date
                </th>

                <th className="p-2 flex items-center gap-1 font-medium text-sm text-gray-400">
                  Status <FaArrowDownLong size={12} className="" />
                </th>

                <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {dataList.slice(0, 7).map((item, index) => (
                <tr key={index} className="border-b border-gray-200 h-16">
                  <td className="p-2 px-4 font-medium text-sm text-gray-600">
                    <input
                      type="checkbox"
                      className="checked:bg-purple-500 checked:border-purple-500 size-4 bg-col"
                      checked={selectedItems.includes(index)}
                      onChange={() => handleSelectItem(index)}
                    />
                  </td>
                  <td className="p-2 font-medium text-sm text-gray-600  max-w-52 ">
                    <td className="flex items-center gap-1 whitespace-nowrap overflow-hidden text-ellipsis">
                      <img
                        src="/public/user.png"
                        className="w-5 rounded-full"
                      />{" "}
                      {item.fullName}
                    </td>
                  </td>
               
                  <td className="p-2 font-medium text-sm text-gray-400 ">
                    {item.mobile}
                  </td>
                  <td className="p-2 font-medium text-sm text-gray-400">
                    {item.email}
                  </td>
                  <td className="p-2 font-medium text-sm text-gray-400">
                    {item.createdAt.slice(0,10)}
                  </td>
                  <td className="p-2 font-medium text-xs ">
                    <td
                      className={` rounded-full px-1 mb-1 ${
                        item.status === "Approve"
                          ? "bg-green-100 text-green-700 "
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.status === "Approve" ? "Active" : "Inactive"}
                    </td>
                  </td>

                  <td className="p-2 font-medium text-sm text-gray-600 cursor-pointer">
                    <BsThreeDotsVertical />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between px-4 items-center mt-4">
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
    </>
  );
};

export default Member;
