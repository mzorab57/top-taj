import React, { useEffect, useState } from "react";
import { Sling as Hamburger } from 'hamburger-react'
import { scroller } from "react-scroll";
import { Link } from "react-router-dom";
import { IoLanguageOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";


const MobileMenu = ({ isOpenMenu, setOpenMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState(false);
  const { t, i18n } = useTranslation();

  // Function to change language
  const changeLanguage = (lng) => {

    i18n.changeLanguage(lng);
    localStorage.setItem("selectedLanguage", lng);
    // Set the direction based on the selected language
    document.body.dir = lng === "ar" || lng === "ku" ? "rtl" : "ltr";
    setIsOpen(false);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
    changeLanguage(savedLanguage);
  }, []);

  // Handle smooth scrolling for sections
  const scrollToSection = (section) => {
    setOpenMenu(false);
    scroller.scrollTo(section, {
      smooth: true,
      offset: section === "hero" ? -200 : 40,
      duration: 500,
    });
  };

  const changeHeaderColor = () => {
    window.scrollY >= 20 ? setColor(true) : setColor(false);
  };
  window.addEventListener("scroll", changeHeaderColor);

  return (
    <header className={`${color ? 'lg:hidden fixed top-0 left-0 w-full h-14 font-inter text-white z-50': 'lg:hidden fixed top-20 left-0 w-full h-14 font-inter text-white z-50'}`}>
      <div className="container flex justify-end p-4">
        <Hamburger
          toggled={isOpenMenu}
          toggle={setOpenMenu}
          size={28}
          duration={0.3}
          rounded
          color="#fff"
        />
        <div
          className={`fixed  inset-0 bg-primary transform top-40 ${
            isOpenMenu ? "translate-x-0 " : "translate-x-full"
          } transition-transform duration-500 ease-in-out z-40`}
        >
          <nav className="flex flex-col text-white items-center justify-center h-full space-y-2">
            <Link
              to="/"
              onClick={() => scrollToSection("hero")}
              className="text-2xl hover:text-yellow-500"
            >
              {t("home")}
            </Link>
            <Link
              to="/"
              onClick={()=>setOpenMenu(false)}
              state={{ scrollTo: "track" }}
              className="text-2xl hover:text-yellow-500"
            >
              {t("Tracking")}
            </Link>
            <Link
              to="/about"
              onClick={() => {window.scrollTo(0,0);scrollToSection("about")}}
              className="text-2xl hover:text-yellow-500"
            >
              {t("about")}
            </Link>
           
            <Link
              to="/services"
              onClick={() => {setOpenMenu(false); window.scrollTo(0,0)}}
              className="text-2xl hover:text-yellow-500"
            >
              {t("services")}
            </Link>
            <Link
              to="/"
              onClick={() => scrollToSection("contacts")}
              className="text-2xl hover:text-yellow-500"
            >
              {t("contacts")}
            </Link>

            {/* Language Dropdown */}
            <div className="relative text-center block lg:hidden">
              <div
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(!isOpen);
                }}
                className="cursor-pointer py-2 px-4 rounded-lg hover:text-yellow-500"
              >
                {/* <IoLanguageOutline size={30} className="mx-10" /> */}
                <div
                  className={`text-center mt-2 py-2 w-28 bg-white border-2 border-prtext-primary rounded-lg shadow-xl text-black z-50 transform transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-full pointer-events-none"
                  }`}
                >
                  <div
                    className="block px-4 py-2 text-sm hover:bg-yellow-400/50 cursor-pointer"
                    onClick={() => changeLanguage("en")}
                  >
                    English
                  </div>
                  <div
                    className="block px-4 py-2 text-sm hover:bg-yellow-400/50 cursor-pointer"
                    onClick={() => changeLanguage("ar")}
                  >
                    Arabic
                  </div>
                  {/* <div
                    className="block px-4 py-2 text-sm hover:bg-yellow-400/50 cursor-pointer"
                    onClick={() => changeLanguage("ku")}
                  >
                    Kurdish
                  </div> */}
                </div>
              </div>
            </div>

            {/* Menu Footer */}
            <div className="flex flex-col px-2 text-center items-center justify-center">
              <div className="flex text-sm">
                <span className="flex gap-x-1 items-start">
                  <span className="text-yellow-400">Work</span> :
                  <span>24 Online</span>
                </span>
              </div>
              <div className="flex gap-x-1 text-sm">
                <span className="text-yellow-400">
                  {t("location")} :{" "}
                  <span className="text-white">Chian, Kwanjo</span>
                </span>
              </div>
              <div className="flex pt-5 space-x-3">
                <a
                  // href="https://www.facebook.com"
                  className="text-gray-400 hover:text-yellow-500"
                >
                  <FaFacebookF size={16} />
                </a>
                <a
                  // href="https://www.instagram.com"
                  className="text-gray-400 hover:text-yellow-500"
                >
                  <AiFillInstagram size={20} />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default MobileMenu;
