import React from 'react'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
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
                     className="positioned-image lg:size-40 size-24 bg-white cursor-big 
                   -shadow-four rounded-full flex justify-center items-center absolute z-10 shadow-2xl  lg:-top-10 -top-4 lg:-start-10 -start-3 lg:p-9 p-4"
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
  )
}

export default AboutUs
