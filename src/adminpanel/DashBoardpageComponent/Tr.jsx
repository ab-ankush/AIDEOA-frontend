import React from "react";
import MyAreaChart from "./LineChart";

const Tr = () => {
  return (
    <div className="w-[65%]  bg-white p-5 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="lg:text-lg max-lg:text-sm font-semibold">Report</h2>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border border-gray-300 bg-white rounded-md focus:outline-none">
            12 Months
          </button>
          <button className="px-3 py-1 border border-gray-300 bg-white rounded-md focus:outline-none">
            6 Months
          </button>
          <button className="px-3 py-1 border border-gray-300 bg-white rounded-md focus:outline-none">
            30 Days
          </button>
          <button className="px-3 py-1 border border-gray-300 bg-white rounded-md focus:outline-none">
            7 Days
          </button>
        </div>
        <button className="px-3 py-1 bg-blue-500 text-white rounded-md focus:outline-none">
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
