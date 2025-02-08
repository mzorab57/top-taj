import React from "react";
import { FiBox, FiMapPin, FiUser } from "react-icons/fi"; // Icons from react-icons

const ServiceText = () => {
  return (
    <div className="flex flex-wrap justify-center mx-auto px-4  gap-8">
      {/* Section Title */}
      <div className="max-w-lg">
        <div className="mb-8">
          <p className="text-sm uppercase text-yellow-400 font-bold">
            ~ Why Choose Us ~
          </p>
          <h3 className="text-5xl text-gray-600 font-bold  ">
            Our Best <span className="text-yellow-400">Freight Services</span>
          </h3>
          <p className="mt-4 text-xl text-gray-600 max-w-sm">
            Dapibus interdum senectus malesuada est nec morbi cursus. Amet in
            mollis consectetur amet.
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
          </li>
          <li
            onClick={() => setActiveTab("tab-2")}
            className={`flex items-center justify-between p-4 border rounded shadow-md cursor-pointer `}
          >
            <div className="flex items-center space-x-2">
              <FiMapPin className="text-yellow-400 text-xl" />
              <span className="font-semibold">Real Time Tracking</span>
            </div>
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
    </div>
  );
};

export default ServiceText;
