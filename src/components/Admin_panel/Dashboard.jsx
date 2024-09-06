import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header.jsx";
import Chart from "./Chart.jsx";
import Table from "./Table.jsx";
import Transactions from "../../adminpanel/Transactions";
const Dashboard = () => {
  return (
    <div className=" grid  grid-cols-[1fr_19fr] w-screen h-screen ">
      <Sidebar />
      <div>
        <Header />
        <div className=" w-[90%] border border-gray-400 h-[600px] ml-7 m-5 p-4 shadow-lg">
          {/* <Chart /> */}
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
