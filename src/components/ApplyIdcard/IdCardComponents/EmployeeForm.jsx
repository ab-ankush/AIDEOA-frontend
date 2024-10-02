import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
const url=`http://localhost:4000/api`
const EmployeeForm = () => {
  // State for the form data
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    workingArea: "",
    contactNo: "",
    address: "",
    employeeIdNo: "",
    employeePhoto: null, 
  });

  const handleDrop = (e) => {
    e.preventDefault();
    const dfile = e.dataTransfer.files[0];
    setFormData((prevData) => ({ ...prevData, employeePhoto: dfile }));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({ ...prevData, employeePhoto: file }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      const res= await axios.post(`${url}/employeeidcard`,formData)
      if(res.status===200)
      {
        toast.success(res.data.message)
        setFormData({
          name: "",
          companyName: "",
          workingArea: "",
          contactNo: "",
          address: "",
          employeeIdNo: "",
          employeePhoto: null, 
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
          className="w-full px-3 py-2 border-2 border-gray-300 bg-gray-100 rounded-full shadow-sm focus:outline-none focus:border-blue-300"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-base text-gray-700 text-base font-bold">Company Name</label>
        <input
          type="text"
          name="companyName"
          placeholder="Your company name"
          className="w-full px-3 py-2 border-2 border-gray-300 bg-gray-100 rounded-full shadow-sm focus:outline-none focus:border-blue-300"
          value={formData.companyName}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-base text-gray-700 text-base font-bold">Working Area</label>
        <input
          type="text"
          name="workingArea"
          placeholder="Working Area"
          className="w-full px-3 py-2 border-2 border-gray-300 bg-gray-100 rounded-full shadow-sm focus:outline-none focus:border-blue-300"
          value={formData.workingArea}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-base text-gray-700 text-base font-bold">Contact No</label>
        <input
          type="text"
          name="contactNo"
          placeholder="Your Contact No"
          className="w-full px-3 py-2 border-2 border-gray-300 bg-gray-100 rounded-full shadow-sm focus:outline-none focus:border-blue-300"
          value={formData.contactNo}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-base text-gray-700 text-base font-bold">Address</label>
        <input
          type="text"
          name="address"
          placeholder="Your address"
          className="w-full px-3 py-2 border-2 border-gray-300 bg-gray-100 rounded-full shadow-sm focus:outline-none focus:border-blue-300"
          value={formData.address}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-base text-gray-700 text-base font-bold">Employee ID No</label>
        <input
          type="text"
          name="employeeIdNo"
          placeholder="Employee ID No"
          className="w-full px-3 py-2 border-2 border-gray-300 bg-gray-100 rounded-full shadow-sm focus:outline-none focus:border-blue-300"
          value={formData.employeeIdNo}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-base text-gray-700 text-base font-bold">{"Employee's Photo"}</label>
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="flex justify-center items-center w-full h-32 bg-gray-100 rounded-2xl cursor-pointer hover:border-blue-300"
        >
          <label htmlFor="file" className="flex flex-col justify-center items-center cursor-pointer">
            <span className="text-gray-400 text-sm">Drag & Drop or</span>
            <span className="text-AIDEOTYPO text-sm font-semibold text-purple-700">Upload</span>
            {formData.employeePhoto && <p className="text-gray-400">{formData.employeePhoto.name}</p>}
          </label>
          <input onChange={handleFileChange} type="file" id="file" className="hidden" />
        </div>
      </div>

      <div className="flex">
        <button type="submit" className="w-52 max-sm:w-full h-12 membershipBtn rounded-2xl text-white font-medium text-lg">
          Submit
        </button>
      </div>
    </form>
  );
};

export default EmployeeForm;
