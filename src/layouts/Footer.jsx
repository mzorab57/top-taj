import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import topTajLogo from "/assets/img/TOPTAJCARGOPSD.png";

const Footer = () => {
  const location = useLocation().pathname;

  const officeLocations = [
    {
      title: "Iraq Office",
      address:
        "Mawlawi St. Baba Shekh Building No.:20, Sulaymaniyah, Kurdistan",
      phone: ["+964 770 142 2200", "+964 750 142 2200"],
      email: ["info@toptaj.net", "toptajcargo@gmail.com"],
      hasWhatsapp: true,
    },
    {
      title: "UAE Office",
      address:
        "Al Maktoum Hospital Street, Jackes Building No.:102, Deira, Dubai",
      phone: ["+971 55 288 7014"],
      email: ["toptajuae@gmail.com"],
    },
  ];

  const currentOffice = officeLocations[0]; // Using Iraq office as primary contact

  return (
    <>
      {location === "/dashboard" ? (
        ""
      ) : (
        <footer
          name="contacts"
          className="bg-gray-900 text-white relative tracking-wider font-inter"
        >
          {/* Shape Weight Background */}
          <div className="absolute right-0 bottom-14 z-10">
            <img
              src="https://www.commonsupport.com/html/Nasim/Vervoer/images/shape/weight.png"
              alt="Shape Background"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="py-24">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 overflow-hidden">
                {/* About Widget */}
                <div className="space-y-4 text-center">
                  <Link to="/" onClick={() => window.scrollTo(0, A0)}>
                    <img
                      src={topTajLogo}
                      alt="TopTaj Cargo Logo"
                      className="scale-150"
                    />
                  </Link>
                  <p className="text-gray-400">
                    TopTaj Cargo International Transportation
                  </p>
                </div>

                {/* Office Info */}
                <div className="space-y-4">
                  <h5 className="text-3xl -translate-y-1.5 border-b border-b-gray-600 w-fit pr-3 font-medium font-inter">
                    Contact Us
                  </h5>
                  {/* Phone with WhatsApp */}
                  <div className="flex items-center gap-2 text-white">
                    <div className="relative">
                      <FaPhone
                        className="text-lg bg-yellow-400 p-2 rounded-full"
                        size={35}
                      />
                      {currentOffice.hasWhatsapp && (
                        <FaWhatsapp
                          className="absolute -top-1 -right-1 text-green-500 bg-white rounded-full"
                          size={15}
                        />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <a href={`tel:${currentOffice.phone[0]}`}>
                        {currentOffice.phone[0]}
                      </a>
                      {currentOffice.phone[1] && (
                        <a href={`tel:${currentOffice.phone[1]}`}>
                          {currentOffice.phone[1]}
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-2 text-white">
                    <FaEnvelope
                      className="text-lg bg-yellow-400 p-2 rounded-full"
                      size={35}
                    />
                    <div className="flex flex-col">
                      {currentOffice.email.map((email, index) => (
                        <a key={index} href={`mailto:${email}`}>
                          {email}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-2 text-white">
                    <FaMapMarkerAlt
                      className="text-lg mt-1 bg-yellow-400 p-2 rounded-full"
                      size={35}
                    />
                    <p>{currentOffice.address}</p>
                  </div>
                </div>

                {/* Newsletter */}
                <div className="space-y-4">
                  <h5 className="text-3xl -translate-y-1.5 border-b border-b-gray-600 w-fit pr-3 font-medium font-inter">
                    Pages
                  </h5>

                  <Link
                    to="/"
                    onClick={() => window.scrollTo(0, 0)}
                    className="inline-block tracking-wider  text-white  py-2 rounded hover:text-yellow-400 transition"
                  >
                    Home
                  </Link>
                  <Link
                    to="about"
                    onClick={() => window.scrollTo(0, 0)}
                    className="inline-block  text-white px-5 py-2 rounded hover:text-yellow-400 transition"
                  >
                    About Us
                  </Link>
                  <Link
                    to="services"
                    onClick={() => window.scrollTo(0, 0)}
                    className="inline-block tracking-wider  text-white  py-2 rounded hover:text-yellow-400 transition"
                  >
                    Services
                  </Link>
                  <Link
                    to="/"
                    onClick={() => window.scrollTo(0, 0)}
                    className="inline-block tracking-wider px-3 text-white  py-2 rounded hover:text-yellow-400 transition"
                  >
                    Treaking
                  </Link>

                  <div className="mt-6">
                    <span className="block font-medium border-b w-fit border-b-gray-600 mb-2 tracking-wider ">
                      Social Network
                    </span>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white text-xl"
                      >
                        <FaFacebook />
                      </a>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white text-xl"
                      >
                        <FaInstagram />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Our Projects */}
                <div>
                  <h5 className="text-3xl -translate-y-1.5 border-b border-b-gray-600 w-fit pr-3 font-medium font-inter">
                    Our Projects
                  </h5>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      "https://www.commonsupport.com/html/Nasim/Vervoer/images/project/project-1.png",
                      "https://www.commonsupport.com/html/Nasim/Vervoer/images/project/project-2.png",
                      "https://www.commonsupport.com/html/Nasim/Vervoer/images/project/project-3.png",
                      "https://www.commonsupport.com/html/Nasim/Vervoer/images/project/project-4.png",
                      "https://www.commonsupport.com/html/Nasim/Vervoer/images/project/project-5.png",
                      "https://www.commonsupport.com/html/Nasim/Vervoer/images/project/project-6.png",
                    ].map((image, index) => (
                      <a
                        key={index}
                        href={image}
                        className="block rounded overflow-hidden"
                      >
                        <img
                          src={image}
                          alt={`Project ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition transform"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div dir="ltr" className="text-center font-sans text-white   pb-10">
          <p>
            © 2025 Top Taj. 
            <a
              href="https://wa.me/+9647701411893"
              className="mx-1 hover:text-gray-300  "
            >
           <span className="mx-1">Developed By TOP SOFT.</span>   
           All Rights Reserved
            </a>
          </p>
        </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
