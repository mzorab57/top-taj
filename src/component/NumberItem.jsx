import React from 'react'

const NumberItem = ({ number, title, description }) => {
  return (
    <div className="text-start leading-10 flex gap-5">
    <div className=" text-5xl md:text-6xl text-primary">{number}</div>
    <div className="mt-2">
      <h5 className="text-2xl font-semibold text-gray-300">{title}</h5>
      <div className="text-gray-500">{description}</div>
    </div>
  </div>
  )
}

export default NumberItem
