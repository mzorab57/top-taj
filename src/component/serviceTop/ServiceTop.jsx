import React from 'react'
import s from "/assets/img/bg-1.jpg";


const ServiceTop = () => {
  return (
    <div
    className={`relative w-full bg-black h-[500px] font-Jost flex items-center justify-start`}
  >
    <img
      src={s}
      alt="background"
      className="object-cover h-[500px] w-full brightness-50"
    />

    <div className="absolute w-full  bottom-[30%]">
      <h1 className="md:text-7xl text-white text-4xl font-medium   text-center">
        Services
      </h1>
      <h1 className=" text-xl text-gray-300  px-1  text-center">
        Go beyond logistics, make the revolution business.
      </h1>
    </div>
  </div>
  )
}

export default ServiceTop
