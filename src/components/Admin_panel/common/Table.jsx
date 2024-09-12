import React, { useMemo, useState } from "react";
// import { useTable } from "react-table";

const tableData = [
  {
    id: "1",
    name: "Jone Doe",
    date: "06/06/23",
    email: "dummy@gmail.com",
    mobile_number: "+1234567890",
    aideoaId: "#123456",
    status: "active",
    action: {
      deleteId: "#1234",
      editId: "#6789",
    },
  },
  {
    id: "1",
    name: "Jone Doe",
    date: "06/06/23",
    email: "dummy@gmail.com",
    mobile_number: "+1234567890",
    aideoaId: "#123456",
    status: "active",
    action: {
      deleteId: "#1234",
      editId: "#6789",
    },
  },
  {
    id: "1",
    name: "Jone Doe",
    date: "06/06/23",
    email: "dummy@gmail.com",
    mobile_number: "+1234567890",
    aideoaId: "#123456",
    status: "active",
    action: {
      deleteId: "#1234",
      editId: "#6789",
    },
  },
  {
    id: "1",
    name: "Jone Doe",
    date: "06/06/23",
    email: "dummy@gmail.com",
    mobile_number: "+1234567890",
    aideoaId: "#123456",
    status: "active",
    action: {
      deleteId: "#1234",
      editId: "#6789",
    },
  },
  {
    id: "1",
    name: "Jone Doe",
    date: "06/06/23",
    email: "dummy@gmail.com",
    mobile_number: "+1234567890",
    aideoaId: "#123456",
    status: "active",
    action: {
      deleteId: "#1234",
      editId: "#6789",
    },
  },
];

const Table = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="container mx-auto p-4">
      {/* Search Input */}
      <div className="w-full mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 rounded-3xl text-xl border w-full md:w-[40%] shadow-xl border-gray-200"
          placeholder="Search by name or ID"
        />
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-scroll">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="bg-purple-400 p-3 text-white rounded-tl-2xl">
                Select
              </th>
              <th className="bg-purple-400 p-3 text-white">No.</th>
              <th className="bg-purple-400 p-3 text-white">Date</th>
              <th className="bg-purple-400 p-3 text-white">Name</th>
              <th className="bg-purple-400 p-3 text-white">Email</th>
              <th className="bg-purple-400 p-3 text-white">Mobile No.</th>
              <th className="bg-purple-400 p-3 text-white">Aideoa ID</th>
              <th className="bg-purple-400 p-3 text-white">Status</th>
              <th className="bg-purple-400 p-3 text-white rounded-tr-2xl">Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr
                key={data.id}
                className="border-b text-center border-gray-300"
              >
                <td className="p-3">
                  <input type="radio" name="user-info" />
                </td>
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{data.date}</td>
                <td className="p-3">{data.name}</td>
                <td className="p-3">{data.email}</td>
                <td className="p-3">{data.mobile_number}</td>
                <td className="p-3">{data.aideoaId}</td>
                <td className="p-3">{data.status}</td>
                <td className="p-3 flex justify-center gap-x-4">
                  <p>{data.action.deleteId}</p>
                  <p>{data.action.editId}</p>
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
