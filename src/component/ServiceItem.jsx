import React from "react";


const ServiceItem = ({ imgSrc, altText, icon, title, onClick }) => {

  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8" onClick={onClick}>
      <div className="relative group cursor-pointer">
        <div className="overflow-hidden rounded-lg">
          <img
            src={imgSrc}
            alt={altText}
            className="w-full h-64 object-cover transition-transform transform group-hover:scale-105 duration-700"
          />
        </div>
        <div className="absolute p-7 inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-40 opacity-100 transition-opacity duration-500">
          <div className="border duration-500 border-orange-100 border-opacity-30 group-hover:border-opacity-100 group-hover:border-orange-200 w-full h-full flex flex-col justify-center items-center rounded ">
            <div className="text-white text-4xl mb-2">
              {icon}
            </div>
            <h5 className="text-white text-xl">{title}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
