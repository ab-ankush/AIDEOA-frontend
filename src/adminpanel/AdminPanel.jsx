import React, { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";
import AdminComponents from "./components/AdminComponents";
import Resources from "./components/Resources";
import CommonLinks from './components/Commanlinks'
import Events from './components/Events/Events'
import Query from './components/Query'
import IDCard from './components/IDCard'
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
        return <IDCard />;
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
      <div className="w-1/5 px-3 ">
        <AdminSidebar activeComponent={activeComponent} setActiveComponent={setActiveComponent}/>
      </div>
      <div className="w-4/5 ">
        <div className="">
          <AdminNavbar />
        </div>
        <div>
        {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
