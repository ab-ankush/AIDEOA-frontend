import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const companyLinks = [
  { name: "About Us", link: "/about" },
  { name: "Careers", link: "/careers" },
  { name: "Services", link: "/services" },
  { name: "Blog", link: "/blog" },
  { name: "Our Story", link: "/story" },
  { name: "Contact Us", link: "/contact" },
];

const servicesLinks = [
  { name: "Consulting", link: "/consulting" },
  { name: "Investment Banking", link: "/investment" },
  { name: "Audit", link: "/audit" },
];

const legalLinks = [
  { name: "Privacy", link: "/privacy" },
  { name: "Legal Policy", link: "/legal" },
];

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-14 px-20 max-lg:px-10">
      <div className="grid grid-cols-2 gap-10 max-md:grid-cols-1">
        {/* Left Section */}
        <div className="space-y-8">
          <div>
            <h1 className="text-white text-lg font-semibold">HedgeMyFunds</h1>
            <p className="mt-2">
              Empower Yourself, Your Investments, Your Skills & Career. <br />
              Bringing Financial Freedom <br /> For India, By India
            </p>
          </div>
          <div className="flex gap-16">
            {/* Company */}
            <div>
              <h2 className="text-white font-semibold">Company</h2>
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
                    <Link to={link.link} className="hover:text-white">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-8">
          <div>
            <h2 className="text-white font-semibold">Get In Touch</h2>
            <p className="mt-2">
              <a href="mailto:contact@hedgemyfunds.com" className="block">
                contact@hedgemyfunds.com
              </a>
              <a href="tel:+919888334677" className="block">
                +91-9888334677
              </a>
              Chandigarh, India
            </p>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.423381281603!2d76.77941757504961!3d30.732964593514448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feef9e2727af1%3A0x87b24a2086be8053!2sChandigarh!5e0!3m2!1sen!2sin!4v1694496306329"
              width="300"
              height="150"
              className="w-full"
              allowFullScreen=""
              loading="lazy"
              title="map"
            ></iframe>
          </div>
          <div className="flex gap-4 text-white">
            <FaInstagram className="cursor-pointer" />
            <FaFacebookF className="cursor-pointer" />
            <FaLinkedin className="cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="text-center text-gray-600 text-sm mt-10">
        © 2021-2024 Hedgemyfunds.com - A sub-venture of Luxury Hotel Concierge
        (OPC) Pvt. Ltd.
      </div>
    </footer>
  );
};

export default Footer;
