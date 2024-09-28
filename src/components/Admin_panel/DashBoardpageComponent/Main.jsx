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
    <>
      <div className="lg:h-[11.94%] max-lg:h-[240px]  w-[97.57%] flex max-lg:flex-col justify-between flex-wrap items-center">
        {arr.map((data) => (
          <div className="lg:w-[22.92%] bg-white max-lg:w-[95%] flex items-center  border lg:h-[80%] ">
            <div className="w-[88.38%] max-lg:flex max-lg:items-center max-lg:justify-between h-[72.09%] mx-auto my-auto">
              <h3 className="opacity-70 text-[600]  text-[16px]">
                {data.head}
              </h3>
              <p className="text-gray-900 text-[700] text-[22px]">{data.no}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="lg:h-[40%] max-lg:max-h-fit   w-[97.57%]  flex max-lg:flex-col  max-lg:items-center lg:justify-between">
        <Tr />
        <TrafficSourceChart />
      </div>
      <div className="w-[97.57%]  lg:h-[40%] max-lg:flex-col flex justify-between max-lg:items-center  ">
        <div className="lg:w-[60.38%] max-lg:m-3 max-lg:w-[95%] border p-2 bg-white lg:h-full">
          <TransactionTable />
        </div>
        <div className="lg:w-[35%] max-lg:w-[95%] flex justify-center items-center max-lg:m-3 h-full border my-auto bg-white rounded-[8px]">
          <ID_CARD />
        </div>
      </div>
    </>
  );
};

export default Main;
