import React from 'react'

const AboutLocation = () => {

      const locations = [
        { id: 1, top: "12%", left: "33%", address: "198 West 21th Street, New York" },
        { id: 2, top: "25%", left: "52%", address: "198 West 21th Street, New York" },
        { id: 3, top: "20%", left: "77%", address: "198 West 21th Street, New York" },
        { id: 4, top: "70%", left: "30%", address: "4517 Washington Ave. Kentucky" },
        { id: 5, top: "50%", left: "50%", address: "4517 Washington Ave. Kentucky" },
        { id: 6, top: "65%", left: "85%", address: "3200 Highland Ave. California" },
      ];

  return (
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
  )
}

export default AboutLocation
