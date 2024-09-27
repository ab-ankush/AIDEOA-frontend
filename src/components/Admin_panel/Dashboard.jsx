import React, { useState } from "react";
import SideBar from "./SideBar";
const Dashboard = () => {
    const [data, setdata] = useState({ m: true, u: false, t: false,T: false, e: false,q: false,i:false,c: false })
    const setit = (x) => {
        setdata(x);
    }
    return (
       <div className="w-screen flex   h-screen ">
        <div className="w-[18.5%] flex justify-center border border-black h-full py-[30px] ">
            <SideBar/>
        </div>
        <div className="w-[81.5%] border border-black h-full">
            <div className="text-center text-[26px] h-[8.55%] w-full border border-black">AIDEOA DASHBOARD</div>
            <div className="h-[15%] w-full flex justify-evenly items-center">
                <div className="w-[20%] border border-black h-[80%] "><h3>heading</h3>
                <p>data</p></div>
                <div className="w-[20%] border border-black h-[80%] "><h3>heading</h3>
                <p>data</p></div>
                <div className="w-[20%] border border-black h-[80%] "><h3>heading</h3>
                <p>data</p></div>
                <div className="w-[20%] border border-black h-[80%] "><h3>heading</h3>
                <p>data</p></div>
            </div>
        </div>
       </div>
    );
};

export default Dashboard;
