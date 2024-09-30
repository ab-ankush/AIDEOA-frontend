import React from "react";
import Tr from "./Tr";
import TrafficSourceChart from "./TransactionBar";
import ID_CARD from "./ID_CARD";
import TransactionTable from "./Transaction";
const arr = [
  { head: "Total Team Members", no: "2680" },
  { head: "Transaction", no: "10,583" },
  { head: "Id Card", no: "10293" },
  { head: "Events", no: "89000" },
];
const Main = () => {
  return (
    <div className="w-full relative">
      <div className="lg:h-[11.94%] max-lg:h-[240px]   flex max-lg:flex-col justify-between mb-5 flex-wrap items-center">
        {arr.map((data) => (
          <div className="bg-white shadow-md p-4 w-[23%]  rounded-lg ">
            <h3 className=" text-gray-500">{data.head}</h3>
            <p className="font-semibold text-2xl">{data.no}</p>
          </div>
        ))}
      </div>
      <div className="    flex flex-row max-lg:flex-col w-full max-lg:items-center lg:justify-between mb-6">
        <Tr />
        <TrafficSourceChart />
      </div>
      <div className="   max-lg:flex-col flex justify-between max-lg:items-center  ">
        <div className=" max-lg:m-3 w-[65%] rounded-lg shadow-lg border p-2 bg-white ">
          <TransactionTable />
        </div>
        <div className="bg-white shadow-lg w-[32%] p-4 rounded-lg">
          <ID_CARD />
        </div>
      </div>
    </div>
  );
};

export default Main;
