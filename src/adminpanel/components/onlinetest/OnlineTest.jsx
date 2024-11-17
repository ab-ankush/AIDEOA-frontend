import { useState } from "react";

import { BsThreeDotsVertical } from "react-icons/bs";

import { CiSearch } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

import useOnlineTest from "../../../hooks/useOnlineTest";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";

import { useEffect } from "react";

const OnlineTest = ({ setActiveComponent, setData }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const {
    dataList,
    loading,
    deleteTest,
    fetchData,
    currentPage,
    setCurrentPage,
    totalPages,
    totalItems,
    setLimit,
  } = useOnlineTest();

  // Fetch data whenever the currentPage or limit changes
  useEffect(() => {
    fetchData(null, currentPage); // No search term for now
  }, [currentPage]);

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(dataList.map((_, index) => index));
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
        <div className="flex space-x-3 items-center">
          <h2 className="font-bold text-lg">Online Test</h2>
          <span className="bg-purple-200 px-2 text-xs rounded-full">
            {totalItems} tests
          </span>
        </div>
        <div className="flex justify-end flex-1 items-center space-x-4">
          {selectedItems.length >= 2 && <MdDelete size={26} />}
          <div className="flex max-lg:flex-col gap-2">
            <button
              onClick={() => setActiveComponent("Add Test")}
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
              <th className="p-2 px-4 font-medium text-sm text-gray-500">
                <input
                  type="checkbox"
                  className="checked:bg-purple-500 checked:border-purple-500 size-4 bg-col"
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
              </th>
              <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                Title
              </th>
              <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                Description
              </th>
              <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                Category
              </th>
              <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                Quiz Url
              </th>
              <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" className="text-center p-4">
                  Loading...
                </td>
              </tr>
            ) : (
              dataList.map((item, index) => (
                <tr key={index} className="border-b border-gray-200 h-16">
                  <td className="p-2 px-4 font-medium text-sm text-gray-600">
                    <input
                      type="checkbox"
                      className="checked:bg-purple-500 checked:border-purple-500 size-4 bg-col"
                      checked={selectedItems.includes(index)}
                      onChange={() => handleSelectItem(index)}
                    />
                  </td>
                  <td className="p-2 font-medium text-sm text-gray-600 max-w-52 whitespace-nowrap overflow-hidden text-ellipsis">
                    {item.title}
                  </td>
                  <td className="p-2 font-medium text-sm text-gray-400">
                    {item.description}
                  </td>
                  <td className="p-2 font-medium text-sm text-gray-400">
                    {item.category}
                  </td>
                  <td className="p-2 font-medium text-sm text-gray-400">
                    {item.quizUrl}
                  </td>
                  <td className="p-2 flex font-medium text-center w-full text-sm justify-around h-16 items-center text-gray-600 cursor-pointer">
                    <RiDeleteBin6Line onClick={() => deleteTest(item.id)} />
                    <FiEdit2
                      onClick={() => {
                        setActiveComponent("Update Test");
                        setData(item);
                      }}
                    />
                  </td>
                </tr>
              ))
            )}
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
              className={`py-2 px-4 rounded-md shadow-md border ${
                currentPage === page + 1
                  ? "bg-purple-700 text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => setCurrentPage(page + 1)}
            >
              {page + 1}
            </button>
          ))}
        </div>
        <button
          className="py-2 px-4 bg-white shadow-md border text-black rounded-md"
          disabled={currentPage === totalPages}
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default OnlineTest;
