import  { useState } from "react";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuUploadCloud } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
const Query = () => {
  const data = [
    {
      title: "AIDEOA Hostsdasdsa sdsadas safdsad Summit",
      eventDateTime: "12 Nov 2025 5:30 am - 6:30 pm",
      days: "2 days",
      location: "Hotel Baker",
      description: "candiceThe roads in our area...",
      url: "https://www.example.com",
    },
    {
      title: "Phoenix Baker Alumni",
      eventDateTime: "12 Nov 2025 5:30 am - 6:30 pm",
      days: "15 days",
      location: "Hotel Baker",
      description: "our area have developed...",
      url: "https://www.example.com",
    },
    {
      title: "Lana Phoenix Baker Seminar",
      eventDateTime: "12 Nov 2025 5:30 am - 6:30 pm",
      days: "7 days",
      location: "Hotel Baker",
      description: "candiceThe roads in our area...",
      url: "https://www.example.com",
    },
    {
      title: "Demi Phoenix Baker Conference",
      eventDateTime: "12 Nov 2025 5:30 am - 6:30 pm",
      days: "9 days",
      location: "Hotel Baker",
      description: "area have developed numerous...",
      url: "https://www.example.com",
    },
    {
      title: "Candice Phoenix Baker Symposium",
      eventDateTime: "12 Nov 2025 5:30 am - 6:30 pm",
      days: "2 days",
      location: "Hotel Baker",
      description: "candiceThe roads in our area...",
      url: "https://www.example.com",
    },
    {
      title: "Natali Phoenix Baker Workshop",
      eventDateTime: "12 Nov 2025 5:30 am - 6:30 pm",
      days: "3 days",
      location: "Hotel Baker",
      description: "nataliThe roads in our area...",
      url: "https://www.example.com",
    },
    {
      title: "Drew Phoenix Baker Roundtable",
      eventDateTime: "12 Nov 2025 5:30 am - 6:30 pm",
      days: "2 days",
      location: "Hotel Baker",
      description: "drew candiceThe roads in our area...",
      url: "https://www.example.com",
    },
    {
      title: "Kate Phoenix Baker Meetup",
      eventDateTime: "12 Nov 2025 5:30 am - 6:30 pm",
      days: "6 days",
      location: "Hotel Baker",
      description: "kate candiceThe roads in our area...",
      url: "https://www.example.com",
    },
    {
      title: "Jess Phoenix Baker Panel Discussion",
      eventDateTime: "13 Nov 2025 10:00 am - 12:00 pm",
      days: "4 days",
      location: "City Center Hotel",
      description: "Jess will discuss the future of AI...",
      url: "https://www.example.com",
    },
    {
      title: "Ava Phoenix Baker Networking Event",
      eventDateTime: "15 Nov 2025 9:00 am - 4:00 pm",
      days: "1 day",
      location: "Phoenix Plaza",
      description: "Network with professionals...",
      url: "https://www.example.com",
    },
    {
      title: "Olivia Phoenix Baker Hackathon",
      eventDateTime: "18 Nov 2025 8:00 am - 6:00 pm",
      days: "1 day",
      location: "Tech Park",
      description: "Join us for a coding hackathon...",
      url: "https://www.example.com",
    },
    {
      title: "Sophia Phoenix Baker Fundraiser",
      eventDateTime: "20 Nov 2025 7:00 pm - 10:00 pm",
      days: "1 day",
      location: "Grand Hotel",
      description: "Fundraiser to support local charities...",
      url: "https://www.example.com",
    },
    {
      title: "Mia Phoenix Baker Gala",
      eventDateTime: "22 Nov 2025 6:00 pm - 11:00 pm",
      days: "1 day",
      location: "Royal Banquet Hall",
      description: "Gala event with dinner and awards...",
      url: "https://www.example.com",
    },
    {
      title: "Ella Phoenix Baker Startup Showcase",
      eventDateTime: "25 Nov 2025 10:00 am - 4:00 pm",
      days: "3 days",
      location: "Innovation Hub",
      description: "Showcasing innovative startups...",
      url: "https://www.example.com",
    },

    {
      title: "Harper Phoenix Baker Machine Learning Seminar",
      eventDateTime: "01 Dec 2025 10:00 am - 4:00 pm",
      days: "1 day",
      location: "Tech Pavilion",
      description: "Seminar on machine learning trends...",
      url: "https://www.example.com",
    },
    {
      title: "Evelyn Phoenix Baker Robotics Workshop",
      eventDateTime: "05 Dec 2025 8:00 am - 3:00 pm",
      days: "3 days",
      location: "Robotics Lab",
      description: "Hands-on workshop on robotics...",
      url: "https://www.example.com",
    },
    {
      title: "Abigail Phoenixdasdasdasddasd Baker Blockchain Expo",
      eventDateTime: "10 Dec 2025 10:00 am - 6:00 pm",
      days: "2 days",
      location: "Expo Center",
      description: "Explore blockchain technologies...",
      url: "https://www.example.com",
    },
    {
      title: "Emily Phoenix Baker Tech Leadership Summit",
      eventDateTime: "15 Dec 2025 9:00 am - 4:00 pm",
      days: "1 day",
      location: "Leadership Academy",
      description: "Summit for tech industry leaders...",
      url: "https://www.example.com",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  return (
   
    <div className="p-4 bg-white rounded-xl lightdropshadowbox">
      <div className="flex  space-x-4 mb-4 items-center">
        <div className="flex space-x-3 items-center ">
            <h2 className="font-bold text-lg">Query</h2>
            <span className="bg-purple-200 px-2  text-xs rounded-full" >{data.length} Users</span>
        </div>
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

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="text-left border-b bg-gray-100 border-gray-200">
              <th className="p-2 px-4 font-medium text-sm text-gray-400">
                <input type="checkbox" className="" />
              </th>
              <th className="p-2 font-medium text-sm text-gray-400 w-52">
                Name
              </th>
              <th className="p-2 font-medium text-sm text-gray-400">
                Mobile Number
              </th>
              <th className="p-2 font-medium text-sm text-gray-400">Email Address</th>
              <th className="p-2 font-medium text-sm text-gray-400">
              Company
              </th>
              <th className="p-2 font-medium text-sm text-gray-400">
              Office Address
              </th>
              <th className="p-2 font-medium text-sm text-gray-400 max-w-32">
              Description
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
                <td className="p-2 font-medium text-sm text-gray-600  max-w-52 whitespace-nowrap overflow-hidden text-ellipsis">
                  {item.title}
                </td>
                <td className="p-2 font-medium text-sm text-gray-400 ">
                  {item.eventDateTime}
                </td>
                <td className="p-2 font-medium text-sm text-gray-400">
                  {item.days}
                </td>
                <td className="p-2 font-medium text-sm text-gray-400">
                  {item.location}
                </td>
                <td className="p-2 font-medium text-sm text-gray-400">
                  {item.description.substring(0, 20)}...
                </td>
                <td className="p-2 font-medium text-sm text-gray-400">
                  <td className="text-blue-500 max-w-32  whitespace-nowrap overflow-hidden text-ellipsis">
                    <Link to={item.url}>{item.url}</Link>
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

export default Query;
