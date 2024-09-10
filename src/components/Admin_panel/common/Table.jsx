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
    <div>
      <div className="w-full mb-10">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 rounded-3xl text-xl border w-[20%] shadow-xl border-gray-200"
          placeholder="Search by name or ID"
        />
      </div>

      <div>
        <table className=" w-full  ">
          <tr className="  ">
            <th className=" items-center min-w-1 rounded-tl-2xl rounded-bl-2xl bg-purple-400 p-5 ">
              <p className=" size-6 " />
            </th>
            <th className="  p-1 text-white  bg-purple-400  ">
              <p>No.</p>
            </th>
            <th className=" p-1 text-white bg-purple-400  ">
              <p>Date</p>
            </th>
            <th className=" p-1 text-white bg-purple-400  ">
              <p>Name</p>
            </th>
            <th className=" p-1 text-white bg-purple-400  ">
              <p>Email</p>
            </th>
            <th className=" p-1 text-white bg-purple-400  ">
              <p>Mobile No.</p>
            </th>
            <th className=" p-1 text-white bg-purple-400  ">
              <p>Aideoa ID</p>
            </th>
            <th className=" p-1 text-white bg-purple-400  ">
              <p>Status</p>
            </th>
            <th className=" p-1 text-white rounded-tr-2xl w-16 rounded-br-2xl bg-purple-400  ">
              <p>Action</p>
            </th>
          </tr>

          {tableData.map((data, index) => (
            <tr className="border p-1 text-center   border-gray-300">
              <td className="text-center">
                <input
                  className=" size-6 "
                  type="radio"
                  name="user-info"
                  id="user-info"
                />
              </td>

              <td className="border p-1 text-center   border-gray-300">
                <p>{index + 1} </p>
              </td>
              <td className="border p-1 text-center   border-gray-300">
                <p>{data.date} </p>
              </td>
              <td className="border p-1 text-center   border-gray-300">
                <p>{data.name}</p>
              </td>
              <td className="border p-1 text-center   border-gray-300">
                <p>{data.email}</p>
              </td>
              <td className="border p-1 text-center   border-gray-300">
                <p>{data.mobile_number}</p>
              </td>
              <td className="border p-1 text-center   border-gray-300">
                <p>{data.aideoaId}</p>
              </td>
              <td className="border p-1 text-center    border-gray-300">
                <p>{data.status}</p>
              </td>
              <td className=" p-5 text-center flex gap-x-5 ">
                <p>{data.action.deleteId}</p>

                <p>{data.action.editId}</p>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

// const Table = () => {
//     const data = useMemo(() => [
//         { id: 1, name: 'John Doe', age: 25, city: 'New York' },
//         { id: 2, name: 'Jane Doe', age: 30, city: 'Los Angeles' },
//         { id: 3, name: 'Bob Smith', age: 35, city: 'Chicago' },
//     ], []);

//     const columns = useMemo(() => [
//         { Header: 'ID', accessor: 'id' },
//         { Header: 'Name', accessor: 'name' },
//         { Header: 'Age', accessor: 'age' },
//         { Header: 'City', accessor: 'city' },
//     ], []);

//     const {
//         getTableProps,
//         getTableBodyProps,
//         headerGroups,
//         rows,
//         prepareRow,
//     } = useTable({ columns, data },);

//     return (
//         <table {...getTableProps()} className="w-full border border-purple-500">
//             <thead className="bg-purple-600 text-white">
//                 {headerGroups.map((headerGroup) => (
//                     <tr {...headerGroup.getHeaderGroupProps()} style={{ background: 'lightgray' }}>
//                         {headerGroup.headers.map((column) => (
//                             <th
//                                 className="bg-purple-600"
//                                 {...column.getHeaderProps()}
//                             >
//                                 {column.render('Header')}
//                                 {/* <span>
//                                     {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
//                                 </span> */}
//                             </th>
//                         ))}
//                     </tr>
//                 ))}
//             </thead>
//             <tbody className="w-full text-center" {...getTableBodyProps()}>
//                 {rows.map((row) => {
//                     prepareRow(row);
//                     return (
//                         <tr {...row.getRowProps()} style={{ borderBottom: 'solid 1px gray' }}>
//                             {row.cells.map((cell) => (
//                                 <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                             ))}
//                         </tr>
//                     );
//                 })}
//             </tbody>
//         </table>
//     );
// };

export default Table;
