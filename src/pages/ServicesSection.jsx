import React, { useState } from "react";
import services_vide from "/assets/videos/services-vide.mp4";
import Services from "../pages/Services";
import { useTranslation } from "react-i18next";

const ServicesSection = () => {
  const { t } = useTranslation();
  const [color, setColor] = useState(false);
  const [p, setP] = useState("");

  const changeHeaderColor = () => {
    if (window.scrollY >= 5) {
      setColor(true);
      setP("pt-[calc(1.5rem+1px)]");
    } else {
      setP("pt-[calc(0rem+0px)]");
    }
  };

  window.addEventListener("scroll", changeHeaderColor);

  return (
    <section
      className={`text-white ${
        color
          ? `${p} transition-all duration-1000 ease-in-out`
          : "transition-all duration-1000 ease-in-out"
      }`}
    >
      {/* Hero Section */}
      <div
        className={`relative w-full bg-black h-[720px] flex items-center justify-start`}
      >
        <video
          src={services_vide}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        ></video>
        <div className="relative z-10 text-white md:text-center w-[700px] p-4 md:p-10">
          <h1 className="md:text-7xl text-4xl font-semibold">
            {t("services")}
          </h1>
        </div>
      </div>

      <Services />
    </section>
  );
};

export default ServicesSection;
