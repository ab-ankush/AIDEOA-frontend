import React from "react";
import { FaDownload } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
const Header = (props) => {
  const data = props.data;
  return (
    <>
      {data.m ? (
        <div className="flex overflow-x-hidden justify-between items-center p-[10px] ml-7 my-2 mx-5">
          <p className="text-[30px] ">Dashboard</p>
          <div className="flex justify-center items-center my-[20px] px-[10px] pr-[30px]">
            {/* <img src="images/logo.png" className='w-[44px] h-[44px] rounded-full' alt="" /> */}
            {/* <p className='text-[25px]'>Anna</p> */}
          </div>
        </div>
      ) : (
        ""
      )}
      {data.u ? (
        <div className=" w-[90%] flex overflow-x-hidden justify-between items-center p-4 ml-7 my-2 mx-5">
          <div className="flex">
            <select
              name=""
              className=" px-5 py-3 text-gray-500 bg-white rounded-lg"
              id=""
            >
              <option value="all">All</option>
            </select>
            <input
              type="text"
              placeholder="search by name or id"
              className="rounded-lg px-4 mx-3 py-3"
            />
          </div>
          <div>
            <button className="border border-gray-200 rounded-2xl p-4 mx-3 shadow bg-white text-purple-600">
              <FaDownload />
            </button>
            <button className="border border-gray-200 rounded-2xl p-4 mx-3 mr-0 shadow bg-white text-purple-600">
              <FaTrash />
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      {data.t ? (
        <div className=" w-[90%] flex overflow-x-hidden justify-between items-center p-4 ml-7 my-2 mx-5">
          <div className="flex">
            <input
              type="text"
              placeholder="search by name or id"
              className="rounded-lg px-4 mx-3 ml-0 py-3"
            />
          </div>
          <div>
            <button className="border border-gray-200 rounded-2xl p-4 mx-3 shadow bg-white text-purple-600">
              <FaDownload />
            </button>
            <button className="border border-gray-200 rounded-2xl px-3 py-3 mx-3 shadow text-white bg-purple-600">
              New User
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      {data.T ? (
        <div className=" w-[90%] flex overflow-x-hidden justify-between items-center p-4 ml-7 my-2 mx-5">
          <div className="flex">
            <input
              type="text"
              placeholder="search by name or id"
              className="rounded-lg px-4 mx-3 ml-0 py-3"
            />
          </div>
          <div>
            <button className="border border-gray-200 rounded-2xl p-4 mx-3 shadow bg-white text-purple-600">
              <FaDownload />
            </button>
            <button className="border border-gray-200 rounded-2xl px-3 py-3 mx-3 shadow text-white bg-purple-600">
              New User
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
