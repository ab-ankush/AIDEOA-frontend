import React from "react";
import MembershipComponent from "./HomepageComponents/MembershipComponent";
import About from "./HomepageComponents/About";
import Featured from "./HomepageComponents/Featured";
import LatestUpdates from "./HomepageComponents/LatestUpdates";
import Homepage2 from "./HomepageComponents/HomePage2/HomePage2.jsx";
const Homepage = () => {
  return (
    <>
      <MembershipComponent />
      <About />
      <Featured />
      <LatestUpdates />
      <Homepage2 />
    </>
  );
};

export default Homepage;
