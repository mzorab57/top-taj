import React, { useState, useEffect } from "react";
import { FaCircleArrowDown } from "react-icons/fa6";
import { scroller } from "react-scroll"; // Import scroller from react-scroll
import AOS from "aos";
import "aos/dist/aos.css";
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
    window.scrollTo(0, 0);
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
      className="banner-three text-start h-screen  lg:pb-[60%] bg-cover bg-left lg:bg-right relative overflow-hidden z-20 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-l before:from-[#033647]/100 before:to-transparent"
      style={{
        backgroundImage: "url('/assets/img/bgHome.jpg')",
      }}
    >
           <div
           style={{
            borderImage:
              "linear-gradient(to bottom, #FF6B00, rgba(255, 107, 0, 0.3), transparent) 1",
            borderWidth: "3px",
            clipPath: "polygon(0 1 0, 100% 0, 95% 50%, 80% 100%)", 
            transform: "perspective(100px) rotateX(14deg)",
            boxShadow: "0 10px 30px rgba(255, 107, 0, 0.2)"
          }}
            className="w-11/12 h-44 hidden lg:block bg-white absolute bottom-0 backdrop-blur-lg border-t-2 border-[#FF6B00] rounded-t-lg"></div>
      {/* Truck Image */}
      <img
        // src="https://wowtheme7.com/tf/logistick/assets/images/thumbs/only-track.png"
        src="/assets/img/p2-removebg-preview.png"
        alt="Track"
        className="hidden lg:block absolute   w-[42rem] bottom-[0] lg:max-w-[50%]      xl:max-w-full z-50  "
        style={{
          transform: `translateX(-280px) translateX(${scrollY * 0.3}px)`,
          transition: "transform 0.1s ease-out",
          filter: "drop-shadow(0 10px 10px rgba(0.7, 0.7, 0.9, 0.7))", // Strong bottom shadow
        }}
      />

      {/* Content Container */}
      <div className="container max-w-2xl  absolute lg:left-1/2 px-2 sm:pt-44 pt-56 ">
   
        <div className="flex flex-col lg:flex-row justify-center items-center h-full  mt-16 lg:mt-32">
          <div className="text-start lg:text-left">
            <span className="text-lg font-Trifelia  text-yellow-400 underline mb-5 block">
              Safe Transportation & Logistics
            </span>
            <h1
              data-aos="zoom-in"
              data-aos-duration="1500"
              className="text-white text-4xl  lg:text-5xl xl:text-7xl leading-10 font-sans font-medium  "
            >
              Flexible Logistics, Fast Delivery, & Secure Packages
            </h1>
            <div className="flex gap-2 text-sm lg:text-xl mt-8  justify-start">
              {/* View Services Button */}
              <Link
                to="/"
                state={{ scrollTo: "track" }}
                className="btn btn-main hover-style-two button--stroke flex items-center gap-4 group active:translate-y-2"
              >
                <div className="  font-Trifelia bg-yellow-400 px-6 py-5 text-white rounded tracking-wider flex justify-start items-center">
                  Tracking
                  <span>
                    <FaCircleArrowDown size={25} className="ml-2" />
                  </span>
                </div>
              </Link>

              {/* Who We Are Link */}
              <Link
                to="/about"
                className="flex items-center pl-2 gap-x-2 rounded text-white bg-black/55 font-Trifelia border border-gray-400 active:translate-y-2"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                Who we are
                <img
                  src="/assets/img/rotated-right-arrow.png"
                  alt="arrow right"
                  className="bg-white rounded-full scale-75"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
