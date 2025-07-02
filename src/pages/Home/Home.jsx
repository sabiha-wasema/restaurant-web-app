import { useRef } from "react";
import HeroSection from "./HeroSection";
import MealCard from "../../components/MealCard/MealCard";
import MealList from "../../components/MealList/MealList";

const Home = ({ meals }) => {
     const mealsRef = useRef(null);
  return (
    <div>
      <HeroSection mealsRef={mealsRef} />
      <MealList ref={mealsRef} meals={meals} />
    </div>
  );
};

export default Home;
