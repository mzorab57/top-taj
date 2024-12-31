import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section name="about" className="pt-32 overflow-hidden  relative ">
      <div className="w-full  grid lg:flex  lg:flex-wrap  py-20   items-center ">
      <h1
        
        className="text-2xl lg:text-5xl text-gray-600  font-semibold font-inter mt-20 lg:mb-10 mb-4 px-4 w-full"
      >
        Track your shipment
      </h1>
      <img src="https://www.commonsupport.com/html/Nasim/Vervoer/images/shape/shape-1.png" alt="shipment" className="absolute right-[1/2%] hidden lg:block -top-20 z-10" />
        {/* Text Section */}
        <div
          className="relative overflow-hidden z-1 max-w-7xl w-full rounded-r-full"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          {/* Background Image */}
          <img
            src="https://wowtheme7.com/tf/logistick/assets/images/shapes/track-order-bg.png"
            alt=""
            data-aos="fade-up"
            data-aos-duration="1000"
            className="absolute top-0 bottom-0 end-0 h-full z-[-1] brightness-150"
          />

          <div className="container">
            <div className="relative flex justify-center items-center lg:gap-x-10 gap-5  ">
              {/* Consult Button */}
              <a
                href="contact.html"
                className="hidden lg:]flex items-center justify-center gap-2 absolute bottom-0 start-0 translate-x-7 btn btn-main hover-style-two button--stroke fw-semibold px-14 py-4 rounded-full"
                data-block="button"
              ></a>

              {/* Circle Image */}
              <div className=" lg:max-w-[240px] max-w-[140px]  lg:max-h-[240px] max-h-[140px] rounded-full overflow-hidden border-8 border-white">
                <img
                  src="https://wowtheme7.com/tf/logistick/assets/images/thumbs/track-order-img.png"
                  alt=""
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Track Order Form */}
              <form
                // action="#"
                className="flex-grow py-16"
               data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div
                 className="flex gap-y-2 gap-x-4 my-5 lg:flex-row flex-col mr-8 ">
                  <input
                    type="text"
                    id="track"
                    placeholder="Enter your tracking ID"
                    className="px-7 lg:py-3 py-1.5 bg-white font-inter placeholder-gray-600 border-0 focus:outline-none w-full rounded shadow-none flex-grow"
                  />
                  <button
                    // type="submit"
                    className=" text-white bg-yellow-400 font-inter text-xl lg:py-3 py-1 px-6 rounded lg:w-48 w-full "
                    
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
            src="https://wowtheme7.com/tf/logistick/assets/images/thumbs/biman-blue.png"
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
          <img
            src="https://www.commonsupport.com/html/Nasim/Vervoer/images/shape/Frame.png"
            alt="cc"
            data-aos="fade-left"
            data-aos-duration="1000"
            className="absolute right-32 top-1/3"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
