import React, { useEffect, useState } from "react";
import { scroller } from "react-scroll";
import { useTranslation } from "react-i18next";
import { CiLocationOn } from "react-icons/ci";
import { IoLanguageOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  // Function to change language
  const changeLanguage = (lng) => {
    // Change the language using i18n
    i18n.changeLanguage(lng);
    localStorage.setItem("selectedLanguage", lng);

    // Set the direction based on the selected language
    if (lng === "ar" || lng === "ku") {
      document.body.dir = "rtl"; // Set to RTL for Arabic and Kurdish
    } else {
      document.body.dir = "ltr"; // Set to LTR for other languages (like English)
    }

    // Close the dropdown after selection
    setIsOpen(false);
  };

  useEffect(() => {
    // On component mount, check if there's a saved language in localStorage
    const savedLanguage = localStorage.getItem("selectedLanguage") || "en"; // Default to 'en'
    changeLanguage(savedLanguage); // Apply the saved language or default
  }, []); // Empty dependency array ensures this runs only once on mount

 

  

  return (
    <div className="hidden font-Trifelia lg:flex items-center justify-center relative border-l-yellow-400  border-l-2 h-full pl-5">
      {/* location Icon */}
      <Link
        to="/"
        state={{ scrollTo: "track" }} // Pass state to indicate the target section
      >
        <CiLocationOn
          className="cursor-pointer hover:text-yellow-400"
          size={30}
        />
      </Link>

      <div
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen); // Toggle dropdown visibility
        }}
        className={`cursor-pointer py-2 px-4 rounded-lg flex gap-x-5 text-center ${
          isOpen ? "" : "text-white"
        } hover:text-yellow-400`}
      >
        {/* <CiLocationOn size={30} /> */}
        {/* <IoLanguageOutline className="" size={30} /> */}
      </div>

      {/* Dropdown */}
      <div
        className={`absolute text-center top-16 -right-10 mt-2 w-32 py-2 bg-white border-4 border-[#033647] rounded-lg shadow-xl text-black z-50 transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-90 poicursor-pointer-events-none"
        }`}
      >
        {/* English */}
        <div
          className="block px-4 py-2 text-sm hover:bg-[#033647]/50 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            changeLanguage("en"); // English
          }}
        >
          English
        </div>
        {/* Arabic */}
        <div
          className="block px-4 py-2 text-sm hover:bg-[#033647]/50 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            changeLanguage("ar"); // Arabic
          }}
        >
          Arabic
        </div>
        {/* Kurdish */}
        {/* <div
          className="block px-4 py-2 text-sm hover:bg-[#033647]/50 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            changeLanguage("ku"); // Kurdish
          }}
        >
          Kurdish
        </div> */}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
