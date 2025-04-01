import React from "react";
import train from "/assets/img/train.png";
import checkMark from "/assets/img/checkMark.png";
import shipyard from "/assets/img/shipyard.png";
import airPlane from "/assets/img/air-plane.png";
import orderTracking from "/assets/img/order-tracking.png";

const ServiceCard = () => {
  return (
    <section className="service-p2 flex flex-col size-full px-3">
      {/*  text */}
      <div className="text-service text-center  text-gray-600 place-self-center py-3">
        <h2 className="lg:text-xl  py-3  text-yellow-400">
          International Logistics Solutions
        </h2>
        <h1 className=" lg:text-5xl text-3xl font-semibold ">
          Direct Shipping Services from China <br /> to Middle East
        </h1>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Serving clients across CHINA, IRAQ, IRAN, UAE, and SAUDI ARABIA, we
          handle thousands of monthly shipments for both independent contractors
          and company owners. Our door-to-door service offers the fastest and
          most cost-effective shipping solutions.
        </p>
      </div>

      {/* card service */}
      <div className="card-service w-full mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 pb-56 lg:pt-24 pt-5">
        {[
          {
            id: 1,
            title: "Sea Freight Services",
            subTitle: "Direct shipping from China to Middle East ports",
            li1: "Cost-effective bulk shipping solutions",
            li2: "Reliable door-to-door delivery",
            img: shipyard,
            correct: checkMark,
          },
          {
            id: 2,
            title: "Land Transportation",
            subTitle: "Comprehensive ground logistics network",
            li1: "Fast inland delivery services",
            li2: "Cross-border transportation",
            img: train,
            correct: checkMark,
          },
          {
            id: 3,
            title: "Air Cargo Services",
            subTitle: "Express air freight solutions",
            li1: "Fastest shipping option available",
            li2: "Priority handling and delivery",
            img: airPlane,
            correct: checkMark,
          },
          {
            id: 4,
            title: "Door-to-Door Service",
            subTitle: "Complete logistics solution from origin to destination",
            li1: "Direct delivery to Iran and Middle East",
            li2: "Real-time shipment tracking",
            img: orderTracking,
            correct: checkMark,
          },
        ].map((servic, index) => (
          <div key={servic.id} className="place-self-center w-full font-Jost">
            <div
              className="bg-white h-60 relative shadow-lg border aos-init aos-animate overflow-hidden lg:overflow-visible"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              {/* <span className="absolute  right-0 mr-8 lg:mr-0 flex bg-gradient-to-t from-transparent via-yellow-200 to-yellow-400 h-full w-20 -skew-x-12  " /> */}
              <span className="w-[108px] h-[108px]  absolute top-1/2 -translate-y-1/2 right-[10%] flex items-center justify-end">
                <img
                  src={servic.img}
                  alt="Service Icon"
                  className="animate-swing"
                />
              </span>
              <div className="max-w-[310px] ">
                <h4 className="mb-2 text-lg font-bold text-gray-700 px-5 pt-10 ">
                  {servic.title}
                </h4>
                <p className="text-slate-500 text-sm px-5">{servic.subTitle}</p>
                <div className="mt-5 px-6 ">
                  <ul className="flex flex-col gap-3">
                    <li
                      className="flex items-center gap-1 aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay={200 + servic.id * 200}
                    >
                      {" "}
                      <img src={servic.correct} alt="..." />
                      <span className="text-gray-500 font-medium text-sm">
                        {servic.li1}
                      </span>
                    </li>
                    <li
                      className="flex items-center gap-1 aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay={200 + servic.id * 200}
                    >
                      {" "}
                      <img src={servic.correct} alt="..." />
                      <span className="text-gray-500 font-medium text-sm">
                        {servic.li2}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCard;
