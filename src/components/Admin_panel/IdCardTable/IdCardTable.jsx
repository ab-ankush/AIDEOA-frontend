import React, { useState } from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import { MdOutlineModeEdit } from 'react-icons/md';

const data = {
    studentId: [
        {
            name: 'Jhon Cena',
            college_name: '+91xxxxxxx678',
            contact_number: 'asdasd@gmail.com',
            address: 'AIDEOA',
            student_photo: 'Grand Ballon Hotel',
            university_id_card: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            action: {
                deleteId: '#1234',
                editId: '#5678',
            },
        },
    ],
    employeeId: [
        {
            name: 'Jhon Cena',
            college_name: '+91xxxxxxx678',
            contact_number: 'asdasd@gmail.com',
            address: 'AIDEOA',
            student_photo: 'Grand Ballon Hotel',
            university_id_card: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            action: {
                deleteId: '#1234',
                editId: '#5678',
            },
        },
    ],
    // Add more data as needed
};



const IdCardTable = () => {
    const [search, setSearch] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [editData, setEditData] = useState(null);
    const [editIndex, setEditIndex] = useState(null);
  
    const handleEditClick = (item, index) => {
      setEditData({ ...item });
      setEditIndex(index);
      setShowModal(true);
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setEditData((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleSave = () => {
      data[editIndex] = editData; // Update data in-place (or better, create a copy and set state if you're managing it through state)
      setShowModal(false); // Close the modal
    };
  
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
                <th className="bg-purple-400 p-3 text-white">Your Name</th>
                <th className="bg-purple-400 p-3 text-white">College Name</th>
                <th className="bg-purple-400 p-3 text-white">Contact Number</th>
                <th className="bg-purple-400 p-3 text-white">Address</th>
                <th className="bg-purple-400 p-3 text-white">Student's Photo</th>
                <th className="bg-purple-400 p-3 text-white">University ID card</th>
                <th className="bg-purple-400 p-3 text-white rounded-tr-2xl">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.studentId.map((item, index) => (
                <tr key={index} className="border-b text-center border-gray-300">
                  <td className="p-3">
                    <input type="radio" name="user-info" />
                  </td>
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.college_name}</td>
                  <td className="p-3">{item.contact_number}</td>
                  <td className="p-3">{item.address}</td>
                  <td className="p-3">{item.student_photo}</td>
                  <td className="p-3">{item. university_id_card}</td>
                  <td className="p-3 flex justify-center gap-x-4">
                    <button
                      id={item.action.deleteId}
                      className="text-purple-500"
                    >
                      <MdDeleteOutline size={20} />
                    </button>
                    <button
                      id={item.action.editId}
                      className="text-purple-500"
                      onClick={() => handleEditClick(item, index)}
                    >
                      <MdOutlineModeEdit size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {console.log(editData)}
        {/* Modal */}
        {showModal && (
          
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg w-[400px]">
              <h2 className="text-xl mb-4">Edit Query</h2>
  
              <div className="mb-4">
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder='name'
                  value={editData.name}
                  onChange={handleInputChange}
                  className="p-2 border w-full"
                />
              </div>
  
              <div className="mb-4">
                <label className="block mb-2">Mobile</label>
                <input
                  type="number/text"
                  name="mobile_number"
                  placeholder='mobile number'
                  value={editData.college_name}
                  onChange={handleInputChange}
                  className="p-2 border w-full"
                />
              </div>
  
              <div className="mb-4">
                <label className="block mb-2">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="enter email"
                  value={editData.contact_number}
                  onChange={handleInputChange}
                  className="p-2 border w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Company Name</label>
                <input
                  type="text"
                  name="company_name"
                  placeholder='comapany name'
                  value={editData.address}
                  onChange={handleInputChange}
                  className="p-2 border w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Office Address</label>
                <input
                  type="text"
                  name="office_address"
                  placeholder='office address'
                  value={editData.student_photo}
                  onChange={handleInputChange}
                  className="p-2 border w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Query</label>
                <input
                  type="text"
                  name="your_query"
                  placeholder="query"
                  value={editData.university_id_card}
                  onChange={handleInputChange}
                  className="p-2 border w-full"
                />
              </div>
  
              <div className="flex justify-between mt-6">
                <button
                  className="bg-gray-300 p-2 rounded"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-purple-500 text-white p-2 rounded"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>


        
    );
}

export default IdCardTable