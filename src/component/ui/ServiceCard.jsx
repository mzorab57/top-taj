import React, { useEffect } from "react";
import train from "/assets/img/train.png";
import checkMark from "/assets/img/checkMark.png";
import shipyard from "/assets/img/shipyard.png";
import airPlane from "/assets/img/air-plane.png";
import orderTracking from "/assets/img/order-tracking.png";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceCard = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="service-p2 font-inter  flex flex-col size-full px-3">
      {/*  text */}
      <div className="text-service text-center  text-gray-600 place-self-center py-3">
        <h2 className="lg:text-xl  py-3  text-yellow-400">
          Safe Transportation & Logistics
        </h2>
        <h1 className=" lg:text-5xl text-3xl font-semibold ">
          Fastest & Secured Logistics <br /> Solution & services
        </h1>
      </div>

      {/* card service */}
      <div className="card-service w-full mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 pb-56 lg:pt-24 pt-5">
        {[
          {
            id: 1,
            title: "Cargo Ship Frieght",
            subTitle: "Sed ut perspiciatis unde is voluptatem accusant",
            li1: "Fast Delivery & secure package",
            li2: "Safety & Privacy Security",
            img: shipyard,
            correct: checkMark,
          },
          {
            id: 2,
            title: "Car Transportation",
            subTitle: "Sed ut perspiciatis unde is voluptatem accusant",
            li1: "Fast Delivery & secure package",
            li2: "Safety & Privacy Security",
            img: train,
            correct: checkMark,
          },
          {
            id: 3,
            title: "Flight Transportation",
            subTitle: "Sed ut perspiciatis unde is voluptatem accusant",
            li1: "Fast Delivery & secure package",
            li2: "Safety & Privacy Security",
            img: airPlane,
            correct: checkMark,
          },
          {
            id: 4,
            title: "Tracking System",
            subTitle: "Sed ut perspiciatis unde is voluptatem accusant",
            li1: "Fast Delivery & secure package",
            li2: "Safety & Privacy Security",
            img: orderTracking,
            correct: checkMark,
          },
        ].map((servic, index) => (
          <div key={servic.id} className="place-self-center w-full">
            <div
              className="bg-white h-60 relative shadow-lg border aos-init aos-animate overflow-hidden lg:overflow-visible"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              {/* <span className="absolute  right-0 mr-8 lg:mr-0 flex bg-gradient-to-t from-transparent via-yellow-200 to-yellow-400 h-full w-20 -skew-x-12  " /> */}
              <span className="w-[108px] h-[108px] bg-white rounded-full shadow-md absolute top-1/2 -translate-y-1/2 right-[10%] hidden sm:flex items-center justify-center">
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
                      <img src={servic.correct} alt="" srcset="" />
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
                      <img src={servic.correct} alt="" srcset="" />
                      <span className="text-gray-500 font-medium text-sm">
                        {servic.li1}
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
