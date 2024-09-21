import React, { useState } from "react";
import Sidebar from "./common/Sidebar";
import Header from "./common/Header.jsx";
import Chart from './Membership/Chart.jsx'
import Trans from "./Transaction/Trans";
import User from "./Users/User";
import MutualLayout from './common/MainLayout.jsx'
import EventPanel from "./Events/EventPanel";
import Query from "./Query/Query";
import Contacts from "./Contacts/Contacts";
const Dashboard = () => {
    const [data, setdata] = useState({ m: true, u: false, t: false,T: false, e: false,q: false,c: false })
    const setit = (x) => {
        setdata(x);
    }
    return (
        <div className=" relative flex gap-10  bg-gray-100 ">
            <Sidebar setit={setit} />
            <div className="w-full m-auto">
                {/* {
                    data.T ? <MutualLayout className="absolute top-0" /> : ''
                } */}
                <Header data={data} />
                <div className="bg-white w-[90%] h-screen  ml-7 m-5 p-4 shadow-lg rounded-lg">
                    {
                        data.m ? <Chart /> : ''
                    }
                    {
                        data.u ? <User /> : ''
                    }
                    {
                        data.t ? <Trans /> : ''
                    }
                    {
                        data.e ? <EventPanel /> : ''
                    },
                    {
                        data.q ? <Query /> : ''
                    },
                    {
                        data.c ? <Contacts /> : ''
                    }
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
