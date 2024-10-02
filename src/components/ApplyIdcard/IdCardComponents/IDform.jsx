import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
const url=`http://localhost:4000/api`
const IDform = () => {
  const [formData, setFormData] = useState({
    name: '',
    collegeName: '',
    contactNo: '',
    address: '',
    studentPhoto: null,
    universityIDCard: null,
  });


  const handleDrop = (e, fieldName) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: file,
    }));
  };

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: file,
    }));
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res= await axios.post(`${url}/studentidcard`,formData)
      if(res.status===200)
      {
        toast.success(res.data.message)
        setFormData({
          name: '',
          collegeName: '',
          contactNo: '',
          address: '',
          studentPhoto: null,
          universityIDCard: null,
        })
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
    }

  };

  return (
    <form className="flex gap-4 flex-col w-1/2 w-full" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label className="text-gray-700 text-base font-bold">Your Name</label>
        <input
          type="text"
          name="name"
          placeholder="Write your name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border-2 border-gray-300 bg-gray-100 rounded-full shadow-sm focus:outline-none focus:border-blue-300"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-gray-700 text-base font-bold">College Name</label>
        <input
          type="text"
          name="collegeName"
          placeholder="Your college name"
          value={formData.collegeName}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border-2 border-gray-300 bg-gray-100 rounded-full shadow-sm focus:outline-none focus:border-blue-300"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-gray-700 font-bold">Contact No</label>
        <input
          type="text"
          name="contactNo"
          placeholder="+1234567890"
          value={formData.contactNo}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border-2 border-gray-300 bg-gray-100 rounded-full shadow-sm focus:outline-none focus:border-blue-300"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-gray-700 text-base font-bold">Address</label>
        <input
          type="text"
          name="address"
          placeholder="Write here..."
          value={formData.address}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border-2 border-gray-300 bg-gray-100 rounded-full shadow-sm focus:outline-none focus:border-blue-300"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-gray-700 text-base font-bold">{"Student's Photo"}</label>
        <div
          onDrop={(e) => handleDrop(e, 'studentPhoto')}
          onDragOver={(e) => e.preventDefault()}
          className="flex justify-center items-center w-full h-32 bg-gray-100 rounded-2xl cursor-pointer hover:border-blue-300"
        >
          <label htmlFor="studentPhoto" className="flex flex-col justify-center items-center cursor-pointer">
            <span className="text-gray-400 text-sm">Drag & Drop or</span>
            <span className="text-purple-700 text-sm font-semibold">Upload</span>
            {formData.studentPhoto && <p className="text-gray-400">{formData.studentPhoto.name}</p>}
          </label>
          <input
            onChange={(e) => handleFileChange(e, 'studentPhoto')}
            type="file"
            id="studentPhoto"
            className="hidden"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-gray-700 text-base font-bold">{"University ID card"}</label>
        <div
          onDrop={(e) => handleDrop(e, 'universityIDCard')}
          onDragOver={(e) => e.preventDefault()}
          className="flex justify-center items-center w-full h-32 bg-gray-100 rounded-2xl cursor-pointer hover:border-blue-300"
        >
          <label htmlFor="universityIDCard" className="flex flex-col justify-center items-center cursor-pointer">
            <span className="text-gray-400 text-sm">Drag & Drop or</span>
            <span className="text-purple-700 text-sm font-semibold">Upload</span>
            {formData.universityIDCard && <p className="text-gray-400">{formData.universityIDCard.name}</p>}
          </label>
          <input
            onChange={(e) => handleFileChange(e, 'universityIDCard')}
            type="file"
            id="universityIDCard"
            className="hidden"
          />
        </div>
      </div>

      <div className="flex">
        <button
          type="submit"
          className="w-52 max-sm:w-full h-12 membershipBtn rounded-2xl text-white font-medium text-lg"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default IDform;
