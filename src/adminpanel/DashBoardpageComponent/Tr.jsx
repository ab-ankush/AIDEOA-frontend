import React from "react";
import MyAreaChart from "./LineChart";

const Tr = () => {
  return (
    <div className="w-[65%] max-lg:w-full  bg-white p-5 rounded-lg shadow-md">
      <div className="flex max-xl:flex-col  max-xl:justify-center items-center justify-between mb-4">
        <h2 className="text-lg mb-1 max-xsm:text-sm font-semibold my-1 border-b-black border-b-2">
          Report
        </h2>
        <div className="flex space-x-2 max-xl:w-full max-xl:justify-around my-1">
          <button className="px-3 py-1 border border-gray-300 bg-white rounded-md focus:outline-none text-lg">
            12 Months
          </button>
          <button className="px-3 py-1 border border-gray-300 bg-white rounded-md focus:outline-none text-lg">
            6 Months
          </button>
          <button className="px-3 py-1 border border-gray-300 bg-white rounded-md focus:outline-none text-lg">
            30 Days
          </button>
          <button className="px-3 py-1 border border-gray-300 bg-white rounded-md focus:outline-none text-lg">
            7 Days
          </button>
        </div>
        <button className="px-3 py-1 bg-blue-500 text-white rounded-md focus:outline-none mt-1 text-lg">
          Export PDF
        </button>
      </div>
      <div className="h-[180px]">
        <MyAreaChart />
      </div>
    </div>
  );
};

export default Tr;
