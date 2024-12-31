import React, { useState } from "react";
import s from "/assets/img/bg-1.jpg";
import WhyChooseUs from "../component/WhyChooseUs";
import { useTranslation } from "react-i18next";

const ServicesSection = () => {
  const { t } = useTranslation();

  // window.addEventListener("scroll", changeHeaderColor);

  return (
    <section
      className={`text-white  
         transition-all duration-1000 ease-in-out`}
    >
      {/* Hero Section */}
      <div
        className={`relative w-full bg-black h-[500px] flex items-center justify-start`}
      >
        <img
          src={s}
          alt="background"
          className="object-cover h-[500px] w-full brightness-50"
        />

        <div className="absolute w-full  bottom-[30%]">
          <h1 className="md:text-7xl text-4xl font-semibold   text-center">
            {t("services")}
          </h1>
          <h1 className=" text-xl text-gray-300    text-center">
            Go beyond logistics, make the revolution business.
          </h1>
        </div>
      </div>

      <WhyChooseUs />
    </section>
  );
};

export default ServicesSection;
