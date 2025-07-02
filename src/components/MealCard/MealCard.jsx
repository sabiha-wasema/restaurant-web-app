import React from "react";
import {  FaUtensils } from 'react-icons/fa';


const MealCard = ({ meal }) => {
  console.log(meal);
  return (
    <div className="bg-white rounded shadow hover:shadow-xl transition p-4 flex flex-col items-center">
      <div className="flex justify-center">
        <img
        src={meal?.strMealThumb}
        alt={meal?.strMeal}
        className="border-8 border-amber-500 rounded-full mb-3 w-full h-48 object-cover hover:scale-105 transition"
      />
      </div>
      <h2 className="text-lg font-semibold text-gray-800 mb-1 text-center">
        {meal?.strMeal}
      </h2>
      <p className="text-sm text-gray-500">
       <span className="text-amber-800 font-semibold"> {meal?.strArea}</span> • {meal?.strCategory}
      </p>
      {/* <p>{meal?.strInstructions}</p> */}
      <button className="my-2 flex items-center gap-2 px-6 py-2 bg-amber-500 font-semibold text-gray-800 rounded-full hover:bg-amber-700 hover:text-gray-200 transition">
        Buy Now <FaUtensils />
      </button>
    </div>
  );
};

export default MealCard;
