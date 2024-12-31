import React from 'react';
 // Add this to include the marquee animation CSS

const Booking = () => {
  

  return (
    <div className="mt-12 overflow-hidden pb-12 border-b border-neutral-100">
    {/* Marquee Container */}
    <div
      className="flex animate-marquee"
      style={{ width: "calc(100% * 2)", animationDuration: "25s" }}
    >
      {/* Marquee Content (Repeated for Infinite Scroll) */}
      {[...Array(2)].map((_, index) => (
        <React.Fragment key={index}>
          <div className="flex items-center gap-14 mx-7">
            <img
              src="https://wowtheme7.com/tf/logistick/assets/images/icons/features-icon3.svg"
              alt="Packaging Icon"
              className="cursor-pointer"
            />
            <h1 className="text-[110px] cursor-pointer text-stroke-neutral-900">
              Packaging
            </h1>
          </div>
          <div className="flex items-center gap-14 mx-7">
            <img
              src="https://wowtheme7.com/tf/logistick/assets/images/icons/features-icon2.svg"
              alt="Transportation Icon"
              className="cursor-pointer"
            />
            <h1 className="text-[110px] cursor-pointer">Tracking</h1>
          </div>
          <div className="flex justify-center items-center gap-14">
            <img
              src="https://wowtheme7.com/tf/logistick/assets/images/icons/features-icon1.svg"
              alt="Logistics Icon"
              className="cursor-pointer "
            />
            <h1 className="text-[110px] cursor-pointer text-neutral-300 ml-20">
              Logistics
            </h1>
          </div>
        </React.Fragment>
      ))}
    </div>
  </div>
  );
};

export default Booking;
