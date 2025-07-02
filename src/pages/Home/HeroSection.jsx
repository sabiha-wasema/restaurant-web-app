import React from "react";
import heroImage from "../../assets/heroImage.jpg";
import { FaArrowRight, FaUtensils } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="relative w-full h-[100vh] flex items-center justify-start overflow-hidden -mt-[72px]">
      <img
        src={heroImage}
        alt="Delicious Food"
        className="absolute insert-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-4xl px-6 md:px-12  my-6">
        <h1 className="tracking-wider leading-tight text-gray-200 text-4xl md:text-6xl font-bold mb-4">
          JUST COME TO <br /> FOODIED & ORDER
        </h1>
        <p className="text-gray-400 mb-6 text-md max-w-xl">
          Discover delicious meals from around the world — delivered fresh &
          fast!
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="flex items-center gap-2 px-6 py-2 bg-amber-500 font-semibold text-gray-800 rounded-full hover:bg-amber-700 hover:text-gray-200 transition">
            Order Now <FaUtensils />
          </button>
          <button className="flex items-center gap-2 bg-transparent border border-gray-200 hover:bg-gray-200 hover:text-black text-gray-200 px-6 py-3 rounded-full transition">
            Explore More <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
