import React, { useState } from "react";
import Sidebar from "./common/Sidebar";
import Header from "./common/Header.jsx";
import Chart from './Membership/Chart.jsx'
import Trans from "./Transaction/Trans";
import User from "./Users/User";
import MutualLayout from './common/MainLayout.jsx'
const Dashboard = () => {
    const [data, setdata] = useState({ m: true, u: false, t: false, T: false })
    const setit = (x) => {
        setdata(x);
    }
    return (
        <div className=" relative grid grid-cols-[1fr_19fr] w-screen h-screen bg-gray-100 ">
            <Sidebar setit={setit} />
            <div>
                {/* {
                    data.T ? <MutualLayout className="absolute top-0" /> : ''
                } */}
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
                    {/* {
                        data.T ? <Mutual /> : ''
                    } */}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
