import React from 'react'
import { BiLogoPlayStore } from "react-icons/bi";


const AboutVideo = () => {
  return (
    <section className="overflow-hidden w-full px-3 mx-auto container flex justify-center pt-36">
    <div className="relative">
    <img
        src="/assets/img/bgHome1.JPG"
        alt=""
        className="  absolute -left-[10%] bottom-[35%]  hidden lg:block"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`, // Adjust multiplier for effect speed
          transition: "transform 0.2s ease-out", // Smooth transition for transform effect
        }}
      />
      <img
         src="/assets/img/bg-2.jpg"
        alt=""
        className="w-full h-full object-cover rounded-xl min-h-[300px]"
      />
      
      <div className="absolute  top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 z-10 text-center w-full">
        <a
          // href="https://www.youtube.com/watch?v=MFLVmAE4cqg"
          className="play-button bg-yellow-400  bg-light-animation animate-pulse border border-neutral-300  cursor-pointer w-[75px] h-[75px] relative inline-flex justify-center items-center  text-white hover:text-main-700 active:scale-95 rounded-full text-xl"
        >
          <BiLogoPlayStore size={35} />
        </a>
        <h2 className=" text-3xl text-white cursor-pointer mt-3 ">
          Watch Video
        </h2>
      </div>
      
     
    </div>
  </section>
  )
}

export default AboutVideo
