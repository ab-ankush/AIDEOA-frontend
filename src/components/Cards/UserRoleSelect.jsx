import { useState } from "react";

const UserRoleSelect = ({ setUserTypeModal }) => {
    const [userType, setUserType] = useState(""); 
  const [org, setOrg] = useState(""); 


  const handleSubmit = (e) => {
    e.preventDefault();
  
  }
    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg   shadow-lg w-11/12 sm:w-2/3 xl:w-1/3">
            <h2 className="text-lg font-bold mb-4 text-AIDEOTYPO" >Are you a Student or an Employee?</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-4">
  <label className="block mb-2 font-medium text-gray-700" htmlFor="userType">
    Select User Type:
  </label>
  <select
    id="userType"
    value={userType}
    onChange={(e) => setUserType(e.target.value)}
    className="p-3 border rounded-md focus:outline-none w-full "
  >
    <option value="student" className="">Student</option>
    <option value="employee" className="">Employee</option>
  </select>
</div>

              
    
              {userType&& (
                <div className="mb-4">
                  <label className="block mb-2">{userType === "employee"?"Company Name":"University Name"}</label>
                  <input
                    type="text"
                    placeholder={userType==='employee'?"Enter your company":"Enter University name"}
                    value={org}
                    onChange={(e) => setOrg(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none "
                  />
                </div>
              )}
    
              <div className="flex justify-end">
                
                <button
                  type="submit"
                  className="bg-purplebtn text-white px-4 py-2 rounded-md hover:opacity-75"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    };

export default UserRoleSelect