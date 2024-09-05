import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header.jsx";
const Dashboard = () => {
  return (
    <div className="grid  grid-cols-[1fr_19fr] min-h-screen">
      <Sidebar />
      <div>
        <Header />
      </div>
    </div>
  );
};

export default Dashboard;
