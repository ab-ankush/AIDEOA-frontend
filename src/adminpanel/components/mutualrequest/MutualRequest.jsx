import axios from "axios";
import useMutualTransfer from "../../../hooks/useMutualTransfer";
import { useEffect, useState } from "react";


import { CiSearch } from "react-icons/ci";
import { FiEdit2 } from "react-icons/fi";
import { LuUploadCloud } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import toast from "react-hot-toast";
import useMutualPairs from "../../../hooks/useMutualPairs";

const MutualRequest = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [userType, setUserType] = useState("Pending");
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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
 
const {data,loading,approvePair,getPairs}=useMutualPairs()

useEffect(()=>{
getPairs(userType)
},[userType])
  return (
    <div className="bg-white rounded-xl py-4 lightdropshadowbox">
      <div className="flex flex-col">
        <div className="flex space-x-4 mb-4 items-center">
          <div className="flex justify-end flex-1 px-4 items-center space-x-4">
            <div className="relative w-[55%]">
              <CiSearch className="absolute top-3 left-3" />
              <input
                type="text"
                className="px-8 py-2 border w-full rounded-full text-sm border-gray-300"
                placeholder="Search by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} // Update search term
              />
            </div>
            {selectedItems.length >= 2 && <MdDelete size={26} />}
            <div className="flex max-lg:flex-col gap-2">
              <button className="bg-white text-nowrap font-semibold border shadow-md text-black py-2 px-4 rounded-md mr-2">
                Download all
              </button>
              
            </div>
          </div>
        </div>

        <div className="flex justify-between px-4">
          <div className="flex space-x-3 items-center">
            <button
              onClick={() => setUserType("Pending")}
              className={` ${
                userType === "Pending"
                  ? "bg-[#4B0082] text-white"
                  : "bg-white text-[#4B0082]"
              } rounded-t-2xl text-sm py-2 w-40 font-medium flex gap-2 justify-center items-center`}
            >
              <span>Pending</span>
              {userType !== "Completed" && (
                <span
                  className={`text-xs font-bold px-2 rounded-md ${
                    userType === "Pending"
                      ? "bg-white text-[#4B0082]"
                      : "bg-[#4B0082] text-white"
                  }`}
                >
                  {data.length}
                </span>
              )}
            </button>
            <button
              onClick={() => setUserType("Completed")}
              className={` ${
                userType !== "Pending"
                  ? "bg-[#4B0082] text-white"
                  : "bg-white text-[#4B0082]"
              } rounded-t-2xl text-sm py-2 w-40 font-medium flex gap-2 justify-center items-center`}
            >
              <span>Completed</span>
              {userType === "Completed" && (
                <span
                  className={`text-xs font-bold px-2 rounded-md ${
                    userType !== "Pending"
                      ? "bg-white text-[#4B0082]"
                      : "bg-[#4B0082] text-white"
                  }`}
                >
                  {data.length}
                </span>
              )}
            </button>
          </div>
          <button className="text-sm font-semibold">Filter by</button>
        </div>
      </div>

      <div className="overflow-x-scroll rounded-b-2xl">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="text-left border-b bg-gray-100 border-gray-200 h-16">
              <th className="p-2 px-4 font-medium text-sm text-gray-200">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className="checked:bg-purple-500 checked:border-purple-500 size-4 bg-col"
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
              <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                Current posted AREA
              </th>
              <th className="p-2 font-medium text-sm text-gray-500 max-w-32">
                Current Mines Name
              </th>
              <th className="p-2 gap-1 font-medium text-sm text-gray-500">
                GRADE
              </th>
              <th className="p-2 font-medium text-sm text-gray-500 max-w-32">
                Designation
              </th>
              <th className="p-2 font-medium text-sm text-gray-500 max-w-32">
                Preferred Transfer Subsidiary
              </th>
              <th className="p-2 font-medium text-sm text-gray-500 max-w-32">
                Preferred Transfer Area
              </th>
              <th className="p-2 font-medium text-sm text-gray-500 max-w-32">
                Preferred Transfer Mine
              </th>
              <th className="p-2 font-medium text-sm text-gray-500 max-w-32">
                Member2
              </th>
              <th className="p-2 font-medium text-sm text-gray-500 max-w-32">
                Email
              </th>
              <th className="p-2 font-medium text-sm text-gray-500 max-w-32">
                Status
              </th>
              <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {data?.slice(0, 7)?.map((item, index) => (
              <tr key={index} className="border-b border-gray-200 h-16">
                <td className="p-2 px-4 font-medium text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(index)}
                    onChange={() => handleSelectItem(index)}
                    className="checked:bg-purple-500 checked:border-purple-500 size-4 bg-col"
                  />
                </td>
                <td className="p-2 font-medium text-sm text-gray-600 max-w-52">
                  {item.transferRequest.name}
                </td>
                <td className="p-2 font-medium text-sm text-gray-400">
                  {item.transferRequest.aideoaIdNo}
                </td>
                <td className="p-2 font-medium text-sm text-gray-400">
                  {item.transferRequest.mobileNumber}
                </td>
                <td className="p-2 font-medium text-sm text-gray-400">
                  {item.transferRequest.currentSubsidiary}
                </td>
                <td className="p-2 font-medium text-sm text-gray-400">
                  {item.transferRequest.currentPostedArea}
                </td>
                <td className="text-gray-400 max-w-32 p-2 font-medium text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                  {item.transferRequest.currentMinesName}
                </td>
                <td className="p-2 font-medium text-xs text-gray-400">
                  {item.transferRequest.grade}
                </td>
                <td className="text-gray-400 max-w-32 p-2 font-medium text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                  {item.transferRequest.designation}
                </td>
                <td className="p-2 font-medium text-xs text-gray-400">
                  {item.transferRequest.preferredTransferSubsidiary}
                </td>
                <td className="p-2 font-medium text-xs text-gray-400">
                  {item.transferRequest.preferredTransferArea}
                </td>
                <td className="p-2 font-medium text-xs text-gray-400">
                  {item.transferRequest.preferredTransferMine}
                </td>
                <td className="p-2 font-medium text-xs text-gray-400">
                  {item.user2.fullName}
                </td>
                <td className="p-2 font-medium text-xs text-gray-400">
                  {item.user2.email}
                </td>
                <td className="p-2 font-medium text-xs text-gray-400">
                  {item.status}
                </td>
                <td className="py-3 px-4 font-medium">
                      <button disabled={item.status==='completed'} onClick={()=>approvePair(item.id)} className="text-gray-500 flex gap-x-5 hover:text-gray-700">
                       <span className="text-xs text-white px-2 py-1 rounded-full bg-green-700">{item.status==='completed'?'Completed':'Approve'}</span>
                      </button>
                    </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-3 w-full flex justify-center items-center gap-3">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          className="rounded-full h-6 w-6 flex items-center justify-center border bg-gray-100"
        >
          {"<"}
        </button>
        <button
          onClick={() => setCurrentPage(1)}
          className={`${
            currentPage === 1 ? "bg-[#4B0082] text-white" : "bg-gray-100"
          } rounded-full h-6 w-6 flex items-center justify-center border`}
        >
          1
        </button>
        <button
          onClick={() => setCurrentPage(2)}
          className={`${
            currentPage === 2 ? "bg-[#4B0082] text-white" : "bg-gray-100"
          } rounded-full h-6 w-6 flex items-center justify-center border`}
        >
          2
        </button>
        <button
          onClick={() => setCurrentPage(3)}
          className={`${
            currentPage === 3 ? "bg-[#4B0082] text-white" : "bg-gray-100"
          } rounded-full h-6 w-6 flex items-center justify-center border`}
        >
          3
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          className="rounded-full h-6 w-6 flex items-center justify-center border bg-gray-100"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default MutualRequest
