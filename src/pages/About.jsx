import React, { useEffect, useState } from "react";
import about from "/assets/img/bg-about.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { BiLogoPlayStore } from "react-icons/bi";

const About = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  const featuresData = [
    {
      id: 1,
      icon: "https://wowtheme7.com/tf/logistick/assets/images/icons/features-icon1.svg",
      title: "Warehouse Facility",
      description:
        "Temperate ocean-bass sea chub unicorn treefish eulachon tidewater goby.",
    },
    {
      id: 2,
      icon: "https://wowtheme7.com/tf/logistick/assets/images/icons/features-icon2.svg",
      title: "Cost Effective Pricing",
      description:
        "Temperate ocean-bass sea chub unicorn treefish eulachon tidewater goby.",
    },
    {
      id: 3,
      icon: "https://wowtheme7.com/tf/logistick/assets/images/icons/features-icon3.svg",
      title: "Air Freight Facility",
      description:
        "Temperate ocean-bass sea chub unicorn treefish eulachon tidewater goby.",
    },
    {
      id: 4,
      icon: "https://wowtheme7.com/tf/logistick/assets/images/icons/features-icon4.svg",
      title: "Container Delivery",
      description:
        "Temperate ocean-bass sea chub unicorn treefish eulachon tidewater goby.",
    },
  ];
  const locations = [
    { id: 1, top: "12%", left: "33%", address: "198 West 21th Street, New York" },
    { id: 1, top: "25%", left: "52%", address: "198 West 21th Street, New York" },
    { id: 1, top: "20%", left: "77%", address: "198 West 21th Street, New York" },
    { id: 2, top: "70%", left: "30%", address: "4517 Washington Ave. Kentucky" },
    { id: 2, top: "50%", left: "50%", address: "4517 Washington Ave. Kentucky" },
    { id: 3, top: "65%", left: "85%", address: "3200 Highland Ave. California" },
  ];

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
    <div className="">
      <section className="navigation">
        <div className="relative ">
          <img
            src={about}
            alt="background"
            className="object-cover h-[580px] w-full brightness-50"
          />
          {/* Container for the text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-t from-black/50 via-transparent to-transparent">
            <h2 className="text-3xl lg:text-4xl text-white  px-2 font-bold font-poppins">
              About us
            </h2>
            <ul className="flex justify-center space-x-2 text-gray-300 mt-4">
              <li>
                <Link to="/" className="text-yellow-500 text-xl font-poppins font-semibold">
                  Home
                </Link>
              </li>
              <li className="text-yellow-500 text-xl font-poppins font-semibold">
                / About Us
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* part 2 */}
      <section className="about lg:py-[140px] py-[70px] px-4 relative max-lg:overflow-hidden">
        {/* Background images */}
        <img
          src="https://wowtheme7.com/tf/logistick/assets/images/shapes/about-plane.png"
          alt=""
          className="cursor-big about-plane absolute  transform start-32 top-1/2"
          style={{
            transform: `translateX(${
              scrollY * 0.3
            }px) translate3d(-301.332px, -85.8726px, 0px) rotate(-20.5129deg)`, // Adjust multiplier for effect speed
            transition: "transform 0.1s ease-out", // Smooth transition for transform effect
          }}
        />
        <img
          src="https://wowtheme7.com/tf/logistick/assets/images/thumbs/truck-head.png"
          alt=""
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="500"
          className="truck-head cursor-big absolute top-56 end-0 hidden lg:block"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`, // Adjust multiplier for effect speed
            transition: "transform 0.2s ease-out", // Smooth transition for transform effect
          }}
        />

        <div className="container mx-auto">
          <div className="row gy-5 flex-wrap-reverse flex justify-center gap-5 ">
            {/* Left Column */}
            <div className="col-lg-5 pe-xl-5">
              <div className="relative  h-full">
                {/* Image with zoom animation */}
                <div
                  className="relative"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <img
                   src="https://transp-nextjs.vercel.app/assets/imgs/page/homepage3/img-info-5.png"
                    // src="https://wowtheme7.com/tf/logistick/assets/images/thumbs/about-img.png"
                    alt=""
                    // className="w-full h-full object-cover"
                    className="h-[38rem] object-cover"
                  />
                  <span className="cursor-big tw-w-[75px] tw-h-[75px]   justify-center items-center rounded-full absolute end-0 bottom-0 tw-me-[305px] tw-mb-[305px] hidden d-lg:flex">
                    <img
                      src="https://wowtheme7.com/tf/logistick/assets/images/icons/play-bar.svg"
                      alt=""
                    />
                  </span>
                </div>

                {/* Positioned image */}
                <div
                  className="positioned-image size-48 bg-white cursor-big 
                -shadow-four rounded-full flex justify-center items-center absolute z-10 shadow-2xl  -top-10 -start-10 p-9"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <img
                    src="https://wowtheme7.com/tf/logistick/assets/images/thumbs/glob-track.png"
                    alt="glob"
                  />
                </div>

                {/* Overlay stats */}
                <div
                  className="p-5  pe-[130px] translate-x-[-30px] bg-main-600 bg-yellow-400 absolute start-0 -bottom-16 ms-[-30px]"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <div className="flex flex-col gap-1 items-start">
                    <h1 className="text-white text-6xl mb-4 font-bold font-inter cursor-big flex justify-between w-full ">
                      25+
                    </h1>

                    <span className="text-white font-medium cursor-small">
                      Years Of Experience
                    </span>
                    <img
                      src="https://wowtheme7.com/tf/logistick/assets/images/shapes/line-shape.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-7 ps-lg-5">
              <div>
                <span className="italic text-yellow-400 cursor-small lg:text-xl  font-inter font-semibold mb-[30px]">
                  Safe Transportation & Logistics
                </span>
                <h1 className="splitTextStyleOne text-gray-700 font-inter font-semibold lg:text-6xl text-4xl cursor-big mt-4 mb-8">
                  Modern transport system <br />& secure packaging
                </h1>
                <p className="cursor-small text-neutral-600 text-base p-[5px] border-l-2 border-l-red-500">
                  Temperate ocean-bass sea chub unicorn fish treefish eulachon
                  tidewater goby. Flier, bighe
                  <br /> carp Devario shortnose sucker platy smalleye
                </p>

                <div className="mt-9">
                  <div className="row gy-4 flex justify-between">
                    <div
                      className="col-sm-6"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="200"
                    >
                      <div className="flex items-center lg:gap-6 gap-3">
                        <span className="cursor-big animate__heartBeat scale-75 lg:scale-100">
                          <img
                            src="https://wowtheme7.com/tf/logistick/assets/images/icons/about-icon1.svg"
                            alt=""
                          />
                        </span>
                        <h6 className="cursor-big text-sm text-neutral-600">
                          Air Freight <br /> Transportation
                        </h6>
                      </div>
                      <p className="cursor-small text-neutral-1000 mt-[6px] line-clamp-3 text-neutral-600">
                        Temperate ocean-bass sea
                        <br /> chub treefish eulachon tidewater goby.
                      </p>
                    </div>

                    <div
                      className="col-sm-6"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="400"
                    >
                      <div className="flex  items-center lg:gap-6 gap-3">
                        <span className="cursor-big animate__heartBeat">
                          <img
                            src="https://wowtheme7.com/tf/logistick/assets/images/icons/about-icon2.svg"
                            alt=""
                          />
                        </span>
                        <h6 className="cursor-big text-sm text-neutral-600">
                          Ocean Freight <br /> Transportation
                        </h6>
                      </div>
                      <p className="cursor-small text-neutral-1000 mt-[6px] line-clamp-3 text-neutral-600">
                        Temperate ocean-bass sea
                        <br /> chub treefish eulachon tidewater goby.
                      </p>
                    </div>
                  </div>
                </div>

                <span className="my-7 border-b border-neutral-300 block"></span>

                <ul className="cursor-small flex flex-col gap-2">
                  <li
                    className="flex items-center lg:gap-4"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                  >
                    <span className="text-main-600 flex">
                      <i className="ph-bold ph-check"></i>
                    </span>
                    <span className="text-neutral-1000 font-medium">
                      We approached WiaTech with complex project deliver
                    </span>
                  </li>
                  <li
                    className="flex items-center lg:gap-4"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="400"
                  >
                    <span className="text-main-600 flex">
                      <i className="ph-bold ph-check"></i>
                    </span>
                    <span className="text-neutral-1000 font-medium">
                      Awards Winning IT Solutions Company
                    </span>
                  </li>
                </ul>

                <div className="flex items-center gap-[56px] mt-10 flex-wrap">
                {/* Who We Are Link */}
                       <Link
                       onClick={()=> window.scrollTo(0,0)}
                         to="/services"
                         className="flex items-center gap-2 text-white border border-yellow-400 bg-black/50 ml-2     *: hover:bg-yellow-400 p-2 font-inter  active:translate-y-2"
                         data-aos="fade-up"
                         data-aos-duration="1000"
                         data-aos-delay="400"
                       >
                         View Service
                       
                           <img src="https://wowtheme7.com/tf/logistick/assets/images/icons/arrow-right.svg" alt="arrow right"  />
                      
                       </Link>

                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* part 3 */}
      <section
        className="bg-neutral-50 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://wowtheme7.com/tf/logistick/assets/images/shapes/features-bg.png")',
        }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 ">
          {featuresData.map((feature, index) => (
            <div
              key={feature.id}
              className="relative lg:space-y-10 space-y-5 group bg-transparent hover:bg-white lg:border-r lg:p-14 p-5 transition-all duration-500 ease-in-out hover:scale-105 flex flex-col items-start text-start h-full"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={`${(index + 1) * 100}`}
            >
              <span className="absolute top-10 right-4 text-xl font-bold font-inter text-gray-500">
                {`0${feature.id}`}
              </span>
              <span className="mb-6 group-hover:animate-bounce">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="lg:size-16 size-14"
                />
              </span>
              <h5 className="mb-4 text-2xl font-bold font-inter text-gray-800">
                {feature.title}
              </h5>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* part 4 */}
      <section className="overflow-hidden w-full  flex justify-center pt-36">
        <div className="relative">
        <img
            src="https://wowtheme7.com/tf/logistick/assets/images/thumbs/ship-big.png"
            alt=""
            className="  absolute -left-[10%] bottom-[35%]  hidden lg:block"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`, // Adjust multiplier for effect speed
              transition: "transform 0.2s ease-out", // Smooth transition for transform effect
            }}
          />
          <img
            src="https://wowtheme7.com/tf/logistick/assets/images/thumbs/video_bg.png"
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
            <h2 className=" text-3xl text-white cursor-pointer mt-3 font-inter">
              Watch Video
            </h2>
          </div>
          
         
        </div>
      </section>

      {/* part 5 */}
      <section
        className="relative overflow-hidden py-36 bg-cover"
        style={{
          backgroundImage:
            "url('https://wowtheme7.com/tf/logistick/assets/images/shapes/how-it-work-bg.png')",
        }}
      >
        <img
          src="https://wowtheme7.com/tf/logistick/assets/images/shapes/about-plane.png"
          alt="Plane"
          className="absolute   bottom-20 left-0 transform translate-x-64 -translate-y-96 rotate-[-40deg]"
        />

        <div className="container mx-auto text-center">
          {/* Heading Section */}
          <div className="max-w-3xl mx-auto pb-16 mb-6">
            <span className="italic text-xl text-yellow-400 font-bold font-inter underline text-main-600 mb-8 inline-block">
              Safe Transportation & Logistics
            </span>
            <h2 className="text-4xl font-bold font-inter text-gray-600">
              Introducing The most Modern way of Transportation
            </h2>
          </div>

          {/* Icons Grid */}
          <div className="grid max-w-7xl mx-auto px-4 grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Grid Item */}
            {[
              {
                icon: "https://wowtheme7.com/tf/logistick/assets/images/icons/transport-way-icon1.svg",
                value: "560",
                label: "Main Warehouses",
                delay: 200,
              },
              {
                icon: "https://wowtheme7.com/tf/logistick/assets/images/icons/transport-way-icon2.svg",
                value: "100%",
                label: "Supply Engineers",
                delay: 300,
              },
              {
                icon: "https://wowtheme7.com/tf/logistick/assets/images/icons/transport-way-icon3.svg",
                value: "3m+",
                label: "Countries Covered",
                delay: 400,
              },
              {
                icon: "https://wowtheme7.com/tf/logistick/assets/images/icons/transport-way-icon4.svg",
                value: "30+",
                label: "Total Services",
                delay: 500,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center "
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={item.delay}
              >
                <span className="inline-flex bg-yellow-400 justify-center items-center size-24 bg-main-600 rounded-full rounded-bl-none transition duration-300">
                  <img src={item.icon} alt={`Icon ${index + 1}`} />
                </span>
                <h3 className="lg:py-6 py-4 my-4  px-4 lg:text-3xl text-2xl font-bold font-inter bg-gradient-to-r from-yellow-400/50 to-yellow-40 rounded-full text-center">
                  {item.value}
                </h3>
                <h6 className="mt-4 font-inter font-semibold  text-xl text-gray-700">
                  {item.label}
                </h6>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* part 6 */}
      <section className="xl:flex">
        {/* Left Section */}
        <div className="w-full xl:w-1/2 relative">
          <div className="flex h-full">
            <img
              src="https://wowtheme7.com/tf/logistick/assets/images/thumbs/contact-us-img1.png"
              alt=""
              className="hidden sm:block"
            />
            <div className="text-center bg-gray-900 py-12 px-6 flex-grow flex flex-col justify-center items-center">
              <span className="cursor-pointer flex justify-center items-center">
                <img
                  src="https://wowtheme7.com/tf/logistick/assets/images/icons/conact-us-icon1.svg"
                  alt=""
                  
                />
              </span>
              <h2 className="text-white my-6 text-xl font-bold font-inter">
                Need Our Services?
              </h2>
              <a
                href="#"
                className="font-bold font-inter text-white inline-flex items-center gap-5 hover:text-main-600"
              >
                Contact With us
                <img
                  src="https://wowtheme7.com/tf/logistick/assets/images/icons/arrow-right.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full xl:w-1/2 relative">
          <div className="flex sm:flex-row flex-col">
            <div className="relative">
              <img
                src="https://wowtheme7.com/tf/logistick/assets/images/thumbs/contact-us-img2.png"
                alt=""
                className="w-full h-full object-cover"
              />
              <a className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-20 h-20 rounded-full bg-main-three-600 text-main-two-600 hover:text-main-two-700 scale-100 active:scale-90">
                <i className="ph-fill ph-play text-xl"></i>
              </a>
            </div>
            <div className="text-center bg-yellow-400 py-12 px-6 flex-grow flex flex-col justify-center items-center">
              <span className="cursor-pointer flex justify-center items-center">
                <img
                  src="https://wowtheme7.com/tf/logistick/assets/images/icons/conact-us-icon2.svg"
                  alt=""
                  className="animate-[wobble_1s_ease-in-out_infinite]"
                />
              </span>
              <h2 className="text-white my-6 text-xl font-bold font-inter">
                Discuss With Agents
              </h2>
              <a
                href="#"
                className="font-bold font-inter text-white inline-flex items-center gap-5 hover:text-main-two-600"
              >
                Contact With us
                <img
                  src="https://wowtheme7.com/tf/logistick/assets/images/icons/arrow-right.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* part 7 */}
      <section className="get-in-touch py-[140px]   mx-auto relative overflow-hidden">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 lg:gap-0 gap-8">
            {/* Left Section */}
            <div className="space-y-10 px-4 ">
              <span className="italic  underline text-yellow-400 font-bold font-inter text-xl mb-4 block">
                Safe Transportation & Logistics
              </span>
              <h1 className="text-5xl text-gray-700 font-bold font-inter mb-8">
                <span>Get In Touch</span>
              </h1>
              <p className="text-neutral-500 line-clamp-3 max-w-xl font-inter font-semibold pl-2 border-l-4 border-yellow-400">
                Temperate ocean-bass sea chub unicorn fish treefish eulachon
                Flier, bighe carp Devario shortnose sucker platy smalleye
              </p>

              <div className="mt-10 mb-6">
                <span className="text-main-two-600 font-bold font-inter">
                  24/7 Support center
                </span>
                <h2 className="mt-3">
                  <a
                    // href="tel:+964-471-9026"
                    className="text-yellow-400 text-5xl hover:translate-y-[-4px] transition duration-200 font-inter font-semibold"
                  >
                    +964 141-18-93
                  </a>
                </h2>
              </div>

              <div className="flex flex-wrap sm:flex-nowrap gap-7">
                <div
                  className="bg-neutral-100 rounded-lg py-7 px-6 max-w-[280px]"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  <h5 className="mb-3">Headquarter -</h5>
                  <p className="text-main-two-600 font-medium">
                    4517 Washington Ave. Manchester, Kentucky 39495
                  </p>
                </div>
                <div
                  className="border border-main-two-600 rounded-lg py-7 px-6 max-w-[280px]"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <h5 className="mb-3">Email Us -</h5>
                  <p className="text-main-two-600 font-medium">
                    4517 Washington Ave. Manchester, Kentucky 39495
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="relative w-full h-full">
              {/* Map Image */}
              <img
                src="https://wowtheme7.com/tf/logistick/assets/images/shapes/map-img.png"
                alt="Map"
                className="w-full min-w-full h-auto"
              />

              {/* Markers */}
              {locations.map((location) => (
                <div
                  key={location.id}
                  className="absolute cursor-pointer group"
                  style={{ top: location.top, left: location.left }}
                >
                  {/* Marker Point */}
                  <span className="w-3 h-3 rounded-full bg-yellow-400 animate-slowPing hover:scale-125 transition-transform duration-300 block"></span>

                 
                </div>
              ))}
               {/* Tooltip */}
               <div className="absolute w-32 bottom-1/3 left-1/3 transform -translate-x-1/2 mb-2 p-2 bg-white  rounded-md shadow-lg opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="rounded-md overflow-hidden max-h-[88px] mx-auto">
                      <img
                        src="https://wowtheme7.com/tf/logistick/assets/images/thumbs/map-img1.png"
                        alt={location.address}
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="px-2 pt-3 ">
                      <span className="font-inter font-semibold text-gray-600 text-xs whitespace-pre-wrap">
                      198 West 21th <br/>Street,  Kwanjo
                      </span>
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
