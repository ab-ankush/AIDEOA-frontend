import { useEffect, useState } from "react";
import "../../../index.css";
import SubData from "../components/subsidiary";
import axios from "axios";
const tableData = [
  {
    id: "1",
    name: "Jone Doe",

    current_subsidiary: "bccl",
    current_posted_area: "jharkhand",
    current_mine_name: "mine",
    designation: "worker",
    grade: "A",
    Transfer_Area: "Chandigarh",
    Transfer_Subsidiary: "Kerala",
    Transfer_Mine: "kochi",
    date: "06/06/23",
    mobile_number: "+1234567890",
    aideoaId: "#123456",
  },
];

const Mutual_table = () => {
  const [search, setSearch] = useState("");
  const [dataList, setDataList] = useState();
  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_BACKEND_URL}/api/transferrequest`
      );
      if (res.status === 200) setDataList(res.data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="m-5 mx-12 ">
      <div className="lg:w-[90%] my-4 mx-auto flex flex-wrap justify-start gap-4 items-center ">
        <input
          type="text"
          placeholder="Search Here..."
          className="p-3  max-sm:w-[300px] rounded-xl sm:max-lg:text-[16px] text-xl border w-[20%] shadow-xl  text-gray-600 border-gray-200"
        />
        <select
          name=""
          id=""
          className="p-3 overflow-y-scroll max-sm:w-[300px] rounded-xl text-xl border w-[20%] shadow-xl bg-white text-gray-400 border-gray-200"
        >
          <option className="w-[300px]overflow-x-hidden" value="">
            From
          </option>
          {SubData.map((data, idx) => (
            <option
              key={idx}
              className="w-[300px] overflow-x-hidden"
              value={data.name}
            >
              {data.name}
            </option>
          ))}
        </select>
        <select
          name=""
          id=""
          className="p-3 overflow-y-scroll max-sm:w-[300px] rounded-xl text-xl border w-[20%] shadow-xl bg-white text-gray-400 border-gray-200"
        >
          <option value="">To</option>
          {SubData.map((data, idx) => (
            <option key={idx} value={data.name}>
              {data.name}
            </option>
          ))}
        </select>
        <button className="p-3  max-sm:w-[300px] rounded-xl text-xl border w-[20%] shadow-xl bg-purple-600 text-white border-gray-200">
          Submit
        </button>
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
            {dataList.map((data, index) => (
              <tr
                key={index}
                className="border p-1 text-center rounded-tr-2xl rounded-br-2xl rounded-tl-2xl min-w-1 rounded-bl-2xl  border-gray-300"
              >
                <td className="border p-1 text-center rounded-tl-2xl rounded-bl-2xl min-w-1 border-gray-300">
                  <p>{index + 1} </p>
                </td>
                <td className="border p-1 text-center   border-gray-300">
                  <p>{data.name}</p>
                </td>

                <td className="border p-1 text-center   border-gray-300">
                  <p>{data.mobileNumber}</p>
                </td>
                <td className="border p-1 text-center   border-gray-300">
                  <p>{data.aideoaIdNo}</p>
                </td>

                <td className="border p-1 text-center   border-gray-300">
                  <p>{data.designation} </p>
                </td>
                <td className="border p-1 text-center   border-gray-300">
                  <p>{data.currentSubsidiary} </p>
                </td>
                <td className="border p-1 text-center   border-gray-300">
                  <p>{data.currentPostedArea} </p>
                </td>
                <td className="border p-1 text-center   border-gray-300">
                  <p>{data.currentMinesName} </p>
                </td>
                <td className="border p-1 text-center   border-gray-300">
                  <p>{data.grade} </p>
                </td>
                <td className="border p-1 text-center   border-gray-300">
                  <p>{data.preferredTransferArea} </p>
                </td>
                <td className="border p-1 text-center   border-gray-300">
                  <p>{data.preferredTransferSubsidiary} </p>
                </td>
                <td className="border p-1 text-center   border-gray-300">
                  <p>{data.preferredTransferMine} </p>
                </td>

                <td className="border p-1 text-center text-xs text-nowrap  border-gray-300">
                  <p>{data.createdAt.toString().slice(0, 10)} </p>
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
