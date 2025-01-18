import React, { useState, useEffect } from "react";
import { scroller } from "react-scroll";
import toptajLogo from "/assets/img/toptajLogo.jpg";

import MobileMenu from "./MobileMenu";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom"; // Import Link from react-router-dom
import LanguageSwitcher from "../component/LanguageSwitcher";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook

const Navbar = () => {
  const { t } = useTranslation(); // Destructure the translation function
  const [color, setColor] = useState(false);
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const changeHeaderColor = () => {
    window.scrollY >= 20 ? setColor(true) : setColor(false);
  };
  window.addEventListener("scroll", changeHeaderColor);

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      smooth: true,
      offset: section === "hero" ? -200 : 40,
      duration: 500,
    });
  };

  return (
    <div className={` Navbar fixed top-0  z-50 w-full tracking-widest`}>
      {/* Main Navbar */}
      <div
        className={`${location.pathname === '/dashboard' || location.pathname === '/tracking' ? 'hidden': 'flex flex-col justify-center max-w-[1700px]    mx-auto  items-center    w-full '}   `}
      >
        {/* top */}
        <div
          className={`${
            color
              ? "opacity-0  translate-y-[-100%] duration-200 ease-in transition-all"
              : "opacity-100 translate-y-0 duration-200 ease-out transition-all"
          } flex font-inter justify-between items-center text-white text-sm py-4 px-1 max-w-[1095px] bg-transparent h-full w-full   `}
        >
          {/* Location */}
       
            <span>China, Kwanjo</span>
        

            <span>info@toptaj.com</span>
          {/* Icons */}
          <div
            style={{
              clipPath: "polygon(20% 0%, 100% 0%, 85% 100%, 0% 100%)",
            }}
            className="flex space-x-3 border-4 shadow-2xl border-yellow-400  px-5 py-2 bg-[#033647]/80 "
          >
            <a
              // href="https://www.facebook.com/share/jjrJrDHLD4kejhEL/?mibextid=qi2Omg"
              className="text-gray-400 hover:text-yellow-400"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              // href="https://www.instagram.com/artukbey.suli?igsh=d2lld3BpZDVpdW5s"
              className="text-gray-400 hover:text-yellow-400"
            >
              <AiFillInstagram size={20} />
            </a>
          </div>
        </div>

        {/* main nav */}
        <div
          className={`flex justify-between  max-w-[1700px] lg:px-6 items-center text-white w-full h-24  duration-500 shadow-lg ease-in-out transform ${
            isScrolled
              ? "bg-[#033647]  fixed top-0 z-30 shadow-lg py-1"
              : "bg-[#033647]/90 shadow-lg"
          }`}
        >
           {/* Logo */}
           <div
              style={{
                clipPath: "polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)",
              }}
              className="w-80 object-cover bg-white h-full  "
            >
              <Link to="/">
                <img src={toptajLogo} alt="toptaj Logo" className=" scale-90 lg:-translate-y-5 -translate-y-9 -translate-x-3" />
              </Link>
            </div>
           
          {/* Navigation Menu */}
          <ul className="hidden text-lg translate-x-5 w-full font-inter tracking-widest  lg:flex justify-start items-center space-x-10 rtl:space-x-10 h-full ">
           
            <li>
              <Link
                to="/"
                onClick={() => scrollToSection("hero")}
                className="hover:text-yellow-400 cursor-pointer h-full px-6"
              >
                {t("home")}
              </Link>
            </li>
            <li>
              <Link to="about" className="hover:text-yellow-400 cursor-pointer">
                {t("about")}
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-yellow-400">
                {t("services")}
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => scrollToSection("about")} className="hover:text-yellow-400">
               Tracking
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => scrollToSection("contacts")}
                className="hover:text-yellow-400 cursor-pointer"
              >
                {t("contacts")}
              </Link>
            </li>
           
          </ul>
          <LanguageSwitcher />
        </div>
    {/* Mobile Menu */}
    <MobileMenu setOpenMenu={setOpenMenu} isOpenMenu={isOpenMenu} />
      </div>
  
    </div>
  );
};

export default Navbar;
