import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import Map from "../Contactus/ContactComponent/Map";
const companyLinks = [
  { name: "Home", link: "/home" },
  { name: "About Us", link: "/about" },
  { name: "Our Team", link: "/education" },
  { name: "Contact Us", link: "/contact" },
  { name: "Query", link: "/query" },
  { name: "Apply ID Card", link: "/idcard" },
  { name: "AIDEOA Events", link: "/event" },
];

const servicesLinks = [
  { name: "Join Membership", link: "/membership" },
  { name: "Donation", link: "/donation" },
  { name: "Mutual Transfer Portal", link: "/mutualtransfer" },
];

const legalLinks = [
  { name: "Privacy Policy", link: "/policies/Privacy Policy AIDEOA.pdf" },
  { name: "Refund Policy", link: "/policies/Refund Policy AIDEOA.pdf" },
  { name: "Terms & Conditions", link: "/policies/Terms and Conditions AIDEOA.pdf" },
];

const Footer = () => {
  return (
    <footer className="bg-black flex flex-col  text-gray-400 py-14 px-20 max-lg:px-10">
      <div className="grid grid-cols-2 gap-40 max-lg:gap-20  max-md:grid-cols-1">
        {/* Left Section */}
        <div className=" flex flex-col  items-center ">
          <div className="space-y-8 ">
            <div>
              <h1 className="text-white text-lg font-semibold">
                All India Diploma Engineers & Officials Association
              </h1>
              <p className="mt-2">
                At AIDEOA, we strive to address and resolve issues faced by
                <br /> mining students and professionals.
              </p>
            </div>
            <div className="flex gap-16 max-lg:gap-8">
              {/* Company */}
              <div>
                <h2 className="text-white font-semibold">Organization</h2>
                <ul className="mt-2 space-y-2">
                  {companyLinks.map((link, idx) => (
                    <li key={idx}>
                      <Link to={link.link} className="hover:text-white">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Services */}
              <div>
                <h2 className="text-white font-semibold">Services</h2>
                <ul className="mt-2 space-y-2">
                  {servicesLinks.map((link, idx) => (
                    <li key={idx}>
                      <Link to={link.link} className="hover:text-white">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Legal */}
              <div>
                <h2 className="text-white font-semibold">Legal</h2>
                <ul className="mt-2 space-y-2">
                  {legalLinks.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        to={link.link}
                        className="hover:text-white"
                        target="_blank"
                        reloadDocument
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="   flex justify-center ">
          <div className="space-y-8  xl:w-3/4 ">
            <div className="" >
              <h2 className="text-white font-semibold">Get In Touch</h2>
              <p className="mt-2">
                <a href="mailto:aideoa2020@gmail.com" className="block">
                  aideoa2020@gmail.com
                </a>
                Sijua more, katrasgarh, Dhanbad, jharkhand, 828113
              </p>
            </div>
           
            <div className="  bg-red-200 w-1/2 bg-red-200 lg:min-w-80 bg-gray-400 relative bg-blue-200 lg:rounded-2xl max-h-full max-lg:h-64 max-lg:rounded-b-2xl overflow-hidden max-lg:w-full opacity-70 hover:opacity-95  cursor-pointer">
              <Map />
              <Link
                to="https://maps.app.goo.gl/kiStTc8tcc2L2dUN8"
                target="_blank"
              >
                <button
                  className="absolute top-1/2 left-1/2  transform  -translate-x-1/2 -translate-y-1/2 hover:scale-105 duration-500 px-6 py-3 text-lg text-white bg-black cursor-pointer opacity-85 rounded-2xl "
                  size={70}
                >
                  View on map
                </button>
              </Link>
           
</div>
            <div className="flex gap-4 text-white ">
              {/* <FaInstagram className="cursor-pointer" /> */}
              <Link to="https://www.youtube.com/@aideoa" target="_blank">
                <FaYoutube className="cursor-pointer" />
              </Link>

              <Link
                to="https://www.facebook.com/groups/234765374272589/"
                target="_blank"
              >
                <FaFacebookF className="cursor-pointer" />
              </Link>

              {/* <FaLinkedin className="cursor-pointer" /> */}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 text-sm mt-10">
        © Copyright ©2024 All rights reserved | Powered by AIDEOA
      </div>
    </footer>
  );
};

export default Footer;
