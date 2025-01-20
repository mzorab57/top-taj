import React, { useState, useEffect } from "react";
import {
  FiBox,
  FiMapPin,
  FiUser,
  FiPhone,
  FiClipboard,
  FiTruck,
} from "react-icons/fi"; // Icons from react-icons
import { BsChevronRight } from "react-icons/bs";
import CallToAction from "./ui/CallToAction";
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceCard from "./ui/ServiceCard";

const WhyChooseUs = () => {
  const [activeTab, setActiveTab] = useState("tab-2");
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    AOS.init();
    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="flex flex-col w-full">
      <section className=" bg-gray-50 pb-64 relative flex flex-col overflow-hidden">
        <CallToAction />

        <div className="container max-w-full content-center px-4  py-40 relative">
          {/* Decorative Shapes */}
          <div className="absolute lg:top-0 lg:-right-7 lg:scale-100 -top-[5.5rem] -right-[5rem] scale-50 ">
            <img
              src="https://www.commonsupport.com/html/Nasim/Vervoer/images/shape/shape-3.png"
              alt="Shape 3"
              style={{
                transform: ` translateX(${scrollY * 0.1}px)`,
                transition: "transform 0.1s ease-out",
              }}
            />
          </div>
          <div className="absolute -bottom-20  -left-56 scale-75 lg:scale-105 lg:left-0 translate-y-32 ">
            <img
              src="https://www.commonsupport.com/html/Nasim/Vervoer/images/shape/shape-4.png"
              alt="Shape 4"
              style={{
                transform: ` translateX(${scrollY * 0.1}px)`,
                transition: "transform 0.1s ease-out",
              }}
            />
          </div>
          <div className="flex flex-wrap justify-center mx-auto  gap-8">
            {/* Section Title */}
            <div className="max-w-lg">
              <div className="mb-8">
                <p className="text-sm uppercase text-yellow-400 font-bold">
                  ~ Why Choose Us ~
                </p>
                <h3 className="text-5xl text-gray-600 font-bold  ">
                  Our Best{" "}
                  <span className="text-yellow-400">Freight Services</span>
                </h3>
                <p className="mt-4 text-xl text-gray-600 max-w-sm">
                  Dapibus interdum senectus malesuada est nec morbi cursus. Amet
                  in mollis consectetur amet.
                </p>
              </div>
            </div>

            {/* Tabs */}
            <div className=" text-black w-full lg:w-72">
              <ul className="space-y-4 w-full">
                <li
                  className={`flex items-center justify-between p-4 border rounded shadow-md  `}
                >
                  <div className="flex items-center space-x-2">
                    <FiBox className="text-yellow-400 text-xl" />
                    <span className="font-semibold">Transparent Pricing</span>
                  </div>
                  {/* <BsChevronRight className="text-yellow-400" /> */}
                </li>
                <li
                  onClick={() => setActiveTab("tab-2")}
                  className={`flex items-center justify-between p-4 border rounded shadow-md cursor-pointer ${
                    activeTab === "tab-2"
                      ? "bg-yellow-50 border-yellow-400"
                      : "bg-white"
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <FiMapPin className="text-yellow-400 text-xl" />
                    <span className="font-semibold">Real Time Tracking</span>
                  </div>
                  {/* <BsChevronRight className="text-yellow-400" /> */}
                </li>
                <li
                  className={`flex items-center justify-between p-4 border rounded shadow-md w-full  `}
                >
                  <div className="flex items-center space-x-2">
                    <FiUser className="text-yellow-400 text-xl" />
                    <span className="font-semibold">24/7 Online Support</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Tab Content */}
         
          </div>
        </div>
      </section>
      <ServiceCard />
    </section>
  );
};

export default WhyChooseUs;
