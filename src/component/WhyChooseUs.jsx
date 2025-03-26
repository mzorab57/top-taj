import React from "react";

import ServiceImages from "./serviceImages/ServiceImages";
import ServiceText from "./serviceText/ServiceText";

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden font-sans">
      <div className="absolute inset-0  bg-gradient-to-b from-gray-50 to-white" />
      <ServiceImages />
      <div className="relative z-10">
        <ServiceText />
      </div>
    </section>
  );
};

export default WhyChooseUs;
