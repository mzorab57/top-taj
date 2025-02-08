import React from 'react'

const AboutService = () => {

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

  return (
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
  )
}

export default AboutService
