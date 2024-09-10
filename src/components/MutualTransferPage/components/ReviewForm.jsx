import React from 'react';

const ReviewForm = ({ formData }) => {
  return (
   
      <form className="grid gap-6 p-6 bg-gray-100  rounded-2xl shadow-lg ">
          <h1 className='font-semibold text-3xl'>Review your data</h1>
        <div className="flex text-xl">
          <label className="mb-2 font-semibold">Your Name :</label>
          <p className="ml-2">{formData?.name}</p>
        </div>

   
        <div className="flex text-xl">
          <label className="mb-2 font-semibold">Mobile Number :</label>
          <p className="ml-2">{formData?.mobile}</p>
        </div>

     
        <div className="flex text-xl">
          <label className="mb-2 font-semibold">AIDEOA ID No :</label>
          <p className="ml-2">{formData?.aideoaid}</p>
        </div>

     
        <div className="flex text-xl">
          <label className="mb-2 font-semibold">Current posted Subsidiary in C.I.L :</label>
          <p className="ml-2">{formData?.currentsubsidiary}</p>
        </div>

    
        <div className="flex text-xl">
          <label className="mb-2 font-semibold">Current posted AREA :</label>
          <p className="ml-2">{formData?.currentarea}</p>
        </div>

        
        <div className="flex text-xl">
          <label className="mb-2 font-semibold">Current Mines Name :</label>
          <p className="ml-2">{formData?.currentmine}</p>
        </div>

       
        <div className="flex text-xl">
          <label className="mb-2 font-semibold">Designation :</label>
          <p className="ml-2">{formData?.designation}</p>
        </div>

      
        <div className="flex text-xl">
          <label className="mb-2 font-semibold">GRADE :</label>
          <p className="ml-2">{formData?.grade}</p>
        </div>

     
        <div className="flex text-xl">
          <label className="mb-2 font-semibold">Preferred Transfer Area :</label>
          <p className="ml-2">{formData?.transferarea}</p>
        </div>

   
        <div className="flex text-xl">
          <label className="mb-2 font-semibold">Preferred Transfer Subsidiary :</label>
          <p className="ml-2">{formData?.transfersubsidiary}</p>
        </div>

     
        <div className="flex text-xl">
          <label className="mb-2 font-semibold">Preferred Transfer Mine :</label>
          <p className="ml-2">{formData?.transfermine}</p>
        </div>
        <div>
          <button
            className="bg-gradient-to-r text-xl font-normal from-purple-800 via-purple-500 to-purple-400 p-2 rounded-full w-60 text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>

  );
};

export default ReviewForm;
