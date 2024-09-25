import React, { useState } from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import { MdOutlineModeEdit } from 'react-icons/md';

const data = {
  bookings: [
    {
      hotel: 'Grand Ballon Hotel',
      status: 'Confirmed',
      date: '2024-09-24 12:00 PM',
      code: 'H1234',
      action: {
        deleteId: '#1234',
        editId: '#5678',
      },
    },
    {
      hotel: 'Sunset Beach Resort',
      status: 'Pending',
      date: '2024-09-26 03:00 PM',
      code: 'H5678',
      action: {
        deleteId: '#9876',
        editId: '#5432',
      },
    },
    // Add more data as needed
  ],
};

const IdCardTable = () => {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('Recents');
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
    data.bookings[editIndex] = editData; // Update data in-place
    setShowModal(false); // Close the modal
  };

  // Filter bookings based on active filter
  const filteredBookings = data.bookings.filter((item) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Recents') return true; // Customize this as needed for 'Recents'
    return item.status === activeFilter;
  });

  return (
    <div className="container mx-auto p-4">
      {/* Search Input */}
      <div className="w-full mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 rounded-3xl text-xl border w-full md:w-[40%] shadow-xl border-gray-200"
          placeholder="Search by hotel name"
        />
      </div>

      {/* Filter Tabs */}
      <div className="flex space-x-4 mb-4">
        {['Recents', 'All', 'Pending', 'Confirmed', 'Cancelled'].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`p-2 ${
              activeFilter === filter ? 'bg-purple-500 text-white' : 'bg-gray-200'
            } rounded-lg`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-scroll">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="bg-purple-400 p-3 text-white rounded-tl-2xl">
                Hotel Name & Code
              </th>
              <th className="bg-purple-400 p-3 text-white">Status</th>
              <th className="bg-purple-400 p-3 text-white">Date & Time</th>
              <th className="bg-purple-400 p-3 text-white rounded-tr-2xl">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((item, index) => (
              <tr key={index} className="border-b text-center border-gray-300">
                <td className="p-3">
                  {item.hotel} ({item.code})
                </td>
                <td className="p-3">{item.status}</td>
                <td className="p-3">{item.date}</td>
                <td className="p-3 flex justify-center gap-x-4">
                  <button id={item.action.deleteId} className="text-purple-500">
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

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-[400px]">
            <h2 className="text-xl mb-4">Edit Booking</h2>

            <div className="mb-4">
              <label className="block mb-2">Hotel Name</label>
              <input
                type="text"
                name="hotel"
                placeholder="Hotel Name"
                value={editData.hotel}
                onChange={handleInputChange}
                className="p-2 border w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Status</label>
              <input
                type="text"
                name="status"
                placeholder="Booking Status"
                value={editData.status}
                onChange={handleInputChange}
                className="p-2 border w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Date & Time</label>
              <input
                type="text"
                name="date"
                placeholder="Date & Time"
                value={editData.date}
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
};

export default IdCardTable;
