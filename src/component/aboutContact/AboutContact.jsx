import React from 'react'

const AboutCard = () => {
  return (
    <section className="xl:flex">
    {/* Left Section */}
    <div className="w-full xl:w-1/2 relative">
      <div className="flex h-full">
        <img
          src="https://wowtheme7.com/tf/logistick/assets/images/thumbs/contact-us-img2.png"
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
            src=" https://wowtheme7.com/tf/logistick/assets/images/thumbs/contact-us-img1.png"
           
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
  )
}

export default AboutCard
