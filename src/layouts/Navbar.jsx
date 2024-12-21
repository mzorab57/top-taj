import React, { useState } from "react";
import { scroller } from "react-scroll";
import artukbey_logo from "/assets/images/artukbey-logo.jpg";
import MobileMenu from "./MobileMenu";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import LanguageSwitcher from "../component/LanguageSwitcher";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook

const Navbar = ({ menuOpen, setMenuOpen }) => {
  const { t } = useTranslation(); // Destructure the translation function
  const [color, setColor] = useState(false);
  const [isOpenMenu, setOpenMenu] = useState(false);

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
    <div className={`kf-navbar text-white  flex justify-between lg:flex-col`}>
      {/* Top Bar */}
      <div
        className={`${
          color
            ? "opacity-0 translate-y-[-100%] duration-200 ease-in transition-all"
            : "opacity-100 translate-y-0 duration-200 ease-out transition-all"
        } hidden lg:flex justify-between items-center text-sm p-4 px-6 bg-black h-full w-full`}
      >
        {/* Time */}
        <div className="flex items-center space-x-3">
          <span className="flex items-center space-x-1">
            <i className="las la-clock text-[#b89272]"></i>
            <span className="text-[#b89272]">{t("opening_hours")}</span> :{" "}
            {t("opening_time")}
          </span>
        </div>

        {/* Icons */}
        <div className="flex space-x-3">
          <a
            href="https://www.facebook.com/share/jjrJrDHLD4kejhEL/?mibextid=qi2Omg"
            className="text-gray-400 hover:text-white"
          >
            <FaFacebookF size={16} />
          </a>
          <a
            href="https://www.instagram.com/artukbey.suli?igsh=d2lld3BpZDVpdW5s"
            className="text-gray-400 hover:text-white"
          >
            <AiFillInstagram size={20} />
          </a>
        </div>

        {/* Location */}
        <div className="flex items-center space-x-1">
          <i className="las la-map-marker-alt text-[#b89272]"></i>
          <span className="text-[#b89272]">{t("location")}</span> :{" "}
          {t("address")}
        </div>
      </div>

      {color ? <div className="h-20 bg-gray-950"></div> : null}

      {/* Main Navbar */}
      <div
        className={`flex justify-between items-center py-4 h-20 bg-gray-950 w-full px-6 lg:px-10 ${
          color && "fixed top-0 py-4 ease-in transition-all z-30 bg-gray-950"
        }`}
      >
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={artukbey_logo} alt="artkbey Logo" className="size-16" />
          </Link>
        </div>

        {/* Navigation Menu - Hidden on Mobile */}
        <ul className={`hidden lg:flex space-x-8 rtl:space-x-8 font-semibold`}>
          <li onMouseMove={() => setMenuOpen(false)}>
            <Link
              to="/"
              onClick={() => scrollToSection("hero")}
              className="hover:text-[#b89272] cursor-pointer px-6"
            >
              {t("home")}
            </Link>
          </li>

          <li onMouseMove={() => setMenuOpen(false)}>
            <Link
              to="/"
              onClick={() => scrollToSection("about")}
              className="hover:text-[#b89272] cursor-pointer"
            >
              {t("about")}
            </Link>
          </li>

          {/* Menu */}
          <li onMouseMove={() => setMenuOpen(false)} className="group relative">
            <Link to="/menu" className="hover:text-[#b89272]">
              {t("menu")}
              <i className="las la-angle-down ml-1"></i>
            </Link>
          </li>

          {/* Pages */}
          <li onMouseMove={() => setMenuOpen(true)}>
            <div className="hover:text-[#b89272] flex justify-center cursor-pointer">
              {t("pages")} <MdKeyboardArrowDown size={25} />
              <i className="las la-angle-down ml-1"></i>
            </div>
            {/* Dropdown for Pages */}
            <ul
              className={`absolute z-50 font-normal bg-black text-white p-4 space-y-2 mt-2 w-40 duration-300 ease-in-out ${
                menuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-5 pointer-events-none"
              }`}
            >
              <li onClick={() => setMenuOpen(false)}>
                <Link to="/services" className="hover:text-[#b89272]">
                  {t("services")}
                </Link>
              </li>
            </ul>
          </li>

          {/* Contacts */}
          <li onMouseMove={() => setMenuOpen(false)}>
            <Link
              to="/"
              onClick={() => scrollToSection("contacts")}
              className="hover:text-[#b89272] cursor-pointer"
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
  );
};

export default Navbar;
