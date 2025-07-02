import { useRef } from "react";
import HeroSection from "./HeroSection";
import MealList from "../../components/MealList/MealList";
import Footer from "../Footer/Footer";
import errorImage from "../../assets/images-removebg-preview.png";
import ScrollToTopButton from "../ScrollToTopButton";

const Home = ({ meals, error ,loading}) => {
  const mealsRef = useRef(null);
  return (
    <div>
      <HeroSection mealsRef={mealsRef} />
      {error && (
        <div className="flex flex-col justify-center items-center py-10 px-4">
          <img
            src={errorImage}
            alt="Error"
            className="w-40 h-40 object-contain mb-4"
          />
          <p className="text-center text-red-500 font-semibold my-4">
            {error}
          </p>
        </div>
      )}

      {!error && <MealList ref={mealsRef} loading={loading} meals={meals} />}

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
