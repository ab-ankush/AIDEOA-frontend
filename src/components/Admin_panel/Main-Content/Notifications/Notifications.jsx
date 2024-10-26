import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoCloudUploadOutline } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";
import { LuUploadCloud } from "react-icons/lu";
import Pagination from "../../Pagination/Pagination";
import { MdDelete } from "react-icons/md";
import axios from "axios";

const Notifications = () => {
  const [mailsData,setMailsData]=useState([])
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(mailsData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = mailsData.slice(indexOfFirstItem, indexOfLastItem);

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(mailsData.map((_, index) => index));
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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const fetchMails = async () => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_API_BACKEND_URL}/api/notification`);
        console.log(res)
        if (res.status === 200) {
            setMailsData(res.data);
        } else {
            console.error(`Unexpected response status: ${res.status}`);
        }
    } catch (error) {
      console.log(error)
       throw new Error("Something went wrong")
    }
};
useEffect(()=>{
fetchMails()
},[])

  return (
    <div>
      <div className="py-4 bg-white rounded-xl lightdropshadowbox">
        <div className="flex px-4 space-x-4 mb-4 items-center">
          <div className="flex space-x-3 items-center ">
            <h2 className="font-bold text-lg">Newsletter</h2>
            <span className="bg-purple-200 px-2  text-xs rounded-full">
              {mailsData.length} Users
            </span>
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
            {mailsData.length >= 2 && <MdDelete size={26} />}
            <div className="flex max-lg:flex-col gap-2">
              <button className="bg-white text-nowrap font-semibold border shadow-md text-black py-2 px-4 rounded-md mr-2">
                Download all
              </button>
             
            </div>
          </div>
        </div>

        <div>
          <div className="">
            <table className="    w-full ">
              <thead className="border-b bg-gray-200 border-gray-200 h-16  ">
                <tr className="text-left border-b bg-gray-100 border-gray-200 h-16">
                  <th className="p-2 px-4 font-medium text-sm text-gray-200">
                    <input
                      type="checkbox"
                      className="checked:bg-purple-500 checked:border-purple-500 size-4 bg-col"
                      checked={selectAll}
                      onChange={handleSelectAll}
                    />
                  </th>
                  <th className="py-3 px-4 text-left font-medium text-sm text-gray-500 w-full">
                    Emails
                  </th>
              
                </tr>
              </thead>
              <tbody>
                {currentItems?.map((contact, index) => (
                  <tr key={index} className="border-b h-16 hover:bg-gray-50">
                    <td className="p-2 px-4 font-medium text-sm text-gray-600">
                      <input
                        type="checkbox"
                        className="checked:bg-purple-500 checked:border-purple-500 size-4 bg-col"
                        checked={selectedItems.includes(index)}
                        onChange={() => handleSelectItem(index)}
                      />
                    </td>
                    <td className="py-3 px-4 font-medium text-gray-500">{contact?.address}</td>
                   
                 
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
