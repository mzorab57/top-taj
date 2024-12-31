import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaDribbble,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import topTajLogo from "/assets/img/toptajLogo.jpg";

const Footer = () => {
  return (
    <footer name="contacts" className="bg-gray-900 text-white relative tracking-wider font-inter ">
      {/* Shape Weight Background */}
      <div className="absolute right-0 bottom-14 z-10">
        <img
          src="https://www.commonsupport.com/html/Nasim/Vervoer/images/shape/weight.png"
          alt="Shape Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Footer Top */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* About Widget */}
            <div className="space-y-4">
              <a href="index.html">
                <img
                  src={topTajLogo}
                  alt="Footer Logo"
                  className="mb-6"
                />
              </a>
              <p className="text-gray-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            
            </div>

            {/* Office Info */}
            <div className="space-y-4">
              <h5 className="text-3xl -translate-y-1.5 border-b border-b-gray-600 w-fit pr-3 font-bold font-inter">
                Office Info
              </h5>
              {/* Phone */}
              <div className="flex items-center gap-2  text-white ">
                <FaPhone className="text-lg bg-yellow-400 p-2 rounded-full" size={35} />
                <a href="tel:+88123456987231">+964 07701411893</a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2 text-white ">
                <FaEnvelope className="text-lg bg-yellow-400 p-2 rounded-full" size={35} />
                <a href="mailto:info@envato.com">info@toptaj.com</a>
              </div>

              {/* Location */}
              <div className="flex items-start gap-2 text-white ">
                <FaMapMarkerAlt className="text-lg mt-1 bg-yellow-400 p-2 rounded-full" size={35} />
                <p>
                  380 St Kilda Road, <br />
                  Kwanjo
                </p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h5 className="text-3xl -translate-y-1.5 border-b border-b-gray-600 w-fit pr-3 font-bold font-inter">Pages</h5>
         
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
          
              <div className="mt-6">
                <span className="block mb-2 tracking-wider ">Social Network</span>
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
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-xl"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-xl"
                  >
                    <FaDribbble />
                  </a>
                </div>
              </div>
            </div>

            {/* Our Projects */}
            <div>
              <h5 className="text-3xl -translate-y-1.5 border-b border-b-gray-600 w-fit pr-3 font-bold font-inter">Our Projects</h5>
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
      <div className="bg-gray-900  py-4">
        <div className="container mx-auto  border-t border-t-neutral-500 text-center">
          <p className="text-gray-400">
            © 2024 TOP SOFT. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
