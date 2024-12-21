import React from "react";
import chooseImage from "/assets/images/barista-making-cup-coffee.jpg";
import parallaxIcon1 from "/assets/images/parallax_icon1.png";
import parallaxIcon2 from "/assets/images/parallax_icon2.png";
import parallaxIcon3 from "/assets/images/parallax_icon3.png";
import chooseIcon1 from "/assets/images/choose_icon1.png";
import chooseIcon2 from "/assets/images/choose_icon2.png";
import { useTranslation } from "react-i18next"; // Import translation hook

const Choose = () => {
  const { t } = useTranslation(); // Destructure translation function

  return (
    <section className="relative py-32 px-5 bg-black text-white overflow-hidden">
      <div className="container mx-auto flex flex-wrap justify-center items-center max-w-[1100px]">
        {/* Parallax Icons */}
        <div
          className="hidden xl:block absolute left-20 top-20 size-48 bg-no-repeat bg-contain"
          style={{ backgroundImage: `url(${parallaxIcon1})` }}
        ></div>
        <div
          className="hidden xl:block absolute right-20 top-20 size-48 bg-no-repeat bg-contain"
          style={{ backgroundImage: `url(${parallaxIcon2})` }}
        ></div>
        <div
          className="hidden xl:block absolute right-32 bottom-20 size-48 bg-no-repeat bg-contain"
          style={{ backgroundImage: `url(${parallaxIcon3})` }}
        ></div>

        <div className="grid lg:flex gap-x-10 mx-5 ">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img
              src={chooseImage}
              alt={t("why_choose_us")}
              className="shadow-lg w-full h-[500px] lg:h-[600px] object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 lg:pl-10">
            <div className="mb-6">
              <h4 className="text-primary uppercase">{t("why_choose_us")}</h4>
              <h2 className="lg:text-4xl text-2xl font-bold">
                {t("new_artukbey_coffee")}
              </h2>
            </div>
            <p className="mb-6 text-xs md:text-base">
              {t("paragraph_content")}
            </p>

            {/* Features List */}
            <ul className="space-y-4 text-sm">
              <li className="flex items-start ">
                <img
                  src={chooseIcon1}
                  alt={t("natural_coffee_beans")}
                  className="w-12 h-12 mx-4"
                />
                <div>
                  <h5 className="text-xl font-bold">
                    {t("natural_coffee_beans")}
                  </h5>
                  <p className="text-gray-400">
                    {t("natural_coffee_beans_desc")}
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <img
                  src={chooseIcon2}
                  alt={t("iso_certification")}
                  className="w-12 h-12 mx-4"
                />
                <div>
                  <h5 className="text-xl font-bold">
                    {t("iso_certification")}
                  </h5>
                  <p className="text-gray-400">{t("iso_certification_desc")}</p>
                </div>
              </li>
            </ul>

            {/* Explore More Button */}
            {/* <a
            // href="about"
            className="inline-block mt-8 bg-primary text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            {t("explore_more_choose")}  
          </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
