import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoCloudUploadOutline } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { LuUploadCloud } from "react-icons/lu";
import Pagination from "../../Pagination/Pagination";
import { MdDelete } from "react-icons/md";

const ContactUs = ({ setActiveComponent }) => {
  const [contactData, setContactData] = useState([
    {
      checkbox: <input type="checkbox" className=" size-4  bg-col" />,
      name: "Olivia Rhye",
      mobile: "9876541230",
      email: "olivia@untitledui.com",
      message: "The roads in our area have developed numerous potholes...",
      date: "12 Nov 6:00 pm",
      action: <HiOutlineDotsVertical />,
    },
    {
      checkbox: <input type="checkbox" className=" size-4  bg-col" />,
      name: "Phoenix Baker",
      mobile: "9876541230",
      email: "phoenix@untitledui.com",
      message: "Our area has developed numerous potholes...",
      date: "12 Nov 6:00 pm",
      action: <HiOutlineDotsVertical />,
    },
    {
      checkbox: <input type="checkbox" className=" size-4  bg-col" />,
      name: "Lana Steiner",
      mobile: "9876541230",
      email: "lana@untitledui.com",
      message: "The roads in our area have developed numerous potholes...",
      date: "12 Nov 6:00 pm",
      action: <HiOutlineDotsVertical />,
    },
    {
      checkbox: <input type="checkbox" className=" size-4  bg-col" />,
      name: "Demi Wilkinson",
      mobile: "9876541230",
      email: "demi@untitledui.com",
      message: "Area has developed numerous potholes...",
      date: "12 Nov 6:00 pm",
      action: <HiOutlineDotsVertical />,
    },
  ]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(contactData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = contactData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(contactData.map((_, index) => index));
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

  return (
    <div>
      {/* Contact Us Section */}
      <div className="w-full bg-white shadow-md rounded-lg ">
        <div className="w-full flex justify-between items-center flex-col lg:flex-row  p-6 pb-5">
          {/* Table Title */}
          <div className="flex flex-col m-auto lg:m-0  lg:flex-row items-center mb-5 lg:mb-0 space-x-2">
            <h2 className="text-xl font-semibold">
              Contact Us
              <sup className="text-xs text-purple-500 font-medium bg-purple-100 p-1 px-2  rounded-full">
                {contactData.length} users
              </sup>
            </h2>
          </div>

          {/* Search Bar and Action Buttons */}
          <div className="flex justify-between gap-x-5 flex-col lg:flex-row items-center text-end w-full lg:w-[50%]">
            <div className="relative w-full lg:w-[55%]">
              <CiSearch className="absolute  top-3 left-3" />
              <input
                type="text"
                className="px-8 py-2 border w-full rounded-full text-sm border-gray-300"
                placeholder="Search"
              />
            </div>
            {selectedItems.length >= 2 && <MdDelete size={26} />}
            <div className="flex  justify-evenly mt-5 lg:mt-0  lg:gap-2 items-center  w-full lg:w-[50%]">
              <div>
                <button className="bg-white text-xs font-semibold border shadow-md text-black py-2 px-4 rounded-md ">
                  Download all
                </button>
              </div>
              <div
                onClick={() => {
                  setActiveComponent("Create Contact");
                }}
                className="bg-[#4B0082] shadow-md font-semibold flex items-center gap-1  text-white py-2 px-4 rounded-md"
              >
                <IoCloudUploadOutline size={18} />
                <button className="">Create</button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="overflow-x-scroll">
            <table className="  min-w-[1232px]  w-full ">
              <thead className="border-b ">
                <tr className="border-b min-w-[1232px] bg-gray-200  border-gray-200 h-16 ">
                  <th className="py-3 px-4 text-left font-normal text-gray-500">
                    <input
                      type="checkbox"
                      onChange={handleSelectAll}
                      className=" checked:bg-purple-500 checked:border-purple-500 size-4  bg-col"
                    />
                  </th>
                  <th className="py-3 px-4 text-left font-normal text-gray-500">
                    Name
                  </th>
                  <th className="py-3 px-4 text-left font-normal text-gray-500">
                    Mobile Number
                  </th>
                  <th className="py-3 px-4 text-left font-normal text-gray-500">
                    Email address
                  </th>
                  <th className="py-3 px-4 text-left font-normal text-gray-500">
                    Message
                  </th>
                  <th className="py-3 px-4 text-left font-normal text-gray-500">
                    Date
                  </th>
                  <th className="py-3 px-4 text-center font-normal text-gray-500">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((contact, index) => (
                  <tr key={index} className="border-b h-16 hover:bg-gray-50">
                    <td className="p-2 px-4 font-medium text-sm text-gray-600">
                      <input
                        type="checkbox"
                        className="checked:bg-purple-500 checked:border-purple-500 size-4 bg-col"
                        checked={selectedItems.includes(index)}
                        onChange={() => handleSelectItem(index)}
                      />
                    </td>
                    <td className="py-3 px-4 font-medium">{contact.name}</td>
                    <td className="py-3 px-4 text-gray-500">
                      {contact.mobile}
                    </td>
                    <td className="py-3 px-4 text-gray-500">{contact.email}</td>
                    <td className="py-3 px-4  text-gray-500">
                      {contact.message}
                    </td>
                    <td className="py-3 px-4 text-gray-500">{contact.date}</td>
                    <td className="py-3 px-4 text-center text-gray-400">
                      <button className="text-gray-500  hover:text-gray-700">
                        {contact.action}
                      </button>
                    </td>
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

export default ContactUs;
