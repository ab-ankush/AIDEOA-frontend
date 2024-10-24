import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


import { CiSearch } from "react-icons/ci";
import { MdDelete } from "react-icons/md";



import Files from "./Files";
import Videos from "./Videos";

const Education = ({setActiveComponent}) => {
  const data = [
    {
      title: "AIDEOA Hostsdasdsa sdsadas safdsad Summit",
      eventDateTime: "12 Nov 2025 5:30 am - 6:30 pm",
      days: "2 days",
      location: "Hotel Baker",
      description: "candiceThe roads in our area...",
      url: "https://www.example.com",
    },
    {
      title: "Phoenix Baker Alumni",
      eventDateTime: "12 Nov 2025 5:30 am - 6:30 pm",
      days: "15 days",
      location: "Hotel Baker",
      description: "our area have developed...",
      url: "https://www.example.com",
    },
  
  ];

  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <div className="py-4 bg-white rounded-xl lightdropshadowbox">
    <div className="flex px-4 space-x-4 mb-4 items-center">
       
        <div className="flex justify-end flex-1 items-center space-x-4">
          <div className="relative w-[55%]">
            <CiSearch className="absolute top-3 left-3" />
            <input
              type="text"
              className="px-8 py-2 border w-full rounded-full text-sm border-gray-300"
              placeholder="Search"
            />
          </div>
          {selectedItems.length >= 2 && <MdDelete size={26} />}
          <div className="flex max-lg:flex-col gap-2">
            <button onClick={()=>setActiveComponent("Add Education")} className="bg-[#4B0082] text-nowrap font-semibold border shadow-md text-white py-2 px-4 rounded-md mr-2">
              Create
            </button>

          </div>
        </div>
      </div>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Course Materials" value="1" />
            <Tab label="Videos" value="2" />
         
          </TabList>
        </Box>
        <TabPanel value="1"><Files value={value}/></TabPanel>
        <TabPanel value="2"><Videos value={value}/></TabPanel>
      </TabContext>

  
    </div>
  );
};

export default Education;
