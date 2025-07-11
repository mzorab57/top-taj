import React, { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

const About = () => {
  const [trackingId, setTrackingId] = useState(""); // State to hold the tracking ID
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    AOS.init();
  }, []);

  const handleTrackOrder = (e) => {
    e.preventDefault();
    if (trackingId.trim() !== "") {
      navigate(`/tracking/${trackingId}`); // Navigate to tracking/:id
      window.scrollTo(0, 0); // Scroll to the top of the page
    } else {
      alert("Please enter a valid tracking ID."); // Optional validation
    }
  };


  // ama bo awaya ka ka har shwenek click lasar icon location bkai yan Tracking la navbar aw henetawa sar section track bo search ka.
  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo; // e.g., "track"
      const sectionElement = document.getElementById(sectionId);

      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <section id="track" className="py-56 overflow-hidden  relative z-[1] ">
      <div className="w-full  grid lg:flex  lg:flex-wrap  py-20   items-center ">
        {/* Text Section */}
        <div
          className="relative bg-gradient-to-tr  from-[#033647] to-[#033647]/80 overflow-hidden  shadow-md z-1 max-w-7xl w-full lg:rounded-r-full"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
         
          {/* input */}
          <div className="container flex flex-col">
          
            <div className="relative flex justify-center items-center lg:gap-x-10  mx-4 ">
             
              {/* Circle Image */}
              <div className=" lg:max-w-[240px] max-w-[140px] bg-gray-800 h-full scale-110 rounded-tr-full rounded-br-full max-h-[140px] rounded overflow-hidden border-2 border-white">
                <img
                  src="https://www.commonsupport.com/html/Nasim/Vervoer/images/resource/cta-left-image.jpg"
                  alt=""
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="w-full h-full object-cover hidden lg:block"
                />
              </div>

              {/* Track Order Form */}
              <form
                onSubmit={handleTrackOrder}
                className="flex-grow py-16"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h1 className="text-2xl lg:text-5xl text-gray-200  lg:text-white   font-medium font-Jost mb-4  w-full">
                Track your shipment
              </h1>
                <div className="flex flex-col lg:flex-row gap-y-2 gap-x-4 my-5  lg:mr-8  ">
                  <div className="relative w-full">
                  <input
                    required
                    type="text"
                    id="track"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    placeholder="Enter your tracking ID"
                    className="px-7  lg:py-3 py-1.5 bg-white font-Jost  placeholder-gray-400 border placeholder:text-sm focus:outline-none w-full rounded shadow-none flex-grow"
                  />
                    <IoIosSearch size={25} className="absolute right-1 top-2 lg:top-3 " />
                    </div>
                  <button
                    type="submit"
                    className=" text-white bg-yellow-400 font-Jost text-lg lg:text-xl lg:w-1/3  lg:py-3 py-1 lg:px-6 px-4  rounded  whitespace-nowrap "
                  >
                    Track order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Image Section cloud */}
        <div className="w-full ">
          <img
            src="/assets/img/shape-2.png"
            alt="cc"
            data-aos="fade-left"
            data-aos-duration="1000"
            className="absolute right-0 top-0 "
          />
          <img
            src="https://www.commonsupport.com/html/Nasim/Vervoer/images/shape/Frame.png"
            alt="cc"
            data-aos="fade-left"
            data-aos-duration="1000"
            className="absolute right-10 top-0 "
          />
          <img
            src="https://www.commonsupport.com/html/Nasim/Vervoer/images/shape/Frame.png"
            alt="cc"
            data-aos="fade-left"
            data-aos-duration="1000"
            className="absolute right-1/4 top-0"
          />
          {/* <img
            src="https://www.commonsupport.com/html/Nasim/Vervoer/images/shape/Frame.png"
            alt="cc"
            data-aos="fade-left"
            data-aos-duration="1000"
            className="absolute right-32 top-1/3"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default About;
