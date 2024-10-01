import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuUploadCloud } from "react-icons/lu";
import { CiSearch } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md'; // Import MdDelete for deletion

const Resources = () => {
  const data = [
    {
      title: "AIDEOA Hostsdasdsa sdsadas safdsad Summit",
      eventDateTime: "12 Nov 2025 5:30 am - 6:30 pm",
      days: "2 days",
      location: "Hotel Baker",
      description: "candiceThe roads in our area...",
      url: "https://www.example.com"
    },  {
      title: "AIDEOA Hostsdasdsa sdsadas safdsad Summit",
      eventDateTime: "12 Nov 2025 5:30 am - 6:30 pm",
      days: "2 days",
      location: "Hotel Baker",
      description: "candiceThe roads in our area...",
      url: "https://www.example.com"
    },  {
      title: "AIDEOA Hostsdasdsa sdsadas safdsad Summit",
      eventDateTime: "12 Nov 2025 5:30 am - 6:30 pm",
      days: "2 days",
      location: "Hotel Baker",
      description: "candiceThe roads in our area...",
      url: "https://www.example.com"
    },  {
      title: "AIDEOA Hostsdasdsa sdsadas safdsad Summit",
      eventDateTime: "12 Nov 2025 5:30 am - 6:30 pm",
      days: "2 days",
      location: "Hotel Baker",
      description: "candiceThe roads in our area...",
      url: "https://www.example.com"
    },  {
      title: "AIDEOA Hostsdasdsa sdsadas safdsad Summit",
      eventDateTime: "12 Nov 2025 5:30 am - 6:30 pm",
      days: "2 days",
      location: "Hotel Baker",
      description: "candiceThe roads in our area...",
      url: "https://www.example.com"
    },  {
      title: "AIDEOA Hostsdasdsa sdsadas safdsad Summit",
      eventDateTime: "12 Nov 2025 5:30 am - 6:30 pm",
      days: "2 days",
      location: "Hotel Baker",
      description: "candiceThe roads in our area...",
      url: "https://www.example.com"
    },

  ];

  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  // Handle selecting all checkboxes
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(data.map((_, index) => index));
    }
    setSelectAll(!selectAll);
  };

  // Handle individual item selection
  const handleSelectItem = (index) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((item) => item !== index));
    } else {
      setSelectedItems([...selectedItems, index]);
    }
  };

  return (
    <div className="rounded-xl py-4 bg-gray-50">
      <div className="flex space-x-4 mb-4 px-4 max-lg:flex-col-reverse max-lg:gap-2">
        <div className="flex space-x-4">
          <div className="bg-[#4B0082] text-center text-white shadow-md rounded-xl flex flex-col justify-center items-center p-2 h-16">
            <p className="text-nowrap">Student Corner</p>
            <p className="font-bold">100</p>
          </div>
          <div className="bg-white text-gray-700 text-center border shadow-md rounded-xl flex flex-col justify-center p-2 h-16 items-center">
            <p className="text-nowrap">Employee Corner</p>
            <p className="font-bold">100</p>
          </div>
          <div className="bg-white text-gray-700 text-center shadow-md border rounded-xl flex flex-col justify-center p-2 h-16 items-center">
            <p className="text-nowrap">Education</p>
            <p className="font-bold">100</p>
          </div>
        </div>

        <div className="flex justify-end flex-1 items-center space-x-4">
          <div className="relative w-[55%]">
            <CiSearch className="absolute top-3 left-3" />
            <input
              type="text"
              className="px-8 py-2 border w-full rounded-full text-sm border-gray-300"
              placeholder="Search"
            />
          </div>
          {selectedItems.length >= 2 && <MdDelete size={26} />}
          <div className="flex max-lg:flex-col gap-2">
            <button className="bg-white font-semibold border shadow-md text-black py-2 px-4 rounded-md mr-2">Download all</button>
            <button className="bg-[#4B0082] shadow-md font-semibold flex items-center gap-1 text-white py-2 px-4 rounded-md">
              <LuUploadCloud size={18} />
              <span>Create</span>
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="text-left border-b bg-gray-200 border-gray-200 h-16">
              <th className="p-2 px-4 font-medium text-sm text-gray-600">
                <input
                  type="checkbox"
                  className="checked:bg-purple-500 checked:border-purple-500 size-4 bg-col"
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
              </th>
              <th className="p-2 font-medium text-sm text-gray-600 w-52">Title</th>
              <th className="p-2 font-medium text-sm text-gray-600">Event Date & Time</th>
              <th className="p-2 font-medium text-sm text-gray-600">Days</th>
              <th className="p-2 font-medium text-sm text-gray-600">Location</th>
              <th className="p-2 font-medium text-sm text-gray-600">Description</th>
              <th className="p-2 font-medium text-sm text-gray-600 max-w-32">Url</th>
              <th className="p-2 font-medium text-sm text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.slice(0, 7).map((item, index) => (
              <tr key={index} className="border-b border-gray-200 h-16">
                <td className="p-2 px-4 font-medium text-sm text-gray-600">
                  <input
                    type="checkbox"
                    className="checked:bg-purple-500 checked:border-purple-500 size-4 bg-col"
                    checked={selectedItems.includes(index)}
                    onChange={() => handleSelectItem(index)}
                  />
                </td>
                <td className="p-2 font-medium text-sm text-gray-600 max-w-52 whitespace-nowrap overflow-hidden text-ellipsis">{item.title}</td>
                <td className="p-2 font-medium text-sm text-gray-400">{item.eventDateTime}</td>
                <td className="p-2 font-medium text-sm text-gray-400">{item.days}</td>
                <td className="p-2 font-medium text-sm text-gray-400">{item.location}</td>
                <td className="p-2 font-medium text-sm text-gray-400">{item.description.substring(0, 20)}...</td>
                <td className="p-2 font-medium text-sm text-gray-400">
                  <Link to={item.url} className="text-blue-500 max-w-32 whitespace-nowrap overflow-hidden text-ellipsis">
                    {item.url}
                  </Link>
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
        <button
          className="py-2 px-4 bg-white shadow-md border text-black rounded-md"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >
          Previous
        </button>
        <div className="space-x-2">
          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page}
              className={`py-2 px-4 rounded-md shadow-md border ${currentPage === page + 1 ? 'bg-purple-700 text-white' : 'bg-white text-black'}`}
              onClick={() => setCurrentPage(page + 1)}
            >
              {page + 1}
            </button>
          ))}
        </div>
        <button
          className="py-2 px-4 bg-white shadow-md border text-black rounded-md"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Resources;
