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
          <div className="absolute bottom-0 -left-56 scale-75 lg:scale-105 lg:left-0 translate-y-32 ">
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
                  <BsChevronRight className="text-yellow-400" />
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
            <div className="  w-full lg:w-1/4 ">
              {activeTab === "tab-2" && (
                <div className="p-6 max-w-6xl bg-[#165b74]  w-full  shadow-md rounded">
                  <h4 className="text-xl font-bold">
                    Real Time <span className="">Tracking</span>
                  </h4>
                  <div className="mt-6">
                    <label className="block text-sm font-medium ">
                      Tracking ID:
                    </label>
                    <div className="flex mt-1 bg-white rounded ">
                      <input
                        type="text"
                        placeholder="Tracking ID number"
                        className="flex-grow pl-4 pr-2 py-2 border rounded focus:ring-red-500 focus:border-yellow-400"
                      />
                      <button className="text-white m-1 bg-yellow-600 brightness-125  px-7 py-2  rounded transition">
                        Track
                      </button>
                    </div>
                    <p className="mt-2 text-sm ">
                      Enter the ID of your project to track its status. <br />
                      (Demo project IDs are 1234, 2234, and 3234.)
                    </p>
                  </div>

                  {/* level bar */}
                  <div className="flex items-center my-4">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center">
                      <div className="size-5 border-4 border-yellow-600 brightness-125 flex items-center justify-center rounded-full bg-white text-white"></div>
                      <p className="text-sm mt-2 text-white">Payment</p>
                    </div>
                    <div className="flex-1 h-0.5 mb-7 bg-white"></div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center">
                      <div className="size-5 border-4 border-yellow-600 brightness-125 flex items-center justify-center rounded-full bg-white text-white"></div>
                      <p className="text-sm mt-2">Processing</p>
                    </div>
                    <div className="flex-1 h-0.5 mb-7 bg-white"></div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center">
                      <div className="size-5 border-4  border-yellow-600 brightness-125 flex items-center justify-center rounded-full bg-white text-white"></div>
                      <p className="text-sm mt-2">Shiped</p>
                    </div>
                  </div>

                  <div className="tracking-text text-white p-4  bg-sky-400/50 h-32">
                    <div className="date text-gray-200 text-sm">
                      12 March, 2022 - 19:03
                    </div>
                    <p className="text-gray-200">
                      Thank you for shipping to Vervoer
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <ServiceCard />
    </section>
  );
};

export default WhyChooseUs;
