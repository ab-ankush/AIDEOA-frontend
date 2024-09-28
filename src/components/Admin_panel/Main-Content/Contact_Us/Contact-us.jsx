import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoCloudUploadOutline } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";

const ContactUs = () => {
  // Define the dynamic data as an array of objects
  const [contactData, setContactData] = useState([
    {
      checkbox: <input type="checkbox" className=" size-4  bg-col"  />,
      name: "Olivia Rhye",
      mobile: "9876541230",
      email: "olivia@untitledui.com",
      message: "The roads in our area have developed numerous potholes...",
      date: "12 Nov 6:00 pm",
      action: <HiOutlineDotsVertical />,
    },
    {
        checkbox: <input type="checkbox" className=" size-4  bg-col"  />,
      name: "Phoenix Baker",
      mobile: "9876541230",
      email: "phoenix@untitledui.com",
      message: "Our area has developed numerous potholes...",
      date: "12 Nov 6:00 pm",
      action: <HiOutlineDotsVertical />,
    },
    {
        checkbox: <input type="checkbox" className=" size-4  bg-col"  />,
      name: "Lana Steiner",
      mobile: "9876541230",
      email: "lana@untitledui.com",
      message: "The roads in our area have developed numerous potholes...",
      date: "12 Nov 6:00 pm",
      action: <HiOutlineDotsVertical />,
    },
    {
        checkbox: <input type="checkbox" className=" size-4  bg-col"  />,
      name: "Demi Wilkinson",
      mobile: "9876541230",
      email: "demi@untitledui.com",
      message: "Area has developed numerous potholes...",
      date: "12 Nov 6:00 pm",
      action: <HiOutlineDotsVertical />,
    },
    // Add more objects here as needed
  ]);

  return (
    <div >
       

        {/* Contact Us Section */}
        <div className="w-full bg-white shadow-md rounded-lg ">
        <div className="w-full flex justify-between items-center  p-6 pb-5">
          {/* Table Title */}
          <div className="flex items-center space-x-2">
            <h2 className="text-xl font-semibold">Contact Us</h2>
            <sup className="text-xs text-purple-500 font-medium bg-purple-100 p-1 px-2  rounded-full">
              {contactData.length} users
            </sup>
          </div>

          {/* Search Bar and Action Buttons */}
          <div className="flex justify-between  items-center w-[42%]">
            <div className="relative w-[55%]" >
            <CiSearch  className="absolute  top-3 left-3"/>
              <input
                type="text"
                className="px-8 py-2 border w-full rounded-full text-sm border-gray-300"
                placeholder="Search"
              />
            </div>

            <button className="bg-white font-semibold border shadow-md text-black py-2 px-4 rounded-md mr-2">
              Download all
            </button>
            <div className="bg-[#4B0082] shadow-md font-semibold flex items-center gap-1  text-white py-2 px-4 rounded-md">
            <IoCloudUploadOutline  size={18}/>
            <button className="">Create</button>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="">
          <table className="min-w-full ">
            <thead className="border-b">
              <tr className="border-b bg-gray-200 border-gray-200 h-16 ">
                <th className="py-3 px-4 text-left font-normal text-gray-500">
                    <input type="checkbox" className=" checked:bg-purple-500 checked:border-purple-500 size-4  bg-col"  />
                </th>
                <th className="py-3 px-4 text-left font-normal text-gray-500">Name</th>
                <th className="py-3 px-4 text-left font-normal text-gray-500">
                  Mobile Number
                </th>
                <th className="py-3 px-4 text-left font-normal text-gray-500">
                  Email address
                </th>
                <th className="py-3 px-4 text-left font-normal text-gray-500">Message</th>
                <th className="py-3 px-4 text-left font-normal text-gray-500">Date</th>
                <th className="py-3 px-4 text-center font-normal text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contactData.map((contact, index) => (
                <tr key={index} className="border-b h-16 hover:bg-gray-50">
                  <td className="py-3 px-4">{contact.checkbox}</td>
                  <td className="py-3 px-4 font-medium">{contact.name}</td>
                  <td className="py-3 px-4 text-gray-500">{contact.mobile}</td>
                  <td className="py-3 px-4 text-gray-500">{contact.email}</td>
                  <td className="py-3 px-4  text-gray-500">{contact.message}</td>
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

          {/* Pagination */}
          <div className="flex justify-between items-center mt-6 p-6">
          <div className="relative border border-gray-400 p-2 justify-evenly items-center rounded-md w-24 flex">
              <FaArrowRight  size={15} className="text-gray-500 rotate-180"/>
              <button className="text-gray-500  text-sm">
                Previous
              </button>
            </div>
            <div className="space-x-2 flex gap-x-1 items-baseline">
              <button className="px-3 py-1 rounded-md bg-purple-100 text-purple-800">
                1
              </button>
              <button className="px-3 py-1 rounded-md  text-purple-800">
                2
              </button>
              <button className="px-3 py-1 rounded-md  text-purple-800">
                3
              </button>
              <button>.....</button>

              <button className="px-3 py-1 rounded-md  text-purple-800">
                8
              </button>
              <button className="px-3 py-1 rounded-md  text-purple-800">
                9
              </button>
              <button className="px-3 py-1 rounded-md  text-purple-800">
                10
              </button>
            </div>
            <div className="relative border border-gray-400 p-2 justify-evenly items-center rounded-lg w-24 flex">
              <button className="text-gray-500  text-sm">
                Next
              </button>
              <FaArrowRight  size={15} className="text-gray-500"/>
            </div>
          </div>
        </div>
        </div>
      </div>
  );
};

export default ContactUs;
