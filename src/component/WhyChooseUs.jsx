import React from "react";

import ServiceImages from "./serviceImages/ServiceImages";
import ServiceText from "./serviceText/ServiceText";

const WhyChooseUs = () => {


  return (
    <>
      <section className=" bg-gray-50 pb-72 relative flex flex-col overflow-hidden">
       <ServiceImages />
       <ServiceText />
      </section>
    </>
  );
};

export default WhyChooseUs;
