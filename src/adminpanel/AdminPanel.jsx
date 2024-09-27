import React, { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";
import AdminComponents from "./components/AdminComponents";
import Resources from "./components/Resources";
import CommonLinks from './components/Commanlinks'
import Events from './components/Events/Events'
import Query from './components/Query'
import IDCard from './components/IDCard'
import ContactUs from "../components/Admin_panel/Main-Content/Contact_Us/Contact-us";
import Notifications from "../components/Admin_panel/Main-Content/Notifications/Notifications";
import OurTeams from "../components/Admin_panel/Main-Content/Our-Teams/Our-Teams";
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
        return <ContactUs/>;
      case "Notification":
        return <Notifications/>;
      case "Common Links":
        return <CommonLinks />;
        case "Our Teams":
          return <OurTeams />;
      
      default:
        return <></>;
    }
  };
  return (
    <div className=" flex">
      <div className="w-1/5 ">
        <AdminSidebar activeComponent={activeComponent} setActiveComponent={setActiveComponent}/>
      </div>
      <div className="w-4/5 h-screen bg-gray-200">
      
          <AdminNavbar />
       
        <div className="p-8 bg-gray-200">
        {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
