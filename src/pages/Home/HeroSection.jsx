
import heroImage from "../../assets/heroImage.jpg";
import { FaArrowRight, FaUtensils } from 'react-icons/fa';

const HeroSection = ({ mealsRef }) => {
  const handleScroll = () => {
    mealsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="relative w-full h-[100vh] flex items-center justify-start overflow-hidden -mt-[72px]">
      <img
        src={heroImage}
        alt="Delicious Food"
        className="absolute insert-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-4xl px-4 sm:px-6 lg:px-12 py-12">
        <p className="mt-16 md:mt-0 border-1 text-xs text-gray-300 border-gray-300 rounded-full px-0 py-2 max-w-[30%] md:max-w-[15%] mb-3 flex justify-center items-center font-semibold">Hungry ?</p>
        <h1 className="tracking-wider leading-tight md:mt-12 lg:mt-0 text-gray-200 text-2xl sm:text-4xl lg:text-6xl font-bold mb-1 sm:mb-4">
          JUST COME TO <br /> FOODIED & ORDER
        </h1>
        <p className="text-gray-400 mb-2 md:mb-6 text-sm sm:text-base md:text-lg max-w-[80%]">
          Discover delicious meals from around the world — delivered fresh &
          fast!
        </p>
        <div className="flex flex-wrap gap-2 md:gap-4">
         
          <button onClick={handleScroll} className="flex items-center gap-2 px-6 py-2 bg-amber-500 font-semibold text-gray-800 rounded-full hover:bg-amber-700 hover:text-gray-200 transition">
            Order Now <FaUtensils />
          </button>
         
          <button onClick={handleScroll} className="flex items-center gap-2 bg-transparent border border-gray-200 hover:bg-gray-200 hover:text-black text-gray-200 px-6 py-3 rounded-full transition">
            Explore More <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
