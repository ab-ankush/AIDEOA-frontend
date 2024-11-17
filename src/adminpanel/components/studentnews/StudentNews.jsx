import { useEffect, useState } from "react";

import { BsThreeDotsVertical } from "react-icons/bs";

import { CiSearch } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

import useOnlineTest from "../../../hooks/useOnlineTest";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";
import useStudentNews from "../../../hooks/useStudentNews";

const StudentNews = ({ setActiveComponent, setStudentData }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const { dataList, fetchData } = useStudentNews(); // Assuming `fetchData` updates `dataList`
  const totalPages = dataList?.pagination?.totalPages || 1; // Use pagination data if available

  useEffect(() => {
    fetchData(currentPage); // Fetch data based on current page
  }, [currentPage]);

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(dataList?.items?.map((_, index) => index) || []);
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

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div className="py-4 bg-white rounded-xl lightdropshadowbox">
      <div className="flex px-4 space-x-4 mb-4 items-center">
        <div className="flex space-x-3 items-center">
          <h2 className="font-bold text-lg">Student</h2>
          <span className="bg-purple-200 px-2 text-xs rounded-full">
            {dataList?.items?.length || 0} items
          </span>
        </div>
        <div className="flex justify-end flex-1 items-center space-x-4">
          {selectedItems.length >= 2 && <MdDelete size={26} />}
          <div className="flex max-lg:flex-col gap-2">
            <button
              onClick={() => setActiveComponent("Add StudentNews")}
              className="bg-[#4B0082] text-nowrap font-semibold border shadow-md text-white py-2 px-4 rounded-md mr-2"
            >
              Create
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="text-left border-b bg-gray-100 border-gray-200 h-16">
              <th className="p-2 px-4 font-medium text-sm text-gray-200">
                <input
                  type="checkbox"
                  className="checked:bg-purple-500 checked:border-purple-500 size-4 bg-col"
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
              </th>
              <th className="py-3 px-4 text-left  font-medium text-sm text-gray-500">
                Title
              </th>
              <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                Description
              </th>
              <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                Category
              </th>
              <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {dataList?.items?.map((item, index) => (
              <tr key={index} className="border-b border-gray-200 h-16">
                <td className="p-2 px-4 font-medium text-sm text-gray-600">
                  <input
                    type="checkbox"
                    className="checked:bg-purple-500 checked:border-purple-500 size-4 bg-col"
                    checked={selectedItems.includes(index)}
                    onChange={() => handleSelectItem(index)}
                  />
                </td>
                <td className="p-2 font-medium text-sm text-gray-600">
                  {item.title}
                </td>
                <td className="p-2 font-medium text-sm text-gray-600">
                  {item.description}
                </td>
                <td className="p-2 font-medium text-sm text-gray-600">
                  {item.category}
                </td>
                <td className="p-2 font-medium text-sm text-gray-600 cursor-pointer">
                  <BsThreeDotsVertical />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between px-4 items-center mt-4">
        <button
          onClick={handlePrevPage}
          className="py-2 px-4 bg-white shadow-md border text-black rounded-md"
        >
          Previous
        </button>
        <div className="space-x-2">
          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page + 1)}
              className={`py-2 px-4 rounded-md shadow-md border ${
                currentPage === page + 1
                  ? "bg-purple-700 text-white"
                  : "bg-white text-black"
              }`}
            >
              {page + 1}
            </button>
          ))}
        </div>
        <button
          onClick={handleNextPage}
          className="py-2 px-4 bg-white shadow-md border text-black rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StudentNews;
