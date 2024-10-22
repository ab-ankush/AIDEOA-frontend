import useStudentIdCard from "../../hooks/useStudentIdCard";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";

import { LuUploadCloud } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
const IdCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [userType, setUserType] = useState("Employees");
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const totalPages = 3;
  const Students = new Array(20).fill("");
  const employees = new Array(30).fill("");
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
 
const {data,loading,getIdCard,approveIdCard}=useStudentIdCard(userType)
console.log(data)
useEffect(()=>{
  getIdCard(userType)
},[userType])
  return (
    <div className=" bg-white rounded-xl py-4 lightdropshadowbox">
      <div className="flex flex-col">
        <div className="flex  space-x-4 mb-4 items-center">
        <div className="flex space-x-3 items-center">
          <h2 className="font-bold text-lg">Id Card</h2>
          <span className="bg-purple-200 px-2 text-xs rounded-full">
          
          </span>
        </div>
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
              <th className="py-3 px-4 text-left font-medium text-sm text-gray-500 ">
                Name & Photo
              </th>
              <th className="py-3 px-4 text-left font-medium text-sm text-gray-500 ">
              {userType==='Employees'?' Company Name':'College Name'}
              </th>
              <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
               {userType==='Employees'?' Employee ID':'University ID'}
              </th>
            <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                Mobile Number
              </th>
            <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
               Address
              </th>
              <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
               {userType==='Employees' && 'Working AREA'}
              </th>
            {userType!=='Employees' &&   <th className="p-2  gap-1 font-medium text-sm text-gray-400">
                Status
              </th>}
           
            <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
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
                  <td className="flex items-center gap-1 whitespace-nowrap overflow-hidden text-ellipsis">
                    <img src={(item.studentPhoto||item.employeePhoto) && userType==='Employees'?item?.employeePhoto:item?.studentPhoto  } className="w-5 rounded-full" />{" "}
                    {item.name}
                  </td>
                </td>
                <td className="p-2 font-medium text-sm text-gray-400 ">
                {userType==='Employees'?item.companyName:item.collegeName}
                </td>
                <td className="p-2 font-medium text-sm text-gray-400 ">
                {userType==='Employees'?item.workingArea:item.universityId
                }
                </td>
                <td className="p-2 font-medium text-sm text-gray-400 ">
                  {item.contactNo}
                </td>
                <td className="p-2 font-medium text-sm text-gray-400">
                  {item.address}
                </td>

                <td className="p-2 font-medium text-sm text-gray-400 ">
                {userType==='Employees'&&item.workingArea
                }
                </td>
                {
                  userType!=='Employees' && <td className="p-2 font-medium text-xs text-gray-400">
                  <td className={` rounded-full px-1 ${item.status==="approved"?"bg-green-100 text-green-700 ":"bg-red-100 text-red-700"}`}>{item.status}</td>
                  </td>
                }
                    <td className="p-2 flex font-medium text-center w-full text-sm justify-around h-16 items-center  text-gray-600 cursor-pointer">
                    <FaCheck onClick={()=>approveIdCard(item.id,"approved")}/>
                    <RxCross2 onClick={()=>approveIdCard(item.id,"rejected")}/>
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
  );
};

export default IdCard;
