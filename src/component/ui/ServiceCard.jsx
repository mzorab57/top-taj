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
        <h2 className="lg:text-xl  py-3  text-yellow-400">Safe Transportation & Logistics</h2>
        <h1 className=" lg:text-5xl text-3xl font-semibold ">
          Fastest & Secured Logistics <br /> Solution & services
        </h1>
      </div>

      {/* card service */}
      <div className="card-service w-full mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 pb-56 lg:pt-24 pt-5">
        {[{
          id: 1,
          title: "Cargo Ship Frieght",
          subTitle: "Sed ut perspiciatis unde is voluptatem accusant",
          li1: "Fast Delivery & secure package",
          li2: "Safety & Privacy Security",
          img: shipyard,
          correct: checkMark
        },
        { id: 2,
          title: "Car Transportation",
          subTitle: "Sed ut perspiciatis unde is voluptatem accusant",
          li1: "Fast Delivery & secure package",
          li2: "Safety & Privacy Security",
          img: train,
          correct: checkMark
        },
        { id: 3,
          title: "Flight Transportation",
          subTitle: "Sed ut perspiciatis unde is voluptatem accusant",
          li1: "Fast Delivery & secure package",
          li2: "Safety & Privacy Security",
          img: airPlane, 
          correct: checkMark},
        { id: 4,
          title: "Tracking System",
          subTitle: "Sed ut perspiciatis unde is voluptatem accusant",
          li1: "Fast Delivery & secure package",
          li2: "Safety & Privacy Security",
          img: orderTracking,
          correct: checkMark
        },

      
      ].map((servic, index) => (
          <div key={index} className="place-self-center w-full">
            <div
              className="bg-white  relative shadow-lg border aos-init aos-animate overflow-hidden lg:overflow-visible"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <span className="absolute  right-0 mr-8 lg:mr-0 flex bg-gradient-to-t from-transparent via-yellow-200 to-yellow-400 h-full w-20 -skew-x-12  " />
              <span className="w-[108px] h-[108px] bg-white rounded-full shadow-md absolute top-1/2 -translate-y-1/2 right-[23%] hidden sm:flex items-center justify-center">
                <img
                  src={servic.img}
                  alt="Service Icon"
                  className="animate-swing"
                />
              </span>
              <div className="max-w-[310px] ">
                <h4 className="mb-2 text-lg font-bold text-gray-700 px-5 pt-5 ">
                  {servic.title}
                </h4>
                <p className="text-yellow-500 text-sm px-5">
                {servic.subTitle}
                </p>
                <div className="mt-4 px-6 ">
                  <ul className="flex flex-col gap-2">
                   
                      <li
                        key={servic.id}
                        className="flex items-center gap-4 aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay={200 + servic.id * 200}
                      > <img src={servic.correct} alt="" srcset="" />
                        <span className="text-gray-500 font-medium text-sm">
                        
                       
                          {servic.li1}
                        </span>
                      </li>
                      <li
                        key={servic.id}
                        className="flex items-center gap-4 aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay={200 + servic.id * 200}
                      > <img src={servic.correct} alt="" srcset="" />
                        <span className="text-gray-500 font-medium text-sm">
                        {servic.li1}
                        </span>
                      </li>
                    
                  </ul>
                </div>
                {/* <a
              href="service-details.html"
              className="mt-6 btn bg-red-100 hover:bg-gray-200 text-gray-900 py-2 px-40 rounded-full inline-flex items-center gap-2 active:translate-y-1"
            >
            </a> */}
              </div>
              <svg
                className="w-full max-w-full opacity-70"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#a2d9ff"
                  fill-opacity="1"
                  d="M0,224L48,192C96,160,192,96,288,106.7C384,117,480,203,576,218.7C672,235,768,181,864,170.7C960,160,1056,192,1152,213.3C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCard;
