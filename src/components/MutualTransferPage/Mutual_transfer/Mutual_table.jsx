import { useState } from "react";
import '../../../index.css'
import SubData from '../components/subsidiary'
const tableData = [
  {
    id: "1",
    name: "Jone Doe",
    designation:"excutive",
    current_subsidiary:"bccl",
    current_posted_area:"jharkhand",
    current_mine_name:"mine",
    designation:"worker",
    grade:"A",
    Transfer_Area:"Chandigarh",
    Transfer_Subsidiary:"Kerala",
    Transfer_Mine:"kochi",
    date: "06/06/23",
    mobile_number: "+1234567890",
    aideoaId: "#123456",
    
  },
];

const Mutual_table = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="m-5 mx-12 ">
      <div className="lg:w-[90%] my-4 mx-auto flex flex-wrap justify-start gap-4 items-center ">
      <input type="text" placeholder="Search Here..." className="p-3  max-sm:w-[300px] rounded-xl sm:max-lg:text-[16px] text-xl border w-[20%] shadow-xl  text-white border-gray-200"/>
        <select name="" id=""  className="p-3 overflow-y-scroll max-sm:w-[300px] rounded-xl text-xl border w-[20%] shadow-xl bg-white text-gray-400 border-gray-200">
          <option className="w-[300px]overflow-x-hidden" value="">From</option>
          {
            SubData.map((data)=>(
            <option className="w-[300px] overflow-x-hidden" value={data.name}>{data.name}</option>
            ))
          }
        </select>
        <select name="" id=""  className="p-3 overflow-y-scroll max-sm:w-[300px] rounded-xl text-xl border w-[20%] shadow-xl bg-white text-gray-400 border-gray-200">
          <option value="">To</option>
          {
            SubData.map((data)=>(
            <option value={data.name}>{data.name}</option>
            ))
          }
        </select>
        <button className="p-3  max-sm:w-[300px] rounded-xl text-xl border w-[20%] shadow-xl bg-purple-600 text-white border-gray-200">Submit</button>
        
      </div>

      <div className="lg:w-[90%] mx-auto overflow-x-auto">
      <table className=" w-full  ">
         <thead className="rounded-x-2xl">
         <tr className="  ">
            
            <th className="  items-center min-w-1 rounded-tl-2xl rounded-bl-2xl text-white bg-purple-400 p-5 ">
              <p>No.</p>
            </th>
            <th className=" p-1 text-white bg-purple-400  ">
              <p>Name</p>
            </th>

            <th className=" p-1 text-white bg-purple-400  ">
              <p>Mobile No.</p>
            </th>
            <th className=" p-1 text-white bg-purple-400  ">
              <p>Aideoa ID</p>
            </th>
            <th className=" p-1 text-white bg-purple-400  ">
              <p>Designation</p>
            </th>
            <th className=" p-1 text-white bg-purple-400  ">
              <p>Current Subsidiary</p>
            </th>
            <th className=" p-1 text-white bg-purple-400  ">
              <p>Current Posted Area</p>
            </th>
            <th className=" p-1 text-white bg-purple-400  ">
              <p>Current Mine Name</p>
            </th>
            <th className=" p-1 text-white bg-purple-400  ">
              <p>Grade</p>
            </th>
            <th className=" p-1 text-white bg-purple-400  ">
              <p>Transfer Area</p>
            </th>
            <th className=" p-1 text-white bg-purple-400  ">
              <p>Transfer Subsidiary</p>
            </th>
            <th className=" p-1 text-white bg-purple-400  ">
              <p>Transfer Mine</p>
            </th>

            <th className=" p-1 text-white bg-purple-400  ">
              <p>Date</p>
            </th>
            
            
            
          </tr>
         </thead>

          <tbody>
          {tableData.map((data, index) => (
            <tr className="border p-1 text-center rounded-tr-2xl rounded-br-2xl rounded-tl-2xl min-w-1 rounded-bl-2xl  border-gray-300">
              

              <td className="border p-1 text-center rounded-tl-2xl rounded-bl-2xl min-w-1 border-gray-300">
                <p>{index + 1} </p>
              </td>
              <td className="border p-1 text-center   border-gray-300">
                <p>{data.name}</p>
              </td>

              <td className="border p-1 text-center   border-gray-300">
                <p>{data.mobile_number}</p>
              </td>
              <td className="border p-1 text-center   border-gray-300">
                <p>{data.aideoaId}</p>
              </td>
              
              <td className="border p-1 text-center   border-gray-300">
                <p>{data.designation} </p>
              </td>
              <td className="border p-1 text-center   border-gray-300">
                <p>{data.current_subsidiary} </p>
              </td>
              <td className="border p-1 text-center   border-gray-300">
                <p>{data.current_posted_area} </p>
              </td>
              <td className="border p-1 text-center   border-gray-300">
                <p>{data.current_mine_name} </p>
              </td>
              <td className="border p-1 text-center   border-gray-300">
                <p>{data.grade} </p>
              </td>
              <td className="border p-1 text-center   border-gray-300">
                <p>{data.Transfer_Area} </p>
              </td>
              <td className="border p-1 text-center   border-gray-300">
                <p>{data.Transfer_Subsidiary} </p>
              </td>
              <td className="border p-1 text-center   border-gray-300">
                <p>{data.Transfer_Mine} </p>
              </td>

              <td className="border p-1 text-center   border-gray-300">
                <p>{data.date} </p>
              </td>
              
              
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Mutual_table;
