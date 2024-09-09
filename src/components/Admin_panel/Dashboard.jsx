import React, { useState } from "react";
import Sidebar from "./common/Sidebar";
import Header from "./common/Header.jsx";
import { Routes, Route } from 'react-router-dom'
import Chart from './Membership/Chart.jsx'
import Trans from "./Transaction/Trans";
import User from "./Users/User";
const Dashboard = () => {
    const [data, setdata] = useState({ m: true, u: false, t: false })
    const setit = (x) => {
        setdata(x);
    }
    return (
        <div className="grid grid-cols-[1fr_19fr] w-screen h-screen bg-gray-100 ">
            <Sidebar setit={setit} />
            <div>
                <Header data={data} />
                <div className="bg-white w-[90%]  h-[600px] ml-7 m-5 p-4 shadow-lg rounded-lg">
                    {
                        data.m ? <Chart /> : ''
                    }
                    {
                        data.u ? <User /> : ''
                    }
                    {
                        data.t ? <Trans /> : ''
                    }
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
