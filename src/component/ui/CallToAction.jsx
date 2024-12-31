import React from "react";
import { TbPackages } from "react-icons/tb";

const CallToAction = () => {
  return (
    <section className="relative bg-orange-400 pb-7 lg:pb-0 flex justify-center items-center brightness-110 text-white overflow-hidden cta-001">
      
      {/* Decorative Shapes */}
      <div
        className="transform translate-x-6"
        aria-hidden="true"
      >
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

      <div className="container mx-auto w-fit lg:-translate-x-20 px-4   text-center">
        <div className=" py-8 px-6">
          {/* Title Box */}
          <div className="flex-col  justify-center items-center space-x-4">
            <TbPackages className="text-white  w-full" size={55} />
            <h3 className="text-3xl lg:text-5xl font-semibold  text-center lg:text-left">
              We are ready 24/7 to give you the services
            </h3>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
