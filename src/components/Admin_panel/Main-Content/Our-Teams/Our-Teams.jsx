import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoCloudUploadOutline } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { BsThreeDotsVertical } from "react-icons/bs";

const OurTeams = () => {
  // Define the dynamic data as an array of objects
  const [contactData, setContactData] = useState([
    {
      checkbox: <input type="checkbox" className="size-4 bg-col" />,
      name: "Olivia Rhye",
      category: "Executive / Founder Member",
      mobile: "9876541230",
      email: "olivia@untitledui.com",
      selfAddress: "candice The roads in our area...",
      action: <BsThreeDotsVertical />,
      profileImage: "url-to-olivia-image",
    },
    {
      checkbox: <input type="checkbox" className="size-4 bg-col" />,
      name: "Phoenix Baker",
      category: "Executive / Founder Member",
      mobile: "9876541230",
      email: "phoenix@untitledui.com",
      selfAddress: "our area have developed...",
      action: <BsThreeDotsVertical />,
      profileImage: "url-to-olivia-image",
    },
    {
      checkbox: <input type="checkbox" className="size-4 bg-col" />,
      name: "Lana Steiner",
      category: "Executive / Founder Member",
      mobile: "9876541230",
      email: "lana@untitledui.com",
      selfAddress: "candice The roads in our area...",
      action: <BsThreeDotsVertical />,
      profileImage: "url-to-olivia-image",
    },
    {
      checkbox: <input type="checkbox" className="size-4 bg-col" />,
      name: "Demi Wilkinson",
      category: "Executive / Founder Member",
      mobile: "9876541230",
      email: "demi@untitledui.com",
      selfAddress: "area have developed...",
      action: <BsThreeDotsVertical />,
      profileImage: "url-to-olivia-image",
    },
    {
      checkbox: <input type="checkbox" className="size-4 bg-col" />,
      name: "Candice Wu",
      category: "Executive / Founder Member",
      mobile: "9876541230",
      email: "candice@untitledui.com",
      selfAddress: "candice The roads in our area...",
      action: <BsThreeDotsVertical />,
      profileImage: "url-to-olivia-image",
    },
    {
      checkbox: <input type="checkbox" className="size-4 bg-col" />,
      name: "Natali Craig",
      category: "Executive / Founder Member",
      mobile: "9876541230",
      email: "natali@untitledui.com",
      selfAddress: "natali The roads in our area...",
      action: <BsThreeDotsVertical />,
      profileImage: "url-to-olivia-image",
    },
    {
      checkbox: <input type="checkbox" className="size-4 bg-col" />,
      name: "Drew Cano",
      category: "Executive / Founder Member",
      mobile: "9876541230",
      email: "drew@untitledui.com",
      selfAddress: "drew candice The roads in our area...",
      action: <BsThreeDotsVertical />,
      profileImage: "url-to-olivia-image",
    },
    {
      checkbox: <input type="checkbox" className="size-4 bg-col" />,
      name: "Kate Morrison",
      category: "Executive / Founder Member",
      mobile: "9876541230",
      email: "kate@untitledui.com",
      selfAddress: "kate candice The roads in our area...",
      action: <BsThreeDotsVertical />,
      profileImage: "url-to-olivia-image",
    },
  ]);

  return (
    <div className="">
      {/* Dashboard Heading */}

      {/* Events Section */}
      <div className="w-full bg-white shadow-md rounded-lg ">
        <div className="w-full flex justify-between items-center  p-6 pb-5">
          {/* Table Title */}
          <div className="flex items-center space-x-2">
            <h2 className="text-xl font-semibold">Team</h2>
            <sup className="text-xs text-purple-500 font-medium bg-purple-100 p-1 px-2 rounded-full">
              200
            </sup>
          </div>

          {/* Search Bar and Action Buttons */}
          <div className="flex gap-4 items-center w-[35%]">
            <div className="relative w-[80%]">
              <CiSearch className="absolute top-3 left-3" />
              <input
                type="text"
                className="px-8 py-2 border w-full rounded-full text-sm border-gray-300"
                placeholder="Search"
              />
            </div>

            <div className="flex items-center gap-2 bg-[#7C3AED] text-white px-4 py-2 rounded-lg text-sm">
              <IoCloudUploadOutline />
              <button className="">Create</button>
            </div>
          </div>
        </div>

        <div className="flex ">
          <div className="mx-6 px-5 pt-2 text-white bg-purple-900 rounded-t-lg">
            <button>All</button>
            <sup className="bg-white text-black ml-2 px-2 rounded-full">
              302
            </sup>
          </div>
          <div className="mx-6 px-5 pt-2 text-white bg-purple-900 rounded-t-lg">
            <button>Executive/Founder Members</button>
            <sup className="bg-white text-black ml-2 px-2 rounded-full">95</sup>
          </div>
          <div className="mx-6 px-5 pt-2 text-text  rounded-t-lg">
            <button>Education Cell Members</button>
            <sup className="bg-purple-200 text-purple ml-2 px-2 rounded-full">
              20
            </sup>
          </div>
          <div className="mx-6 px-5 pt-2 text-text  rounded-t-lg">
            <button>IT Cell Members</button>
            <sup className="bg-purple-200 text-purple ml-2 px-2 rounded-full">
              13
            </sup>
          </div>
        </div>
        {/* Table Section */}
        <div className="h-full">
          <table className="min-w-full">
            <thead className="border-b bg-gray-200 border-gray-200 h-16  ">
              <tr>
                <th className="py-3 px-4 text-left font-normal text-gray-400">
                  <input
                    type="checkbox"
                    className="checked:bg-purple-500 checked:border-purple-500 size-4 bg-col"
                  />
                </th>
                <th className="py-3 px-4 text-left font-normal text-gray-400">
                  Name & photo
                </th>
                <th className="py-3 px-4 text-left font-normal text-gray-400">
                  Category
                </th>
                <th className="py-3 px-4 text-left font-normal text-gray-400">
                  Mobile Number
                </th>
                <th className="py-3 px-4 text-left font-normal text-gray-400">
                  Email address
                </th>
                <th className="py-3 px-4 text-left font-normal text-gray-400">
                  Self Address
                </th>
                <th className="py-3 px-4 text-left font-normal text-gray-400">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {contactData.map((contact, index) => (
                <tr key={index} className="border-b h-16 hover:bg-gray-50 ">
                  <td className="py-3 px-4">{contact.checkbox}</td>
                  <td className="py-3 px-4 font-medium flex gap-x-2"><img src="/public/user.png" className="w-5 rounded-full" /> {" "} {contact.name}</td>
                  <td className="py-3 px-4 text-gray-500 ">
                    {contact.category}
                  </td>
                  <td className="py-3 px-4 text-gray-500 ">{contact.mobile}</td>
                  <td className="py-3 px-4 text-gray-500 ">{contact.email}</td>
                  <td className="py-3 px-4 text-gray-500 ">
                    {contact.selfAddress}
                  </td>
                  <td className="py-3 px-4 text-gray-500 ">
                    <button className="text-gray-500 flex gap-x-5 hover:text-gray-700">
                      {contact.action}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-6 p-6">
            <div className="relative border border-gray-500 p-2 justify-evenly items-center rounded-md w-24 flex">
              <FaArrowRight size={15} className="rotate-180" />
              <button className="text-gray-500 text-sm">Previous</button>
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
            <div className="relative border border-gray-500 p-2 justify-evenly items-center rounded-md w-24 flex">
              <button className="text-gray-500 text-sm">Next</button>
              <FaArrowRight size={15} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeams;
