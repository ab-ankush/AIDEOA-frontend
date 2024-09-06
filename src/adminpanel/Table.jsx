import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
const tableHeaders = [
    
  "No.", 
  "Date", 
  "Transaction ID", 
  "Name", 
  "Aideoa ID", 
  "Valid Upto", 
  "Price", 
  "Action"
];


const Table = () => {
  const data = [
    {
      id: 1,
      date: "06/06/23",
      transactionId: "#A23",
      name: "John doe",
      aideaId: "#123456",
      validUpto: "Lifetime",
      price: 500,
    },
    {
      id: 2,
      date: "06/06/23",
      transactionId: "#A23",
      name: "John doe",
      aideaId: "#123456",
      validUpto: "Lifetime",
      price: 1000,
    },
    {
      id: 3,
      date: "06/06/23",
      transactionId: "#A023",
      name: "John doe",
      aideaId: "#123456",
      validUpto: "Lietime",
      price: 500,
    },
  ];

  return (
    <div className="p-4">

      <div className="flex justify-between items-center mb-4">
    
        <div className="flex space-x-4">
          <select className="p-2 text-gray-400 border rounded-xl w-44 shadow-sm">
            <option >All</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
          <input
            type="text"
            placeholder="Search by name or ID"
            className="p-2 border rounded-xl shadow-sm w-64 focus:outline-none"
          />
        </div>

  
        <div className="flex space-x-4">
          <div className="p-2 cursor-pointer rounded-md shadow-md border text-purple-500">
          <MdOutlineFileDownload />
          </div>
          <div className="p-2 cursor-pointer rounded-md shadow-md border text-purple-500">
          <MdDeleteOutline />
          </div>
        </div>
      </div>

   
      <div className="overflow-x-auto rounded-2xl">
        <table className="min-w-full border-spacing-y-2 table-auto">
          <thead>
            <tr className="bg-[#41009480] h-20  text-left text-white">
            <th  className="px-4  py-2 border"> <input type="radio"/></th>
              {
                tableHeaders.map((item,idx)=>{
                    return  <th key={idx} className="px-4 ">{item}</th>
                })
              }
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id} className="bg-white">
                
                <td className="px-4 py-2 border"><input type="radio"/></td>
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{item.date}</td>
                <td className="px-4 py-2 border">{item.transactionId}</td>
                <td className="px-4 py-2 border">{item.name}</td>
                <td className="px-4 py-2 border">{item.aideaId}</td>
                <td className="px-4 py-2 border">{item.validUpto}</td>
                <td className="px-4 py-2 border">
                  {item.price}
                </td>
                <td className="px-4 py-2 border">
                  <div className=" cursor-pointer flex gap-2 items-center justify-evenly">
                    <div className="text-purple-500 ">
                    <MdDeleteOutline />
                    </div>
                    <div className="text-purple-500">
                    <FiEdit2 />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
