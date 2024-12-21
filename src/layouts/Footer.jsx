import React from "react";
import logo from "/assets/images/artukbey-logo.jpg";
import g2 from "/assets/images/cake3.jpg";
import g3 from "/assets/images/carousel1.jpg";
import g4 from "/assets/images/fjbm.jpg";
import g5 from "/assets/images/smoothi3.jpg";
import g6 from "/assets/images/sweet.jpg";
import g7 from "/assets/images/mocktail1.jpg";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer name="contacts" className=" text-white py-12">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
          {/* Logo Section */}
          <div className="md:w-1/4">
            <div className="flex items-center space-x-2">
              <div className="flex flex-col space-y-5">
                <span className="text-2xl font-semibold text-primary">
                  Artukbey Kahve
                </span>
                <img src={logo} alt="logo" className="size-40" />
              </div>
            </div>
          </div>

          {/* Working Hours Section */}
          <div className="md:w-1/4">
            <h5 className="text-xl font-semibold mb-4">{t("working_hours")}</h5>
            <ul>
              <li className="mb-2">
                <span className="block">{t("sunday_thursday")}</span>
                <span className="text-gray-400">09:00 am - 12:00 pm</span>
              </li>
              <li className="mb-2">
                <span className="block">{t("only_friday")}</span>
                <span className="text-gray-400">11:00 am - 12:00 pm</span>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="md:w-1/4">
            <h5 className="text-xl font-semibold mb-4">{t("contact_us")}</h5>
            <ul>
              <li className="flex items-center mb-2">
                <i className="fas fa-map-marker-alt text-primary mr-2"></i>
                <span>{t("address")}</span>
              </li>
              <li className="flex items-center mb-2">
                <i className="fas fa-envelope text-primary mr-2"></i>
                <span>{t("email")}</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone text-primary mr-2"></i>
                <span>{t("phone")}</span>
              </li>
            </ul>
          </div>

          {/* Gallery Section */}
          <div className="md:w-1/4">
            <h5 className="text-xl font-semibold mb-4">{t("gallery")}</h5>
            <div className="grid grid-cols-3 gap-2">
              {[g2, g3, g4, g5, g6, g7].map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="Gallery Image"
                  className="w-full h-20 object-cover"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500">
          &copy; 2024 {t("company_name")}. {t("all_rights_reserved")}.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
