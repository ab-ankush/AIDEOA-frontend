import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineModeEdit } from "react-icons/md";

const data = [
  {
    day: "Day 2",
    event_title: "AIDEOA Hosts Successful Annual Conference",
    event_date: "March 18th, 2025",
    event_time: "10:00AM - 5:00PM",
    location: "Grand Ballon Hotel",
    start_time: "2:00 PM",
    end_time: "1:00 PM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    share_link: "Share",
    action: {
      deleteId: "#1234",
      editId: "#5678",
    },
  },
  // Add more data as needed
];

const EventPanel = () => {
  const [search, setSearch] = useState("");
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
              <th className="bg-purple-400 p-3 text-white">Day</th>
              <th className="bg-purple-400 p-3 text-white">Title</th>
              <th className="bg-purple-400 p-3 text-white">Date</th>
              <th className="bg-purple-400 p-3 text-white">Time</th>
              <th className="bg-purple-400 p-3 text-white">Location Name</th>
              <th className="bg-purple-400 p-3 text-white">Start Time</th>
              <th className="bg-purple-400 p-3 text-white">End Time</th>
              <th className="bg-purple-400 p-3 text-white">Description</th>
              <th className="bg-purple-400 p-3 text-white">Share Url</th>
              <th className="bg-purple-400 p-3 text-white rounded-tr-2xl">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-b text-center border-gray-300">
                <td className="p-3">
                  <input type="radio" name="user-info" />
                </td>
                <td className="p-3">{item.day}</td>
                <td className="p-3">{item.event_title}</td>
                <td className="p-3">{item.event_date}</td>
                <td className="p-3">{item.event_time}</td>
                <td className="p-3">{item.location}</td>
                <td className="p-3">{item.start_time}</td>
                <td className="p-3">{item.end_time}</td>
                <td className="p-3">{item.description}</td>
                <td className="p-3">{item.share_link}</td>
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
      {console.log(editData)}
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center overflow-y-scroll items-center">
          <div className="bg-white p-6 rounded-lg w-[400px]">
            <h2 className="text-xl mb-4">Edit Event</h2>

            <div className="mb-4">
              <label className="block mb-2">Day</label>
              <input
                type="text"
                name="day"
                placeholder="title"
                value={editData.day}
                onChange={handleInputChange}
                className="p-2 border w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Title</label>
              <input
                type="text"
                name="event_title"
                placeholder="title"
                value={editData.event_title}
                onChange={handleInputChange}
                className="p-2 border w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Date</label>
              <input
                type="text"
                name="event_date"
                value={editData.event_date}
                placeholder="March 18th, 2025"
                onChange={handleInputChange}
                className="p-2 border w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Time</label>
              <input
                type="text"
                name="event_time"
                value={editData.event_time}
                placeholder="10:00AM - 5:00PM"
                onChange={handleInputChange}
                className="p-2 border w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Location Name</label>
              <input
                type="text"
                name="location"
                placeholder="location name"
                value={editData.location}
                onChange={handleInputChange}
                className="p-2 border w-full"
              />
            </div>

            <div className="flex items-center justify-center gap-x-5">
              <div className="mb-4 ">
                <label className="block mb-2">Start Time</label>
                <input
                  type="text"
                  name="start_time"
                  value={editData.start_time}
                  placeholder="2:00 PM"
                  onChange={handleInputChange}
                  className="p-2 border w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">End Time</label>
                <input
                  type="text"
                  name="end_time"
                  value={editData.end_time}
                  placeholder="1:00 PM"
                  onChange={handleInputChange}
                  className="p-2 border w-full"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block mb-2">Description</label>
              <input
                type="text"
                name="description"
                value={editData.description}
                placeholder="write here..."
                onChange={handleInputChange}
                className="p-2 border w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Share Url</label>
              <input
                type="url/text"
                name="share_link"
                placeholder="Add url"
                value={editData.share_link}
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

export default EventPanel;
