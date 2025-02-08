import React from 'react'

const ServiceImages = () => {
  return (
    <div className="container max-w-full content-center px-4  pt-44 relative">
    {/* Decorative Shapes */}
    <div className="absolute lg:-top-5 lg:-right-7  md:scale-90  -top-[5.5rem] -right-[5rem] scale-50 ">
      <img
        src="https://www.commonsupport.com/html/Nasim/Vervoer/images/shape/shape-3.png"
        alt="Shape 3"
        style={{
          transform: ` translateX(${scrollY * 0.1}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />
    </div>
    <div className="absolute lg:-bottom-96 -bottom-[42rem]  -left-56 scale-50 lg:scale-90 lg:left-0 translate-y-32 ">
      <img
        src="https://www.commonsupport.com/html/Nasim/Vervoer/images/shape/shape-4.png"
        alt="Shape 4"
        style={{
          transform: ` translateX(${scrollY * 0.1}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />
    </div>
  </div>
  )
}

export default ServiceImages
