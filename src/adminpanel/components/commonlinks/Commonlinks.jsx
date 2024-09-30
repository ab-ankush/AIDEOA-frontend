import  { useState } from "react";
import { Link } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";
import { LuUploadCloud } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";
const CommonLinks = ({setActiveComponent}) => {
  
const data =  [
  {
    title: "YouTube",
    last_update: "12 Nov 2025",
    time: "5:30 am - 6:30 pm",
    url: "https://www.figma.com/design/6VftZ3BIN3c3oymnf2etto"
  },
  {
    title: "Instagram",
    last_update: "12 Nov 2025",
    time: "5:30 am - 6:30 pm",
    url: "https://www.figma.com/design/6VftZ3BIN3c3oymnf2etto"
  },
  {
    title: "Facebook",
    last_update: "12 Nov 2025",
    time: "5:30 am - 6:30 pm",
    url: "https://www.figma.com/design/6VftZ3BIN3c3oymnf2etto"
  },
  {
    title: "LinkedIn",
    last_update: "12 Nov 2025",
    time: "5:30 am - 6:30 pm",
    url: "https://www.figma.com/design/6VftZ3BIN3c3oymnf2etto"
  },
  {
    title: "Twitter",
    last_update: "12 Nov 2025",
    time: "5:30 am - 6:30 pm",
    url: "https://www.figma.com/design/6VftZ3BIN3c3oymnf2etto"
  }
]
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  return (
   
    <div className=" bg-white rounded-xl  shadow-sm">
      <div className="w-full flex justify-between items-center  p-6 pb-5">
        <div className="flex space-x-3 items-center w-full">
            <h2 className="font-bold text-lg">Common Links</h2>
            <span className="bg-purple-200 px-2  text-xs rounded-full" >{data.length}</span>
        </div>
        <div className="flex  items-center space-x-4 w-full">
        <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 flex-1 rounded-full  p-2 font-medium text-sm text-gray-600 bg-gray-100"
            />
            <div className='flex'>
           
            <button onClick={()=>setActiveComponent("Add Common Links")} className="bg-[#4B0082] shadow-md font-semibold flex items-center gap-1  text-white py-2 px-4 rounded-md">
              <LuUploadCloud size={18} className="" />
              <span className="text-nowrap">Add new</span>
            </button>
            </div>
        </div>
      </div>

      <div className="overflow-x-scroll rounded-b-2xl">
        <table className="min-w-full bg-white border border-gray-300 ">
          <thead>
            <tr className="text-left border-b bg-gray-100 border-gray-200 h-16">
              <th className="p-2 px-4 font-medium text-sm text-gray-200">
                <input type="checkbox" className="" />
              </th>
              <th className="p-2 font-medium text-sm text-gray-400">
                Title
              </th>
              <th className="p-2 font-medium text-sm text-gray-400">
                Last update
              </th>
           
              <th className="p-2 font-medium text-sm text-gray-400">
             Url
              </th>
             
              <th className="p-2  font-medium text-sm text-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.slice(0, 7).map((item, index) => (
              <tr key={index} className="border-b border-gray-200 h-16 ">
                <td className="p-2 px-4 font-medium text-sm text-gray-600">
                  <input type="checkbox" />
                </td>
                <td className="p-2 font-medium text-sm text-gray-600   whitespace-nowrap overflow-hidden text-ellipsis">
                  {item.title}
                </td>
                <td className="p-2 font-medium text-sm text-gray-400 ">
                  {item.last_update}
                </td>
              
            
                <td className="p-2 font-medium text-sm text-gray-400">
                  <td className="text-blue-500   whitespace-nowrap overflow-hidden text-ellipsis">
                    <Link to={item.url}>{item.url}</Link>
                  </td>
                </td>
                <td className="p-2 flex font-medium text-center w-full text-sm justify-around h-16 items-center  text-gray-600 cursor-pointer">
                <RiDeleteBin6Line />
                <FiEdit2 />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     
    </div>

  );
};

export default CommonLinks;
