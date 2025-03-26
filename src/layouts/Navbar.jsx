import React, { useState, useEffect } from "react";
import { scroller } from "react-scroll";
import toptajLogo from "/assets/img/toptajLogo.jpg";

import MobileMenu from "./MobileMenu";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom"; // Import Link from react-router-dom
import LanguageSwitcher from "../component/LanguageSwitcher";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook

const Navbar = () => {
  const { t } = useTranslation(); // Destructure the translation function
  const [color, setColor] = useState(false);
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const storedAdminData = localStorage.getItem("adminData");
  const adminData = JSON.parse(storedAdminData);

  // Function to scroll to the about section
  const scrollToSection = () => {
    scroller.scrollTo("hero", {
      offset: -120,
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const scrollToFooter = () => {
    scroller.scrollTo("contacts", {
      offset: -120,
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

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

  return (
    <div className={` Navbar fixed top-0  z-50 w-full tracking-widest`}>
      {/* Main Navbar */}
      <div
        className={` flex flex-col justify-center max-w-[1700px] font-Jost   mx-auto  items-center    w-full   `}
      >
        {/* top */}
        <div
          className={`${
            color
              ? "opacity-0  translate-y-[-100%] duration-200 ease-in transition-all"
              : "opacity-100 translate-y-0 duration-200 ease-out transition-all"
          } flex font-Jost justify-between items-center text-white text-sm py-4 px-1 max-w-[1095px] bg-transparent h-full w-full   `}
        >
          {/* Location */}

          <span
            className={`${
              location.pathname === "/" ||
              location.pathname === "/about" ||
              location.pathname === "/services"
                ? "text-white"
                : "text-black"
            }`}
          >
            China, Guangzhou
          </span>
          <span
            className={`${
              location.pathname === "/" ||
              location.pathname === "/about" ||
              location.pathname === "/services"
                ? "text-white"
                : "text-black"
            }`}
          >
            info@toptaj.net
          </span>
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
          className={`flex justify-between  max-w-[1700px] lg:px-6 items-center text-white w-full h-[5.2rem]  duration-500 shadow-lg ease-in-out transform ${
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
              <img
                src={toptajLogo}
                alt="toptaj Logo"
                className=" scale-90 lg:-translate-y-7 -translate-y-10 -translate-x-3"
              />
            </Link>
          </div>

          {/* Navigation Menu */}
          <ul className="hidden text-lg translate-x-5 w-full font-Jost tracking-widest  lg:flex justify-start items-center space-x-10 rtl:space-x-10 h-full ">
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
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to="/about"
                className="hover:text-yellow-400 cursor-pointer"
              >
                {t("about")}
              </Link>
            </li>
            <li>
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to="/services"
                className="hover:text-yellow-400"
              >
                {t("services")}
              </Link>
            </li>
            <li>
              <Link
                to="/"
                state={{ scrollTo: "track" }}
                className="hover:text-yellow-400"
              >
                Tracking
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => scrollToFooter()}
                className="hover:text-yellow-400 cursor-pointer"
              >
                {t("contacts")}
              </Link>
            </li>
            {adminData ? (
              <li>
                <Link
                  to="/dashboard"
                  className="hover:text-yellow-400 cursor-pointer"
                >
                  Dashboard
                </Link>
              </li>
            ) : (
              ""
            )}
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
