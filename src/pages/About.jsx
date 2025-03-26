import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import AboutTop from "../component/aboutTop/AboutTop";
import AboutUs from "../component/aboutUs/AboutUs";
import AboutService from "../component/aboutService/AboutService";
import AboutVideo from "../component/aboutVideo/AboutVideo";
import AboutNumber from "../component/aboutNumber/AboutNumber";
import AboutContact from "../component/aboutContact/AboutContact";
import AboutLocation from "../component/aboutLocation/AboutLocation";
import AboutTopTaj from "../component/aboutTopTaj/AboutTopTaj";

const About = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AboutTop />
      <AboutTopTaj />
      {/* <AboutUs /> */}
      <AboutService />
      <AboutVideo />
      <AboutNumber />
      <AboutContact />
      <AboutLocation />
    </>
  );
};

export default About;
