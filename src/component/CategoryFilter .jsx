import React from "react";
import CategoryButton from "./CategoryButton";

const CategoryFilter = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      {/* Category Buttons Container */}
      <div className="flex justify-start lg:justify-center items-center whitespace-nowrap space-x-3 lg:space-x-6 py-4 my-4">
        {/* Render Category Buttons */}
        {categories &&
          categories.map((category) => (
            <CategoryButton
              key={category}
              label={category}
              isActive={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className="w-full sm:w-auto"

            />
          ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
