import { Route, Routes } from "react-router-dom";

import Event from "./components/Eventpage/EventPage";
import ContactUs from "./components/Contactus/ContactUs";
import Home from "./components/Homepage/Homepage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import JoinMembership from "./components/JoinMembershipHomepage/JoinMembership";
import DonationComponent from "./components/Donation/DonationComponent";
import MutualTransferPage from "./components/MutualTransferPage/MutualTransferPage";
import About from "./components/About_us/Contactus.jsx";
import EducationCell from "./components/Education_cell/EducationCell.jsx";
import ApplyIdCard from "./components/ApplyIdcard/ApplyIdCard.jsx";
import Landingpage from "./components/Landingpage/Landingpage.jsx";
import Dashboard from "./components/Admin_panel/Dashboard.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import ScrollToTop from "./utils/ScrollToTop.jsx";
import DataList from "./components/MutualTransferPage/DataList";
import Onlinetest from "./components/Onlinetest/Onlinetest";
import StudentCorner from "./components/studentcorner/StudentCorner";
import Employeecorner from "./components/Employeecorner/Employeecorner";
import Education from "./components/Education/Education";
import QueryForm from "./components/queryform/QueryForm";
import NotFound from "./components/notfound/Notfound";
import Forgotpassword from "./components/forgotpassword/Forgotpassword";
import OnlineClass from "./components/onlineclass/OnlineClass";
import UserRoleSelect from "./components/Cards/UserRoleSelect";
import { Toaster } from "react-hot-toast";
import { useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "./context/authContext";




export default function App() {
  useEffect(() => {
    getUser();
    
  }, []);
  const {refreshAccessToken}=useContext(AuthContext);
  const getUser = async () => {
      try {
        const token = localStorage.getItem("accessToken"); // Get token from localStorage

        // Send request to the "Get Current User" API endpoint
        const response = await axios.get("http://localhost:4000/api/auth/getuser", {
          headers: {
            Authorization: `Bearer ${token}`, // Set token in Authorization header
          },
        });
        console.log(response.data);
        return response.data; // Return the user data from the response
      } catch (error) {
        console.error('Error fetching current user:', error);
        throw error;
      }
    };

   // Set up axios interceptor to handle token expiration
axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Prevent retry loop

      try {
        const newAccessToken = await refreshAccessToken();
        
        // Set the Authorization header to the new access token
        axios.defaults.headers.common["Authorization"] = `Bearer ${newAccessToken}`;
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

        // Retry the original request with the new token
        return axios(originalRequest);
      } catch (err) {
        // Handle token refresh failure (e.g., logout the user)
        console.error("Token refresh failed:", err);
      }
    }

    return Promise.reject(error);
  }
);
 
    

  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="event" element={<Event />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="/mutualtransferviewportal" element={<DataList />} />
          <Route path="membership" element={<JoinMembership />} />
          {/* <Route path="donation" element={<DonationComponent />} /> */}
          <Route path="mutualtransfer" element={<MutualTransferPage />} />
          <Route path="about" element={<About />} />
          <Route path="education" element={<EducationCell />} />
          <Route path="idcard" element={<ApplyIdCard />} />
          <Route path="home" element={<Landingpage />} />
          <Route path="onlinetest" element={<Onlinetest />} />
          <Route path="studentcorner" element={<StudentCorner />} />
          <Route path="employeecorner" element={<Employeecorner />} />
          <Route path="educationpage" element={<Education />} />
          <Route path="query" element={<QueryForm />} />
          <Route path="forgotpassword" element={<Forgotpassword />} />
          <Route path="onlineclass" element={<OnlineClass />} />
          <Route path="additional" element={<UserRoleSelect />} />
        </Route>
        <Route path="/admin" element={<Dashboard />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </ScrollToTop>
  );
}
