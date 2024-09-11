import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
// components/Cards/Navbar
export default MainLayout;
