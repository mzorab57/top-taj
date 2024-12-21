import React from 'react'

const CategoryButton  = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`md:px-6 px-4 mx-2 md:py-3 py-1 rounded transition-colors duration-300 ${
        isActive ? 'bg-[#b89272] text-white' : 'bg-black text-gray-400'
      } hover:bg-[#b89272] hover:text-white`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default CategoryButton 
