import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import WhyChooseUs from "../component/WhyChooseUs";
import ServiceTop from "../component/serviceTop/ServiceTop";
import CallToAction from "../component/ui/CallToAction";
import ServiceCard from "../component/serviceCard/ServiceCard";

const Services = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
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
    <>
      <ServiceTop />
      <CallToAction />
      <WhyChooseUs />
      <ServiceCard />
    </>
  );
};

export default Services;
