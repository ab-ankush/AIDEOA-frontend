import { useState } from "react";

const IDform = () => {
  const [file, setFile] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const dfile = e.dataTransfer.files[0];
    setFile(dfile);
  };


  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <form className='flex gap-4 flex-col w-1/2 w-full '>

    <div className='flex flex-col gap-2 ' >
      <label className=" text-gray-700 text-base font-bold ">
        Your Name
      </label>
      <input
        type="text"
        placeholder="Write your name"
        className="w-full px-3 py-2 border-2 border-gray-300 bg-gray-100 rounded-full shadow-sm focus:outline-none  focus:border-blue-300"
      />
    </div>


    <div className='flex flex-col gap-2' >
      <label className="text-base text-gray-700 text-base font-bold ">
        College Name
      </label>
      <input
        type="text"
        placeholder="Your college name"
        className="w-full px-3 py-2 border-2 border-gray-300 bg-gray-100 rounded-full shadow-sm focus:outline-none  focus:border-blue-300"
      />
    </div>


    <div className='flex flex-col gap-2' >
      <label className="text-base text-gray-700 text-base font-bold ">
        Contact No
      </label>
      <input
        type="text"
        placeholder="+1234567890"
        className="w-full px-3 py-2 border-2 border-gray-300 bg-gray-100 rounded-full shadow-sm focus:outline-none  focus:border-blue-300"
      />
    </div>


    <div className='flex flex-col gap-2' >
      <label className="text-base text-gray-700 text-base font-bold ">
        Address
      </label>
      <input
        type="text"
        placeholder="Write here..."
        className="w-full px-3 py-2 border-2 border-gray-300 bg-gray-100 rounded-full shadow-sm focus:outline-none  focus:border-blue-300"
      />
    </div>


  

    <div className='flex flex-col gap-2' >
      <label className="text-base text-gray-700 text-base font-bold ">
       { "Student's Photo"}
      </label>
      <div  onDrop={handleDrop}
      onDragOver={handleDragOver} className="flex justify-center items-center w-full h-32 bg-gray-100 rounded-2xl cursor-pointer hover:border-blue-300">
       <label htmlFor='file' className='flex flex-col justify-center items-center cursor-pointer'>
       <span className="text-gray-400 text-sm">Drag & Drop or</span>
       <span className="text-AIDEOTYPO text-sm font-semibold text-purple-700">Upload</span>
       {file && <p className="text-gray-400"> {file.name}</p>}
       </label>
        <input onChange={handleFileChange} type='file' id="file"  className='hidden'/>
      </div>
    </div>
    <div className='flex flex-col gap-2' >
      <label className="text-base text-gray-700 text-base font-bold ">
       { "University ID card"}
      </label>
      <div  onDrop={handleDrop}
      onDragOver={handleDragOver} className="flex justify-center items-center w-full h-32 bg-gray-100 rounded-2xl cursor-pointer hover:border-blue-300">
       <label htmlFor='file' className='flex flex-col justify-center items-center cursor-pointer'>
       <span className="text-gray-400 text-sm">Drag & Drop or</span>
       <span className="text-AIDEOTYPO text-sm font-semibold text-purple-700">Upload</span>
       {file && <p className="text-gray-400"> {file.name}</p>}
       </label>
        <input onChange={handleFileChange} type='file' id="file"  className='hidden'/>
      </div>
    </div>
   
  </form>
  )
}

export default IDform