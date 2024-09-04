

const EmployeeForm = () => {
  
  return (
    <form className='flex gap-4 flex-col w-1/2  max-md:w-full'>

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
        Company Name
      </label>
      <input
        type="text"
        placeholder="Your college name"
        className="w-full px-3 py-2 border-2 border-gray-300 bg-gray-100 rounded-full shadow-sm focus:outline-none  focus:border-blue-300"
      />
    </div>


    <div className='flex flex-col gap-2' >
      <label className="text-base text-gray-700 text-base font-bold ">
       Working Area
      </label>
      <input
        type="text"
        placeholder="+1234567890"
        className="w-full px-3 py-2 border-2 border-gray-300 bg-gray-100 rounded-full shadow-sm focus:outline-none  focus:border-blue-300"
      />
    </div>


    <div className='flex flex-col gap-2' >
      <label className="text-base text-gray-700 text-base font-bold ">
    
      </label>
      <input
        type="file"
        placeholder="Write here..."
        className="w-full px-3 py-2 border-2 border-gray-300 bg-gray-100 rounded-full shadow-sm focus:outline-none  focus:border-blue-300"
      />
    </div>


    <div className='flex flex-col gap-2' >
      <label className="text-base text-gray-700 text-base font-bold ">
       Contact No
      </label>
      <input
        type="text"
        placeholder="Your Contact No"
        className="w-full px-3 py-2 border-2 border-gray-300 bg-gray-100 rounded-full shadow-sm focus:outline-none  focus:border-blue-300"
      />
    </div>
    <div className='flex flex-col gap-2' >
      <label className="text-base text-gray-700 text-base font-bold ">
       Address
      </label>
      <input
        type="text"
        placeholder="Your address"
        className="w-full px-3 py-2 border-2 border-gray-300 bg-gray-100 rounded-full shadow-sm focus:outline-none  focus:border-blue-300"
      />
    </div>
    <div className='flex flex-col gap-2' >
      <label className="text-base text-gray-700 text-base font-bold ">
      Aideoa ID
      </label>
      <input
        type="text"
        placeholder=" Your Aideoa ID"
        className="w-full px-3 py-2 border-2 border-gray-300 bg-gray-100 rounded-full shadow-sm focus:outline-none  focus:border-blue-300"
      />
    </div>
   
  </form>
  )
}

export default EmployeeForm