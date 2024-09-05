import React from 'react'
import { FiPieChart } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
const Sidebar = () => {
    return (
        <div className='  flex flex-col justify-between items-center  rounded-lg ' style={{ 'boxShadow': '5px 5px 5px 0px gray' }}>
            <div className='py-4'>
                <img src="/images/logo.png" className='w-[40px] my-4 h-[40px]' alt="" />
                <FiPieChart className='w-[40px] my-4 bg-white text-purple-600 h-[40px]' />
                <IoPersonOutline className='w-[40px] my-4 bg-white text-purple-600 h-[40px]' />
                <AiOutlineDollar className='w-[40px] my-4 bg-white text-purple-600 h-[40px]' />
            </div>
            <IoSettingsOutline className='w-[40px] my-2 bg-white text-purple-600 h-[40px]' />
        </div>
    )
}

export default Sidebar