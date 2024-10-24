import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
const url = import.meta.env.VITE_API_BACKEND_URL;
const AddTest = ({ setActiveComponent }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    quizUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${url}/api/onlinetest`, formData);
      if(res.status===200)
      {
        toast.success(res.data.message)
        setActiveComponent("Online Test")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="rounded-xl p-4 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4 text-[#4B0082]">
        Add New Test
      </h2>
      <form onSubmit={handleSubmit} className="space-y-2">
    
          <div>
            <label className="block text-gray-600">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter Title"
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
       
     


          <div>
            <label className="block text-gray-600">Description</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description"
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
     

        <div>
          <label className="block text-gray-600">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter Category"
          />
        </div>

        <div>
          <label className="block text-gray-600">Quiz URL</label>
          <input
            name="quizUrl"
            value={formData.quizUrl}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="quizUrl"
            rows="3"
            required
          />
        </div>
        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-[#4B0082] text-white px-4 py-2 rounded-md hover:opacity-80 focus:outline-none "
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => setActiveComponent("Online Test")}
            className="text-[#4B0082] bg-white  px-4 py-2 border border-[#4B0082] rounded-md hover:opacity-75 focus:outline-none "
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTest;