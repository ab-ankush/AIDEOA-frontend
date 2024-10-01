import  { useState } from "react";
import { Link } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";
import { LuUploadCloud } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
const CommonLinks = ({setActiveComponent}) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

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
  return (
   
    <div className="py-4 bg-white rounded-xl lightdropshadowbox">
       <div className="flex px-4 space-x-4 mb-4 items-center">
        <div className="flex space-x-3 items-center ">
            <h2 className="font-bold text-lg">Common Links</h2>
           
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
            {selectedItems.length>=2 &&  <MdDelete size={26} />}
            <div className='flex max-lg:flex-col gap-2'>
             
              <button 
              onClick={()=>setActiveComponent("Add Common Links")}
              className="bg-[#4B0082]  shadow-md font-semibold flex justify-center items-center gap-1  text-white py-2 px-4 rounded-md"><LuUploadCloud size={18} className=''/><span>Add new</span></button>
            </div>
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
                <input
                    type="checkbox"
                    className="checked:bg-purple-500 checked:border-purple-500 size-4 bg-col"
                    checked={selectedItems.includes(index)}
                    onChange={() => handleSelectItem(index)}
                  />
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
