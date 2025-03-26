import React from "react";
import { TbPackages } from "react-icons/tb";

const CallToAction = () => {
  return (
    <section className="relative bg-orange-400 pb-7 lg:pb-0 flex justify-center items-center brightness-110 text-white overflow-hidden cta-001">
      {/* Decorative Shapes */}
      <div className="transform translate-x-6" aria-hidden="true">
        <img
          src="https://www.commonsupport.com/html/Nasim/Vervoer/images/shape/close-box.png"
          alt="Close Box"
          className="hidden lg:block"
        />
      </div>
      <div
        className="absolute top-0 right-0 transform translate-x-6"
        aria-hidden="true"
      >
        <img
          src="https://www.commonsupport.com/html/Nasim/Vervoer/images/shape/open-box.png"
          alt="Open Box"
          className="size-full"
        />
      </div>

      <div className="container font-Jost mx-auto w-fit lg:-translate-x-20 px-4   text-center">
        <div className=" py-8 px-6">
          {/* Title Box */}
          <div className="flex-col z-[1]  justify-center items-center space-x-4">
            <TbPackages className="text-white  w-full" size={55} />
            <h3 className="text-3xl lg:text-5xl font-medium  text-center lg:text-left">
              Your Trusted Partner for China-Middle East Logistics
            </h3>
            <p className="mt-4 text-lg">
              First company offering direct shipping from China to Iran and
              Middle East countries. Serving CHINA, IRAQ, IRAN, UAE, and SAUDI
              ARABIA with competitive rates and fastest delivery times.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
