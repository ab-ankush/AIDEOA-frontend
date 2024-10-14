import React, { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";

import Resources from "./components/Resources";
import CommonLinks from "./components/commonlinks/Commonlinks";
import Events from "./components/Events/Events";
import Query from "./components/Query";
import IdCard from "./components/IdCard";
import Notifications from "../components/Admin_panel/Main-Content/Notifications/Notifications";
import ContactUs from "../components/Admin_panel/Main-Content/Contact_Us/Contact-us";
import OurTeams from "../components/Admin_panel/Main-Content/Our-Teams/Our-Teams";
import Main from "./DashBoardpageComponent/Main";
import Transaction_page from "./components/Transaction/Transaction_page";
import Member from "./components/Members/Member";
import AddEvent from "./components/Events/AddEvents";
import AddCommonLinks from "./components/commonlinks/AddCommonLinks";
import EventDetails from "./components/Events/EventsDetails";
import UpdateEvents from "./components/Events/UpdateEvents";
import AddTeams from "./components/Our_Team/AddTeams";
import CreateContact from "./components/Contact_us/CreateContact";
import AddNotification from "../components/Admin_panel/Main-Content/Notifications/AddNotification";
const AdminPanel = () => {
  const [activeComponent, setActiveComponent] = useState("Dashboard");
  const [eventsData, setEventsData] = useState();

  const renderComponent = () => {
    switch (activeComponent) {
      case "Dashboard":
        return <Main />;
      case "Events":
        return (
          <Events
            setActiveComponent={setActiveComponent}
            setEventsData={setEventsData}
          />
        );
      case "Transaction":
        return <Transaction_page />;
      case "Resource":
        return <Resources />;
      case "Members":
        return <Member />;
      case "Query":
        return <Query />;
      case "ID Card":
        return <IdCard />;
      case "Contact us":
        return <ContactUs setActiveComponent={setActiveComponent} />;
      case "Create Contact":
        return <CreateContact setActiveComponent={setActiveComponent} />;

      case "Notification":
        return <Notifications setActiveComponent={setActiveComponent} />;
      case "Add Notification":
        return <AddNotification setActiveComponent={setActiveComponent} />;

      case "Common Links":
        return <CommonLinks setActiveComponent={setActiveComponent} />;
      case "Our Teams":
        return <OurTeams setActiveComponent={setActiveComponent} />;
      case "Add Events":
        return <AddEvent setActiveComponent={setActiveComponent} />;
      case "Add Common Links":
        return <AddCommonLinks setActiveComponent={setActiveComponent} />;
      case "Events Details":
        return (
          <EventDetails
            setActiveComponent={setActiveComponent}
            eventsData={eventsData}
          />
        );
      case "Update Events":
        return (
          <UpdateEvents
            setActiveComponent={setActiveComponent}
            eventsData={eventsData}
          />
        );
      case "Add Teams":
        return <AddTeams setActiveComponent={setActiveComponent} />;

      default:
        return <></>;
    }
  };

  return (
    <div className=" flex">
      <div className="lg:w-[20%] max-lg:w-[10%]">
        <AdminSidebar
          activeComponent={activeComponent}
          setActiveComponent={setActiveComponent}
        />
      </div>
      <div className="lg:w-[80%] max-lg:w-[90%] h-screen bg-gray-200">
        <AdminNavbar />

        <div className="p-8 max-lg:px-4 bg-gray-200 h-screen">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
