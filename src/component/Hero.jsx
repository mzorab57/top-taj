import React, { useState, useEffect } from "react";
import { FaCircleArrowDown } from "react-icons/fa6";
import { scroller } from "react-scroll"; // Import scroller from react-scroll
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

const Hero = () => {

  const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Function to scroll to the about section
  const scrollToAbout = () => {
    scroller.scrollTo("about", {
      offset: -120,
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
    window.scrollTo(0,0)
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
   
    <section
    name="hero"
    className="banner-three text-start h-screen px-4 lg:pb-[60%]   bg-cover bg-center relative overflow-hidden z-20"
    style={{
      backgroundImage:
        "url('https://wowtheme7.com/tf/logistick//assets/images/thumbs/banner-three-img.png')",
    }}
  >
    {/* Truck Image */}
    <img
  // src="https://wowtheme7.com/tf/logistick/assets/images/thumbs/only-track.png"
  src="/assets/img/plane-bg4.png"
  alt="Track"
  className="hidden lg:block absolute  w-[42rem]  -bottom-[8%] lg:max-w-[40%]    mt-8  xl:max-w-[34%] z-50  "
  style={{
    transform: `translateX(-180px) translateX(${scrollY * 0.3}px)`,
    transition: "transform 0.1s ease-out",
    filter: "drop-shadow(0 10px 10px rgba(0.7, 0.7, 0.9, 0.7))", // Strong bottom shadow
  }}
/>


    {/* Curve Road */}
    <img
      src="https://wowtheme7.com/tf/logistick/assets/images/shapes/curve-road.png"
      alt="Curve Road"
      className="absolute right-0 bottom-60 hidden xl:block "
    />

    {/* Plane Image */}
    <img
      src="https://wowtheme7.com/tf/logistick/assets/images/shapes/banner--three-plane.png"
      alt="Plane"
      className="absolute right-0 top-0 lg:mt-[254px] mt-[150px]"
    />
      {/* Circle Image */}
       
       <div
        className="absolute max-w-[430px] max-h-[430px] rounded-full w-full h-full border-4 border-white left-40 top-[26%] translate-x-[290px] hidden lg:block"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <img
          src="https://wowtheme7.com/tf/logistick/assets/images/thumbs/plane-track-img.png"
          alt="Plane Track"
          className="w-full h-full object-cover "
        />
       
      </div>

    {/* Content Container */}
<div className="container max-w-2xl mx-auto absolute lg:left-1/2 px-2 sm:pt-44 pt-56 ">
  <div className="flex flex-col lg:flex-row justify-center items-center h-full mt-16 lg:mt-32">
    <div className="text-start lg:text-left">
      <span className="text-lg font-Jost  text-yellow-400 underline mb-5 block">
        Safe Transportation & Logistics
      </span>
      <h1
       data-aos="zoom-in"
        data-aos-duration="1500"
       className="text-white text-4xl  lg:text-5xl xl:text-7xl leading-10 font-Jost font-medium  ">
        Flexible Logistics, Fast Delivery, & Secure Packages
      </h1>
      <div className="flex gap-6 mt-8 flex-wrap justify-start">
        {/* View Services Button */}
        <Link
          to="/"
          state={{ scrollTo: "track" }}
          className="btn btn-main hover-style-two button--stroke flex items-center gap-4 group active:translate-y-2"
        >
          <div className="text-xl  font-Jost bg-yellow-400 px-6 py-3 text-white rounded tracking-wider flex justify-start items-center">Tracking
           <span><FaCircleArrowDown size={25} className="ml-2" /></span> 
          </div>
         
        </Link>

        {/* Who We Are Link */}
        <Link
          to="/about"
          className="flex items-center gap-2 text-white font-Jost  active:translate-y-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          Who we are
        
            <img src="https://wowtheme7.com/tf/logistick/assets/images/icons/arrow-right.svg" alt="arrow right"  />
       
        </Link>
      </div>
    </div>
  </div>
</div>

  </section>
  );
};

export default Hero;
