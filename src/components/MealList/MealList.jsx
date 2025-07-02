import React, { useState,forwardRef } from "react";
import MealCard from "../MealCard/MealCard";

const MealList = forwardRef(({ meals },ref) => {
  //   console.log(meals);
  const [visibleCount, setVisibleCount] = useState(12);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  const visibleMeals = meals?.slice(0, visibleCount);
  return (
    <section className="mb-6" ref={ref}>
      <div className="mt-12 mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {visibleMeals?.map((meal) => (
          // console.log(meal)
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </div>

      {!meals.length && (
        <p className="text-center text-gray-500 mt-6">No meals found.</p>
      )}
      {visibleCount < meals.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-amber-500 text-gray-800 font-semibold rounded-full hover:bg-amber-600 transition"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
});

export default MealList;
