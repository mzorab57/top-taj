import React from 'react'

const MenuItem = ({ imgSrc, altText, title, description, price }) => {
  return (
    <div className="flex  w-full gap-x-8 items-center">
      {/* Image Section */}
      <div className="w-28 md:w-32 md:h-36 h-32 overflow-hidden rounded-lg">
       
          <img
            src={imgSrc}
            alt={altText}
            loading="lazy"
            className="w-full h-full  object-cover transition-transform transform hover:scale-110 duration-700"
          />
       
      </div>

      {/* Text Section */}
      <div className="flex-1">
        {/* Ensure the title text wraps */}
        <h5 className="md:text-xl text-base font-semibold text-white ">{title}</h5>

        {/* Allow description to wrap naturally */}
        <div className="text-gray-400 py-4 text-sm">{description}</div>

        {/* Price styling */}
        <div className="text-primary font-bold mt-2">{price}</div>
      </div>
    </div>
  )
}

export default MenuItem;
