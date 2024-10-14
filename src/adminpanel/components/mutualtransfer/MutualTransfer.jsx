import { useState } from "react";

import { BsThreeDotsVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaArrowDownLong } from "react-icons/fa6";
import { LuUploadCloud } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
const MutualTransfer = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [userType, setUserType] = useState("Executive");
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
  
    const totalPages = 3;
    const NonExecutive = new Array(20).fill("");
    const executive = new Array(30).fill("");
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
   const data= [
        {
          YourName: "John Doe",
          YourDesignation: "Executive",
          AIDEOAIDNo: "AID12345678",
          MobileNumber: "9876543210",
          CurrentPostedSubsidiaryInCIL: "XYZ Subsidiary",
          CurrentPostedAREA: "South Region",
          CurrentMinesName: "ABC Mine",
          Designation: "Senior Manager",
          GRADE: "G6",
          PreferredTransferSubsidiary: "DEF Subsidiary",
          PreferredTransferArea: "North Region",
          PreferredTransferMine: "LMN Mine"
        },
        {
          YourName: "John Doe",
          YourDesignation: "Executive",
          AIDEOAIDNo: "AID12345678",
          MobileNumber: "9876543210",
          CurrentPostedSubsidiaryInCIL: "XYZ Subsidiary",
          CurrentPostedAREA: "South Region",
          CurrentMinesName: "ABC Mine",
          Designation: "Senior Manager",
          GRADE: "G6",
          PreferredTransferSubsidiary: "DEF Subsidiary",
          PreferredTransferArea: "North Region",
          PreferredTransferMine: "LMN Mine"
        },
        {
          YourName: "John Doe",
          YourDesignation: "Executive",
          AIDEOAIDNo: "AID12345678",
          MobileNumber: "9876543210",
          CurrentPostedSubsidiaryInCIL: "XYZ Subsidiary",
          CurrentPostedAREA: "South Region",
          CurrentMinesName: "ABC Mine",
          Designation: "Senior Manager",
          GRADE: "G6",
          PreferredTransferSubsidiary: "DEF Subsidiary",
          PreferredTransferArea: "North Region",
          PreferredTransferMine: "LMN Mine"
        },
        {
          YourName: "John Doe",
          YourDesignation: "Executive",
          AIDEOAIDNo: "AID12345678",
          MobileNumber: "9876543210",
          CurrentPostedSubsidiaryInCIL: "XYZ Subsidiary",
          CurrentPostedAREA: "South Region",
          CurrentMinesName: "ABC Mine",
          Designation: "Senior Manager",
          GRADE: "G6",
          PreferredTransferSubsidiary: "DEF Subsidiary",
          PreferredTransferArea: "North Region",
          PreferredTransferMine: "LMN Mine"
        },
        {
          YourName: "John Doe",
          YourDesignation: "Executive",
          AIDEOAIDNo: "AID12345678",
          MobileNumber: "9876543210",
          CurrentPostedSubsidiaryInCIL: "XYZ Subsidiary",
          CurrentPostedAREA: "South Region",
          CurrentMinesName: "ABC Mine",
          Designation: "Senior Manager",
          GRADE: "G6",
          PreferredTransferSubsidiary: "DEF Subsidiary",
          PreferredTransferArea: "North Region",
          PreferredTransferMine: "LMN Mine"
        },
        {
          YourName: "John Doe",
          YourDesignation: "Executive",
          AIDEOAIDNo: "AID12345678",
          MobileNumber: "9876543210",
          CurrentPostedSubsidiaryInCIL: "XYZ Subsidiary",
          CurrentPostedAREA: "South Region",
          CurrentMinesName: "ABC Mine",
          Designation: "Senior Manager",
          GRADE: "G6",
          PreferredTransferSubsidiary: "DEF Subsidiary",
          PreferredTransferArea: "North Region",
          PreferredTransferMine: "LMN Mine"
        },
        {
          YourName: "John Doe",
          YourDesignation: "Executive",
          AIDEOAIDNo: "AID12345678",
          MobileNumber: "9876543210",
          CurrentPostedSubsidiaryInCIL: "XYZ Subsidiary",
          CurrentPostedAREA: "South Region",
          CurrentMinesName: "ABC Mine",
          Designation: "Senior Manager",
          GRADE: "G6",
          PreferredTransferSubsidiary: "DEF Subsidiary",
          PreferredTransferArea: "North Region",
          PreferredTransferMine: "LMN Mine"
        },
        {
          YourName: "John Doe",
          YourDesignation: "Executive",
          AIDEOAIDNo: "AID12345678",
          MobileNumber: "9876543210",
          CurrentPostedSubsidiaryInCIL: "XYZ Subsidiary",
          CurrentPostedAREA: "South Region",
          CurrentMinesName: "ABC Mine",
          Designation: "Senior Manager",
          GRADE: "G6",
          PreferredTransferSubsidiary: "DEF Subsidiary",
          PreferredTransferArea: "North Region",
          PreferredTransferMine: "LMN Mine"
        }
      ]
      
  
    return (
      <div className=" bg-white rounded-xl py-4 lightdropshadowbox">
        <div className="flex flex-col">
          <div className="flex  space-x-4 mb-4 items-center">
            <div className="flex space-x-3 items-center "></div>
            <div className="flex justify-end flex-1 px-4  items-center space-x-4 ">
              <div className="relative w-[55%]" >
              <CiSearch  className="absolute  top-3 left-3"/>
                <input
                  type="text"
                  className="px-8 py-2 border w-full rounded-full text-sm border-gray-300"
                  placeholder="Search"
                />
              </div>
              {selectedItems.length>=2 &&  <MdDelete size={26} />}
              <div className='flex max-lg:flex-col gap-2'>
                <button className="bg-white text-nowrap font-semibold border shadow-md text-black py-2 px-4 rounded-md mr-2">Download all</button>
                <button className="bg-[#4B0082]  shadow-md font-semibold flex justify-center items-center gap-1  text-white py-2 px-4 rounded-md"><LuUploadCloud size={18} className=''/><span>Create</span></button>
              </div>
              </div>
          </div>
          <div className="flex justify-between px-4">
            <div className="flex space-x-3 items-center ">
              <button
                onClick={() => setUserType("Executive")}
                className={` ${
                  userType === "Executive"
                    ? "bg-[#4B0082]  text-white"
                    : "bg-white text-[#4B0082]"
                } rounded-t-2xl text-sm py-2 w-40 font-medium flex gap-2 justify-center items-center`}
              >
                <span>Executive</span>
                <span
                  className={`text-xs  font-bold px-2 rounded-md   ${
                    userType == "Executive"
                      ? "bg-white text-[#4B0082]"
                      : "bg-[#4B0082]  text-white"
                  }`}
                >
                  {executive.length}
                </span>
              </button>
              <button
                onClick={() => setUserType("Non Executive")}
                className={` ${
                  userType !== "Executive"
                    ? "bg-[#4B0082]  text-white"
                    : "bg-white text-[#4B0082]"
                } rounded-t-2xl text-sm py-2 w-40 font-medium flex gap-2 justify-center items-center`}
              >
                <span>Non Executive</span>
                <span
                  className={`text-xs  font-bold px-2 rounded-md   ${
                    userType != "Executive"
                      ? "bg-white text-[#4B0082]"
                      : "bg-[#4B0082]  text-white"
                  }`}
                >
                  {NonExecutive.length}
                </span>
              </button>
            </div>
            <button className="text-sm font-semibold">Filter by</button>
          </div>
        </div>
        <div className="overflow-x-scroll rounded-b-2xl">
          <table className="min-w-full bg-white border border-gray-300 ">
            <thead>
            <tr className="text-left border-b bg-gray-100 border-gray-200 h-16">
            <th className="p-2 px-4 font-medium text-sm text-gray-200">
                  <input
                      type="checkbox"
                      checked={selectAll}
                      onChange={handleSelectAll}
                      className=" checked:bg-purple-500 checked:border-purple-500 size-4  bg-col"
                    />
                </th>
                <th className="py-3 px-4 text-left font-medium text-sm text-gray-500 w-52">
                  Name 
                </th>
                <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                  AIDEOA ID
                </th>
              <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                  Mobile Number
                </th>
              <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
              Current posted Subsidiary
                </th>
              <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">Current posted AREA</th>
                <th className="p-2 font-medium text-sm text-gray-400 max-w-32">
                Current Mines Name
                </th>
                <th className="p-2  gap-1 font-medium text-sm text-gray-400">
                GRADE
                </th>
                <th className="p-2 font-medium text-sm text-gray-400 max-w-32">
                Designation
                </th>
                <th className="p-2 font-medium text-sm text-gray-400 max-w-32">
                Preferred Transfer Subsidiary
                </th>
                <th className="p-2 font-medium text-sm text-gray-400 max-w-32">
                Preferred Transfer Mine
                </th>
              <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.slice(0, 7).map((item, index) => (
                <tr key={index} className="border-b border-gray-200 h-16">
                  <td className="p-2 px-4 font-medium text-sm text-gray-600">
                   <input
                      type="checkbox"
                      checked={selectedItems.includes(index)}
                      onChange={() => handleSelectItem(index)}
                      className=" checked:bg-purple-500 checked:border-purple-500 size-4  bg-col"
                    />
                  </td>
                  <td className="p-2 font-medium text-sm text-gray-600  max-w-52 ">
                  
                      {item.YourName}
               
                  </td>
                  <td className="p-2 font-medium text-sm text-gray-400 ">
                    {item.AIDEOAIDNo}
                  </td>
                  <td className="p-2 font-medium text-sm text-gray-400 ">
                    {item.MobileNumber}
                  </td>
                  <td className="p-2 font-medium text-sm text-gray-400">
                    {item.CurrentPostedSubsidiaryInCIL}
                  </td>
                  <td className="p-2 font-medium text-sm text-gray-400">
                    {item.CurrentPostedAREA}
                  </td>
  
                  <td className=" text-gray-400 max-w-32  p-2 font-medium text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                    {item.CurrentMinesName}
                  </td>
                  <td className="p-2 font-medium text-xs text-gray-400">
                 {item.Designation}
                  </td>
                  <td className=" text-gray-400 max-w-32  p-2 font-medium text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                    {item.GRADE}
                  </td>
                  <td className=" text-gray-400 max-w-32  p-2 font-medium text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                    {item.PreferredTransferSubsidiary}
                  </td>
                  <td className=" text-gray-400 max-w-32  p-2 font-medium text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                    {item.PreferredTransferArea}
                  </td>
                  <td className=" text-gray-400 max-w-32  p-2 font-medium text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                    {item.PreferredTransferMine}
                  </td>
                  <td className="p-2 font-medium text-sm text-gray-600 cursor-pointer">
                    <BsThreeDotsVertical />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        <div className="flex justify-between items-center mt-4 px-4">
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
  )
}

export default MutualTransfer