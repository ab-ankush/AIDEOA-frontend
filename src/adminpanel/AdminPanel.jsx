import React, { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";
import AdminComponents from "./components/AdminComponents";
import Resources from "./components/Resources";
import CommonLinks from './components/Commanlinks'
import Events from './components/Events/Events'
import Query from './components/Query'
import IdCard from './components/IdCard'
const AdminPanel = () => {
  const [activeComponent, setActiveComponent] = useState("Dashboard");
 

  const renderComponent = () => {
    switch (activeComponent) {
      case "Dashboard":
        return <></> ;
      case "Events":
        return <Events />;
      case "Resource":
        return <Resources />;
      case "Query":
        return <Query />;
      case "ID Card":
        return <IdCard />;
      case "Contact us":
        return <></>;
      case "Notification":
        return <></>;
      case "Common Links":
        return <CommonLinks />;
      default:
        return <></>;
    }
  };
  return (
    <div className=" flex">
      <div className="w-1/5 ">
        <AdminSidebar activeComponent={activeComponent} setActiveComponent={setActiveComponent}/>
      </div>
      <div className="w-4/5 ">
      
          <AdminNavbar />
       
        <div className="p-8 bg-gray-100">
        {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
