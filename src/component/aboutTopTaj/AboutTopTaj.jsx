import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import about from "/assets/img/aboutToptaj.jpg";
import air from "/assets/img/air-plane (1).png";
import sea from "/assets/img/sea.png";

const AboutTopTaj = () => {
  const { t } = useTranslation();

  const milestones = [
    { year: 2005, text: "Established in Dubai - UAE" },
    { year: 2007, text: "Opened branch in Yiwu, China" },
    { year: 2011, text: "Expanded to Guangzhou, China" },
    { year: 2023, text: "Established HQ in Sulaymaniyah, Iraq" },
  ];

  return (
    <section className="about lg:py-[140px] font-Jost py-[70px] px-4 relative max-lg:overflow-hidden">
      <div className="container mx-auto">
        <div className="row gy-5  w-[] flex-wrap-reverse flex justify-center gap-5">
          {/* Left Column */}
          <div className="col-lg-5 pe-xl-5 ">
            <div className="relative h-full ">
              <div
                className="relative"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <img
                  src={about}
                  alt="Top Taj Cargo Operations"
                  className="h-[38rem] w-[65rem]   object-cover  shadow-xl"
                />
              </div>

              {/* Experience Counter */}
              <div
                className="p-5  pe-[50px]  bg-main-600 bg-yellow-400 absolute start-0 -bottom-16 ms-[-30px]"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <div className="flex flex-col gap-1 items-start">
                  <h1 className="text-white text-6xl mb-4 font-bold font-inter cursor-big flex justify-between w-full ">
                    18+
                  </h1>

                  <span className="text-white font-medium cursor-small">
                    Years Of Experience
                  </span>
                  <img
                    src="https://wowtheme7.com/tf/logistick/assets/images/shapes/line-shape.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-7 ps-lg-5">
            <div>
              <span className="italic text-yellow-400 text-xl font-semibold">
                Global Freight Solutions
              </span>
              <h1 className="text-gray-700 font-semibold text-5xl mt-4 mb-6">
                Your Trusted Partner in <br />
                <span className="text-yellow-400">International Logistics</span>
              </h1>

              <p className="text-neutral-600 text-lg border-l-4 border-yellow-400 s pl-4 mb-8">
                TOPTAJ CARGO, headquartered in Sulaymaniyah, Kurdistan-Iraq, is
                a leading worldwide freight firm.
                <br /> With strategic branches across China and UAE, we deliver
                comprehensive import-export solutions through air and sea
                channels.
              </p>

              {/* Timeline */}
              <div className="space-y-4 mb-8 ">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <span className="text-yellow-400 font-bold">
                      {milestone.year}
                    </span>
                    <div className="h-0.5 w-4 bg-yellow-400"></div>
                    <span className="text-gray-600">{milestone.text}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1  md:grid-cols-2 gap-6 mb-8">
                <div className="p-4 border-l-2 border-yellow-400 flex items-center gap-4">
                  <img src={air} alt="Air Freight" className="w-12 h-12" />
                  <div>
                    <h3 className="font-bold mb-2">Air Freight</h3>
                    <p className="text-gray-600">
                      Swift and reliable air transportation solutions worldwide
                    </p>
                  </div>
                </div>
                <div className="p-4 border-l-2 border-yellow-400 flex items-center gap-4">
                  <img src={sea} alt="Sea Freight" className="w-12 h-12" />
                  <div>
                    <h3 className="font-bold mb-2">Sea Freight</h3>
                    <p className="text-gray-600">
                      Cost-effective maritime shipping services
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                to="/services"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-white 
                          hover:bg-yellow-500 transition-colors duration-300"
                data-aos="fade-up"
              >
                Explore Our Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTopTaj;
