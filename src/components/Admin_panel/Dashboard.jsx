import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header.jsx";
import Chart from "./Chart.jsx";
import Table from "./Table.jsx";
import Transactions from "../../adminpanel/Transactions";
const Dashboard = () => {
    return (
        <div className="grid grid-cols-[1fr_19fr] w-screen h-screen bg-gray-100 ">
            <Sidebar />
            <div>
                <Header />
                <div className="bg-white w-[90%]  h-[600px] ml-7 m-5 p-4 shadow-lg rounded-lg">
                    {/* <Chart /> */}
                    <Table />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
