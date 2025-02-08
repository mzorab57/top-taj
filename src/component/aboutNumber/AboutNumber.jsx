import React from 'react'

const AboutNumber = () => {
  return (
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
  )
}

export default AboutNumber
